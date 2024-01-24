---
layout: post
title: Apache CloudStack Weekly News - 1 July 2013

slug: apache_cloudstack_weekly_news_12
---
<p><a href="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"><img src="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true" alt="square-cloudmonkey.png" align="left" vspace="5" hspace="5"></img></a>We are half way through the year and a lot of work is done, and lot more is yet to be done. This week we look back at some of the <a href="http://cloudstackcollab.org/" class="external-link" rel="nofollow">CloudStack Collaboration Conference</a>, work continues on 4.1.1 and 4.2.0, and we have some interesting discussions on how we should release the CloudMonkey and Marvin tools used with CloudStack. There's a by-laws vote underway to look at how and where we decide non-technical issues, and some discussion on the best way to discuss and do code reviews.</p>

<h3><a name="ApacheCloudStackWeeklyNews-1July2013-NewsMovingtoWednesdays"></a>News Moving to Wednesdays</h3>

<p>To help get information out a little more timely to key discussions and information that is going on in the community we are going to move the publishing of the weekly news to Wednesdays starting July 10th! </p>

<h3><a name="ApacheCloudStackWeeklyNews-1July2013-MajorDiscussions"></a>Major Discussions</h3>

<p>In this section we look at major discussions that have happened on the CloudStack mailing lists. This is by no means a full summary of all discussions on the lists, but we try to hit the highlights that are relevant to the larger CloudStack community. </p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-FeatureFreezeinAffectforthe4.2Release"></a>Feature Freeze in Affect for the 4.2 Release</h5>

<p>Code Freeze in now in effect starting 6/28 and the 4.2 branch was <a href="http://markmail.org/message/5esar2muu54nutqj" class="external-link" rel="nofollow">created on 6/29</a>. There is currently no motion in the community to extend the freeze date, and Animesh Chaturvedi is keep the release on schedule. If the feature or merge you are working on was unable to make it in, please start to move it to your JIRA tickets and additional documentation to 4.3 scheduled to release sometime in December. </p>

<p>Currently Animesh is handling the release management for 4.2 has listed out our current state. He put together an e-mail on the current <a href="http://markmail.org/message/y47wm6t5q72ns43l" class="external-link" rel="nofollow">status of the release</a>. If we don't quickly get these resolved further delays in the release and jeopardize future releases.</p>

<blockquote>
<p>We are now just two days away from feature freeze, but still there are many open tickets. If the feature or improvement is unlikely to be wrapped up by 6/28 it should be moved out of 4.2</p>

<p>As for bugs here is a summary for this week:</p>
<div class='table-wrap'>
<table class='confluenceTable'><tbody>
<tr>
<th class='confluenceTh'>Bugs</th>
<th class='confluenceTh'>This Week </th>
<td class='confluenceTd'>&nbsp;</td>
<td class='confluenceTd'>&nbsp;</td>
<td class='confluenceTd'>&nbsp;</td>
<th class='confluenceTh'>Two Week Ago    </th>
<td class='confluenceTd'>&nbsp;</td>
<td class='confluenceTd'>&nbsp;</td>
<td class='confluenceTd'>&nbsp;</td>
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
<td class='confluenceTd'> Incoming        </td>
<td class='confluenceTd'>         4 </td>
<td class='confluenceTd'>       19 </td>
<td class='confluenceTd'>    37 </td>
<td class='confluenceTd'>     68</td>
<td class='confluenceTd'>         8 </td>
<td class='confluenceTd'>       20 </td>
<td class='confluenceTd'>    29 </td>
<td class='confluenceTd'>    60 </td>
</tr>
<tr>
<td class='confluenceTd'> Outgoing        </td>
<td class='confluenceTd'>        19 </td>
<td class='confluenceTd'>       42 </td>
<td class='confluenceTd'>    34 </td>
<td class='confluenceTd'>   102 </td>
<td class='confluenceTd'>        18 </td>
<td class='confluenceTd'>       10 </td>
<td class='confluenceTd'>    42 </td>
<td class='confluenceTd'>    76 </td>
</tr>
<tr>
<td class='confluenceTd'> Open Unassigned </td>
<td class='confluenceTd'>         4 </td>
<td class='confluenceTd'>       27 </td>
<td class='confluenceTd'>   116 </td>
<td class='confluenceTd'>   184 </td>
<td class='confluenceTd'>         7 </td>
<td class='confluenceTd'>       35 </td>
<td class='confluenceTd'>    93 </td>
<td class='confluenceTd'>   166 </td>
</tr>
<tr>
<td class='confluenceTd'> Open Total      </td>
<td class='confluenceTd'>        17 </td>
<td class='confluenceTd'>       62 </td>
<td class='confluenceTd'>   223 </td>
<td class='confluenceTd'>   365 </td>
<td class='confluenceTd'>        19 </td>
<td class='confluenceTd'>       74 </td>
<td class='confluenceTd'>   192 </td>
<td class='confluenceTd'>   345 </td>
</tr>
</tbody></table>
</div>
</blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-Progresson4.1.1Release"></a>Progress on 4.1.1 Release</h5>

