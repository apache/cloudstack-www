---
layout: post
title: Apache CloudStack Weekly News - 11 February 2013

slug: apache_cloudstack_weekly_news_11
---
 <p>In the past week, the 4.0.1-incubating release passed its VOTE on the general@incubator.apache.org list, work continued on 4.1.0, and there were active discussions on using Gerrit, cloud-init, and whether memory usage has increased following the adoption of the Spring framework. </p>

<h3><a name="ApacheCloudstackWeeklyNews-11February2013-MajorDiscussionsandIssues"></a>Major Discussions and Issues</h3>

<p>Some of the major discussions and issues that have taken place on cloudstack-dev and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on <b>all</b> development issues in the project, you'll definitely want to be subscribed to the mailing lists!</p>

<h5><a name="ApacheCloudstackWeeklyNews-11February2013-Gerritproposedasreviewmechanism"></a>Gerrit proposed as review mechanism</h5>

<p>Alex Huang <a href="http://markmail.org/message/inerurmjtc6v57ba" class="external-link" rel="nofollow">kicked off a discussion</a> about using <a href="http://code.google.com/p/gerrit/" class="external-link" rel="nofollow">Gerrit</a>. David Nalley pointed out that <a href="http://markmail.org/message/kitfyx5cqvyeopwl" class="external-link" rel="nofollow">many of the problems Alex looks to solve with Gerrit are "social/cultural problems"</a> that a technical solution alone won't fix. </p>

<p>Hugo Trippaers also voiced concerns about implementing Gerrit, saying that "a formal process like Gerrit" isn't necessary. </p>

<blockquote>
<p>The committer status is granted based on the trust we put in a certain individuals to take care of the CloudStack project, for me that included taking the responsibility that any contributions are up to spec. I want to trust my fellow committers that they know what they are doing and i don't feel the need to second guess that by wanting to look over their code before they can commit it.</p></blockquote>

<h5><a name="ApacheCloudstackWeeklyNews-11February2013-Cloudinitvs.homegrownscripts"></a>Cloud-init vs. homegrown scripts</h5>

<p>David Nalley <a href="http://markmail.org/message/qs7k4akccoh7slk5" class="external-link" rel="nofollow">raised a question from the Ghent Build-a-Cloud-Day</a> about "whether or not to package the SSH key reset and password reset utilities, or whether we should focus our PW/SSH efforts on cloud-init." </p>

<p>Wido den Hollander voiced support for cloud-init, saying "We want CloudStack to be accepted by more and more users and they probably want to use cloud-init. cloud-init has cool Puppet and Chef plugins as well which make it very <br/>
easy to get it all up and running."</p>

<p>Chiradeep Vittal says he likes cloud-init, but worried that adopting cloud-init would be "hurting the investment of existing CloudStack users who have built hundreds of templates with the extant scripts." </p>

<p>Wido says that "the scripts should keep working" but preferred to avoid packaging the homegrown scripts and encouraging new users/new setups to go with cloud-init.</p>

<p>Chip <a href="http://markmail.org/message/y5z3c7fnpotyzdmb" class="external-link" rel="nofollow">says that</a> "I'm in agreement that the existing scripts would need to remain as a supported option for quite some time.  I consider things like that to actually be related to our semver version numbering, although it's not specifically our CS query API, it's a similar interface expectation."</p>

<h5><a name="ApacheCloudstackWeeklyNews-11February2013-ChangestoCPUandmemoryovercommitfeature"></a>Changes to CPU and memory overcommit feature</h5>

<p>Abhinandan Prateek forwarded a note from Bharat Kumar about changes to the way capacity is calculated in CloudStack. </p>

<blockquote>
<p>I have made changes to the way capacity is calculated in CloudStack ,<br/>
please review and comment.</p>

<p>I will illustrate this with an example.</p>

<p>let us say we have a host with<br/>
Actual Total capacity=4GB ram,</p>

<p>and the overcommit ratio be 2.</p>

<p>Current way       <br/>
Total capacity= 4*2= 8GB.<br/>
Values after deploying 4 VMs with 1GB in service offering.<br/>
Allocated per vm =1GB.<br/>
Used=4GB<br/>
Available=8-4=4GB</p>

<p>now if we decrease the overcommit ratio to 1<br/>
Total Capacity = 4*1=4GB.<br/>
used Capacity = 4GB.<br/>
Available = 4-4=0. (implies 100% usage. can also go to more than 100%)</p></blockquote>

<h5><a name="ApacheCloudstackWeeklyNews-11February2013-JVMMemoryusageincreasedwithlatestmaster"></a>JVM Memory usage increased with latest master</h5>

<p>The latest master is <a href="http://markmail.org/message/ye35yeey6ooxyegb" class="external-link" rel="nofollow">consuming nearly 900MB of memory</a>, according to Koushik Das. </p>

<p>There's some discussion as to the cause of this, and <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1169" class="external-link" rel="nofollow">CLOUDSTACK-1168</a> ("Memory usage is very high") has been created. If you're testing master/4.1 and run into this problem, it'd be helpful to update the ticket with your experience and the environment you're seeeing the issue in. </p>

<h5><a name="ApacheCloudstackWeeklyNews-11February2013-Blockerstorunautomatedtests"></a>Blockers to run automated tests</h5>

