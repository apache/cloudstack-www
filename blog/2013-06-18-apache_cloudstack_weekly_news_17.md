---
layout: post
title: Apache CloudStack Weekly News - 17 June 2013

slug: apache_cloudstack_weekly_news_17
---
<p><a href="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"><img src="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true" alt="square-cloudmonkey.png" align="left" vspace="5" hspace="5"></img></a>It's been another busy week for the Apache CloudStack project. This week we welcome another new committer, work continues on 4.1.1 and 4.2.0, and we have some interesting discussions on how we should release the CloudMonkey and Marvin tools used with CloudStack. We've also seen a few interesting marketing discussions, and the community is gearing up for the second <a href="http://cloudstackcollab.org/" class="external-link" rel="nofollow">CloudStack Collaboration Conference</a> taking place 23 June through 25 June in Santa Clara, CA.</p>

<h3><a name="ApacheCloudStackWeeklyNews-17June2013-MajorDiscussions"></a>Major Discussions</h3>

<p>In this section we look at major discussions that have happened on the CloudStack mailing lists. This is by no means a full summary of all discussions on the lists, but we try to hit the highlights that are relevant to the larger CloudStack community. </p>

<h5><a name="ApacheCloudStackWeeklyNews-17June2013-Progresson4.1.1Release"></a>Progress on 4.1.1 Release</h5>

<p>With 4.1 now released we are already beginning work on the 4.1.1 patch update. Ilya Musayev is release manager for the 4.1.x branch, but Chip Childers <a href="http://markmail.org/message/6ionwrcqlh4pi2j4" class="external-link" rel="nofollow">will handle the 4.1.1 release</a> as Ilya is unavailable during the timeframe we expect to finish 4.1.1 and call for a VOTE.</p>

<h5><a name="ApacheCloudStackWeeklyNews-17June2013-CloudMonkeyandPyPIReleases"></a>CloudMonkey and PyPI Releases</h5>

<p>On June 9th, Rohit Yadav asked about a problem with the 4.1.0-0 CloudMonkey release on PyPI lacking the failsafe API cache:</p>

<blockquote>
<p>When I install it I don't get any api commands. The autodiscovery using sync is useful but only with the ApiDiscovery plugin which works only for 4.2 and later. For 4.1 and below I think we should, in that case, bundle the cache for all the apis. Or maybe<br/>
just oss components/plugins?</p></blockquote>

<p>David replied that "this is exactly why I've been <a href="http://markmail.org/message/wir5vfawex3y22ot" class="external-link" rel="nofollow">suggesting that we break CloudMonkey (and Marvin) out of the main repo</a>" and give them their own lifecycle. "It's far easier/faster to iterate cloudmonkey than all of CloudStack and tying it to the slower lifecycle of ACS will continue to trouble it IMO."</p>

<p>Rohit replied that "we should do it then." Prasanna Santhanam replied, "I haven't given breaking out the project much thought. But it's certainly a possibility." However, Prasanna <a href="http://markmail.org/message/vq3sqf7o3nckdy5p" class="external-link" rel="nofollow">notes that</a> "parts of the codebase" depend on Marvin, and it would require an "easier way to update Marvin across CloudStack providers to enable auto-updating Marvin's libraries like CloudMonkey can." </p>

<p>No final decisions have been made, but the discussion is still open for anyone that has a stake in how releases happen for Marvin and CloudMonkey.</p>

<h5><a name="ApacheCloudStackWeeklyNews-17June2013-CloudStackCommunitySurveyUnderway"></a>CloudStack Community Survey Underway</h5>

<p>Please let your voice and your organization be heard in this short survey. We would like to have both users of the Apache CloudStack source and Commercial derivatives, "We will be using the data in <b>aggregate</b> to get to know more about how it's being deployed out there." Chip Childers <a href="http://markmail.org/message/7s3ev7leok7uxucb?q" class="external-link" rel="nofollow">commented</a>. Click <a href="https://www.surveymonkey.com/s/28BV97D" class="external-link" rel="nofollow">Here</a> to take the short survey.</p>

