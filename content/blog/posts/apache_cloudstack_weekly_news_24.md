---
layout: post
title: Apache CloudStack Weekly News - 24 July 2013
date: '2013-07-25T16:03:53+00:00'
permalink: apache_cloudstack_weekly_news_24
---
<p>Welcome back to another exciting issue of the <a href="http://cloudstack.apache.org" class="external-link" rel="nofollow">Apache CloudStack</a> Weekly News. This week, we take a look at the progress towards 4.2.0, major discussions on the Apache CloudStack mailing lists, and much more. </p>


<h3><a name="ApacheCloudStackWeeklyNews-24July2013-MajorDiscussions"></a>Major Discussions</h3>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-4.2ReleaseCodingStartingtoWrapup"></a>4.2 Release Coding Starting to Wrap-up</h5>

<p>With a less than a week left before code freeze for the 4.2 release on 7/29, there is a lot of work still to be done and a lot of bugs that need to be worked out. With this major release many new and existing features need the blocker and critical bugs cleared out as soon as possible. There's been great teamwork in the community. <a href="http://markmail.org/message/gurcwi24lhfwut7s" class="external-link" rel="nofollow">Animesh Chaturvedi points out the work that still needs to be done</a>:</p>

<blockquote>
<p>...For the days remaining to code freeze, lets prioritize fixing blockers and critical over majors. As from last week in order to clear up our backlog I request you to help out on aggressively fixing the issues. The unassigned issue list is available at <a href="http://s.apache.org/BlH/" class="external-link" rel="nofollow">http://s.apache.org/BlH/</a>. When you fix a bug in 4.2 please make sure it is also fixed in master.</p>

<p>The outstanding resolved issues now stand at 492 with 250 blockers and critical still to be verified. As with fixing issues now we need to focus on blockers and critical first.</p>

<p>The detailed bug status is captured below.</p>
<div class='table-wrap'>
<table class='confluenceTable'><tbody>
<tr>
<th class='confluenceTh'>Bugs</th>
<th class='confluenceTh'>This Week </th>
<th class='confluenceTh'>&nbsp;</th>
<th class='confluenceTh'>&nbsp;</th>
<th class='confluenceTh'>&nbsp;</th>
<th class='confluenceTh'>Last Week    </th>
<th class='confluenceTh'>&nbsp;</th>
<th class='confluenceTh'>&nbsp;</th>
<th class='confluenceTh'>&nbsp;</th>
</tr>
<tr>
<td class='confluenceTd'>&nbsp;</td>
<td class='confluenceTd'>   Blocker </td>
<td class='confluenceTd'>  Critical</td>
<td class='confluenceTd'> Major </td>
<td class='confluenceTd'> Total </td>
<td class='confluenceTd'>   Blocker </td>
<td class='confluenceTd'> Critical </td>
<td class='confluenceTd'> Major </td>
<td class='confluenceTd'> Total </td>
</tr>
<tr>
<td class='confluenceTd'>  Incoming       </td>
<td class='confluenceTd'>        29 </td>
<td class='confluenceTd'>       48 </td>
<td class='confluenceTd'>    64 </td>
<td class='confluenceTd'>   144 </td>
<td class='confluenceTd'>        31 </td>
<td class='confluenceTd'>       40 </td>
<td class='confluenceTd'>    46 </td>
<td class='confluenceTd'>   120 </td>
</tr>
<tr>
<td class='confluenceTd'> Outgoing        </td>
<td class='confluenceTd'>        37 </td>
<td class='confluenceTd'>       68 </td>
<td class='confluenceTd'>    51 </td>
<td class='confluenceTd'>   159 </td>
<td class='confluenceTd'>        33 </td>
<td class='confluenceTd'>       38 </td>
<td class='confluenceTd'>    65 </td>
<td class='confluenceTd'>   140 </td>
</tr>
<tr>
<td class='confluenceTd'> Open Unassigned </td>
<td class='confluenceTd'>         6 </td>
<td class='confluenceTd'>       13 </td>
<td class='confluenceTd'>   149 </td>
<td class='confluenceTd'>   208 </td>
<td class='confluenceTd'>         6 </td>
<td class='confluenceTd'>       46 </td>
<td class='confluenceTd'>   120 </td>
<td class='confluenceTd'>   226 </td>
</tr>
<tr>
<th class='confluenceTh'>Open Total      </th>
<td class='confluenceTd'>        24 </td>
<td class='confluenceTd'>       68 </td>
<td class='confluenceTd'>   239 </td>
<td class='confluenceTd'>   392 </td>
<td class='confluenceTd'>        30 </td>
<td class='confluenceTd'>       84 </td>
<td class='confluenceTd'>   213 </td>
<td class='confluenceTd'>   388 </td>
</tr>
</tbody></table>
</div>


<p>The status for features or improvement is depicted in table below</p>