<p>Sudha Ponnaganti <a href="http://markmail.org/message/yn3eb7gqzzfzadqt" class="external-link" rel="nofollow">brought up a couple of issues</a> on February 8th that are blocking automated testing. <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1216" class="external-link" rel="nofollow">CLOUDSTACK-1216</a> has been fixed, <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1200" class="external-link" rel="nofollow">CLOUDSTACK-1200</a> (Unknown column 'vm_instance.disk_offering_id' in table vm_instance, db exception shown in MS log) is still unresolved.</p>

<h5><a name="ApacheCloudstackWeeklyNews-11February2013-CloudStack4.0.1incubatingpassesVOTE"></a>CloudStack 4.0.1-incubating passes VOTE</h5>

<p>Joe Brockmeier <a href="http://markmail.org/message/ef4exivtkmhekhxh" class="external-link" rel="nofollow">announced on Friday</a> that the first point release from the CloudStack 4.0 branch has passed its vote on general@incubator.apache.org with +1 votes from Jim Jagielski, Olivier Lamy, and Alex Karasulu. No -1 or +0 votes were cast. </p>

<p>The release has been pushed to the mirrors and will be announced on Tuesday, February 12. </p>

<h5><a name="ApacheCloudstackWeeklyNews-11February2013-ACS4.1ReleaseScheduleReminder"></a>ACS 4.1 Release Schedule Reminder</h5>

<p>Chip Childers sent out a reminder <a href="http://markmail.org/thread/k7xf5jmznsf6gruo" class="external-link" rel="nofollow">about the release schedule for CloudStack 4.1.0</a> on Monday. </p>

<blockquote>
<p>2013-02-28 is the end of our test phase, and should be the end of the doc finalization for the release.</p>

<p>We'll shift into a mode where the 4.1 branch should only be updated by me after that date (after you ask for a cherry-pick for a critical bug or translation update).</p></blockquote>

<p>Chip also noted that there are 15 features/improvements listed as "open" for 4.1, and asked that the reporter/assignee update to "In Progress" or move the target release to 4.2 or Future, as appropriate.</p>

<h3><a name="ApacheCloudstackWeeklyNews-11February2013-UpcomingEvents"></a>Upcoming Events</h3>

<p>John Kinsella has <a href="http://markmail.org/thread/frj26yjlgn7gty6x" class="external-link" rel="nofollow">announced the first Bay Area CloudStack Meetup to be held in San Jose</a> on February 20th. </p>

<ul>
	<li><b>Build a Cloud Day (BACD)</b>: <a href="http://buildacloud.org/about-diy-cloud-computing/cloud-events/viewevent/138-build-a-cloud-day-scale11x.html" class="external-link" rel="nofollow">Full day BACD</a> at SCALE on Friday (22 February 2013).</li>
	<li><b>SCALE 11x</b>: Meet with CloudStack folks at SCALE (23-24 February 2013). The CloudStack project will have a booth at the event, plus a number of talks on the schedule:
	<ul>
		<li><a href="http://www.socallinuxexpo.org/scale11x/presentations/taking-open-cloud-11-cloudstack" class="external-link" rel="nofollow">Taking the Cloud to 11 with CloudStack</a> - Joe Brockmeier</li>
	</ul>
	</li>
	<li><b>ApacheCon North America</b>: ApacheCon NA is in Portland, Oregon from 26 February to 28 February. Cloud is a hot topic at ApacheCon North America and you'll find quite a bit of CloudStack content on the schedule:
	<ul>
		<li><a href="http://na.apachecon.com/schedule/presentation/126/" class="external-link" rel="nofollow">Apache CloudStack's Plugin Model: Balancing the Cathedral with a Bazaar</a> - Donal Lafferty</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/127/" class="external-link" rel="nofollow">Top 10 Network Issues in Apache CloudStack</a> - Kirk Kosinski</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/128/" class="external-link" rel="nofollow">Advanced CloudStack Troubleshooting using Log Analysis</a> - Kirk Kosinski</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/129/" class="external-link" rel="nofollow">Scalable Object Storage with Apache CloudStack and Apache Hadoop</a> - Chiradeep Vittal</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/116/" class="external-link" rel="nofollow">Getting to Know Apache CloudStack</a> - Joe Brockmeier</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/145/" class="external-link" rel="nofollow">DevCloud: A CloudStack Sandbox</a> - Sebastien Goasguen</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/146/" class="external-link" rel="nofollow">Powering CloudStack with Ceph RDB</a> - Patrick McGarry</li>
		<li><a href="http://na.apachecon.com/schedule/presentation/147/" class="external-link" rel="nofollow">Software Defined Networking in Apache CloudStack</a> - Chiradeep Vittal</li>
	</ul>
	</li>
</ul>


<h3><a name="ApacheCloudstackWeeklyNews-11February2013-Jira"></a>Jira</h3>

<p>Status for 4.1 as of Monday, 11 February - by priority:</p>

<ul>
	<li>5 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">Blocker bugs</a></li>
	<li>13 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">Critical bugs</a></li>
	<li>212 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">Major bugs</a></li>
	<li>35 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">Minor bugs</a></li>
</ul>


<p>Of the remaining bugs for 4.1.0, 103 are <a href="http://is.gd/unassigned41acs" class="external-link" rel="nofollow">currently unassigned</a>.</p>

<h3><a name="ApacheCloudstackWeeklyNews-11February2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<p>No new committers or PPMC members were announced this week. </p>

<h3><a name="ApacheCloudstackWeeklyNews-11February2013-ContributingtotheApacheCloudStackWeeklyNews"></a>Contributing to the Apache CloudStack Weekly News</h3>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including <a href="" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b> </p>