<h5><a name="ApacheCloudStackWeeklyNews-17June2013-CloudStackCommunityVotestoPublishCloudStackBookList"></a>CloudStack Community Votes to Publish CloudStack Book List</h5>

<p>In a heavily <a href="http://markmail.org/message/jwoaknt7mdveklxp?q" class="external-link" rel="nofollow">discussed</a> topic throughout the community to allow the publishing of outside books about CloudStack on the CloudStack.Apache.Org website or wiki, it was finally voted on and decided to allow outside publications to be published. Right now Sebastien Goasguen has setup a <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Books" class="external-link" rel="nofollow">wiki page</a> and will work on where to have the permanent placement for this page. Sebastien posted the full results <a href="http://markmail.org/message/wnfcn2gcxs3p7do3" class="external-link" rel="nofollow">on June 12</a>, but noted that there's a question about voting on a list that isn't dev@:</p>

<blockquote>
<p>...<br/>
Our bylaws (1) do not cover votes on non-technical matters, so while we have<br/>
lazy majority on this vote it seems that this situation is not covered by the<br/>
bylaws. Moreover section 3.1.1 of bylaws says that decisions on the project<br/>
happen on dev@, so it seems that votes even on marketing@ are not allowed<br/>
(unsure about this).</p>

<p>I propose the following:</p>

<p>1-To move forward without having to re-cast a vote, I propose to list<br/>
immediately the books on the Wiki, and inform Packt. I just created the page (2)<br/>
2- If people agree that we have a bylaw "loophole", we need to modify the bylaws<br/>
to allow votes on marketing@ and agree on using Lazy majority or Lazy 2/3<br/>
majority. </p>

<p>Once we agree, I will inform users@ and dev@ and invite folks who participated<br/>
in this vote to join marketing@</p>

<p>3- We could then re-cast a vote to list on the website</p>

<p>(1) <a href="http://cloudstack.apache.org/bylaws.html" class="external-link" rel="nofollow">http://cloudstack.apache.org/bylaws.html</a><br/>
(2) <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Books" class="external-link" rel="nofollow">https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Books</a><br/>
... </p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-17June2013-GoogleSummerofCodeUpdate"></a>Google Summer of Code Update</h5>

<ul>
	<li><b><a href="http://www.google-melange.com/gsoc/homepage/google/gsoc2013" class="external-link" rel="nofollow">Google Summer of Code (GSOC)</a></b> has been headed up by Sebastien Goasguen, bringing 5 young developers and their projects to the CloudStack community.The <a href="http://markmail.org/message/dczqcoortvic7cpc?q" class="external-link" rel="nofollow">Community Bonding period</a> was to help introduce them to the community and their ideas and help them get acquainted with procedures and systems.</li>
</ul>


<p>We now enter the <a href="http://markmail.org/search/?q" class="external-link" rel="nofollow">work period</a> and get going on these proposals. Please help them as they try to help improve Apache CloudStack.</p>

<p>Get to know these 5 young talents:</p>
<ul>
	<li><b>Dharmesh mentored by Sebastien</b> - <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1784" class="external-link" rel="nofollow">JIRA Entry</a> / <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Integration+project+to+deploy+and+use+Mesos+on+a+CloudStack+based+cloud" class="external-link" rel="nofollow">Wiki page</a></li>
	<li><b>Meng mentored by Sebastien</b> - <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1782" class="external-link" rel="nofollow">JIRA Entry</a> / <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Improving+CloudStack+Support+for+Apache+Whirr+and+Incubator-provisionr+in+Hadoop+Provisioning" class="external-link" rel="nofollow">Wiki page</a></li>
	<li><b>Ian mentored by Abhi</b> - <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-2014" class="external-link" rel="nofollow">JIRA entry</a> / <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/LDAP+user+provisioning+in+cloudstack" class="external-link" rel="nofollow">Wiki page</a></li>
	<li><b>Nguyen mentored by Hugo</b> - <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1779" class="external-link" rel="nofollow">JIRA entry</a> / <a href="https://cwiki.apache.org/CLOUDSTACK/ovs-tunnel-manager-for-cloudstack.html" class="external-link" rel="nofollow">Wiki page</a></li>
	<li><b>Shiva mentored by Kelcey</b> - <a href="https://issues.apache.org/jira/browse/CLOUDSTACK-1778" class="external-link" rel="nofollow">JIRA Entry</a> / <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Create+a+bootstrap+based+GUI+for+CloudStack" class="external-link" rel="nofollow">Wiki page</a></li>