<p>With 4.1 now released we are already beginning work on the 4.1.1 patch update. Ilya Musayev is the release manager for the 4.1.x branch, and has <a href="http://markmail.org/message/6ionwrcqlh4pi2j4" class="external-link" rel="nofollow">asked</a> work all merges to be completed. Once that is done, he will call for a VOTE.</p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-LargeMerge%2FReleaseWork"></a>Large Merge / Release Work</h5>

<p>As we seen in the past and now again in 4.2, it's important to focus on merging your features early and often. By breaking up large merge and code review requests it is possible to help keep releases on schedule, get features in before the freeze and avoid Veto votes. Alex Huang and Kelven Yang worked really hard on a new and large VMSync feature that many users need. Because it came in so close to freeze and was a large merge request with less than a week before freeze it immediately received Veto votes blocking the merge. Even with the help of several other committers the review couldn't be done in a timely fashion and miss the 4.2 cutoff.</p>

<p>When late requests come in like this it also puts undo stress on the testing of the release as well. Read through the <a href="http://markmail.org/message/zgwtc5nzm3bpmic2" class="external-link" rel="nofollow">merge thread</a> to follow the discussion on how we can improve this in the future.</p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-BVTAutomationTestingBreaks"></a>BVT Automation Testing Breaks</h5>

<p>After complaints that the BVT environment was broken, Alex Huang did some investigating to identify the root cause and raise a suggest on how BVT testing should be <a href="http://markmail.org/message/si6rt2mkc7dt4krw" class="external-link" rel="nofollow">dealt with in the future</a>. </p>

<blockquote>
<p>After Dave's complain in the vmsync <a href="/confluence/pages/createpage.action?spaceKey=CLOUDSTACK&amp;title=MERGE&amp;linkCreation=true&amp;fromPageId=31825135" class="createlink">MERGE</a> thread about BVT in horrible shape on master, I went around to figure out what exactly happened.  The best I can figure is that after a certain merge (I will leave out which merge as that's not important), BVT no longer runs automatically.  It was promised to be fixed and there are people who are actively fixing it but it's been in this way for about two weeks.  People running BVTs are working around the problem but it's not automated anymore and so it's no longer running on master.  I understand people are nice and tried to be accommodating to other people by working around the problem but sometimes we just have to be an arse.  So let me be that arse...</p>

<p>New Rule....<br/>
If BVT or automated regression tests break on master or any release branch, we revert all commits that broke it.  It doesn't matter if they promise to fix it within the next hour.  If it's broken, the release manager will revert the commits and developers must resubmit.  It sounds mean but it's the only way this problem can be fixed.  </p>

<p>To avoid having a bunch of reverts and resubmits, the developers should be able to request that BVT run on their branch and don't merge until BVT on their branch is at 100%.  We will work on figuring out how to do that.</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-CloudMonkeyandPyPIReleases"></a>CloudMonkey and PyPI Releases</h5>

<p>On June 9th, Rohit Yadav asked about a problem with the 4.1.0-0 CloudMonkey release on PyPI lacking the fail safe API cache. Starting a discussion about the future of how to treat <a href="http://markmail.org/message/vq3sqf7o3nckdy5p" class="external-link" rel="nofollow">CloudMonkey and Marvin</a>.</p>

<p><b>Follow-up</b> - Rohit and David Nalley have since moved CloudStack CloudMonkey out to its own Git Repository and version based off the continuing conversation through last week. No decisions have been made yet in regards to Marvin and if community members have an opinion are encouraged to join the <a href="http://markmail.org/message/vq3sqf7o3nckdy5p" class="external-link" rel="nofollow">discussion</a>. </p>

<p>A Vote on final adoption of the move of CloudMonkey is now underway. Please join in the <a href="http://markmail.org/message/gbnlv6i3gltghmdx" class="external-link" rel="nofollow">Vote thread.</a></p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-JavaandTomcatversionupgrades"></a>Java and Tomcat version upgrades</h5>

<p>As we continue to work on improving CloudStack, there are additional upgrades to the tools that we use to bring CloudStack to life. Hugo Trippaers started the <a href="http://markmail.org/message/yuonvnahlzx5ga6k" class="external-link" rel="nofollow">discussion</a> on support for Java 1.7 and Tomcat 7. Please join in the discussion as it will have affect development of future versions of CloudStack.</p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-Votestartstodeterminewherenontechnicalmattersaredecidedon"></a>Vote starts to determine where non-technical matters are decided on</h5>

