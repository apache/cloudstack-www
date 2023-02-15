---
layout: post
title: Apache CloudStack Weekly News - 4 September 2013

slug: apache_cloudstack_weekly_news_42
---
            <p>Welcome back to another exciting issue of the <a href="http://cloudstack.apache.org" class="external-link" rel="nofollow">Apache CloudStack</a> Weekly News. This week, 4.2.0 enters it's fourth round of voting, we welcome several new committers and look at some of the major discussions on the Apache CloudStack mailing lists, and much more. </p>


<h3><a name="ApacheCloudStackWeeklyNews-4September2013-MajorDiscussions"></a>Major Discussions</h3>

<h5><a name="ApacheCloudStackWeeklyNews-4September2013-4.2isNowbeingVotedOn"></a>4.2 is Now being Voted On</h5>

<p>The fourth round of voting is now <a href="http://markmail.org/message/xxfksrwvabkip2lb" class="external-link" rel="nofollow">open</a> on the 4.2 release. This release is full of new features, fixes and thousands of hours of work from everyone in the community. It's important to test and cast your vote on the release. Remember that all members of the community are <a href="http://cloudstack.apache.org/bylaws.html" class="external-link" rel="nofollow">eligible to cast a vote</a> and note any issues that they have with the current release candidate. </p>

<h5><a name="ApacheCloudStackWeeklyNews-4September2013-4.2IssuesClosure"></a>4.2 Issues Closure</h5>

<p>Sudha Ponnaganti has throughout the 4.2 put <a href="http://markmail.org/message/pwmlzcq7nwtcfdg5" class="external-link" rel="nofollow">together a list</a> of the the current blocker and critical issues that need to be reviewed. If you have issues that have been resolved please review, test, and close out please. </p>

<h5><a name="ApacheCloudStackWeeklyNews-4September2013-HighQualityDocumentation"></a>High Quality Documentation</h5>

<p>For some time now there has been discussion around a possible replacement to our current use DocBook for our primary document editor. Sebastien Goasguen started a <a href="http://markmail.org/message/5z2umxi3whcyqddy" class="external-link" rel="nofollow">discussion</a> to look at <a href="http://daringfireball.net/projects/markdown/" class="external-link" rel="nofollow">Markdown by Daring Fireball</a>. With there being concern about how to create and maintain high quality documentation, this is an important thread to participate in for anyone interested in the release documents. </p>

<blockquote>
<p>After seeing lots of frustrated people with folks I decided to try something out with markdown.</p>

<p>I used pandoc to convert some docbook files to markdown and I used a structure for a book based on 'The little mongodb' book.<br/>
We can generate epub and pdf using latex.</p>

<p>See: <a href="https://github.com/runseb/cloudstack-books" class="external-link" rel="nofollow">link</a></p>

<p>There are two "books" aimed at being step by step recipes. Not long, not convoluted, single OS, etc…simple step by step.</p>

<p><a href="https://github.com/runseb/cloudstack-books/blob/master/en/clients.markdown" class="external-link" rel="nofollow">link</a><br/>
<a href="https://github.com/runseb/cloudstack-books/blob/master/en/installation.markdown" class="external-link" rel="nofollow">link</a></p>

<p>I am still sanitizing the installation one based on 4.2 .</p>

<p>Comments, flames ?</p></blockquote>

<h3><a name="ApacheCloudStackWeeklyNews-4September2013-CloudStackPlanet"></a>CloudStack Planet</h3>

<h5><a name="ApacheCloudStackWeeklyNews-4September2013-SpeakinginTechPodcastTheRegister"></a>Speaking in Tech Podcast - The Register</h5>

<p>Aaron Delp joined in as a part of talking cloud and especially CloudStack as part of an <a href="http://markmail.org/message/ddyi72tzrfhcvycr" class="external-link" rel="nofollow">interview with The Register</a> and their "Speaking in Tech" podcast series. </p>

<p>Aaron's section on ACS is from 17:45 to 26:00 - <a href="http://www.theregister.co.uk/2013/08/01/speaking_in_tech_episode_69/" class="external-link" rel="nofollow">http://www.theregister.co.uk/2013/08/01/speaking_in_tech_episode_69/</a></p>

<h5><a name="ApacheCloudStackWeeklyNews-4September2013-CloudStackAppliancesReleased"></a>CloudStack Appliances Released</h5>

