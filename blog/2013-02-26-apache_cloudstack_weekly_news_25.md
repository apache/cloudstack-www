---
layout: post
title: Apache Cloudstack Weekly News - 25 February 2013

slug: apache_cloudstack_weekly_news_25
---
<p>This week, interesting discussions on the Java version(s) to be supported by CloudStack, updates on translation, and database changes. Also discussion on the next CloudStack Collaboration Conference, and more. Work on 4.1.0 continues, and there's much to be done before it's ready to ship.</p>

<h3><a name="ApacheCloudstackWeeklyNews-25February2013-MajorDiscussionsandIssues"></a>Major Discussions and Issues</h3>

<p>Some of the major discussions and issues that have taken place on cloudstack-dev and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on all development issues in the project, you'll definitely want to be subscribed to the mailing lists!</p>

<h5><a name="ApacheCloudstackWeeklyNews-25February2013-ScheduleReminder"></a>Schedule Reminder</h5>

<p>Chip Childers has sent out a <a href="http://markmail.org/message/z37xsunbtikzukzl" class="external-link" rel="nofollow">friendly reminder</a> about the schedule: </p>

<blockquote>
<p> Thursday is the last day of this<br/>
phase of QA / bug-fix work.  We defined it as:</p>

<p>2013-02-28<br/>
  Docs Completion Target (except release notes and translations) (Docs<br/>
  may be included in the release after this date, after consensus on<br/>
  each addition that the inclusion does not reduce release quality).</p>

<p>  Release Branch moves to limited updates only (only commits allowed<br/>
  in would be release blockers fixes, translation updates, etc...)</p>

<p>I'd like to get as many bugs resolved as possible (as well as ensure<br/>
that the blockers that Sudha has shared this morning are addressed as<br/>
quickly as possible).</p>

<p>After Thursday, we're going to want to move to a very limited amount of<br/>
change within the 4.1 branch.  Given that, now's the time to knock down<br/>
the blockers...  but also as many of the other priority bugs as<br/>
possible.</p></blockquote>

<p>If you have 4.1 bugs on your plate, please be sure to try to either resolve them or at least triage/report status. </p>

<h5><a name="ApacheCloudstackWeeklyNews-25February2013-CloudStackCollaborationSummit"></a>CloudStack Collaboration Summit</h5>

<p>Mark Hinkle <a href="http://markmail.org/message/flbkomj6mvgvfsdx" class="external-link" rel="nofollow">started a discussion about the next CloudStack Collaboration Conference</a>, offering to work on a proposal for an event in the spring and fall. Lots of folks have expressed interest, and suggested holding the spring event in Europe rather than North America. The discussion hasn't been resolved yet, so no dates or location have been announced as of yet. </p>

<h5><a name="ApacheCloudstackWeeklyNews-25February2013-QAScrumMeetingMinutes"></a>QA Scrum Meeting Minutes</h5>

<p><a href="/confluence/display/CLOUDSTACK/Minutes+18th+Feb+2013" title="Minutes 18th Feb 2013">The QA Scrum meeting minutes for 18 February 2013</a> sent to the mailing list.</p>

<h5><a name="ApacheCloudstackWeeklyNews-25February2013-WeeklyIRCMeetingMinutes"></a>Weekly IRC Meeting Minutes</h5>

<p>The <a href="http://markmail.org/message/s5dg4bwzlpk7rt4z" class="external-link" rel="nofollow">minutes for the weekly CloudStack meeting</a> have been posted to the list. Note that the community has a weekly meeting every Wednesday at 17:00 UTC in #cloudstack-meeting on Freenode.</p>

<h5><a name="ApacheCloudstackWeeklyNews-25February2013-SupportedJavaVersion%3F"></a>Supported Java Version?</h5>

<p>Wido den Hollander noted that <a href="http://markmail.org/message/sryxuq6ks7ukpkp6" class="external-link" rel="nofollow">the master branch wouldn't build on his systems</a> over the last few days. The culprit? Seems to be that some changes have snuck in that want a later version of Java than is in Ubuntu 12.04.</p>

<p>No decision has been reached so far, but there is a case to be made that changing the Java version is a significant disruption to users.</p>

<h5><a name="ApacheCloudstackWeeklyNews-25February2013-TranslationUpdate"></a>Translation Update</h5>

<p>Sebastien Goasguen has sent out an <a href="http://markmail.org/message/wnkzas5bnd4t3fn6" class="external-link" rel="nofollow">update</a></p>

<h5><a name="ApacheCloudstackWeeklyNews-25February2013-DiscussiononDatabaseChanges"></a>Discussion on Database Changes</h5>

<p>Last week Rohit Yadav <a href="https://www.youtube.com/watch?v=Xp2AGii1szQ" class="external-link" rel="nofollow">had a Google&#43; hangout with Alex and Abhi</a> to discuss future of database deployment and upcoming work on creating a new tool called DatabaseCreator that will make database deployments easier. It was decided and enforced on 4.1 and master branch that:</p>

<ul>
	<li>create-schema.sql ought not be changed from the version 4.0 schema</li>
	<li>Any new additions should go into their correct upgrade paths, for 4.2 that would mean schema-410to420.sql and schema-410to420-cleanup.sql</li>
	<li>It would do rolling upgrade from 4.0, this was enforced in DatabaseUpgradeChecker</li>
