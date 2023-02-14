---
layout: post
title: Apache CloudStack Weekly News - 18 February 2013
date: '2013-02-19T01:15:06+00:00'
permalink: apache_cloudstack_weekly_news_18
---
<p>Another busy week on -dev. This week, discussions on whether to graduate to a TLP, the whens and hows of merging, database changes for 4.1 and master, and documentation.</p>

<p>Also worth noting, we now have a <a href="http://markmail.org/message/iceroovnqptyi5lt" class="external-link" rel="nofollow">marketing mailing list</a>. To sign up and participate in promoting Apache CloudStack, please subscribe to the mailing list (cloudstack-marketing-subscribe@incubator.apache.org) and help out!</p>

<h3><a name="ApacheCloudStackWeeklyNews-18February2013-MajorDiscussionsandIssues"></a>Major Discussions and Issues</h3>

<p>Some of the major discussions and issues that have taken place on cloudstack-dev and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on all development issues in the project, you'll definitely want to be subscribed to the mailing lists!</p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-QAScrumMeetingMinutes"></a>QA Scrum Meeting Minutes </h5>

<p><a href="http://markmail.org/message/fcjpe4z5bezfodmx" class="external-link" rel="nofollow">The QA Scrum meeting minutes for 12 February 2013</a> sent to the mailing list.</p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-IRCMeetingMinutes"></a>IRC Meeting Minutes </h5>

<p>Summary of the <a href="http://markmail.org/message/solu2opycgkqb63x" class="external-link" rel="nofollow">weekly IRC Meeting for 13 February 2013</a>. </p>

<p>Note that last week's meeting went in reverse alpha-order, but it was largely agreed during the meeting that we should have an agenda for the meeting. Please submit agenda items by Wednesday at 16:00 UTC.</p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-GraduationtoaTopLevelProject%28TLP%29%3F"></a>Graduation to a Top-Level Project (TLP)?</h5>

<p>Is Apache CloudStack ready to leave the incubator? <a href="http://markmail.org/message/3nluchj5q5waguws" class="external-link" rel="nofollow">Chip Childers</a> raised the discussion on the -dev list on February 13th. </p>

<blockquote>
<p>My general impression is that we have come a long way as a community since CloudStack entered the incubator. While there are still rough edges for us to work through over time, we are dealing with our problems quite well as a community. The simple reason that I believe we are in a position to ask to graduate, is that we are no longer getting value from the incubation process!  That's a good thing, because it means that we have managed to learn quite a bit about the ASF processes, rules, methods and preferences.</p></blockquote>

<p>Marcus Sorensen <a href="http://markmail.org/message/l2kqj2gppghm4f2q" class="external-link" rel="nofollow">agreed</a> that there are rough edges but, "the incubation process itself may not teach us anything further about these things, and they're just things we need to iron out over time."</p>

<p>David Nalley wrote:</p>

<blockquote>
<p>I don't see us actively receiving any benefit from continuing in incubation. We are far from perfect, but the project seems to be policing itself. So I am not seeing a huge incentive to staying.</p>

<p>There are also some downsides to remaining in incubation. First there's the label 'incubation' that follows almost everything we do, and is potentially off-putting to potential community members. Second as a community there are a number of things we can't do for ourselves, and thus have to ask permission or for help - this includes votes on releases, creating new user accounts, etc. I think of this as the overhead of being in the incubator.</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-DiscussiononDatabaseChangesandMerges"></a>Discussion on Database Changes and Merges</h5>

<p>Rohit Yadav <a href="http://markmail.org/thread/z32xdbr2injgjrrp" class="external-link" rel="nofollow">put out the word</a> that there were database changes ahead for the 4.1 branch and master. </p>

<p>Rohit also brought up a merge for <a href="http://markmail.org/message/2v3hqmanasol6okw" class="external-link" rel="nofollow">database schemas for 4.1.0</a> and pointed to the <a href="http://people.apache.org/~bhaisaab/diff-create-schema-40-41.sql" class="external-link" rel="nofollow">current differences in the database schema for 4.1 over 4.0</a>.</p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-Documentationfor4.1"></a>Documentation for 4.1</h5>

<p>Sebastien Goasguen <a href="http://markmail.org/message/rjbctl6uu3qu2c7g" class="external-link" rel="nofollow">started a thread on documentation for 4.1</a>, which is a must-read for anyone working on docs. </p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-HowtoTreatBrokenBuilds"></a>How to Treat Broken Builds</h5>

<p>David Nalley expressed some <a href="http://markmail.org/thread/bb7qgl3esc25cdek" class="external-link" rel="nofollow">frustration with the community's reaction to broken builds</a>. </p>

