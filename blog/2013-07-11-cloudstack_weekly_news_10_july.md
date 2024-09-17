---
layout: post
title: CloudStack Weekly News - 10 July 2013

slug: cloudstack_weekly_news_10_july
---
<p><a href="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"><img src="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true" alt="square-cloudmonkey.png" align="left" vspace="5" hspace="5"></img></a>The community is busy working on 4.2.0, and there's much to be done before the release is ready. This week, we're taking a look at some of the interesting discussions going on in the community about the next generation of Apache CloudStack, and functionality we can provide, as well as procedural changes that everyone should be aware of. </p>

<h3><a name="ApacheCloudStackWeeklyNews-10July2013-NewsMovingtoWednesdays"></a>News Moving to Wednesdays</h3>

<p>To help get information out a little more timely to key discussions and information that is going on in the community we are going to move the publishing of the weekly news to Wednesdays, starting with this issue on July 10th! If you'd like to help put the news together, please sign up for the marketing@cloudstack.apache.org mailing list and ask how you can get involved!</p>

<h3><a name="ApacheCloudStackWeeklyNews-10July2013-MajorDiscussions"></a>Major Discussions</h3>

<p>In this section we look at major discussions that have happened on the CloudStack mailing lists. This is by no means a full summary of all discussions on the lists, but we try to hit the highlights that are relevant to the larger CloudStack community. </p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-4.2StatusUpdate"></a>4.2 Status Update</h5>

<p>Animesh Chaturvedi is tracking the <a href="http://markmail.org/message/snon6ljkti6fgq4k" class="external-link" rel="nofollow">current status of the release</a>. Testing, bug fix work, and documentation should be targeted to complete by code freeze on 7/28. Release is still on schedule to release by 8/19.</p>

<blockquote>
    <p>We are now just 3 weeks from ACS 4.2 code freeze on 7/29. We have around 400 open defects with 100+ blockers and critical and I expect another 200 new defects to come in. As a community we have been fixing roughly 100 defects per week, in order to clear up our backlog I request you to help out on aggressively fixing the issues. The unassigned issue list is available at <a href="http://s.apache.org/BlH/" class="external-link" rel="nofollow">http://s.apache.org/BlH/</a>. When you fix a bug in 4.2 please make sure it is also fixed in master.</p>

    <p>Given the debate on system template changes in last few days of 4.1 requiring big testing effort and potential regression, I would like to see that as community we lock down system templates for 4.2 pretty soon. If any changes are needed we should call it out now and get them resolved.</p>

    <p>As for bugs here is a summary for this week:</p>
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
		    <td class='confluenceTd'>Blocker </td>
		    <td class='confluenceTd'>Critical</td>
		    <td class='confluenceTd'>Major </td>
		    <td class='confluenceTd'>Total </td>
		    <td class='confluenceTd'>Blocker </td>
		    <td class='confluenceTd'>Critical </td>
		    <td class='confluenceTd'>Major </td>
		    <td class='confluenceTd'>Total </td>
		</tr>
		<tr>
		    <td class='confluenceTd'>Incoming</td>
		    <td class='confluenceTd'>8 </td>
		    <td class='confluenceTd'>10 </td>
		    <td class='confluenceTd'>28 </td>
		    <td class='confluenceTd'>50 </td>
		    <td class='confluenceTd'>11 </td>
		    <td class='confluenceTd'>34 </td>
		    <td class='confluenceTd'>24 </td>
		    <td class='confluenceTd'>72 </td>
		</tr>
		<tr>
		    <td class='confluenceTd'>Outgoing</td>
		    <td class='confluenceTd'>26 </td>
		    <td class='confluenceTd'>23 </td>
		    <td class='confluenceTd'>34 </td>
		    <td class='confluenceTd'>86 </td>
		    <td class='confluenceTd'>26 </td>
		    <td class='confluenceTd'>30 </td>
		    <td class='confluenceTd'>40 </td>
		    <td class='confluenceTd'>100 </td>
		</tr>
		<tr>
		    <td class='confluenceTd'>Open Unassigned </td>
		    <td class='confluenceTd'>7 </td>
		    <td class='confluenceTd'>49 </td>
		    <td class='confluenceTd'>129 </td>
		    <td class='confluenceTd'>222 </td>
		    <td class='confluenceTd'>6 </td>
		    <td class='confluenceTd'>49 </td>
		    <td class='confluenceTd'>119 </td>
		    <td class='confluenceTd'>184 </td>
		</tr>
		<tr>
		    <th class='confluenceTh'>Open Total</th>
		    <td class='confluenceTd'>25 </td>
		    <td class='confluenceTd'>84 </td>
		    <td class='confluenceTd'>232 </td>
		    <td class='confluenceTd'>403 </td>
		    <td class='confluenceTd'>25 </td>
		    <td class='confluenceTd'>80 </td>
		    <td class='confluenceTd'>218 </td>
		    <td class='confluenceTd'>385 </td>
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
		    <td class='confluenceTd'>Closed</td>
		    <td class='confluenceTd'>10</td>
		    <td class='confluenceTd'>10</td>
		</tr>
		<tr>
		    <td class='confluenceTd'>Resolved</td>
		    <td class='confluenceTd'>59</td>
		    <td class='confluenceTd'>57</td>
		</tr>
		<tr>
		    <td class='confluenceTd'>In Progress</td>
		    <td class='confluenceTd'>11</td>
		    <td class='confluenceTd'>13</td>
		</tr>
		<tr>
		    <td class='confluenceTd'>Reopened</td>
		    <td class='confluenceTd'>1</td>
		    <td class='confluenceTd'>1</td>
		</tr>
		<tr>
		    <td class='confluenceTd'>Ready To Review</td>
		    <td class='confluenceTd'>1</td>
		    <td class='confluenceTd'>1</td>
		</tr>
		<tr>
		    <td class='confluenceTd'>Open</td>
		    <td class='confluenceTd'>20</td>
		    <td class='confluenceTd'>20</td>
		</tr>
		<tr>
		    <th class='confluenceTh'>Total</th>
		    <td class='confluenceTd'>102</td>
		    <td class='confluenceTd'>102</td>
		</tr>
	</tbody></table>
    </div>
</blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-SwiftSupportin4.2"></a>Swift Support in 4.2</h5>

<p>On July 3rd, Edison Su reported that <a href="http://markmail.org/message/aitv5264swzwpedh" class="external-link" rel="nofollow">support for Swift is broken due to the object store refactor</a>. There's been a fair amount of discussion on how an extant feature could be broken without being exposed via testing, and what should be done about it at this stage. </p>

<p>David Nalley says that "unplanned/unannounced deprecation of a feature is a blocker IMO. It engenders a bad relationship with our users, and strands them on previous versions with no good migration/upgrade path." Chip Childers <a href="http://markmail.org/message/jgci4s7afqi6ix4u" class="external-link" rel="nofollow">says that</a> "I believe that this was an honest mistake, but we need to figure out what to do. I'm -1 on us saying 'we'll drop Swift support'. If necessary, I'd say that we need to roll back the object-store branch merge... I don't want to see that happen, though. That's why I'm asking about the effort to fix it."</p>

<p>Chip <a href="http://markmail.org/message/r3rqsxnrsvjm7gwx" class="external-link" rel="nofollow">opened CLOUDSTACK-3400</a> as a blocker against 4.2 until Swift support is fixed. Discussion about the bug continues. </p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-Closing4.2ResolvedDefects"></a>Closing 4.2 Resolved Defects</h5>

<p>Sudha Ponnaganti <a href="http://markmail.org/message/5mwy2yuc5bvcg2qz" class="external-link" rel="nofollow">posted a list of 543 defects</a> that are in resolved state that need to re-validated, reopened or closed. Please look through this list and check to see if you're assigned to any of these defects. </p>

<blockquote>
    <p>There are 543 defects in Resolved state and not closed. Please make sure that you validate and close the defect if you are satisfied with the fix. If there are issues with the fix, pl reopen the defect. Pl note that these need to be validated in 4.2 branch as all are fixed in 4.2 ( should be applicable for master as well). You can prioritize these based on the blocker, critical, major etc.  As team is already done with the features, this is good time to close these...</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-CodingConventionReminder"></a>Coding Convention Reminder</h5>

<p>As open source projects mature and add new participants, it's occasionally necessary to send a gentle reminder of accepted conventions in the community. For example, Alex Huang <a href="http://markmail.org/message/z2hzz7efujgmhfnh" class="external-link" rel="nofollow">opened a discussion about the CloudStack coding conventions</a> on July 2nd, saying "Our <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Coding+conventions" class="external-link" rel="nofollow">coding conventions</a> have been going all over the place recently.  Please take a look."</p>

<p>He also proposed extending the 120 column limit to 180 columns. </p>

<blockquote>
    <p>I recently was reading the following code.  If it followed even our current coding conventions, this would have been 11 lines but it ends up to be 23 lines,<br/>
    more than doubled.  The whole file was like this.  Just thinking about all the extra scrolling I have to do makes my cts act up.  We are in the 21st century<br/>
    and using wide screen lcd monitors.  Let's not format our code to fit 80 column amber text screens please!</p>

    <p>What's worse is I've found that some people are actively breaking existing source code to 80 columns, causing a bunch of unnecessary merge activities. </p>
</blockquote>

