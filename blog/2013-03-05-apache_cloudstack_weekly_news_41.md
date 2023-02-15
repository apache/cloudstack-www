---
layout: post
title: Apache CloudStack Weekly News - 4 March 2013

slug: apache_cloudstack_weekly_news_41
---
<p><a href="/img/imported/3b5a1e4e-90cb-469e-a58a-512bdcc28007"><img src="/img/imported/3b5a1e4e-90cb-469e-a58a-512bdcc28007?t=true" alt="acwn-icon.png" align="left"></img></a>This week, a vote on updating the project bylaws, fixing the "Tomcat situation" after 4.1, and discussions around the support lifecycle. Some respectable progress in knocking out major and blocker bugs for 4.1.0 as well. The project also welcomes two new PPMC members and three new committers.</p>

<h3><a name="ApacheCloudStackWeeklyNews-4March2013-MajorDiscussions"></a>Major Discussions</h3>

<p>Some of the major discussions and issues that have taken place on cloudstack-dev and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on all development issues in the project, you'll definitely want to be subscribed to the mailing lists&#33;</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-SummaryofWhyWhereandHowDevelopmentHappensMatters"></a>Summary of Why Where and How Development Happens Matters</h5>

<p>Chip Childers kicked off a thread about <a href="http://markmail.org/message/ydbkugl5sqpnz6m5" class="external-link" rel="nofollow">why it matters where and how development happens</a>, based on a discussion that had taken place on cloudstack-private:</p>

<blockquote>
<p>It's largely a re-hash of things that have already been discussed, but we wanted to get this summary moved into the dev list so that the points are available for reference. We should probably distill this into a wiki page somewhere, but that's not done quite yet (volunteer?).  Keep in mind<br/>
that I've tried to pull the important parts of the conversation into this email...  it was a fairly long thread of discussion and debate.<br/>
I'd suggest reading it all the way to the end to form your own understanding of why we have to be careful about how we work as a community.</p>

<p>The TL;DR version:</p>

<p>The issue that we ran into with several features being developed "outside the community" for 4.1 was a major deal, and it had several<br/>
implications.  First, doing that effectively hurts our community.  The other issue is related to the legal right of the project to accept the<br/>
code developed elsewhere.</p></blockquote>

<p>Rather than summarizing it here, I'd recommend that readers spend the time to read Chip's initial email and the replies in the thread.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-UsingDIYSystemVMs"></a>Using DIY System VMs</h5>

<p>Rohit Yadav <a href="http://markmail.org/message/josnaa7tgvnmruva" class="external-link" rel="nofollow">shared "that the do-it-yourself systemvm appliance feature works for me, for Xen,"</a>:</p>

<blockquote>
<p>There is one catch though, VirtualBox exports VHD appliance which is said to be compliant with HyperV. I thought we may need to do something for Xen separately, so I followed and <a href="http://rohityadav.in/logs/building-systemvms/" class="external-link" rel="nofollow">found a way</a>. The "way" is to export a raw disk image and convert it to a VHD <a href="/confluence/pages/createpage.action?spaceKey=CLOUDSTACK&amp;title=1&amp;linkCreation=true&amp;fromPageId=30755264" class="createlink">1</a> but the problem is the VHD created from that "way" fails when vhd-util tries to scan for any dependent VHDs (parents etc.), I don't know what's the reason.</p></blockquote>

<p>Read the rest of the thread if you have an interest in creating custom system VMs for CloudStack.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-FixingtheTomcatSituation%2CPost4.1"></a>Fixing the Tomcat Situation, Post 4.1</h5>

<p>Noa Resare has <a href="http://markmail.org/message/l63bhfmzbdmh37oa" class="external-link" rel="nofollow">admitted being intensely frustrate</a> with "the current tomcat situation" when working on packaging CloudStack. The current setup, says Noa, has many problems. In response, Noa has started a proof-of-concept "of a replacement for this whole mess yesterday, a few tens of lines of code setting up an embedded jetty web container. A few lines of code to parse a config file, set up logging and spawn an embedded servlet container."</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-ChangingProjectBylawstoModifyPMCChairVotingProcessandTerm"></a>Changing Project Bylaws to Modify PMC Chair Voting Process and Term</h5>

<p>Chip kicked off a VOTE thread last week <a href="http://markmail.org/message/w6fn62vqsphyqd6q" class="external-link" rel="nofollow">to modify the project bylaws slightly</a>:</p>

<blockquote>
<p>As <a href="http://markmail.org/message/ifwwce657u36yuwz" class="external-link" rel="nofollow">previously discussed</a>, we'd like to make a <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Apache+CloudStack+Project+Bylaws" class="external-link" rel="nofollow">change to our bylaws</a> to modify the method of selecting a PMC chair.  We also want to add a term for the chair.</p></blockquote>

