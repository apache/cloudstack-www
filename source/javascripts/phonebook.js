var pmcs = [] // array of PMC names (excludes non-PMC committees)
var people = {} // public_ldap_people.json
var ldapauth = {} // public_ldap_authgroups.json
// TODO don't rely on ldap_groups containing PMC :members groups
var ldapgroups = {} //  public_ldap_groups.json
var ldapservices = {} // public_ldap_services.json
var ldapprojects = {} // public_ldap_projects.json

var members = {} // copy of member-info.json
var committees = {} // copy of committee-info.json (plus details for 'member' dummy PMC)
var iclainfo = {} // copy of icla-info.json (committers only)
var podlings = {} // public_ldap_projects.json where podling is 'current'

var info = {} // copies of json info

// Constants for query types. 
// Do NOT change the values once established, as they are part of the public API
// For example they may be used in projects.a.o and reporter.a.o
// The values are used for matching HTTP queries and linkifying lists (to generate a valid HTML link)

var Q_USER = 'user' // search users
var Q_PROJECT = 'project' // search PMC names
var Q_UID = 'uid' // availid, exact match
var Q_PMC = 'pmc' // PMC, exact match
var Q_UNIX = 'unix' // LDAP group
var Q_CTTE = 'ctte' // LDAP group
var Q_SERVICE = 'service' // LDAP group
var Q_PODLING = 'podling' // podling (non-LDAP group)
var Q_AUTH = 'auth' // podling (LDAP auth group)


// Not intended for general use; may change at any time
var Q_DEBUG = 'debug' // print some debug info

// compatibility shim for IE8 and other older browsers
if (!Date.now) {
   Date.now = function() {
      return new Date().getTime();
   }
}

// This is faster than parseInt, and it's more obvious why it is being done
function toInt(number) {
   return number | 0 //
}

var fetchCount = 0;
// Fetch an array of URLs, each with their description and own callback plus a final callback
// Used to fetch everything before rendering a page that relies on multiple JSON sources.


