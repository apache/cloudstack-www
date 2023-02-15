---
layout: post
title: Apache CloudStack Weekly News - 11 March 2013

slug: apache_cloudstack_weekly_news_111
---
<p><img src="/img/imported/3b5a1e4e-90cb-469e-a58a-512bdcc28007?t=true" alt="acwn-icon.png" align="left"></img>This week the project started the vote to determine whether the Apache CloudStack project feels ready to self-govern, discussions were held about implementing BVT (and how), and the PPMC announced its consensus for the proposed PMC chair. In addition, several technical discussions for features and processes within the project, and discussion on the -marketing list about the design of the Web site.</p>

<p>Want to keep reading the CloudStack Weekly News? See the next section for information on how to contribute.</p>

<h3><a name="ApacheCloudStackWeeklyNews-11March2013-ContributingtotheApacheCloudStackWeeklyNews"></a>Contributing to the Apache CloudStack Weekly News</h3>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including <a href="" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b></p>

<h3><a name="ApacheCloudStackWeeklyNews-11March2013-MajorDiscussions"></a>Major Discussions</h3>

<p>Some of the major discussions and issues that have taken place on cloudstack-dev, cloudstack-marketing and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on all development issues in the project, you'll definitely want to be subscribed to the mailing lists!</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-VOTE%3AGraduateApacheCloudStackfromtheIncubator"></a>VOTE: Graduate Apache CloudStack from the Incubator</h5>

<p>Chip Childers <a href="http://markmail.org/message/3qh2dvzvdzk5vxka" class="external-link" rel="nofollow">has started the vote</a> on whether to graduate Apache CloudStack from the Incubator. The vote lasts 72 hours (vote started Monday morning). If successful, the IPMC will need to vote on the resolution and recommend graduation to the Apache Board of Directors. </p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-PPMCWillRecommendChipChildersasChair"></a>PPMC Will Recommend Chip Childers as Chair</h5>

<p>In conjunction with the graduation discussion, the CloudStack PPMC has <a href="http://markmail.org/message/hv72l22kk4dms7aj" class="external-link" rel="nofollow">reached consensus</a> on recommending Chip Childers as chair, once the project graduates. See <a href="http://www.apache.org/foundation/how-it-works.html#roles" class="external-link" rel="nofollow">How the ASF Works: Roles</a> for more on roles within Top Level Projects (TLPs).</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-MeetCatoFong"></a>Meet Cato_Fong</h5>

<p>If you haven't already, Prasanna Santhanam invites everyone to <a href="http://markmail.org/message/daujidydbynx2key" class="external-link" rel="nofollow">meet Cato_Fong</a>, a handy IRC bot that keeps an eye on the Jenkins builds for the project. Says Prasanna, "if the build is broken and the executor on builds.a.o has not yet queued the job be prepared to be ambushed by Cato_Fong!"</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-SyslogEnhancements"></a>Syslog Enhancements</h5>

<p>Anshul Gangwar has <a href="http://markmail.org/message/iojeclbpkssbbprk" class="external-link" rel="nofollow">revived</a> a discussion from December about using log4j to send syslog messages. See the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/FS+for+Syslog+Enhancements" class="external-link" rel="nofollow">FS</a> on the wiki, and join in the discussion on the -dev mailing list if you have anything to add. </p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-GettingRidofKVMPatchdiskRaisesDiscussionofNewSystemVMProgrammingModel"></a>Getting Rid of KVM Patchdisk Raises Discussion of New System VM Programming Model</h5>

<p>Marcus Sorensen <a href="http://markmail.org/message/anaolzxlcpgrlnh5" class="external-link" rel="nofollow">started a discussion last week</a> about getting rid of the patchdisk that KVM creates on primary storage when bringing up a VM. Marcus says, "This patch disk has been bugging me for awhile, as it creates a volume<br/>
that isn't really tracked anywhere or known about in cloudstack's database. Up until recently these would just litter the KVM primary<br/>
storages, but there's been some triage done to attempt to clean them up when the system vms go away. It's not perfect. It also can be<br/>
inefficient for certain primary storage types, for example if you end up creating a bunch of 10MB luns on a SAN for these."</p>