</ul>



<h5><a name="ApacheCloudStackWeeklyNews-17June2013-AVideographerisWorkingwithCloudStacktoCreateVideosfortheProject"></a>A Videographer is Working with CloudStack to Create Videos for the Project</h5>

<p>Gregg Witkin and Jessica Tomechak are <a href="http://markmail.org/thread/rs7paw6wfs4kktwh" class="external-link" rel="nofollow">working together on videos this summer</a>, including one that aims to show some of the most interesting real-world applications of CloudStack. They're asking for participation on this video, and suggestions for other videos you'd like to see. Check out these videos Gregg did with CloudStack just last year. <a href="http://www.youtube.com/watch?v=oJ4b8HFmFTc" class="external-link" rel="nofollow">Link 1</a>, <a href="http://www.youtube.com/watch?v=KATuxn5pimY" class="external-link" rel="nofollow">Link 2</a></p>

<h3><a name="ApacheCloudStackWeeklyNews-17June2013-CloudStackPlanet"></a>CloudStack Planet</h3>

<h5><a name="ApacheCloudStackWeeklyNews-17June2013-CloudStackPMCmembersaskedtojoinASFmembership"></a>CloudStack PMC members asked to join ASF membership</h5>

<p>Chip Childers and David Nalley were invited to be members of the Apache Software Foundation. An honor given to those, "<a href="https://blogs.apache.org/foundation/entry/the_apache_software_foundation_welcomes2" class="external-link" rel="nofollow">Committers who demonstrate merit in the Foundation’s growth, evolution, and progress are nominated for ASF Membership by existing members.</a>". Congratulations to both Chip and David. </p>

<h3><a name="ApacheCloudStackWeeklyNews-17June2013-JCSUGpresentsatLinuxCon%2FCloudOpenJapan"></a>JCSUG presents at LinuxCon / CloudOpen Japan</h3>

<p>On May 29-31 the Japanese CloudStack User Group participated in the <a href="http://linuxconcloudopenjapan2013.sched.org/" class="external-link" rel="nofollow">LinuxCon / CloudOpen 2013</a> in Tokyo. 20 volunteers helped with the CloudStack and Xen booth at the conference. During the conference there was also several sessions on building clouds with CloudStack, Cloudstack networking, and participation in a discussion panel with Google, Rackspace, NTT and Red Hat. Here are <a href="http://flickr.com/gp/kkitase/G2oV00/" class="external-link" rel="nofollow">pictures of the event.</a></p>

<h3><a name="ApacheCloudStackWeeklyNews-17June2013-UpcomingEvents"></a>Upcoming Events</h3>

<h5><a name="ApacheCloudStackWeeklyNews-17June2013-CloudStackCollaborationConference2013Only1weekaway%21"></a>CloudStack Collaboration Conference 2013 - Only 1 week away!</h5>