</ul>


<p>Once DatabaseCreator is implemented correctly for 4.2 release, a sysadmin will have power to work on their own upgrade strategies. The workflow would be:</p>

<ul>
	<li>System admin uses the tool to take a db dump, upgrade the database, at this stage the new database should be backward compatible with old db.</li>
	<li>Next all CloudStack management servers are upgraded.</li>
	<li>The tool is called again to do sanity checks and cleanup any db schema.</li>
</ul>


<h5><a name="ApacheCloudstackWeeklyNews-25February2013-DevelopmentonDIYSystemVMtemplates"></a>Development on DIY SystemVM templates</h5>

<p>This week <a href="http://markmail.org/message/znflttrdsv3gtoh4" class="external-link" rel="nofollow">Rohit Yadav and Chiradeep</a> were finally able to configure a veewee project so systemvm template can be built on one's own box using veewee and VirtualBox, Rohit also created a systemvm building jenkins job. The source code exists in tools/appliance and has a README for folks to get started. The default template is based on Debian Wheezy but anyone can change the definition.rb, preseed.cfg and postinstall.sh script to fork their own systemvm templates based on Ubuntu, Fedora etc.</p>

<p>Rohit shared a <a href="http://rohityadav.in/logs/building-systemvms/" class="external-link" rel="nofollow">post</a> with the issues and challenges of setting an <a href="http://jenkins.cloudstack.org/view/master/job/build-systemvm-master/" class="external-link" rel="nofollow">automated jenkins build job</a> that would create systemvm appliances and export them to various virtual disk image formats. Using his approach anyone should be able to replicate an automated appliance build job.</p>

<h3><a name="ApacheCloudstackWeeklyNews-25February2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
	<li><b>ApacheCon North America</b>: ApacheCon NA is in Portland, Oregon from 26 February to 28 February. Cloud is a hot topic at ApacheCon North America and you'll find quite a bit of CloudStack content on the schedule:
	<ul>
		<li><a href="http://na.apachecon.com/schedule/presentation/126/" class="external-link" rel="nofollow">Apache CloudStack's Plugin Model: Balancing the Cathedral with a Bazaar</a> &#45; Donal Lafferty</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/127/" class="external-link" rel="nofollow">Top 10 Network Issues in Apache CloudStack</a> &#45; Kirk Kosinski</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/128/" class="external-link" rel="nofollow">Advanced CloudStack Troubleshooting using Log Analysis</a> &#45; Kirk Kosinski</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/129/" class="external-link" rel="nofollow">Scalable Object Storage with Apache CloudStack and Apache Hadoop</a> &#45; Chiradeep Vittal</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/116/" class="external-link" rel="nofollow">Getting to Know Apache CloudStack</a> &#45; Joe Brockmeier</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/145/" class="external-link" rel="nofollow">DevCloud: A CloudStack Sandbox</a> &#45; Sebastien Goasguen</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/146/" class="external-link" rel="nofollow">Powering CloudStack with Ceph RDB</a> &#45; Patrick McGarry</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/147/" class="external-link" rel="nofollow">Software Defined Networking in Apache CloudStack</a> &#45; Chiradeep Vittal</li>
	</ul>
	</li>
</ul>


<ul>
	<li><b>New York City Cloud Computing Group</b>: <a href="http://www.meetup.com/nyccloudcomputing/events/104771232/" class="external-link" rel="nofollow">Deploying Apache CloudStack from API to UI</a> &#45; New York City, Wednesday March 13, 2013.</li>
</ul>


<ul>
	<li><b>NYLUG Meetup</b>: <a href="http://www.meetup.com/nylug-meetings/events/82181872/" class="external-link" rel="nofollow"><em>Open Source Private Clouds with CloudStack, Eucalyptus and OpenStack</em></a> &#45; New York City, Thursday March 14, 2013. RSVPs open on February 28th at 6:15 p.m. Eastern.</li>
</ul>


<h3><a name="ApacheCloudstackWeeklyNews-25February2013-Jira"></a>Jira</h3>

<p>The count of bugs for 4.1.0 has actually increased since last week. The overall tally of blocker and critical bugs has increased, with two additional blocker bugs and four more critical bugs (though perhaps not the <b>same</b> bugs as last week). A lot of work is needed to get 4.1.0 into shape before we will be able to release.</p>

<ul>
	<li>Last week: 7 blocker bugs. This week: 9 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">blocker bugs</a></li>
	<li>Last week: 17 critical bugs. This week: 21 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">critical bugs</a></li>
	<li>Last week: 202 major bugs. This week: 200 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">major bugs</a></li>
	<li>Last week: 34 minor bugs. This week: 33 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">minor bugs</a></li>
</ul>


<p>Of the remaining bugs for 4.1.0, 99 are <a href="http://is.gd/unassigned41acs" class="external-link" rel="nofollow">currently unassigned</a>.</p>

<h3><a name="ApacheCloudstackWeeklyNews-25February2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<p>No new committers or PPMC members announced this week.</p>

<h3><a name="ApacheCloudstackWeeklyNews-25February2013-ContributingtotheApacheCloudStackWeeklyNews"></a>Contributing to the Apache CloudStack Weekly News</h3>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including <a href="" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b> </p>