<p>For those folks who use Eclipse <a href="http://markmail.org/message/frkn3pm7tc74yqvk" class="external-link" rel="nofollow">Alex has checked in his Eclipse profile to tools/eclipse/eclipse.epf</a>. It will help with a number of issues, such as removing trailing white space, reformats edited portions of the file using the current formatting rules, and more. </p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-ChangingBugSeverity"></a>Changing Bug Severity</h5>

<p>Prasanna Santhanam <a href="http://markmail.org/message/lllacr6tb64yqxly" class="external-link" rel="nofollow">noted that some bugs have changed severity without any reason given</a>. Any time a change of this sort of significance is made in Jira, some reason should be given so that other users can have some idea why the change was made without having to track down the person responsible and ask. </p>

<p>Prasanna asks:</p>

<blockquote>
    <p>Can the bug reporters please mention the<br/>
    reason as to how something :</p>

    <p>a) blocks movement on the feature/installation/cloudstack in general<br/>
    b) affects deployment and does not have workarounds via the API<br/>
    c) troubleshooting done with respect to a and b.</p>

    <p>Here's some light reading on how to have bugs resolved faster:
    <a href="http://www.chiark.greenend.org.uk/~sgtatham/bugs.html" class="external-link" rel="nofollow">http://www.chiark.greenend.org.uk/~sgtatham/bugs.html</a></p>
</blockquote>

<p>Chip replied: </p>

<blockquote>
    <p>+1 with an added "d)":</p>

    <p>d) needs to be considered a release blocker for a legal, security or<br/>
    trademark reason</p>
</blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-Namespace"></a>Name space </h5>

<p>Dharmesh Kakadia one of our Google Summer of Code participants has <a href="http://markmail.org/message/dzixkixurzlskqik" class="external-link" rel="nofollow">started a discussion</a> on changing the future namespace convention for Apache CloudStack. The current namespace has been in place since the original Cloud.com implementation. As Dharmesh states, this is a big change, please join the discussion on how we can make this a successful switchover.</p>