<p>The <a href="http://markmail.org/message/sgqllgaogduwybhr" class="external-link" rel="nofollow">text was clarified slightly</a> during the vote. The vote remains open until March 5.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-SupportLifetime"></a>Support Lifetime</h5>

<p>With the 4.1 release getting closer, David Nalley <a href="http://markmail.org/thread/a327j3vqw6pklhho" class="external-link" rel="nofollow">raised the topic of the support lifetime for releases</a>. Chip <a href="http://markmail.org/message/xvvudgauegit3j4t" class="external-link" rel="nofollow">proposed a model</a> that would consist of only bug fix releases for:</p>

<blockquote>
<ul class="alternate" type="square">
	<li>The latest feature release of our active major version number (i.e.: 4.x)</li>
	<li>The latest feature release of our last major version number (doesn't exist today, but will be 4.x when / if we bump to 5.0)</li>
</ul>
</blockquote>

<p>Joe Brockmeier replied with a &#43;1, saying that with the current level of participation in the bug-fix releases "this is the most realistic approach that's good for the community."</p>

<p>David asked whether an end of support means an end to bug fixes and security fixes at the same time. "Wearing your enterprise software consumer hat - does a supportlifetime of approximately 12 months make sense?" Instead, David proposed "we should add a month (so that EOL is one month after 4.n+2 releases, with the understanding that 4.n is likely to only receive security fixes if any during that extra one month window.)"</p>

<p>The discussion continues, so developers and users that have a vested interest in the support lifetime for ACS releases would do well to follow and respond to the discussion.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-APIThrottling"></a>API Throttling</h5>

<p>Parth Jagirdar has <a href="http://markmail.org/thread/nj75xlemzxcy5qr2" class="external-link" rel="nofollow">started a discuss thread</a> about API throttling. "API throttling number can be set to anything at this point. Suggestions here is to have this number set to a value that is 'greater than' number of API that can be fired by any potential action on UI." (Note, Parth then sent out a follow-up email to correct the initial subject line from [DISCUSS} to <a href="/confluence/pages/createpage.action?spaceKey=CLOUDSTACK&amp;title=DISCUSS&amp;linkCreation=true&amp;fromPageId=30755264" class="createlink">DISCUSS</a>, but all relevant discussion has happened in the original thread. It's probably not necessary to send a follow-up in those situations and may fragment the conversation.)</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-BranchStabilityStatus"></a>Branch Stability Status</h5>

<p>Sudha Ponnaganti posted a report to the &#45;dev mailing list about <a href="http://markmail.org/message/tpxixcsatkduodq4" class="external-link" rel="nofollow">branch stability for QA testing</a>:</p>

<blockquote>
<p>4.1 Branch:<br/>
&#42;Xen and VMWare are blocked with the following two issues. KVM is working fine (agent issue-1469 has been fixed by Hugo).<br/>
CLOUDSTACK-1252<br/>
Failed to download default template in VMware<br/>
CLOUDSTACK-1470<br/>
Xen - unhandled exception executing api command: deployVirtualMachine</p>

<p>Master:<br/>
There are no blockers now on Master / 4.2. Below are the only blockers and you<br/>
can continue to use older templates to make progress on master till new one gets<br/>
hardened.<br/>
CLOUDSTACK-1462<br/>
Used Master Branch System VM Template: Volume of System VM Failed to Create on<br/>
the XenServer due to IOError</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-SummaryofIRCMeetingfor27February2013"></a>Summary of IRC Meeting for 27 February 2013</h5>

<p>The ASFBot <a href="http://markmail.org/message/7nsbfzhtbs3krbb4" class="external-link" rel="nofollow">shot a summary of the weekly IRC meeting</a> to the &#45;dev mailing list. If you missed it or need a reminder of what happened, check it out.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-ReportfromtheDocSprintonFriday"></a>Report from the Doc Sprint on Friday</h5>

<p>Joe sent out a <a href="http://markmail.org/message/sy3bkyq7mgs2wqaq" class="external-link" rel="nofollow">short report</a> about the doc sprint that took place on Friday, March 1st. Another is planned for Friday, March 8th.</p>

<h3><a name="ApacheCloudStackWeeklyNews-4March2013-CloudStackPlanetPostsfromtheCloudStackCommunity"></a>CloudStack Planet - Posts from the CloudStack Community</h3>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-ProvisionrAutomatedDeploymentofMassiveInfraintheClouds"></a>Provisionr - Automated Deployment of Massive Infra in the Clouds</h5>

<p>David <a href="http://buildacloud.org/blog/229-provisionr-automated-deployment-of-massive-infra-in-the-clouds.html" class="external-link" rel="nofollow">reported on a talk at ApacheCon North America</a> about Andrei Savu's demo of "software that Axemblr had been working on around deploying pools of interrelated virtual machines called <a href="https://github.com/axemblr/axemblr-provisionr" class="external-link" rel="nofollow">Provisionr</a>."</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-ApacheConNorthAmericaReport%3ATroubleshootingCloudStack"></a>ApacheCon North America Report: Troubleshooting CloudStack</h5>

<p>Joe Brockmeier <a href="http://buildacloud.org/blog/230-apachecon-north-america-report-troubleshooting-cloudstack.html" class="external-link" rel="nofollow">wrote a report</a> on two talks at ApacheCon North America by Kirk Kosinski on troubleshooting CloudStack. The talks covered common networking issues and how to use log files to troubleshoot CloudStack.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4March2013-CloudTalksfromApacheConNorthAmerica"></a>Cloud Talks from ApacheCon North America</h5>

<p>Mark Hinkle <a href="http://buildacloud.org/blog/232-cloud-talks-from-apachecon-na-2013.html" class="external-link" rel="nofollow">has put up a post about Cloud talks at ApacheCon North America</a> with links to presentations.</p>

<h3><a name="ApacheCloudStackWeeklyNews-4March2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
	<li><b>CloudStack India, Bangalore Chapter</b>: <a href="http://www.meetup.com/CloudStack-Bangalore-Group/events/103142162/" class="external-link" rel="nofollow">March Meetup - Cloud Storage &amp; Monitoring</a> &#45; Koramangala, Bangalore, Thursday March 7, 2013.</li>
</ul>


<ul>
	<li><b>Doc Sprint (IRC)</b>: The doc team is running another sprint on Friday, March 8th from 16:00 to 23:00 UTC (that's 08:00 to 15:00 Pacific time, 11:00 to 18:00 Eastern in the USA) in #cloudstack-dev. All CloudStack contributors who have an interest in making the docs awesome are encouraged to attend and help out. See <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/4.1+Doc+Sprints+every+Friday" class="external-link" rel="nofollow">the wiki</a> for more info.</li>
</ul>


<ul>
	<li><b>New York City Cloud Computing Group</b>: <a href="http://www.meetup.com/nyccloudcomputing/events/104771232/" class="external-link" rel="nofollow">Deploying Apache CloudStack from API to UI</a> &#45; New York City, Wednesday March 13, 2013.</li>
</ul>


<ul>
	<li><b>NYLUG Meetup</b>: <a href="http://www.meetup.com/nylug-meetings/events/82181872/" class="external-link" rel="nofollow"><em>Open Source Private Clouds with CloudStack, Eucalyptus and OpenStack</em></a> &#45; New York City, Thursday March 14, 2013. RSVPs open on February 28th at 6:15 p.m. Eastern.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-4March2013-Jira"></a>Jira</h3>

<p>Big bug-fixing week for Apache CloudStack&#33; The community knocked out 5 blocker bugs, 3 critical bugs, 9 major bugs, and 3 minor bugs. Still plenty of work left to do before 4.1.0 is ready for prime-time, though.</p>

<ul>
	<li>Last week: 9 blocker bugs. This week: 4 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">blocker bugs</a></li>
	<li>Last week: 21 critical bugs. This week: 18 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">critical bugs</a></li>
	<li>Last week: 200 major bugs. This week: 191 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">major bugs</a></li>
	<li>Last week: 33 minor bugs. This week: 30 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">minor bugs</a></li>
</ul>


<p>It's worth noting that the doc sprint helped quite a bit, bringing the total number of docs bugs for 4.1.0 to 44 (down from 64 just two weeks ago). Of the remaining bugs for 4.1.0, 80 are <a href="http://is.gd/unassigned41acs" class="external-link" rel="nofollow">currently unassigned</a>, down from 99 last week.</p>

<h3><a name="ApacheCloudStackWeeklyNews-4March2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<p>A big week for new committers and PPMC members.</p>

<ul>
	<li>Marcus Sorenson <a href="http://markmail.org/message/dpt6eczdsokaealm" class="external-link" rel="nofollow">has been invited to join the PPMC and has accepted</a>.</li>
	<li>Sebastien Goasguen <a href="http://markmail.org/message/xjk4beb6rtupsuj7" class="external-link" rel="nofollow">has been invited to join the PPMC and has accepted</a>.</li>
	<li>Radhika Puthiyetath <a href="http://markmail.org/message/dkrzj6eo66umqamj" class="external-link" rel="nofollow">has been invited to become a committer and has accepted</a></li>
	<li>Sateesh Chodapuneedi <a href="http://markmail.org/message/7epxyg6s5kmiebcb" class="external-link" rel="nofollow">has been invited to become a committer and has accepted</a></li>
	<li>Noa Resare <a href="http://markmail.org/message/uqhbwwhhfrgfu67g" class="external-link" rel="nofollow">has been invited to become a committer and has accepted</a>.</li>
</ul>

<h3><a name="ApacheCloudStackWeeklyNews-4March2013-ContributingtotheApacheCloudStackWeeklyNews"></a>Contributing to the Apache CloudStack Weekly News</h3>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b></p>