<p><b><a href="http://www.cloudstackcollab.org/" class="external-link" rel="nofollow">The CloudStack Collaboration Conference 2013 (CCC13)</a></b> hasn't even begun yet and the collaboration, excitement and participation for the event is already in full swing. Here are some of the highlights and notes to remember for attendees. </p>
<ul>
	<li>Registration opens on Sunday, June 25th at 4:30pm right before the Welcome Cocktail Reception.</li>
	<li>Joe Brockmeier has already started planning discussion for the <a href="http://markmail.org/message/qecctaile2ogcppz?q" class="external-link" rel="nofollow">Hack Day</a>. Topics like Storage Architecture with John Burwell, Documentation with Joe Brockmeier, and Apache Project integrations with Sebastien Goasguen. Check out the sessions on the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Hack+Day+at+CCC13" class="external-link" rel="nofollow">wiki</a></li>
	<li><a href="http://www.cloudstackcollab.org/keynote1/" class="external-link" rel="nofollow">Gene Kim</a> &amp; <a href="http://www.cloudstackcollab.org/keynotes/keynote2/" class="external-link" rel="nofollow">Chip Childers</a> will be kicking off the conference with keynotes on Monday, June 24th, 2013.</li>
	<li>Gene Kim will be doing book signings during the morning and afternoon breaks. The first 250 attendees to get registered for their badges at the conference will get a copy of <a href="http://www.cloudstackcollab.org/keynote1/" class="external-link" rel="nofollow">The Phoenix Project.</a></li>
	<li>Adrian Cockcroft’s keynote has been announced. He will be closing the conference with his keynote, <a href="http://www.cloudstackcollab.org/keynotes/keynote3/" class="external-link" rel="nofollow">“Dystopia as a Service”</a> on Tuesday, June 25th.</li>
	<li>Remember to sign up for the evening events – the CloudStack Roller Coaster Party <a href="http://www.cloudstackcollab.org/register/" class="external-link" rel="nofollow">requires a ticket.</a></li>
	<li>If you have not booked your hotel room yet – simply make your reservation <a href="https://resweb.passkey.com/Resweb.do?mode=welcome_gi_new&amp;groupID=19467447" class="external-link" rel="nofollow">here!</a></li>
</ul>


<h5><a name="ApacheCloudStackWeeklyNews-17June2013-MoreEvents"></a>More Events</h5>

<ul>
	<li><b><a href="http://bacdparis.eventbrite.com" class="external-link" rel="nofollow">Build a Cloud Day Paris</a></b> Paris, June 19th.</li>
	<li><b><a href="http://www.shapeblue.com/cloudstack-bootcamp-training-course" class="external-link" rel="nofollow">ShapeBlue CloudStack BootCamp</a></b> being held June 19/20 in London,UK.</li>
	<li><b><a href="http://www.shapeblue.com/cloudstack-bootcamp-training-course" class="external-link" rel="nofollow">ShapeBlue CloudStack BootCamp</a></b> being held June 22/23 at the Santa Clara Convention Center.</li>
	<li><b><a href="http://www.meetup.com/Silicon-Valley-Riak/events/124134742/" class="external-link" rel="nofollow">Silicon Valley Riak hosting "Apache CloudStack + Riak CS: Building a Complete Private Cloud"</a></b> in Santa Clara, CA, June 26th</li>
	<li><b><a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/117379992/" class="external-link" rel="nofollow">CloudStack San Francisco Users Group Event</a></b> being held at SAP Labs in Palo Alto CA. on June 27th.</li>
	<li><b><a href="http://www.eventbrite.com/event/6727182183" class="external-link" rel="nofollow">CloudStack European User Group meeting</a></b> being held in London, UK on July 4</li>
	<li><b><a href="http://www.oscon.com/oscon2013" class="external-link" rel="nofollow">O'Reilly's Open Source Convention (OSCON)</a></b> is being held July 22-26 at Oregon Convention Center, Portland Oregon. There will be several CloudStack talks.</li>
	<li><b>CloudStack Study Meeting</b> Suzuki-san will be organizing a study meeting in Osaka on August 2.</li>
	<li>*<a href="http://www.ospn.jp/osc2012-kyoto/" class="external-link" rel="nofollow">OSC Kyoto</a> The <a href="http://cloudstack.jp/" class="external-link" rel="nofollow">Japanese CloudStack User Group (JCSUG)</a> will be presenting at the Open Source Conference in Kyoto on August 2-3</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-17June2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<ul>
	<li>Jayapal Reddy Uradi has been invited by the PMC to become a committer and <a href="http://markmail.org/message/l42bsqfh5pc235mg" class="external-link" rel="nofollow">has accepted</a>.</li>
</ul>