<div class='table-wrap'>
<table class='confluenceTable'><tbody>
<tr>
<th class='confluenceTh'>New Features / Improvements </th>
<th class='confluenceTh'>Today     </th>
<th class='confluenceTh'>Last Week </th>
</tr>
<tr>
<td class='confluenceTd'> Closed                      </td>
<td class='confluenceTd'>        13 </td>
<td class='confluenceTd'>        12 </td>
</tr>
<tr>
<td class='confluenceTd'> Resolved                    </td>
<td class='confluenceTd'>        60 </td>
<td class='confluenceTd'>        59 </td>
</tr>
<tr>
<td class='confluenceTd'> In Progress                 </td>
<td class='confluenceTd'>         9 </td>
<td class='confluenceTd'>        10 </td>
</tr>
<tr>
<td class='confluenceTd'> Reopened                    </td>
<td class='confluenceTd'>         2 </td>
<td class='confluenceTd'>         2 </td>
</tr>
<tr>
<td class='confluenceTd'> Ready To Review             </td>
<td class='confluenceTd'>         0 </td>
<td class='confluenceTd'>         0 </td>
</tr>
<tr>
<td class='confluenceTd'> Open                        </td>
<td class='confluenceTd'>        18 </td>
<td class='confluenceTd'>        19 </td>
</tr>
<tr>
<th class='confluenceTh'>Total                       </th>
<td class='confluenceTd'>       102 </td>
<td class='confluenceTd'>       102 </td>
</tr>
</tbody></table>
</div>
</blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-4.1.1ReleaseCandidateVoteisNowOpen"></a>4.1.1 Release Candidate Vote is Now Open</h5>

<p>4.1.1 patch release has been in the works for a while now and has quite a few fixes in it since the release of 4.1.0 on June 5th. The <a href="https://dist.apache.org/repos/dist/dev/cloudstack/4.1.1/" class="external-link" rel="nofollow">release candidate</a> was cut on Monday and the <a href="http://markmail.org/message/36burcs46xcbglji" class="external-link" rel="nofollow">Vote is now open</a> until Saturday. Please provide your testing results and vote.</p>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-BylawschangeforCommitterandPMCMemberNomination"></a>Bylaws change for Committer and PMC Member Nomination</h5>

<p>To make the process of allowing for nomination of Committers and PMC members into the CloudStack community, Chip Childers has started a discussion on changing the bylaws to change the voting process of the PMC Group from a lazy consensus to a majority process. <a href="http://markmail.org/message/a635t4mcty5edbl5" class="external-link" rel="nofollow">Join in the discussion</a>.</p>

<blockquote>
<p>As it stands now, we currently use a "Lazy Consensus" model (yes Noah, I know we didn't define that term correctly as of now, but I think that's a different discussion). We currently have that term defined as:</p>

<p>Lazy Consensus - Lazy consensus requires 3 binding +1 votes and no binding -1 votes.</p>

<p>I'd like to propose that we change the PMC and Committer voting rule to use the Lazy 2/3 Majority approach defined as:</p>

<p>Lazy 2/3 majority votes requires at least 3 binding votes and twice as many binding +1 votes as binding -1 votes. <br/>
...</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-PossiblyEndingtheIRCChats"></a>Possibly Ending the IRC Chats</h5>

<p>After low attendance in weekly IRC chats, Joe Brockmeier has raised the question about the <a href="http://markmail.org/message/n7ex7rdvfguhwylr" class="external-link" rel="nofollow">need for regular IRC chats</a>. IRC chats have been in place for a long time with the community. Make sure to stay involved with the discussion and let your voice be heard.</p>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-HowYourCodingMayAffectOthers"></a>How Your Coding May Affect Others</h5>

<p>Brian Federle noticed when working on the GUI code in Master <a href="http://markmail.org/message/ki42u4n6i7mbjaj4" class="external-link" rel="nofollow">recently that the tab style had changed</a>. This started a large rebase and merge of the UI code of other developers in the community. While the original commit had the best intention and was committed correctly for 4.3, the review and commit were done within a short time frame and didn't give the community much time to see it and understand the impact. Make sure to communicate and be aware of what impacts your code might have on others working on the same objects as you. </p>

<p>Chip Childers pointed out:</p>
<blockquote>
<p>...that sweeping changes like this (or architectural changes as well) are best done <b>early</b> in a release cycle. The challenge we've run into here is that while 4.2 work is proceeding, master is open for 4.3 changes (and there is a preference that if something big is going to come in, nows the time to do it).</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-NewComponentsinJIRA"></a>New Components in JIRA</h5>

<p>To help clarify better on what a bug is all about, and to get it to the right visibility on it, <a href="http://markmail.org/message/tc74y3fqs27tu6uy" class="external-link" rel="nofollow">Prasanna Santhanam and Animesh Chaturvedi</a> have added several new component fields in JIRA to help with bug distinction. The new components:</p>
<ul>
	<li>Infra - Infrastructure managed by the project - CloudStack - (jenkins, builds, repos, mirrors)</li>
	<li>SystemVM - SystemVM appliances, images, scripts, ssvm, cpvm</li>
	<li>Virtual Router - Anything related to the Virtual Router appliance</li>
	<li>XCP - Xen Cloud Platform</li>
	<li>UCS - Cisco UCS System</li>
	<li>Upgrade - Upgrade scripts, process, database</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-24July2013-CloudStackPlanet"></a>CloudStack Planet</h3>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-DoYouHaveOneoftheCoolestCloudStackClouds%3F"></a>Do You Have One of the Coolest CloudStack Clouds?</h5>