<p>In previous discussion about publishing books about CloudStack on the <a href="http://CloudStack.Apache.Org" class="external-link" rel="nofollow">CloudStack.Apache.Org</a> page, Sebastien Goasguen noted that there's a question about voting on a list that isn't dev@:</p>

<blockquote>
<p>...<br/>
Our bylaws (1) do not cover votes on non-technical matters, so while we have<br/>
lazy majority on this vote it seems that this situation is not covered by the<br/>
bylaws. Moreover section 3.1.1 of bylaws says that decisions on the project<br/>
happen on dev@, so it seems that votes even on marketing@ are not allowed<br/>
(unsure about this).<br/>
... </p></blockquote>

<p>Based off this, Noah Slater has <a href="http://markmail.org/message/5i7kp6pnmdfv3q5r" class="external-link" rel="nofollow">proposed new language</a> to the by-laws to help improve our ability to manage such decisions.</p>

<blockquote>
<p>...<br/>
Summary of changes:</p>

<ul>
	<li>Addition of "3.4.2. Non-Technical Decisions" section. This specifies that<br/>
non-technical decisions can be made on any appropriate list (i.e. marketing@)<br/>
and also allows us to vote on them with lazy 2/3 majority.</li>
	<li>Changed "The vote must occur on a project development mailing list." to<br/>
"The vote must occur on the project development mailing list." in several<br/>
places. This makes it explicit that these decisions must be made on<br/>
the dev@list.</li>
	<li>Minor rewordings, typographical changes, corrections, section<br/>
renumbering, etc.<br/>
...</li>
</ul>
</blockquote>

<h3><a name="ApacheCloudStackWeeklyNews-1July2013-CloudStackPlanet"></a>CloudStack Planet</h3>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-GoogleSummerofCodeUpdate"></a>Google Summer of Code Update</h5>

<ul>
	<li><b><a href="http://www.google-melange.com/gsoc/homepage/google/gsoc2013" class="external-link" rel="nofollow">Google Summer of Code (GSOC)</a></b> has been headed up by Sebastien Goasguen, bringing 5 young developers and their projects to the CloudStack community.The <a href="http://markmail.org/message/dczqcoortvic7cpc?q" class="external-link" rel="nofollow">Community Bonding period</a> was to help introduce them to the community and their ideas and help them get acquainted with procedures and systems.</li>
</ul>


<p>We now enter the <a href="http://markmail.org/search/?q" class="external-link" rel="nofollow">work period</a> and get going on these proposals. Please help them as they try to help improve Apache CloudStack.</p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-CloudStackCommunitySurveyUnderway"></a>CloudStack Community Survey Underway</h5>

<p>Please let your voice and your organization be heard in this short survey. We would like to have both users of the Apache CloudStack source and Commercial derivatives, "We will be using the data in <b>aggregate</b> to get to know more about how it's being deployed out there." Chip Childers <a href="http://markmail.org/message/7s3ev7leok7uxucb?q" class="external-link" rel="nofollow">commented</a>. Click <a href="https://www.surveymonkey.com/s/28BV97D" class="external-link" rel="nofollow">Here</a> to take the short survey.</p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-CloudStackCommunityVotestoPublishCloudStackBookList"></a>CloudStack Community Votes to Publish CloudStack Book List</h5>

<p>In a heavily <a href="http://markmail.org/message/jwoaknt7mdveklxp?q" class="external-link" rel="nofollow">discussed</a> topic throughout the community to allow the publishing of outside books about CloudStack on the CloudStack.Apache.Org website or wiki, it was finally voted on and decided to allow outside publications to be published. Right now Sebastien Goasguen has setup a <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Books" class="external-link" rel="nofollow">wiki page</a> and will work on where to have the permanent placement for this page. </p>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-AVideographerisWorkingwithCloudStacktoCreateVideosfortheProject"></a>A Videographer is Working with CloudStack to Create Videos for the Project</h5>

<p>Gregg Witkin and Jessica Tomechak are <a href="http://markmail.org/thread/rs7paw6wfs4kktwh" class="external-link" rel="nofollow">working together on videos this summer</a>, including one that aims to show some of the most interesting real-world applications of CloudStack. They're asking for participation on this video, and suggestions for other videos you'd like to see. Check out these videos Gregg did with CloudStack just last year. <a href="http://www.youtube.com/watch?v=oJ4b8HFmFTc" class="external-link" rel="nofollow">Link 1</a>, <a href="http://www.youtube.com/watch?v=KATuxn5pimY" class="external-link" rel="nofollow">Link 2</a></p>

