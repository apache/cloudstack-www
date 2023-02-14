---
layout: post
title: Apache CloudStack Weekly News - 18 March 2013
date: '2013-03-18T20:25:45+00:00'
permalink: apache_cloudstack_weekly_news_181
---
<p>Big news this week: Apache CloudStack has passed major milestones towards graduation, major progress on bugs against 4.1.0, discussions about integrating the Palo Alto firewall with CloudStack, and getting Eclipse and Maven to play nice for developers. Some interesting posts from members of the Apache CloudStack community as well.</p>

<p>Want to keep reading the CloudStack Weekly News? See the next section for information on how to contribute.</p>

<h3><a name="ApacheCloudStackWeeklyNews-18March2013-ContributingtotheApacheCloudStackWeeklyNews"></a>Contributing to the Apache CloudStack Weekly News</h3>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b></p>

<h3><a name="ApacheCloudStackWeeklyNews-18March2013-MajorDiscussions"></a>Major Discussions</h3>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-CloudStackGettingClosertoGraduation"></a>CloudStack Getting Closer to Graduation</h5>

<p>Chip Childers notified the project that <a href="http://markmail.org/thread/zhymhs35ic3rruq5" class="external-link" rel="nofollow">the graduation resolution has passed the IPMC vote</a>. With the votes passed, it's now up to the Apache Software Foundation board to discuss. The next board meeting is on March 20th, though it's unclear whether the IPMC vote was finalized in time for the matter to be discussed during this meeting.</p>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-EclipseandMavenWorkingTogether"></a>Eclipse and Maven Working Together</h5>

<p>Alex Huang wrote last week that <a href="http://markmail.org/message/f265rx7r5qm7z6yz" class="external-link" rel="nofollow">he's made some changes</a> to "help developers with better productivity." To put it succinctly, Alex found that there are better ways to build CloudStack using Eclipse and Maven together, and has written a script to help developers speed up their tools. The procedure and new <em>impatient</em> profile should be documented on the wiki soon.</p>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-PaloAlto"></a>Palo Alto</h5>

<p>Will Stevens <a href="http://markmail.org/message/n5276i4hfh7ek57o" class="external-link" rel="nofollow">brought up a topic about integrating the Palo Alto firewall</a> with CloudStack:</p>

<blockquote>
<p>The problem I am running into right now is that Palo Alto does not allow any two interfaced to have the same IP (even if they are in different zones, vrs, vsys and vlans). This is an issue because CloudStack supports each account having their own private IP ranges and two accounts can use the same private IP range. For example, by default if you create a network with source nat and you do not specify any gateway or subnet data, it will give you 10.1.1.0/24 as an IP range. This means it will be very likely that two CloudStack accounts will be using the same private IP space.</p></blockquote>

<p>Alex <a href="http://markmail.org/message/iyydkgxzvbzmo4jw" class="external-link" rel="nofollow">replied</a>, "There is a mode in CloudStack that only allows non-intersecting cidrs for guest networks. It was introduced specifically because many physical network devices do not expect cidrs to intersect even when it's on different VLANs."</p>

<p>Stuck on a technical issue? Ask on the &#45;dev list, and it's quite likely you'll not only get an answer &#8211; odds are someone's had the problem you've got before, and thought about a solution.</p>

<h3><a name="ApacheCloudStackWeeklyNews-18March2013-CloudStackPlanetPostsfromtheCloudStackCommunity"></a>CloudStack Planet - Posts from the CloudStack Community</h3>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-SecurityintheCloudandtheCCSK"></a>Security in the Cloud and the CCSK</h5>

<p>Sebastien Goasguen <a href="http://buildacloud.org/blog/237-security-in-the-cloud-and-the-ccsk.html" class="external-link" rel="nofollow">wrote about security in the cloud</a> this week, and the Certificate of Cloud Security Knowledge (CCSK).</p>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-SELinuxKVMCloudStack"></a>SELinux + KVM + CloudStack</h5>