function getAsyncJSONArray(urls, finalCallback) {
   var obj = document.getElementById('progress');
   if (fetchCount == 0) {
      fetchCount = urls.length;
   }

   if (urls.length > 0) {
      var a = urls.shift();
      var URL = a[0];
      var desc = a[1];
      var cb = a[2];
      var xmlHttp = null;
      if (window.XMLHttpRequest) {
         xmlHttp = new XMLHttpRequest();
      } else {
         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      if (obj) {
         obj.innerHTML = "loading file #" + (fetchCount - urls.length) + " / " + fetchCount + "<br>" + desc
      }
      var start = Date.now()
      xmlHttp.open("GET", URL, true);
      xmlHttp.onreadystatechange = function(state) {
         if (xmlHttp.readyState == 4) {
            if (cb) {
               if (xmlHttp.status == 200) {
                  elapsed = Date.now() - start
                  cb(JSON.parse(xmlHttp.responseText));
                  // must be done after as cb creates the hash
                  info[desc]['elapsed'] = elapsed
               } else {
                  cb({});
                  alert("Error: '" + xmlHttp.statusText + "' while loading " + URL)
               }
            }
            getAsyncJSONArray(urls, finalCallback);
         }
      }
      xmlHttp.send(null);
   } else {
      if (obj) {
         obj.innerHTML = "building page content..."
      }
      finalCallback();
   }
}

// get list of projects on which uid is a committer
function getProjectCommittership(uid) {
   var cl = []
   for (var i in ldapprojects) {
      if (ldapprojects[i].pmc && ldapprojects[i].members.indexOf(uid) > -1) {
         cl.push(i)
      }
   }
   return cl
}

//get list of projects on which uid is an owner (member karma)
function getProjectOwnership(uid) {
   var cl = []
   for (var i in ldapprojects) {
      if (ldapprojects[i].pmc && ldapprojects[i].owners.indexOf(uid) > -1) {
         cl.push(i)
      }
   }
   return cl
}

// Get the roster from a json group
// returns: all the keys where the uid is [not] a member
function getRoster(json, uid, notIn) {
   var cl = []
   for (var i in json) {
      if (json[i].roster.indexOf(uid) > -1) {
         if (typeof notIn === 'undefined') {
            cl.push(i)
         } else {
            if (notIn.indexOf(i) == -1) {
               cl.push(i)
            }
         }
      }
   }
   return cl
}

// get data from committee-info for a person
// return [list of pmcs, list of chairs]
function getCommitteeRoles(uid) {
   var pl = []
   var ch = []
   for (var i in committees) {
      // Only list actual PMCs
      if (committees[i].pmc && uid in committees[i].roster) {
         pl.push(i)
      }
      //var chair = committees[i].chair // might not be one (eg members)
      //if (chair && uid in committees[i].chair) {
         ch.push(i)
      //}
   }
   return [pl, ch]
}

function getCommitterName(uid) {
   var noicla = {
      'andrei': '(Andrei Zmievski)',
      'pcs': '(Paul Sutton)',
      'rasmus': '(Rasmus Lerdorf)'
   }
   var name
   if (uid in people) { // it's possible for a list to contain a uid that is not in people (e.g. andrei in member)
      name = people[uid].name
   }
   if (!name) {
      name = iclainfo[uid]
   }
   if (!name) { // try the backup specials
      name = noicla[uid]
   }
   return name
}

// Linkify list of group names by adding the appropriate ?type= href

function linkifyList(type, names) {
   var text = ''
   var index, len, i
   names.sort()
   for (i = 0, len = names.length; i < len; ++i) {
      if (i > 0) {
         text = text + ", "
      }
      text = text + "<a href='?" + type + "=" + names[i] + "'>" + names[i] + "</a>"
   }
   return text
}

// Linkify user ids

function userList(ua) {
   var text = ''
   var index, len
   ua.sort()
   for (index = 0, len = ua.length; index < len; ++index) {
      if (index > 0) {
         text = text + ", "
      }
      text = text + hiliteMember(ua[index])
   }
   return text
}

//Linkify URLs

function linkifyURLs(ua) {
   var text = ''
   var index, len
   ua.sort()
   for (index = 0, len = ua.length; index < len; ++index) {
      if (index > 0) {
         text = text + ", "
      }
      text = text + "<a target='_blank' href='" + ua[index] + "'>" + ua[index] + "</a>"
   }
   return text
}

function showCommitter(obj, uid) {
   var details = document.getElementById('details_committer_' + uid)
   if (!details) {
      details = document.createElement('p')
      details.setAttribute("id", 'details_committer_' + uid)
      var cl = getProjectCommittership(uid) // committer(in :members) of these LDAP PMC projects 
      var roles = getCommitteeRoles(uid)
      var cttees = getProjectOwnership(uid) // member(in :owners) of these LDAP PMC projects
      var pl = roles[0] // pmc membership
      var ch = roles[1] // chairs
      if (isNologin(uid)) {
         details.innerHTML += "<b>Login is currently disabled</b><br/><br/>"
      }
      if (isMember(uid)) {
         details.innerHTML += "<i>Foundation member</i><br/><br/>"
      }
      if (ch.length > 0) {
         details.innerHTML += "<b>Chair of:</b> " + linkifyList(Q_PMC, ch)
         if (!isChair(uid)) {
            details.innerHTML += " <b>Not a member of pmc-chairs!</b>"
         }
         details.innerHTML += "<br/><br/>"
      }
      var purls = urls(uid)
      if (purls.length > 0) {
         details.innerHTML += "<b>Personal URLs:</b> " + linkifyURLs(purls) + "<br/><br/>"
      }
      if (cl.length > 0) {
         details.innerHTML += "<b>Committer on:</b> " + linkifyList(Q_UNIX, cl) + "<br/><br/>"
      }
      var nc = [] // On PMC but not in LDAP unix
      var nl = [] // On PMC but not in LDAP committee
      var np = [] // Not in PMC even though in LDAP committee
      var nu = [] // In LDAP committee but not in LDAP unix
      var pn;
      if (pl.length > 0) {
         details.innerHTML += "<b>PMC member of:</b> " + linkifyList(Q_PMC, pl) + "<br/><br/>"
         for (p in pl) {
            pn = pl[p]
            // There is an LDAP PMC group but the uid is not in the committer(:members) group
            if (isProjectPMC(pn) && cl.indexOf(pn) < 0) {
               nc.push(pn)
            }
            // There is an LDAP PMC group but the uid is not in the committee(:owners) group
            if (isProjectPMC(pn) && cttees.indexOf(pn) < 0) {
               nl.push(pn)
            }
         }
      }

      if (cttees.length > 0) {
         for (p in cttees) {
            pn = cttees[p]
            // name is a PMC but uid is not on the PMC
            if (isPMC(pn) && pl.indexOf(pn) < 0) {
               np.push(pn)
            }
            // name has LDAP project entry but uid is not in the committer (member) list  
            if (isProjectPMC(pn) && cl.indexOf(pn) < 0) {
               nu.push(pn)
            }
         }
         details.innerHTML += "<b>LDAP committee group membership:</b> " + linkifyList(Q_CTTE, cttees) + "<br/><br/>"
      }

      var services = getRoster(ldapservices, uid)
      if (services.length > 0) {
         details.innerHTML += "<b>Service group membership:</b> " + linkifyList(Q_SERVICE, services) + "<br/><br/>"
      }
      var auths = getRoster(ldapauth, uid)
      if (auths.length > 0) {
         details.innerHTML += "<b>Auth group membership:</b> " + linkifyList(Q_AUTH, auths) + "<br/><br/>"
      }
      var pods = getRoster(podlings, uid)
      if (pods.length > 0) {
         details.innerHTML += "<b>Podling membership:</b> " + linkifyList(Q_PODLING, pods) + "<br/><br/>"
      }

      // Note any discrepancies
      if (np.length > 0) {
         details.innerHTML += "<span class='error'>In LDAP committee group, but <b>not a PMC member</b>:</span> " + linkifyList(Q_CTTE, np) + "<br/><br/>"
      }
      if (nc.length > 0) {
         details.innerHTML += "<span class='error'>On PMC, but not a member of the committer group:</span> " + linkifyList(Q_PMC, nc) + "<br/><br/>"
      }
      if (nl.length > 0) {
         details.innerHTML += "<span class='error'>On PMC, but not member of the LDAP committee group:</span> " + linkifyList(Q_CTTE, nl) + "<br/><br/>"
      }
      if (nu.length > 0) {
         details.innerHTML += "<span class='error'>In LDAP committee group but not a member of the committer group:</span> " + linkifyList(Q_UNIX, nu) + "<br/><br/>"
      }
      obj.appendChild(details)
   } else {
      obj.removeChild(details)
   }
}

function hoverCommitter(parent, uid) {
   var div = document.getElementById('hoverbar')

   // If the datepicker object doesn't exist, spawn it
   if (!div) {
      div = document.createElement('div')
      document.body.appendChild(div)
      div.setAttribute("id", "hoverbar")
      div.style.position = "fixed"
      div.style.width = "400px"
      div.style.background = "linear-gradient(to bottom, rgba(254,255,232,1) 0%,rgba(214,219,191,1) 100%)"
      div.style.borderRadius = "4px"
      div.style.border = "1px solid #333"
      div.style.zIndex = "9999"
   }

   // Reset the contents of the datepicker object
   div.innerHTML = ""

   var bb = parent.getBoundingClientRect()
   div.style.top = (bb.bottom + 24) + "px"
   div.style.left = (bb.left + 32) + "px"

   if (uid) {
      div.style.display = "block"
      div.innerHTML = "<h4>" + getCommitterName(uid) + "</h4>"
      var cl = getProjectCommittership(uid)
      var roles = getCommitteeRoles(uid)
      var pl = roles[0]
      var ch = roles[1]
      if (isMember(uid) == true) {
         div.innerHTML += "<i>Foundation member</i><br/><br/>"
      }
      if (isNologin(uid)) {
         div.innerHTML += "<b>Login is currently disabled</b><br/><br/>"
      }
      if (ch.length > 0) {
         ch.sort()
         div.innerHTML += "<b>Chair of:</b> " + ch.join(", ")
         if (!isChair(uid)) {
            div.innerHTML += " <b>Not a member of pmc-chairs!</b>"
         }
         div.innerHTML += "<br/><br/>"
      }
      if (cl.length > 0) {
         cl.sort()
         div.innerHTML += "<b>Committer on:</b> " + cl.join(", ") + "<br/><br/>"
      }
      var nc = []
      if (pl.length > 0) {
         pl.sort()
         div.innerHTML += "<b>PMC member of:</b> " + pl.join(", ") + "<br/><br/>"
         for (p in pl) {
            var pn = pl[p]
            if (pn != 'member' && cl.indexOf(pn) < 0) {
               nc.push(pn)
            }
         }
      }
      if (nc.length > 0) {
         div.innerHTML += "<i>On PMC, but not a Committer on:</i> " + nc.join(", ") + "<br/><br/>"
      }


   } else {
      div.style.display = "none"
   }
}

function isNologin(uid) {
   return !(uid in people) || people[uid].noLogin
}

function isMember(uid) {
   return members['members'].indexOf(uid) > -1
}

function isChair(uid) {
   return ldapservices['pmc-chairs'].roster.indexOf(uid) > -1
}

function urls(uid) {
   return people[uid].urls || []
}

// Is a PMC according to committee-info
function isPMC(name) {
   return pmcs.indexOf(name) >= 0;
}

//Is a PMC according to ldap_projects
function isProjectPMC(name) {
   return name in ldapprojects && ldapprojects[name].pmc
}

function linkifyUid(uid) {
   if (isNologin(uid)) {
      return uid
   }
   return uid
}

function hiliteMember(uid) {
   if (isMember(uid)) {
      return linkifyUid(uid)
   } else {
      return linkifyUid(uid)
   }
}

function getChair(uid) {
   var chair = committees[uid].chair
   if (chair) {
      for (var x in chair) {
         return chair[x].name
      }
   }
   return null
}

function showProject(obj, prj) {
   var details = document.getElementById('details_project_' + prj)
   if (!details) {
      details = document.createElement('p')
      details.setAttribute("id", 'details_project_' + prj)
      var desc = committees[prj].description
      if (!desc) {
         desc = 'TBA (please ensure that <a href="http://www.apache.org/index.html#projects-list">the projects list</a> is updated)'
      }
      var chair = getChair(prj)
      if (chair) {
         details.innerHTML += "<b>Chair:</b> " + chair + "<br/><br/>"
      }
      var url = committees[prj].site
      var cl
      var clExists = false // Does the unix group exist?
      try {
         cl = ldapprojects[prj].members.slice()
         clExists = true
      } catch (err) { // Allow for missing Unix group
         cl = []
      }
      var pl = []
      var pmc = committees[prj]

      var pmcnoctte = [] // on pmc but not in LDAP committee
      var cttenopmc = [] // In LDAP ctte but not on PMC
      var ldappmc = []
      var ctteeExists = false
      if (isProjectPMC(prj)) { // may not exist, e.g. for 'member' PMC and if group has yet to be created
         ldappmc = ldapprojects[prj].owners
         ctteeExists = true
      }
      var pmcnounix = [] // on PMC but not in LDAP unix group
      var cttenounix = [] // In LDAP ctte but not in LDAP unix
      if (pmc) {
         for (var c in pmc.roster) {
            pl.push(c)
         }
         for (var i in ldappmc) {
            if (!(ldappmc[i] in pmc.roster)) {
               cttenopmc.push(ldappmc[i])
            }
         }
      }
      cl.sort()
      pl.sort()

      // Must use cl before it is re-used to hold the entries
      if (clExists && prj != 'member') { // does not exist for 'member' PMC
         for (var i in ldappmc) {
            var id = ldappmc[i]
            if (cl.indexOf(id) < 0) { // in LDAP cttee but not in LDAP unix
               cttenounix.push(id)
            }
         }
      }

      for (var i in pl) {
         var id = pl[i]
         pl[i] = "<tr><td><b>" + getCommitterName(pl[i]) + "</b></td><td>(" + hiliteMember(pl[i]) + ")</td></tr>"
         if (clExists && cl.indexOf(id) < 0) { // On PMC but not in LDAP unix group
            pmcnounix.push(id)
         }
         if (prj != 'member' && ldappmc && ldappmc.indexOf(id) < 0) { // in PMC but not in LDAP committee (does not apply to member)
            pmcnoctte.push(id)
         }
      }

      for (var i in cl) {
         cl[i] = "<tr><td><b>" + getCommitterName(cl[i]) + "</b></td><td>(" + hiliteMember(cl[i]) + ")</td></tr>"
      }

      if (pl.length > 0) {
         if (prj == 'member') {
            details.innerHTML += "<b>ASF members</b><br><br><table>" + pl.join("\n") + "</table><br/>"
         } else {
            details.innerHTML += "<h4>PMC members (also in the committer group): " + pl.length + "</h4><table>" + pl.join("\n") + "</table><br/>"
         }
      }

      if (cl && cl.length > 0) {
         details.innerHTML += "<h4>Committers: " + cl.length + "</h4><table>" + cl.join("\n") + "</table>"
         if (podlings[prj]) {
            details.innerHTML += "<span class='error'>WARNING: <a href='?podling=" + prj + "'>" + prj + " podling group</a> also exists - this can cause authentication issues</span><br/><br/>"
         }
      } else {
         if (!clExists) {
            details.innerHTML += "<span class='error'>LDAP unix group not present!</span><br/><br/>"
         }
      }

      if (pmcnoctte.length) {
         if (ctteeExists) {
            details.innerHTML += "<span class='error'>PMC members not in LDAP committee group:</span> " + userList(pmcnoctte) + "<br/><br/>"
         } else {
            details.innerHTML += "<span class='error'>LDAP committee group not present!</span><br/><br/>"
         }
      }
      if (pmcnounix.length) {
         if (prj == 'member') {
            details.innerHTML += "<span class='error'>ASF members not in committers(unix) group:</span> " + userList(pmcnounix) + "<br/><br/>"
         } else {
            details.innerHTML += "<span class='error'>PMC members not in committers(unix) group:</span> " + userList(pmcnounix) + "<br/><br/>"
         }
      }
      if (cttenounix.length) {
         details.innerHTML += "<span class='error'>LDAP committee group members not in committers(unix) group:</span> " + userList(cttenounix) + "<br/><br/>"
      }
      if (cttenopmc.length) {
         details.innerHTML += "<span class='error'>LDAP committee group members not on PMC:</span> " + userList(cttenopmc) + "<br/><br/>"
      }


      obj.appendChild(details)
   } else {
      obj.removeChild(details)
   }
}

// Generic group display function
// attr is either missing or 'owners' or 'members'
function showJsonRoster(obj, type, json, name, attr, checkUnix) {
   var id = 'details_' + type + '_' + name
   var details = document.getElementById(id)
   if (!details) {
      details = document.createElement('p')
      details.setAttribute("id", id)
      var podtype = json[name]['podling']
      if (podtype) {
         details.innerHTML += "<b>podling:</b> " + podtype + "<br><br>"
      }
      var cl;
      if (attr == 'owners') {
         cl = json[name].owners.slice()
      } else if (attr == 'members') {
         cl = json[name].members.slice()
      } else {
         cl = json[name].roster.slice()
      }
      cl.sort()
      for (var i in cl) {
         var uid = cl[i]
         cl[i] = "<tr><td onmouseover='hoverCommitter(this, \"" + uid + "\");' onmouseout='hoverCommitter(this, null);'><kbd>" + hiliteMember(uid) + "</kbd></td><td>" + getCommitterName(uid) + "</td>"
         if (checkUnix) { // check against Unix project
            if (ldapprojects[name]) { // make sure project exists!
               if (ldapprojects[name].members.indexOf(uid) > -1) {
                  cl[i] += "<td>&nbsp;</td>"
               } else {
                  cl[i] += "<td> N.B. not found in corresponding Unix group</td>"
               }
            }
         }
         cl[i] += "</tr>"
      }

      if (cl && cl.length > 0) {
         details.innerHTML += "<b>Roster:</b><br><br><table>" + cl.join("\n") + "</table><br/>"
      }
      obj.appendChild(details)
   } else {
      obj.removeChild(details)
   }
}

// Show a single Service group
function showServiceRoster(obj, name) {
   showJsonRoster(obj, 'service', ldapservices, name)
}

// Show a single Auth group
function showAuthRoster(obj, name) {
   showJsonRoster(obj, 'auth', ldapauth, name)
}

function showPodlingRoster(obj, name) {
   showJsonRoster(obj, 'podling', podlings, name)
}

// Show an LDAP Unix group

function showGroup(obj, name) {
   showJsonRoster(obj, 'group', ldapprojects, name, 'members', true)
}

// Show an LDAP Commiteee group

function showCommittee(obj, name) {
   showJsonRoster(obj, 'ctte', ldapprojects, name, 'owners', true)
}

function searchProjects(keyword, open) {
   var obj = document.getElementById('phonebook')
   if (keyword != '') {
      obj.innerHTML = ""
   } else {
      obj.innerHTML = ''
   }
   for (var i in pmcs) {
      var pmc = pmcs[i]
      if (pmc.search(keyword.toLowerCase()) != -1) {
         var ppmc = committees[pmc].display_name
         obj.innerHTML += "<div id='project_" + pmc + "' class='group'><h3>Apache " + ppmc + "</h3></div>"
         if (open) {
            showProject(document.getElementById('project_' + pmc), pmc)
         }
      }
   }
}

function searchService(keyword, open) {
   var obj = document.getElementById('phonebook')
   if (keyword != '') {
      obj.innerHTML = "<h3>Search results:</h3><hr/>"
   } else {
      obj.innerHTML = ''
   }
   for (var srv in ldapservices) {
      if (srv.search(keyword.toLowerCase()) != -1) {
         obj.innerHTML += "<div id='service_" + srv + "' class='group'><h3 onclick=\"showServiceRoster(this.parentNode, '" + srv + "');\">" + srv + "</h3></div>"
         if (open) {
            showServiceRoster(document.getElementById('service_' + srv), srv)
         }
      }
   }
}

function searchAuth(keyword, open) {
   var obj = document.getElementById('phonebook')
   if (keyword != '') {
      obj.innerHTML = "<h3>Search results:</h3><hr/>"
   } else {
      obj.innerHTML = ''
   }
   for (var auth in ldapauth) {
      if (auth.search(keyword.toLowerCase()) != -1) {
         obj.innerHTML += "<div id='auth_" + auth + "' class='group'><h3 onclick=\"showAuthRoster(this.parentNode, '" + auth + "');\">" + auth + "</h3></div>"
         if (open) {
            showauthRoster(document.getElementById('auth_' + auth), auth)
         }
      }
   }
}

// Show a single PMC

function showPMC(pmc) {
   var obj = document.getElementById('phonebook')
   if (pmc in committees) {
      var ppmc = committees[pmc].display_name
      obj.innerHTML = "<div id='project_" + pmc + "' class='group'><h3 onclick=\"showProject(this.parentNode, '" + pmc + "');\">Apache " + ppmc + "</h3></div>"
      showProject(document.getElementById('project_' + pmc), pmc)
   } else {
      obj.innerHTML = "<h3>Could not find PMC: '" + pmc + "'</h3>"
   }
}

// Show a single Unix Group

function showUNIX(unix) {
   var obj = document.getElementById('phonebook')
   var id = 'group_' + unix
   if (unix in ldapprojects) {
      obj.innerHTML = "<div id='" + id + "' class='group'><h3 onclick=\"showGroup(this.parentNode, '" + unix + "');\">" + unix + " (LDAP unix group)</h3></div>"
      showGroup(document.getElementById(id), unix)
   } else {
      obj.innerHTML = "<h3>Could not find unix group: '" + unix + "'</h3>"
   }
}

// Show a single Committee group

function showCTTE(ctte) {
   var obj = document.getElementById('phonebook')
   var id = 'ctte_' + ctte
   if (ctte in ldapprojects && ldapprojects[ctte].pmc) {
      obj.innerHTML = "<div id='" + id + "' class='group'><h3 onclick=\"showCommittee(this.parentNode, '" + ctte + "');\">" + ctte + " (LDAP committee group)</h3></div>"
      showCommittee(document.getElementById(id), ctte)
   } else {
      obj.innerHTML = "<h3>Could not find committee group: '" + ctte + "'</h3>"
   }
}

function showSVC(name) {
   var obj = document.getElementById('phonebook')
   var id = 'service_' + name
   if (name in ldapservices) {
      obj.innerHTML = "<div id='" + id + "' class='group'><h3 onclick=\"showServiceRoster(this.parentNode, '" + name + "');\">" + name + " (LDAP service group)</h3></div>"
      showServiceRoster(document.getElementById(id), name)
   } else {
      obj.innerHTML = "<h3>Could not find the service group: '" + name + "'</h3>"
   }
}

function showAUTH(name) {
   var obj = document.getElementById('phonebook')
   var id = 'auth_' + name
   if (name in ldapauth) {
      obj.innerHTML = "<div id='" + id + "' class='group'><h3 onclick=\"showAuthRoster(this.parentNode, '" + name + "');\">" + name + " (LDAP auth group)</h3></div>"
      showAuthRoster(document.getElementById(id), name)
   } else {
      obj.innerHTML = "<h3>Could not find the auth group: '" + name + "'</h3>"
   }
}

function showPOD(name) {
   var obj = document.getElementById('phonebook')
   var id = 'podling_' + name
   if (name in podlings) {
      obj.innerHTML = "<div id='" + id + "' class='group'><h3 onclick=\"showPodlingRoster(this.parentNode, '" + name + "');\">" + name + " (podling)</h3></div>"
      showPodlingRoster(document.getElementById(id), name)
   } else {
      obj.innerHTML = "<h3>Could not find the podling: '" + name + "'</h3>"
   }
}

function searchPodlings(keyword, open) {
   var obj = document.getElementById('phonebook')
   obj.innerHTML = "<h3>Search results:</h3><hr/>"
   for (var name in podlings) {
      if (name.search(keyword.toLowerCase()) != -1) {
         var id = 'podling_' + name
         obj.innerHTML += "<div id='" + id + "' class='group'><h3 onclick=\"showPodlingRoster(this.parentNode, '" + name + "');\">" + name + " (podling)</h3></div>"
      }
   }
}

function showDBG(name) {
   var obj = document.getElementById('phonebook')
   if (name == 'info') {
      obj.innerHTML = "<h3>info</h3>"
      obj.innerHTML += "<pre>" + JSON.stringify(info, null, 1) + "</pre>"

   } else {
      obj.innerHTML = "<h3>Unknown debug name: '" + name + "'</h3>"
   }
}

// Show a single User

function showUid(uid) {
   var obj = document.getElementById('phonebook')
   if (uid in people) {
      var name = getCommitterName(uid)
      obj.innerHTML = "<div class='group' id='committer_" + uid + "'><h4 onclick=\"showCommitter(this.parentNode, '" + uid + "');\">" + name + " (<kbd>" + uid + "</kbd>)</h4></div>"
      showCommitter(document.getElementById('committer_' + uid), uid)
   } else {
      obj.innerHTML = "<h3>Could not find user id: '" + uid + "'</h3>"
   }
}

function showError(error) {
   var obj = document.getElementById('phonebook')
   if (typeof(error) === 'string') {
      obj.innerHTML = "<h3>Error detected</h3>"
      obj.innerHTML += error
   } else { // assume it's an error object
      obj.innerHTML = "<h3>Javascript Error detected</h3>"
      obj.innerHTML += "<hr/>"
      obj.innerHTML += "<pre>" + error.message + "</pre>"
      obj.innerHTML += "<pre>" + error.stack + "</pre>"
      obj.innerHTML += "<hr/>"
   }
}

function searchCommitters(keyword, open) {
   if (keyword.length < 2) {
      return
   }
   var n = 0
   var obj = document.getElementById('phonebook')
   obj.innerHTML = ""
   for (var uid in people) {
      if (!people[uid].noLogin) { // don't display disabled logins
         var name = getCommitterName(uid)
         if (uid.search(keyword.toLowerCase()) != -1 || name.toLowerCase().search(keyword.toLowerCase()) != -1) {
            n++
            if (n > 50) {
               return;
            }
            obj.innerHTML += "<div class='group' id='committer_" + uid + "'><h4 onclick=\"showCommitter(this.parentNode, '" + uid + "');\">" + name +
               " (<kbd>" + uid + "</kbd>) <a title='Link to committer details' href='phonebook.html?uid=" + uid + "'>&#149</a></h4></div>"
            if (open) {
               showCommitter(document.getElementById('committer_' + uid), uid)
            }
         }
      }
   }
}

function saveInfo(json, name) {
   info[name] = {}
   try {
      info[name]['lastTimestamp'] = json.lastTimestamp
   } catch (err) {} // ignored
   try {
      info[name]['lastCreateTimestamp'] = json.lastCreateTimestamp
   } catch (err) {} // ignored
   try {
      info[name]['last_updated'] = json.last_updated
   } catch (err) {} // ignored
}

function preRender() {
   getAsyncJSONArray([
         ['https://whimsy.apache.org/public/public_ldap_projects.json', "projects", function(json) {
            ldapprojects = json.projects;
            saveInfo(json, 'projects');
         }],
         ['https://whimsy.apache.org/public/member-info.json', "members", function(json) {
            members = json;
            saveInfo(json, 'members');
         }],
         ['https://whimsy.apache.org/public/public_ldap_people.json', "people", function(json) {
            people = json.people;
            saveInfo(json, 'people');
         }],
         ['https://whimsy.apache.org/public/committee-info.json', "committees", function(json) {
            committees = json.committees;
            saveInfo(json, 'committees');
         }],
         ['https://whimsy.apache.org/public/icla-info.json', "iclainfo", function(json) {
            iclainfo = json.committers;
            saveInfo(json, 'iclainfo');
         }],
         ['https://whimsy.apache.org/public/public_ldap_groups.json', "ldapgroups", function(json) {
            ldapgroups = json.groups;
            saveInfo(json, 'ldapgroups');
         }],
         ['https://whimsy.apache.org/public/public_ldap_authgroups.json', "ldapauth", function(json) {
            ldapauth = json.auth;
            saveInfo(json, 'ldapauth');
         }],
         ['https://whimsy.apache.org/public/public_ldap_services.json', "services", function(json) {
            ldapservices = json.services;
            saveInfo(json, 'services');
         }],
      ],
      allDone);
}

// Called when all the async GETs have been completed

function allDone() {
   try {
      pmcs = []
      for (var k in committees) { // actual committees, not LDAP committee groups
         if (committees[k].pmc) { // skip non-PMCs
            pmcs.push(k)
         }
      }
      for (var g in ldapprojects) {
         // get podlings from projects
         if (ldapprojects[g]['podling'] == 'current') {
            podlings[g] = {}
            podlings[g].roster = ldapprojects[g].members
         }
      }
      pmcs.push('member')
      pmcs.sort()
      var mMap = {}
      for (var m in members.members) {
         mMap[members.members[m]] = {}
      }
      // copy across the members info
      committees['member'] = {
         'roster': mMap,
         'display_name': 'Foundation Members',
         'description': "Current ASF members (Committers == those with member karma)",
         'site': 'http://www.apache.org/foundation/'
      }

      // Match ?type=name
      searchProjects('cloudstack', true)

   } catch (error) {
      showError(error)
   }
}