<p>Gregg Watkins is doing a video on the Coolest Clouds and is <a href="http://markmail.org/message/7grezc77jioti5di" class="external-link" rel="nofollow">looking for participants</a>. Gregg has already spent most of the summer working with the project putting together videos on CloudStack, the CloudStack Collaboration Conference and is now looking to show case some of the best clouds in the world ran on Apache CloudStack. If you would like to participate please reach out to Gregg on the Dev or User lists.</p>

<blockquote>
<p>The last video I plan on making this summer is a short video featuring some<br/>
of the coolest clouds and I am hoping you all will help me since we are all<br/>
so spread out.</p>

<p>Here is what I am needing to make this project a success:   A webcam<br/>
interview of you (questions below) and screen casts/capture of your cloud<br/>
in action.</p>

<p>Because my fellowship ends August 9th I will need this information by no<br/>
later than the <b>29th of July.</b>  </p>

<p>While I appreciate how busy all of you are, I am hoping you can carve a few<br/>
moments out of a day this week and complete the questions and capture some<br/>
of your cloud.  If you need any assistance in either capturing video<br/>
interviews or screens please let me know and I can help you.</p>

<p>This project is a great way to get your project some more visibility and I<br/>
thank you in advance for any help you can provide.  Please let me know if<br/>
you have any questions or concerns.<br/>
...</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-24July2013-ApacheWhirrandCloudStackforBigDataintheClouds"></a>Apache Whirr and CloudStack for Big Data in the Clouds</h5>

<p>Sebastien Goasguen has a <a href="http://sebgoa.blogspot.com/2013/07/apache-whirr-and-cloudstack-for-big.html" class="external-link" rel="nofollow">tutorial on his blog about using Apache Whirr with CloudStack</a>. "In this tutorial we introduce Apache Whirr, an application that can be used to define, provision and configure big data solutions on CloudStack based clouds. Whirr automatically starts instances in the cloud and boostrapps hadoop on them. It can also add packages such as Hive, Hbase and Yarn for map-reduce jobs."</p>

<h3><a name="ApacheCloudStackWeeklyNews-24July2013-Events"></a>Events</h3>

<ul>
	<li><b><a href="http://www.oscon.com/oscon2013" class="external-link" rel="nofollow">O'Reilly's Open Source Convention (OSCON)</a></b> is being held July 22-26 at Oregon Convention Center, Portland Oregon. There will be several CloudStack talks.</li>
	<li><b><a href="https://cephdayny.eventbrite.com/" class="external-link" rel="nofollow">Ceph Day NYC</a></b> will feature David Nalley speaking on CloudStack. Come learn out CloudStack and Ceph on August 1.</li>
	<li><b>CloudStack Study Meeting</b> Suzuki-san will be organizing a study meeting in Osaka on August 2.</li>
	<li><b><a href="http://www.ospn.jp/osc2012-kyoto/" class="external-link" rel="nofollow">OSC Kyoto</a></b> The <a href="http://cloudstack.jp/" class="external-link" rel="nofollow">Japanese CloudStack User Group (JCSUG)</a> will be presenting at the Open Source Conference in Kyoto on August 2-3.</li>
	<li><b><a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/117379992/" class="external-link" rel="nofollow">CloudStack Meetup</a></b> at SAP Labs in Palo Alto, CA on August 7th from 6:00 to 9:00 p.m. Be sure to RSVP on Meetup.com!</li>
	<li><b><a href="http://lanyrd.com/2013/build-a-cloud-day-london/" class="external-link" rel="nofollow">Build a Cloud Day - London</a></b> being hosted by Sebastien Goasguen, being held on September 5.</li>
	<li><b><a href="http://www.cloudplugfest.org/about-cloud-plugfests" class="external-link" rel="nofollow">Cloud Plug Fest</a></b> offers a variety of Tutorials and sessions, including OpenStack and CloudStack, in Madrid, Spain September 16-20.</li>
	<li><b><a href="http://lanyrd.com/2013/build-a-cloud-day-geneva-switzerland/" class="external-link" rel="nofollow">Build a Cloud Day - Switzerland</a></b> has Sebastien Goasguen teaching you and helping you build clouds across Europe on September 26.</li>
	<li><b><a href="http://lanyrd.com/2013/cloudstack-collaboration-conference/" class="external-link" rel="nofollow">CloudStack Collaboration Conference</a></b> planning is well underway for Amsterdam, Netherlands. Put it on your calendar now for November 20-22.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-24July2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<p>No new committers or PMC members have been announced in the last newsletter period. </p>