<p>Later in the discussion, Edison Su responded to Marcus' approach to handling the issue. <a href="http://markmail.org/message/2ee2z7vfo6hoq45p" class="external-link" rel="nofollow">Edison says</a> "we put a lot of logic into init scripts inside system VM, which has unnecessarily complicated the system VM programming." Ultimately, Edison suggest that we may need "to start working on a new system VM programming model now? Better to just put a Python daemon inside system VM, and provide restful API through link local IP address(or private IP if it's vmware), then mgt server or hypervisor agent code can just send commands to the Python daemon through HTTP, instead of SSH."</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-BuildVerificationTest%28BVT%29forCloudStackCheckins"></a>Build Verification Test (BVT) for CloudStack Checkins</h5>

<p>Alex Huang <a href="http://markmail.org/message/kvtkfjaswopqkd7m" class="external-link" rel="nofollow">proposed</a> building a BVT system to "ensure that checkins do not break the <a href="/confluence/pages/createpage.action?spaceKey=CLOUDSTACK&amp;title=master&amp;linkCreation=true&amp;fromPageId=30756122" class="createlink">master</a> branch." </p>

<p>After a fair amont of discussion, Chip Childers <a href="http://markmail.org/message/2tavrqatlyyrwmp6" class="external-link" rel="nofollow">responded, saying that the first step to getting Gerrit</a> is "for us to agree to using it and to be able to clearly articulate <b>why</b>.  Without being able to explain our issue, we'll be questioned about jumping to a tool-based solution by the infra team."</p>

<p>The entire discussion is worth a read for anyone involved in day-to-day CloudStack development. (Indeed, one hopes that <b>all</b> developers have paid close attention to this thread, not only the handful of active voices who have jumped into the discussion.)</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-ProposaltoRefactorApplianceBuildingCodeUndertools%2Fappliance"></a>Proposal to Refactor Appliance Building Code Under tools/appliance</h5>

<p>Rohit Yadav has proposed to "<a href="http://markmail.org/message/lmvbmqvuiriyfgij" class="external-link" rel="nofollow">fix/refactor devcloud appliance building scripts</a> from tools/devcloud/sr to tools/appliance" and "to create a new devcloud that has all the build tools, IDE and possibly a lightweight desktop environment or tiling window manager."</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-IncrementalBuild"></a>Incremental Build</h5>

<p>Edison points out that <a href="http://markmail.org/message/a2b4tfrts3yyhary" class="external-link" rel="nofollow">Maven 3 doesn't support incremental builds</a>, "so it takes a long time (4-7 minutes) to make a build" even with small changes in the source code. Animesh Chaturvedi <a href="http://markmail.org/message/plpuxmxocgoupqak" class="external-link" rel="nofollow">points out a tool that might help</a> add incremental build support to Maven, but there was no enthusiasm for changing tools away from Maven after the effort that went into switching from Ant.</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-Marketing%3AWebsiteDiscussions"></a>Marketing: Website Discussions</h5>

<p>There's been a fair amount of discussion this week about improving the Apache CloudStack Web site. Sebastien Goasguen <a href="http://markmail.org/message/rzaqvo247sskdf5t" class="external-link" rel="nofollow">started the discussion</a> on March 5th, pointing to a site that he found "simple, yet modern." The discussion has moved on to work on the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Website+Resources+and+Proposals" class="external-link" rel="nofollow">sitemap</a> and <a href="http://markmail.org/message/dnbvgwyykyyub32w" class="external-link" rel="nofollow">flow of the site</a>. </p>

<p>No firm proposals or decisions have come out of the discussion as of yet. </p>

<p>There's also discussion about the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Website+Resources+and+Proposals" class="external-link" rel="nofollow">elevator pitch and top <em>N</em> features</a> of CloudStack that should be on the landing page.</p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-LDAPSetupAssistance"></a>LDAP Setup Assistance</h5>

