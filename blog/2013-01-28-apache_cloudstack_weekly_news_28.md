---
layout: post
title: Apache CloudStack Weekly News - 28 January 2013

slug: apache_cloudstack_weekly_news_28
---
<p>As the 4.1.0 feature freeze approaches, the mailing list has been extremely active. The activity on -dev is off the charts, with (according to MarkMail) more than 4,400 messages sent to -dev in January - and the month isn't over yet! This eclipses the previous record set in October 2012 of 3,109 messages. Major discussions this week include the Javelin merge and IP clearance issues.</p>

<p>The feature freeze is 31 January 2013. Testing and bugfixing will carry through from 1 February 2013 to 28 February 2013, then docs freeze is on 28 February (excepting release notes and translations). See the full schedule <a href="https://cwiki.apache.org/CLOUDSTACK/cloudstack-41-release.html" class="external-link" rel="nofollow">on the wiki</a>.</p>

<h3><a name="ApacheCloudStackWeeklyNews-28January2013-MajorDiscussionsandIssues"></a>Major Discussions and Issues</h3>

<p>As usual, the -dev mailing list has been hopping for the past week. Here's a summary of some of the major issues and discussions that have taken place over the last week.</p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-Countingdowntofeaturefreezefor4.1.0incubating"></a>Counting down to feature freeze for 4.1.0-incubating</h5>

<p>Reminder on 21st January that there were <a href="http://markmail.org/message/jldbgu3g3e6iqqan" class="external-link" rel="nofollow"><b>10 days left to feature freeze</b></a> on Apache Cloudstack 4.1.0-incubating. Status at the time of the reminder:</p>

<blockquote>
<p>Out of 95 total proposed features / improvements, their status is:</p>

<p>3 Closed<br/>
12 Resolved<br/>
5 Reopened<br/>
21 In Progress<br/>
54 Open</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-IPDonations"></a>IP Donations</h5>

<p>This week we had several VOTE results around IP donations from Citrix. </p>

<ul>
	<li><a href="http://markmail.org/thread/uvxhsepmh6evjj7d" class="external-link" rel="nofollow">Accept a donation of "Documentation for various features" from Citrix</a> Result: passed.</li>
	<li><a href="http://markmail.org/message/uvxhsepmh6evjj7d" class="external-link" rel="nofollow">Accept a donation of 'Documentation for various features' from Citrix</a> Result: passed.</li>
	<li><a href="http://markmail.org/thread/h57bhg24edgc2gzm" class="external-link" rel="nofollow">No IP Clearance Needed to accept a donation of 'support security group enabled network in advanced zone'</a> Result: passed.</li>
	<li><a href="http://markmail.org/message/qgfqglqqyrutes2l" class="external-link" rel="nofollow">Accept a donation of 'network service support in shared network' from Citrix</a> Result: passed.</li>
	<li><a href="http://markmail.org/message/ywu5c7a3m3jdq345" class="external-link" rel="nofollow">Accept a donation of 'providing support of optional Public IP assignment for EIP with Basic Zone' from Citrix</a> Result: passed.</li>
	<li><a href="http://markmail.org/message/rkli5q5bkudnxmub" class="external-link" rel="nofollow">Accept a donation of Enhanced Baremetal Provisioning support from Citrix</a> Result: passed.</li>
	<li><a href="http://markmail.org/message/cilpefqcebbr3fub" class="external-link" rel="nofollow">Accept a donation of Egress firewall rules feature for guest network for CloudStack from Citrix</a> Result: passed.</li>
	<li><a href="http://markmail.org/message/vujv6lz2gqbrapmf" class="external-link" rel="nofollow">Accept a donation of reset SSH key to access a VM in CloudStack from Citrix</a> Result: passed.</li>
	<li><a href="http://markmail.org/message/bzvirvppcufjhcty" class="external-link" rel="nofollow">Accept a donation of SRX&amp;F5 inline mode support in CloudStack from Citrix</a> Result: passed.</li>
</ul>


<p>Note that Chip Childers sent an <a href="http://is.gd/W8KUtQ" class="external-link" rel="nofollow">email about incoming IP Clearance VOTEs</a> to incubator-general@apache.org about the 7 IP clearance votes that would be sent to the incubator folks. </p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-JavelinMerge"></a>Javelin Merge</h5>