<p>Ilya Musayev a committer of the ACS project and founder of CloudSands project has recently <a href="http://markmail.org/message/cumk7jl2lt2e35jg" class="external-link" rel="nofollow">announced the release</a> of a set of pre-built management server appliances available for open use based off the ACS 4.1.1 code base. There are appliances for VMware, Xen and KVM hypervisors. </p>

<blockquote>
<p>Objective: Speed up the Apache CloudStack adoption by abstracting the need of going through install process and using pre-installed package instead. Especially useful for a quick POC.</p>

<p>vSphere:<br/>
Short URL: <a href="http://s.apache.org/vapp-acs411-vsphere" class="external-link" rel="nofollow">link</a><br/>
Long URL: <a href="http://download.cloudsand.com/appliances/cloudstack/centos6.4-x86_64-cloudstack-4.1.1.ova" class="external-link" rel="nofollow">link</a></p>

<p>KVM:<br/>
Short URL: <a href="http://s.apache.org/vapp-acs411-kvm" class="external-link" rel="nofollow">link</a><br/>
Long URL: <a href="http://download.cloudsand.com/appliances/cloudstack/centos6.4-x86_64-cloudstack-4.1.1.qcow2.bz2" class="external-link" rel="nofollow">link</a></p>

<p>XEN:<br/>
Short URL: <a href="http://s.apache.org/vapp-acs411-xen" class="external-link" rel="nofollow">link</a><br/>
Full URL: <a href="http://download.cloudsand.com/appliances/cloudstack/centos6.4-x86_64-cloudstack-4.1.1.vhd.bz2" class="external-link" rel="nofollow">link</a></p>

<p>Minimum Requirements:<br/>
1 CPU x 2 GB of RAM</p>

<p>Testing:</p>

<p>Please spend few minutes on testing these out, you can import it as a template into your ACS - power on and see the details on initial start.<br/>
I've tested vSphere and KVM version. I don't have XEN instance to try.</p></blockquote>


<h3><a name="ApacheCloudStackWeeklyNews-4September2013-Events"></a>Events</h3>

<ul>
	<li><b><a href="http://lanyrd.com/2013/build-a-cloud-day-london/" class="external-link" rel="nofollow">Build a Cloud Day - London</a></b> being hosted by Sebastien Goasguen, being held on September 5.</li>
	<li><b><a href="http://www.cloudplugfest.org/about-cloud-plugfests" class="external-link" rel="nofollow">Cloud Plug Fest</a></b> offers a variety of Tutorials and sessions, including OpenStack and CloudStack, in Madrid, Spain September 16-20.</li>
	<li><b><a href="http://lanyrd.com/2013/build-a-cloud-day-geneva-switzerland/" class="external-link" rel="nofollow">Build a Cloud Day - Switzerland</a></b> has Sebastien Goasguen teaching you and helping you build clouds across Europe on September 26.</li>
	<li><b><a href="http://lanyrd.com/2013/cloudstack-collaboration-conference/" class="external-link" rel="nofollow">CloudStack Collaboration Conference</a></b> planning is well underway for Amsterdam, Netherlands. Put it on your calendar now for November 20-22.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-4September2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<ul>
	<li>Ilya Musayev has been invited to join the CloudStack PMC, and <a href="http://markmail.org/message/263fp7wl56lhrwon" class="external-link" rel="nofollow">has accepted</a>.</li>
	<li>Vijay Bhamidipati has been invited by the PMC to become a committer and <a href="http://markmail.org/message/ol43ltkhkwnihgnd" class="external-link" rel="nofollow">has accepted</a>.</li>
	<li>Toshiaki Hatano has been invited by the PMC to become a committer and <a href="http://markmail.org/message/yrduvvabhtkdravy" class="external-link" rel="nofollow">has accepted</a>.</li>
	<li>Kirk Kosinski has been invited by the PMC to become a committer and <a href="http://markmail.org/message/6abmubyyzpgtdzru" class="external-link" rel="nofollow">has accepted</a>.</li>
	<li>Ian Duffy has been invited by the PMC to become a committer and <a href="http://markmail.org/message/jugi22z546nuljgp" class="external-link" rel="nofollow">has accepted</a>.</li>
</ul>
