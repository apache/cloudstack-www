---
layout: post
title: Apache CloudStack Weekly News - 8 April 2013

slug: apache_cloudstack_weekly_news_8
---
<p>The Apache CloudStack community has been heads-down for the last week working out the remaining bugs for the 4.1.0 release. Chatter on the dev@ mailing list has been a little muted, comparatively, but there's still plenty of interest in this week's roundup of major discussions and CloudStack community activity.</p>

<p>This week, we look at the outstanding issues for 4.1.0, a discussion about allowing multiple API names for the same API Cmd object, how to deal with tests that expect no database, and how ticket assignment should work. </p>

<h3><a name="ApacheCloudStackWeeklyNews-8April2013-MajorDiscussions"></a>Major Discussions</h3>

<h5><a name="ApacheCloudStackWeeklyNews-8April2013-OutstandingWorkforthe4.1.0Release"></a>Outstanding Work for the 4.1.0 Release</h5>

<p>4.1.0 is getting close, but we're not quite there yet. Chip Childers sent out a <a href="http://markmail.org/thread/7igfqlwj3ornbwq7" class="external-link" rel="nofollow">list of outstanding work</a> required for 4.1.0. Several of the issues are already in progress, but Chip also pointed out <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1941" class="external-link" rel="nofollow">CLOUDSTACK-1941: Cannot delete users in the default admin account within the UI</a> as unassigned. This is a critical issue that will need to be addressed before an RC or release can be cut.</p>

<h5><a name="ApacheCloudStackWeeklyNews-8April2013-APINameAlias"></a>API Name Alias</h5>

<p>Kishan Kavala has raised a discussion <a href="http://markmail.org/message/5j6qhtyw53vxbnal" class="external-link" rel="nofollow">about an API name alias</a>. Kishan has a plan to enhance the name parameter "to support comma separated values. This will allow multiple API names for the same API Cmd object." John Burwell <a href="http://markmail.org/message/zz5inlth3jtrpjok" class="external-link" rel="nofollow">recommended</a> using an array rather than a comma separated value, but there's been some discussion as to whether that's the best arrangement for the current code.</p>

<p>So far, the discussion has not come to a resolution. Folks who have an understanding of the impact or wish to comment on the feature should jump into the discussion on dev@.</p>

<h5><a name="ApacheCloudStackWeeklyNews-8April2013-DatabaseTestsandHittingMaster"></a>Database Tests and Hitting Master</h5>

<p>While the project works on finalizing 4.1.0, work continues on 4.2.0 and later releases in the master branch. This week there was another breakage in master, <a href="http://markmail.org/thread/sqxci3hswfmrionn" class="external-link" rel="nofollow">and a discussion following about database access during tests</a>. One proposal was to disable the database before running tests, but this has been challenged as being overly complicated for developers who may be running CloudStack on their test machines and find it inconvenient to disable the db when running tests.</p>

<h5><a name="ApacheCloudStackWeeklyNews-8April2013-PreparingtheBoardReport"></a>Preparing the Board Report</h5>

<p>As an Incubating project, Apache CloudStack prepared a board report every three months, which would be reviewed by the IPMC and (if approved) sent up to the board as part of the Apache Incubator report.</p>

<p>Now that Apache CloudStack is a top-level project (TLP), it prepares its own report for the board. Chip Childers <a href="http://markmail.org/thread/s7sx3fgfkb6hsbqy" class="external-link" rel="nofollow">started the discussion on the mailing list</a> with a draft of the report.</p>

<h5><a name="ApacheCloudStackWeeklyNews-8April2013-AssigningTickets"></a>Assigning Tickets </h5>

<p>Noah Slater <a href="http://markmail.org/message/ngt2o3wqh5fm6n6y" class="external-link" rel="nofollow">raised an issue</a> about ticket assignments:</p>

<blockquote>
<p>Right now, we have people who are regularly going through JIRA and triaging tickets. This is totally fantastic, and a very valuable activity for the project. (So thank you!) But I also notice that specific individuals are being assigned to the tickets in the process.</p>

<p>This is a form of "cookie licking". The analogy is that if you fancy a cookie, but you're too hungry right now, you take a lick of it so nobody else can touch it. This is an anti-pattern and we should try to avoid it. </p></blockquote>

<p>As a result, Noah suggested that we change the way that ticket assignments are handled so that people are taking tickets as they get a chance to work on them, rather than taking tickets that they plan to work on. </p>

<h3><a name="ApacheCloudStackWeeklyNews-8April2013-CloudStackPlanetPostsfromtheCloudStackCommunity"></a>CloudStack Planet - Posts from the CloudStack Community</h3>

<ul>
	<li>Chip Childers: "<a href="http://www.chipchilders.com/blog/2013/4/4/apache-cloudstack-graduation-news-roundup.html" class="external-link" rel="nofollow">Apache CloudStack Graduation News Roundup</a>" Chip rounds up some of the reports on the Apache CloudStack graduation.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-8April2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
	<li><b>Open Cloud Challenges</b> at the Data Center Expo, Paris, April 10th <a href="http://www.datacenter-expo.com/info_event/80/cloud-open-source---les-communautes-open-cloud-et-leurs-defis.html" class="external-link" rel="nofollow">Open Cloud</a>.</li>
	<li><b>Cloud Computing</b> at the University of British Columbia (Robson Campus), Vancouver, Canada, April 9th.</li>
	<li><b>CloudStack Introduction and Basics</b> - The inaugural meeting of the <a href="http://meetup.com/CloudStack-NYC-User-Group/" class="external-link" rel="nofollow">CloudStack NYC User Group</a> will be Wednesday, April 10th in New York City. <a href="http://www.meetup.com/CloudStack-NYC-User-Group/events/106104162/" class="external-link" rel="nofollow">Sign up on Meetup.com</a>.</li>
	<li><b>UK/European CloudStack user group</b> <a href="http://www.eventbrite.com/event/5816841329/eorg" class="external-link" rel="nofollow">meet-up</a> will be April 11th in London.</li>
	<li><b>Storage in Apache CloudStack</b> being held by the <a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/" class="external-link" rel="nofollow">CloudStack SF Bay Area Users Group</a> on April 30, 2013 @ Citrix Conference Center, sign up on the Meetup.com Website.</li>
	<li><b>CloudStack Bangalore Meetup</b> Sometime in April, date not yet announced. Watch the <a href="http://www.meetup.com/CloudStack-Bangalore-Group/events/110900872/" class="external-link" rel="nofollow">Meetup page for details</a>.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-8April2013-Jira"></a>Jira</h3>

<ul>
	<li>Last week: 2 blocker bugs. This week: 2 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">blocker bugs</a>, only one of which is truly a bug. (The other is a task that must be completed before release.)</li>
	<li>Last week: 6 critical bugs. This week: 6 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">critical bugs</a></li>
	<li>Last week: 122 major bugs. This week: 118 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">major bugs</a></li>
	<li>Last week: 23 minor bugs. This week: 23 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">minor bugs</a></li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-8April2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<p>No new committers or PMC members were announced this week. To see all current committers and PMC members, see the <em><a href="http://cloudstack.apache.org/who.html" class="external-link" rel="nofollow">Who We Are</a></em> page on the Apache CloudStack website.</p>