<p>Alex Huang started <a href="http://markmail.org/message/fjelvc3nrs2szsyq" class="external-link" rel="nofollow">a discussion about merging the Javelin branch into master</a>. "The content of the merge is the storage framework refactoring and converting everything use Spring." There's <a href="http://markmail.org/message/2a2rxjwhlxnze2d3" class="external-link" rel="nofollow">some decisions yet to be resolved around the storage piece of this</a> that needs to be resolved before the request to merge Javelin is decided.</p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-LICENSEandNOTICEfilesfor4.1.0"></a>LICENSE and NOTICE files for 4.1.0</h5>

<p>Chip Childers has <a href="http://markmail.org/thread/ebm2kwwkdtrtwg37" class="external-link" rel="nofollow">raised a question about changes to the LICENSE and NOTICE files for CloudStack</a>. This would remove all binary dependency notice info from the top level LICENSE and NOTICE files in the source tree, and create two copies of the <a href="http://creadur.apache.org/whisker/" class="external-link" rel="nofollow">Whisker</a> descriptor.xml files, one that generates the source distro's files and one that generates the files for packaged versions of Apache CloudStack. </p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-VOTEcalledfor4.0.1incubating"></a>VOTE called for 4.0.1-incubating</h5>

<p>The VOTE for 4.0.1-incubating <a href="http://markmail.org/thread/v22nhyasqs7e7gwl" class="external-link" rel="nofollow">has been called</a> as of January 25 and will run for 72 hours or until it gets the required votes, or is -1'ed and restarted. Note that, if successful, the release still needs to be voted on by the IPMC and receive at least three +1 votes. The release could be out as early as next week, if all goes well. </p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-WritingunittestsafterJavelinismerged"></a>Writing unit tests after Javelin is merged</h5>

<p>Alex Huang has <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Unit+Testing+with+JUnit+and+Spring" class="external-link" rel="nofollow">written up a page on how to write unit tests</a> after the Spring injection framework is merged into Master. </p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-CloudStackSanFrancsicoBayAreaMeetupgroupcreated"></a>CloudStack San Francsico Bay Area Meetup group created</h5>

<p>A new meet group has been created for San Francsico Bay Area <a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/" class="external-link" rel="nofollow">http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/</a>. First meetup is expected in February, so stay tuned.</p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-Bangupjobontranslations"></a>Bang-up job on translations</h5>

<p>According to <a href="http://markmail.org/thread/ylublriw57wtfwqc" class="external-link" rel="nofollow">Sebastien Goasguen</a> </p>

<blockquote>
<p>The mad race to CloudStack documentation translation has started.<br/>
Japan is leading the way with 52% of the translation complete.<br/>
China is close second with 40%<br/>
Brazil is third with 11%</p></blockquote>

<p>See more about <a href="http://buildacloud.org/blog/196-help-needed-to-translate-cloudstack-documentation.html" class="external-link" rel="nofollow">working on translations on the wiki</a>.</p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-HyperVPlugin"></a>Hyper-V Plugin</h5>

<p>Donal Lafferty has <a href="http://markmail.org/thread/ue5kc6gjcex2y6na" class="external-link" rel="nofollow">submitted a review request for a Hyper-V plugin</a> for CloudStack.</p>

<h3><a name="ApacheCloudStackWeeklyNews-28January2013-UpcomingEvents"></a>Upcoming Events</h3>

<p>Speaking at events doesn't happen by accident, or without preparation. For example, if you want to speak at a major event like OSCON, you need to submit a talk <b>well</b> in advance. </p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-CFPstobeawareof"></a>CFPs to be aware of</h5>

<p><a href="http://markmail.org/thread/pgnfhkahhkvha62j" class="external-link" rel="nofollow">Mark Hinkle sent a note to -dev</a> reminding that the CFP for OSCON 2013 will <a href="http://www.oscon.com/oscon2013/public/cfp/251" class="external-link" rel="nofollow">close on 4 February</a>. If we want to see CloudStack talks at OSCON (and we do, yeah?) then get those proposals in!</p>