<p>Kirk Jantzer came to the -users list <a href="http://markmail.org/message/jbdioq4kbgay4pjl" class="external-link" rel="nofollow">looking for help in setting up LDAP</a>. Ilya Musayev <a href="http://markmail.org/thread/cbwtk3fub7p7yexm" class="external-link" rel="nofollow">shared an earlier note to -dev</a> about using Microsoft's Active Directory (LDAP) working with CloudStack, and Kirk <a href="http://markmail.org/message/o65puxc4rgu6pe45" class="external-link" rel="nofollow">reported</a> that he was able to get it working by adding users with dummy passwords. </p>

<h5><a name="ApacheCloudStackWeeklyNews-11March2013-SystemVMTemplates"></a>System VM Templates</h5>

<p>Following a discussion on -users, Chip noted that 4.1.0-incubating <a href="http://markmail.org/message/douf6kgmfdbmqsyq" class="external-link" rel="nofollow">will use the same system VM templates</a> used by 4.0.0-incubating and CloudStack releases from Citrix prior to its donation to Apache. However, Chip adds, "we're working on an automated system VM build process that should be part of 4.2.0-incubating (allowing us to refresh the image that's used)."</p>


<h3><a name="ApacheCloudStackWeeklyNews-11March2013-CloudStackPlanetPostsfromtheCloudStackCommunity"></a>CloudStack Planet - Posts from the CloudStack Community</h3>

<ul>
	<li>David Nalley <a href="http://buildacloud.org/blog/235-puppet-and-cloudstack.html" class="external-link" rel="nofollow">wrote about</a> efficient use of CloudStack using Puppet.</li>
</ul>


<ul>
	<li>Joe Brockmeier contributed a <a href="http://buildacloud.org/blog/234-apachecon-north-america-wrap-up.html" class="external-link" rel="nofollow">report on ApacheCon North America</a>.</li>
</ul>


<ul>
	<li>Sebastien <a href="http://buildacloud.org/blog/233-activeeon-integrates-with-cloudstack.html" class="external-link" rel="nofollow">blogged about</a> Activeeon's integration with CloudStack.</li>
</ul>


<ul>
	<li>Sebastien also tweeted that the videos from Build A Cloud Day Ghent are now up. The playlist includes <a href="http://www.youtube.com/playlist?list=PLb899uhkHRoZZefRW5XmCb8QBcRO7o74E" class="external-link" rel="nofollow">several talks focused on CloudStack</a>.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-11March2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
	<li><b>New York City Cloud Computing Group</b>: <a href="http://www.meetup.com/nyccloudcomputing/events/104771232/" class="external-link" rel="nofollow">Deploying Apache CloudStack from API to UI</a> &#45; New York City, Wednesday March 13, 2013.</li>
</ul>


<ul>
	<li><b>NYLUG Meetup</b>: <a href="http://www.meetup.com/nylug-meetings/events/82181872/" class="external-link" rel="nofollow"><em>Open Source Private Clouds with CloudStack, Eucalyptus and OpenStack</em></a> &#45; New York City, Thursday March 14, 2013. RSVPs open on February 28th at 6:15 p.m. Eastern.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-11March2013-Jira"></a>Jira </h3>

<p>The number of issues for 4.1.0 has crept back up in the last week, likely because QA had been blocked from testing by some bugs previously - with those out of the way, QA is able to find more issues in the release. </p>

<p>Note that some of the issues are also less dire than they seem: <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1584" class="external-link" rel="nofollow">CLOUDSTACK-1584</a> is a blocker for release, but it's only to ensure that an important task (adding links to the documentation for downloads) is completed before the release. </p>

<ul>
	<li>Last week: 4 blocker bugs. This week: 11 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">blocker bugs</a></li>
	<li>Last week: 18 critical bugs. This week: 29 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">critical bugs</a></li>
	<li>Last week: 191 major bugs. This week: 159 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">major bugs</a></li>
	<li>Last week: 33 minor bugs. This week: 33 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">minor bugs</a></li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-11March2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<p>No new committers or PPMC members were announced last week.</p>