<p>David Nalley <a href="http://buildacloud.org/blog/238-selinux-kvm-cloudstack.html" class="external-link" rel="nofollow">blogged about getting an SELinux policy to work for CloudStack</a> because, "I really dislike advocating for people to turn off a security mechanism to get software to work. Additionally I really want some of the advantages of sVirt."</p>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-HOWTO%3AUsingCloudStackResourceswithPuppet%28Part1%29"></a>HOWTO: Using CloudStack Resources with Puppet (Part 1)</h5>

<p>David also started writing about <a href="http://buildacloud.org/blog/239-howto-using-cloudstack-resources-with-puppet%2C-part-1.html" class="external-link" rel="nofollow">using CloudStack resources with Puppet</a>. David says he's written and talked about CloudStack resources previously, but "while cheerleading and telling people it is awesome should be enough - it really doesn't tell you how to actually use it."</p>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-LDAPAuthenticationinCloudStack%28v4.0.1%29"></a>LDAP Authentication in CloudStack (v4.0.1)</h5>

<p>Kirt Jantzer wrote about <a href="http://kirkjantzer.blogspot.com/2013/03/ldap-authentication-in-cloudstack-v401.html" class="external-link" rel="nofollow">LDAP Authentication in CloudStack (v4.0.1)</a> this week.</p>

<h5><a name="ApacheCloudStackWeeklyNews-18March2013-PCExtremeCaseStudy"></a>PCExtreme Case Study</h5>

<p>Posted to the wiki this week, a case study about PCExtreme's use of Apache CloudStack: "<a href="https://cwiki.apache.org/confluence/download/attachments/30757703/PCExtreme+Case+Study+Final+031813.pdf" class="external-link" rel="nofollow">PCExtreme Achieves Business Agility with Apache CloudStack</a>"</p>

<h3><a name="ApacheCloudStackWeeklyNews-18March2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
	<li><b>Storage in Apache CloudStack</b> being held by the <a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/" class="external-link" rel="nofollow">CloudStack SF Bay Area Users Group</a> on March 28, 2013. Location TBD, sign up on the Meetup.com Website.</li>
	<li><b>Apache Hackathon at PES Institute of Technology</b> being <a href="http://www.meetup.com/CloudStack-Bangalore-Group/events/104410272/" class="external-link" rel="nofollow">held by the Bangalore Chapter of CloudStack India</a> on March 30, 2013 at 10:00 a.m. Sign up on the Meetup.com Website.</li>
	<li>Sebastien Goasguen will be at the <a href="http://www.eventbrite.com/org/613789661" class="external-link" rel="nofollow">Scotland JAVA User Group</a> on March 27th, 2013 in Edinburgh, introducing CloudStack.</li>
	<li>Sebastien Goasguen will give a lightning talk at the <a href="http://cloudcamp.org/scotland/369" class="external-link" rel="nofollow">CloudCamp Scotland</a> on March 28th, 2013 in Edinburgh, talking about SDN in CloudStack.</li>
	<li>UK/European CloudStack user group <a href="http://www.eventbrite.com/event/5816841329/eorg" class="external-link" rel="nofollow">meet-up</a> will be April 11th in London.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-18March2013-Jira"></a>Jira</h3>

<p>Things are looking up this week, bug-wise. Bugs have dropped in all categories, and all of the blocker and critical bugs have been assigned. </p>

<ul>
	<li>Last week: 11 blocker bugs. This week: 7 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">blocker bugs</a></li>
	<li>Last week: 29 critical bugs. This week: 10 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">critical bugs</a></li>
	<li>Last week: 159 major bugs. This week: 148 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">major bugs</a></li>
	<li>Last week: 33 minor bugs. This week: 28 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">minor bugs</a></li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-18March2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<p>No new committers or PPMC members were announced last week.</p>