<p>The Linux Collaboration Summit CFP <a href="https://events.linuxfoundation.org/events/collaboration-summit/cfp" class="external-link" rel="nofollow">also closes on 4 February 2013</a> in case you were looking to get a CloudStack or related talk in.</p>

<h5><a name="ApacheCloudStackWeeklyNews-28January2013-What%27sontapforthecomingweeks"></a>What's on tap for the coming weeks</h5>

<ul>
	<li><b>Linux.conf.au</b>: Joe Brockmeier is <a href="https://lca2013.linux.org.au/schedule/30073/view_talk?day=monday" class="external-link" rel="nofollow">speaking about Apache CloudStack during the Cloud Infrastructure, Distributed Storage and High Availability miniconf</a> on Monday (28 January, 2013).</li>
	<li><b>Linux.conf.au</b>: <a href="http://meetu.ps/vgBVv" class="external-link" rel="nofollow">Open Cloud Meetup at LCA</a> organized by the OpenStack Meetup Group on Tuesday (29 January, 2013).</li>
	<li><b>FOSDEM</b>: Sebastien Goasguen is <a href="https://fosdem.org/2013/schedule/event/cloudstack/" class="external-link" rel="nofollow">speaking about Apache CloudStack features and tools</a> during the <a href="https://fosdem.org/2013/schedule/track/cloud/" class="external-link" rel="nofollow">cloud DevRoom</a> at FOSDEM on Sunday (3 February, 2013).</li>
	<li><b>Build a Cloud Day (BACD)</b>: Full day <a href="http://buildacloud.org/about-cloudstack/cloudstack-events/viewevent/140-build-a-cloud-day-ghent-2013.html" class="external-link" rel="nofollow">workshop</a> on CloudStack co-located with Puppet Camp in Ghent, Belgium (1 February, 2013).</li>
	<li><b>UK/European User Group Meet-up</b> : Shapeblue is organizing a <a href="http://buildacloud.org/about-cloudstack/cloudstack-events/viewevent/141-ukeuropean-user-group-meet-up.html" class="external-link" rel="nofollow">meet-up</a>. (January 16th, 2013)</li>
	<li><b>Build a Cloud Day (BACD)</b>: Full day <a href="http://buildacloud.org/about-cloudstack/cloudstack-events/viewevent/138-build-a-cloud-day-scale11x-.html" class="external-link" rel="nofollow">BACD</a> at SCALE on Friday (22 February 2013).</li>
	<li><b>CloudStack Booth at SCALE</b>: Meet with CloudStack folks at SCALE (23-24 February 2013), also Joe Brockmeier is <a href="http://www.socallinuxexpo.org/scale11x/presentations/taking-open-cloud-11-cloudstack" class="external-link" rel="nofollow">speaking about CloudStack at SCALE</a>.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-28January2013-Jira"></a>Jira</h3>

<ul>
	<li>All bugs have been cleared for 4.0.1-incubating. Please tag all bugs for the 4.0 branch for 4.0.2 going forward. (Excepting bugs discovered that should be blockers to 4.0.1-incubating, of course.)</li>
	<li>4.1.0 currently has <a href="https://issues.apache.org/jira/browse/CLOUDSTACK/fixforversion/12323253#selectedTab=com.atlassian.jira.plugin.system.project%3Aversion-issues-panel" class="external-link" rel="nofollow">4 blockers, 14 critical bugs, 279 major bugs, and 36 minor bugs</a> unresolved.</li>
	<li>101 bugs are <a href="https://issues.apache.org/jira/issues/?jql=project%20%3D%20CLOUDSTACK%20AND%20fixVersion%20%3D%20%224.1.0%22%20AND%20resolution%20%3D%20Unresolved%20AND%20assignee%20is%20EMPTY%20ORDER%20BY%20priority%20DESC" class="external-link" rel="nofollow">currently unassigned</a>.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-28January2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<ul>
	<li>John Burwell <a href="http://markmail.org/message/hpqmlwdl7wnm6t5k" class="external-link" rel="nofollow">has been asked to become a committer, and has accepted</a>.</li>
</ul>