<blockquote>
<p>In general it seems we don't care, and this makes it more difficult to fix problems. Jenkins reporting a broken build (be it a broken run of RAT, failure to compile, failure of a unit test, building docs, etc.) should be our <a href="http://en.wikipedia.org/wiki/Andon_(manufacturing)" class="external-link" rel="nofollow">Andon cord</a>. We should all stop commits that aren't fixing the broken build. To illustrate why this is a problem, RAT failures started occurring recently, this keeps us from testing whether CloudStack builds, because each build is conditioned on the successful completion of the test before it. That in turn keeps apidocs from building,  which keeps marvin from building, which keeps documentation from building. We essentially are blind until it gets fixed.</p></blockquote>

<p>Marcus Sorensen asked <a href="http://markmail.org/message/2kjhnje2zgocobbt" class="external-link" rel="nofollow">if there was a Jenkins report committers could subscribe to</a> in order to avoid the problem. David <a href="http://markmail.org/message/wcksnc2xqndyxjz6" class="external-link" rel="nofollow">replied</a>, "Yes there are - the commits mailing list receives the notifications from both jenkins.cs.o and builds.a.o. ... You can subscribe by sending an email to cloudstack-commits-subscribe@incubator.apache.org."</p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-WaitBeforeyouMerge%21"></a>Wait Before you Merge!</h5>

<p>How long should you wait until you merge into master or a branch? <a href="http://markmail.org/message/f6obhtciavb22ybx" class="external-link" rel="nofollow">Chip Childers</a> brought this up in response to a merge that was announced on February 12th and then committed on February 13th. This discussion raised the fact that <a href="http://markmail.org/message/mw7vvasrofpr7k3k" class="external-link" rel="nofollow">there's not a formal merge process</a> documented. Chip volunteered to take a crack at the document and asked for help "in getting it in shape to reflect consensus on the topic."</p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-AndroidandiOSCloudStackClients"></a>Android and iOS CloudStack Clients</h5>

<p>Abhinandan Prateek <a href="http://markmail.org/message/m5tpje5wdgjzwuyn" class="external-link" rel="nofollow">asked</a> about the utility of a Android and/or iOS client for CloudStack. David pointed out that <a href="https://github.com/creationline/cumulus" class="external-link" rel="nofollow">an Android client called Cumulus</a> exists that is "pretty useful as an end-user, but less so as an admin." </p>

<p>Pranav Saxena <a href="http://markmail.org/message/judciif4hwyxmypg" class="external-link" rel="nofollow">replied that</a> there was already some work underway off-list on a client using PhoneGap, and it might be possible to collaborate. (Ed. Note: This is why you should bring ideas to the list sooner rather than later, so there's not a wasted effort when two or more community members have the same idea and try to implement it separately.)</p>

<h5><a name="ApacheCloudStackWeeklyNews-18February2013-NewDependencyonOWASPESAPIforJava"></a>New Dependency on OWASP ESAPI for Java</h5>

<p>Likitha Shetty <a href="http://markmail.org/message/w5qdogojgrbxgi7x" class="external-link" rel="nofollow">announced</a> a new dependency on the OWASP ESAPI for Java in master.</p>

<h3><a name="ApacheCloudStackWeeklyNews-18February2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
	<li><a href="http://markmail.org/thread/frj26yjlgn7gty6x" class="external-link" rel="nofollow"><b>CloudStack Meetup in San Jose</b></a> on February 20th.</li>
	<li><b>PuppetCamp LA</b> on February 22nd. David Nalley is presenting [Automating your Apache CloudStack infrastructure with<br/>
Puppet|http://www.socallinuxexpo.org/scale11x/puppet-camp-la].</li>
	<li>* <b>SCALE 11x</b>: Meet with CloudStack folks at SCALE (23-24 February 2013). The CloudStack project will have a booth at the event, plus a number of talks on the schedule:
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


<h3><a name="ApacheCloudStackWeeklyNews-18February2013-Jira"></a>Jira</h3>

<p>Bug count for 4.1.0 hasn't significantly decreased since last week, though major bugs have dropped slightly while there's been an increase of blocker and critical bugs.</p>

<ul>
	<li>Last week: 5 blocker bugs. This week: 7 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">blocker bugs</a></li>
	<li>Last week: 13 critical bugs. This week: 17 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">critical bugs</a></li>
	<li>Last week: 212 major bugs. This week: 202 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">major bugs</a></li>
	<li>Last week: 35 minor bugs. This week: 34 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">minor bugs</a></li>
</ul>


<p>Of the remaining bugs for 4.1.0, 95 are <a href="http://is.gd/unassigned41acs" class="external-link" rel="nofollow">currently unassigned</a>. Doc bugs are by far the largest component needing help, with 64 bugs remaining.</p>

<h3><a name="ApacheCloudStackWeeklyNews-18February2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<p>David Nalley <a href="http://markmail.org/message/73vkokunvgotzqdo" class="external-link" rel="nofollow">announced</a> that Likitha Shetty has been asked to become a committer, and Likitha has accepted. Please join us in congratulating Likitha! </p>

<h3><a name="ApacheCloudStackWeeklyNews-18February2013-ContributingtotheApacheCloudStackWeeklyNews"></a>Contributing to the Apache CloudStack Weekly News</h3>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b> </p>