<blockquote>
    <p>Since the CloudStack project has moved to ASF, the suggestion is to move from com.cloud packages to org.apache java packages.(<a href="https://issues.apache.org/jira/browse/CLOUDSTACK-212" class="external-link" rel="nofollow">https://issues.apache.org/jira/browse/CLOUDSTACK-212</a>)</p>

    <p>As you might be realize, this is pretty big change. And merging this changes with a continuously updating master is non-trivial. So, here is the planned strategy after discussion over IRC. I am starting this thread to inform and know everyone's opinions.</p>

    <p>1. I will be pushing code with new packages on branch "namespacechanges" and will notify on this thread as each refactored module is pushed.</p>

    <p>2. There will be a freeze on master branch commits for some time in which "namespacechanges" will be applied to master. I suggest the date to be 20th July.</p>

    <p>3. All the branch-owner updates their branch for reflect new packages. It was suggested that branch owners can look into the "namespacechanges" branch as it grows and start doing the package changes early, although it depends on branch-owners.</p>
</blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-InDevelopmentReleaseNaming"></a>In-Development Release Naming</h5>

<p>While we are still hard at work at getting 4.2 out the ready and out to the world, John Burwell has <a href="http://markmail.org/message/dxv7aeirjz5itwdp" class="external-link" rel="nofollow">proposed</a> moving to release naming until a release has gotten to feature freeze and it can be judged on what the semantic version number change should be. There's been a lot of discussion on this topic. We would probably look to start this in the next release if it can come to a vote. </p>

<blockquote>
    <p>Since we have adopted Semantic Versioning [<a href="http://semver.org/">1</a>], it seems odd that we designate a release version before the final set of enhancements/fixes has been identified.  For example, the release proceeding 4.2 may contain no backwards compatible API changes to be 4.3.  Conversely, we may decide during the development cycle, as a community, to accept a non-backwards compatible change which would bump the version to 5.0.0.  As such, it is difficult to know in advance what the proper semantic version number will be at when the work is released.  We run the risk of confusing our users if we start calling a pending release say 4.3.0, and accept a change mid-cycle that will bump it to 5.0.0.  To address this potential issue, I proposed that we refer to releases by a codename until feature freeze when we understand the complete scope of change and can apply the correct semantic version number.  I further propose we codename the release directly proceeding 4.2 "Gamma Rays" or "Gamma Rays Gonna Get Ya".  </p>
</blockquote>

<h3><a name="ApacheCloudStackWeeklyNews-10July2013-CloudStackPlanet"></a>CloudStack Planet</h3>

<p>What's going on in the CloudStack community? While all the discussion happens on the mailing lists, we also encourage members of the CloudStack community to share what they're working on their blogs. In this section, you'll find posts by Apache CloudStack community members and interesting news that's relevant to Apache CloudStack.</p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-CloudStackEuropeanUserGroupSummary"></a>CloudStack European User Group Summary</h5>

<p><a href="http://www.shapeblue.com/cloudstack/cloudstack-european-user-group-summary/" class="external-link" rel="nofollow">The ShapeBlue blog has a summary of the most recent meeting</a>, by Giles Sirett.</p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-ApacheWhirrandCloudStackforBigDataintheClouds"></a>Apache Whirr and CloudStack for Big Data in the Clouds</h5>

<p>Sebastien Goasguen has a <a href="http://sebgoa.blogspot.com/2013/07/apache-whirr-and-cloudstack-for-big.html" class="external-link" rel="nofollow">tutorial on his blog about using Apache Whirr with CloudStack</a>. "In this tutorial we introduce Apache Whirr, an application that can be used to define, provision and configure big data solutions on CloudStack based clouds. Whirr automatically starts instances in the cloud and boostrapps hadoop on them. It can also add packages such as Hive, Hbase and Yarn for map-reduce jobs."</p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-InCaseYou%27reNotAlreadySoldonDevOps"></a>In Case You're Not Already Sold on DevOps</h5>

<p>Joe Brockmeier <a href="http://buildacloud.org/blog/272-why-every-company-needs-devops-now.html" class="external-link" rel="nofollow">talks a bit about Gene Kim's keynote at the CloudStack Collaboration Conference</a>, "Why Every Company Needs DevOps Now." </p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-HackathonStorageGroupPutsOutDiscussionandProposal"></a>Hackathon Storage Group Puts Out Discussion and Proposal</h5>

<p>John Burwell who led the storage discussion group during the CloudStack Collaboration Conference Hackathon put out the first group discussion on the future needs and a proposal on how to better define storage for future versions of CloudStack. <a href="http://markmail.org/message/hh5wmffsquqwjx6m" class="external-link" rel="nofollow">Read the and participate</a> in the discussion and weigh-in on the proposal. </p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-InterviewwithTheCloudcast%28.net%29"></a>Interview with The Cloudcast (.net)</h5>

<p>Chip Childers and David Nalley sit down with Aaron Delp for the Cloudcast podcast. <a href="http://www.chipchilders.com/blog/2013/7/2/interview-with-the-cloudcast-net.html" class="external-link" rel="nofollow">Be sure to give it a listen!</a></p>

<h5><a name="ApacheCloudStackWeeklyNews-10July2013-NewVideosComingSoonFromOurSummerVideoProject"></a>New Videos Coming Soon From Our Summer Video Project</h5>

<p>Gregg Witkin and Jessica Tomechak are <a href="http://markmail.org/thread/rs7paw6wfs4kktwh" class="external-link" rel="nofollow">working together on videos this summer</a>. Gregg hit the ground running by bringing his cameras to the Collab Conference June 24-25 in Santa Clara. He is editing that footage into short clips to help promote the November CloudStack Collaboration Conference in Amsterdam.</p>

<p>These short videos will be posted as soon as the conference organizers approve them. Meanwhile, check out these videos Gregg did with CloudStack just last year. <a href="http://www.youtube.com/watch?v=oJ4b8HFmFTc" class="external-link" rel="nofollow">Link 1</a>, <a href="http://www.youtube.com/watch?v=KATuxn5pimY" class="external-link" rel="nofollow">Link 2</a></p>

<h3><a name="ApacheCloudStackWeeklyNews-10July2013-Events"></a>Events</h3>

<ul>
    <li><b><a href="http://www.meetup.com/CloudStack-Hyderabad-Group/events/125208462/" class="external-link" rel="nofollow">Apache CloudStack Meetup in Hyderabad, India</a></b> on July 20th. Location is TBD, but will be published on Meetup.com.</li>
    <li><b><a href="http://www.oscon.com/oscon2013" class="external-link" rel="nofollow">O'Reilly's Open Source Convention (OSCON)</a></b> is being held July 22-26 at Oregon Convention Center, Portland Oregon. There will be several CloudStack talks.</li>
    <li><b>CloudStack Study Meeting</b> Suzuki-san will be organizing a study meeting in Osaka on August 2.</li>
    <li><b><a href="http://www.ospn.jp/osc2012-kyoto/" class="external-link" rel="nofollow">OSC Kyoto</a></b> The <a href="http://cloudstack.jp/" class="external-link" rel="nofollow">Japanese CloudStack User Group (JCSUG)</a> will be presenting at the Open Source Conference in Kyoto on August 2-3.</li>
    <li><b><a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/117379992/" class="external-link" rel="nofollow">CloudStack Meetup</a></b> at SAP Labs in Palo Alto, CA on August 7th from 6:00 to 9:00 p.m. Be sure to RSVP on Meetup.com!</li>
</ul>

<h3><a name="ApacheCloudStackWeeklyNews-10July2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<p>No new committers or PMC members have been announced in the last newsletter period.</p>