<h3><a name="ApacheCloudStackWeeklyNews-1July2013-Events"></a>Events</h3>

<h5><a name="ApacheCloudStackWeeklyNews-1July2013-CloudStackCollaborationConference2013"></a>CloudStack Collaboration Conference 2013</h5>

<p>If you're not able to join, all sessions are being recorded and will be available after the conference for viewing.</p>

<ul>
	<li>The Hack Day was a great success with several tables opening up and a lot of conversations flowing. There were large conversations in storage, mindshare/marketing, documentation and several others. Each group is encouraged to share their collaborations with the rest of the community.</li>
	<li><a href="http://www.cloudstackcollab.org/keynotes/keynote2/" class="external-link" rel="nofollow">Chip Childers</a> kicked off the conference on Monday, June 24th, 2013 with a state of a strong and busy community. He talked about how much we have accomplished in the time that we have been in the Apache Foundation and the great work that is upcoming. Chip's presentation is up on <a href="http://www.slideshare.net/chipchilders/cloudstack-collab-2013-keynote" class="external-link" rel="nofollow">slideshare</a></li>
	<li><a href="http://www.cloudstackcollab.org/keynote1/" class="external-link" rel="nofollow">Gene Kim's</a> keynote gave us an insight into Devops and the ability of IT to work in a different way and more function ways.Aaron Delp wrote a blog on the opening keynotes. Read it <a href="http://itknowledgeexchange.techtarget.com/open-clouds/cloudstack-opening-keynote-live-blog/" class="external-link" rel="nofollow">here</a></li>
	<li>Adrian Cockcroft’s delivered a great keynote closing the conference talking about <a href="http://www.cloudstackcollab.org/keynotes/keynote3/" class="external-link" rel="nofollow">“Dystopia as a Service”</a> on Tuesday.</li>
	<li>There were so many amazing presentations! They were all recorded and will be available shortly on the BuildACloud.org website. We will let you know when it's available.</li>
	<li>The tweeters were busy during the conference! Check out the <a href="https://twitter.com/search/%23CCC13" class="external-link" rel="nofollow">#CCC13 Tag</a> for a lot of info from the conference.</li>
	<li><b>Want to win $10,000?</b> That's right, Citrix has offered a $10,000 bounty for the first person to get Netflix OSS Tool to work on CloudStack! <a href="https://twitter.com/mrhinkle" class="external-link" rel="nofollow">Mark Hinkle</a> made the announcement during the closing keynote.</li>
	<li>Here's some links to many of the pictures taken: <a href="https://www.icloud.com/photostream/#A2532OdWwFsrj" class="external-link" rel="nofollow">link</a>, <a href="http://www.flickr.com/photos/encoreopus/sets/72157634290835546/" class="external-link" rel="nofollow">link</a>, <a href="http://www.flickr.com/photos/encoreopus/sets/72157634304416585/" class="external-link" rel="nofollow">link</a>, <a href="http://www.flickr.com/groups/2277952@N22/" class="external-link" rel="nofollow">link</a>, <a href="http://share.shutterfly.com/action/welcome?sid=0QcMmrdy3bNmHc" class="external-link" rel="nofollow">link</a></li>
</ul>


<h5><a name="ApacheCloudStackWeeklyNews-1July2013-MoreEvents"></a>More Events</h5>

<ul>
	<li><b><a href="http://www.eventbrite.com/event/6727182183" class="external-link" rel="nofollow">CloudStack European User Group meeting</a></b> being held in London, UK on July 4.</li>
	<li><b><a href="http://www.oscon.com/oscon2013" class="external-link" rel="nofollow">O'Reilly's Open Source Convention (OSCON)</a></b> is being held July 22-26 at Oregon Convention Center, Portland Oregon. There will be several CloudStack talks.</li>
	<li><b>CloudStack Study Meeting</b> Suzuki-san will be organizing a study meeting in Osaka on August 2.</li>
	<li>*<a href="http://www.ospn.jp/osc2012-kyoto/" class="external-link" rel="nofollow">OSC Kyoto</a> The <a href="http://cloudstack.jp/" class="external-link" rel="nofollow">Japanese CloudStack User Group (JCSUG)</a> will be presenting at the Open Source Conference in Kyoto on August 2-3.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-1July2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<ul>
	<li>Mike Tutkowski has been invited by the PMC to become a committer and <a href="http://http://markmail.org/message/7bma6ph2r3ijrxuv?q" class="external-link" rel="nofollow">has accepted</a>.</li>
</ul>
