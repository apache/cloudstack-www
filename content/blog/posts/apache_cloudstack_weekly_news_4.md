---
layout: post
title: Apache CloudStack Weekly News - 4 February 2013
date: '2013-02-05T00:42:23+00:00'
permalink: apache_cloudstack_weekly_news_4
---
<p>Another busy week in Apache CloudStack land! Javelin has been merged with master, the 4.1 branch has been created, and the 4.0.1-incubating release has passed its second round vote to go on to the IPMC vote.</p>

<h3><a name="ApacheCloudStackWeeklyNews-4February2013-MajorDiscussionsandIssues"></a>Major Discussions and Issues</h3>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-JavelinMerged"></a>Javelin Merged</h5>

<p>The Javelin branch has been <a href="http://markmail.org/message/wl7it77lgrsllipu" class="external-link" rel="nofollow">merged into master</a> by Kelven Yang. Kelven <a href="http://markmail.org/message/bpnxze6edj4bikvr" class="external-link" rel="nofollow">has noted that developers should increase the amount of memory available to the JVM</a> if running the management server under Maven:</p>

<blockquote>
<p>For linux/Mac users</p>

<p>MAVEN_OPTS="-XX:MaxPermSize=512m -Xmx2g"<br/>
export MAVEN_OPTS</p>

<p>For Windows users</p>

<p>Add similar settings to windows environment settings (via Windows control panel)</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-4.1BranchCreated"></a>4.1 Branch Created</h5>

<p>Following the Javelin merge, Chip Childers has <a href="http://markmail.org/message/6wpcd5kg2bvdpufy" class="external-link" rel="nofollow">created the 4.1 branch</a>, and has asked committers "to respect the feature and improvement freeze in that branch. Bug fixes, doc updates and other release stabilization activities are obviously expected." Chip also says that committers should continue committing directly to the 4.1 branch until code freeze. (Code freeze, excepting fixes for blocker bugs and so forth, is on February 28th.) </p>

<p>If you're a non-committer and wish to send in a patch against 4.1.0, send in a patch built against the 4.1 branch. Chip says:</p>

<blockquote>
<p>Committers taking these fixes should also consider applying them to master.  If there are conflicts in master (which may happen, as there were a<br/>
couple of code-base refactoring activities, like switching packages from com.cloud to org.apache.cloudstack), apply the fix into 4.1 anyway, and inform the submitter that the patch has conflicts with master to get that sorted out (or you can fix it yourself).</p></blockquote>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-4.0.1incubatingVote"></a>4.0.1-incubating Vote</h5>

<p>The 4.0.1-incubating release has passed the <a href="http://markmail.org/message/zxvynd72xfansmho" class="external-link" rel="nofollow">vote</a> on cloudstack-dev, and is now in the 72-hour IPMC vote. Going into the vote on general@incubator.apache.org, the release artifacts already have 3 +1 mentor votes, so it should pass barring any -1 votes. </p>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-PreparingforTranslation"></a>Preparing for Translation</h5>

<p>With the feature freeze in place, it's time to get docs into shape and start getting things ready for translations. Sebastien Goasguen <a href="http://markmail.org/thread/rq7pbo3tn4ur4lu5" class="external-link" rel="nofollow">has created a new /pot directory</a> with the .pot (portable object templates). </p>

<p>Sebastien notes that contributors <a href="http://markmail.org/message/ykxnxp3r5bffzqrg" class="external-link" rel="nofollow">need to remember the 50-character limit for XML filenames</a>, as Transifex doesn't support longer file names. Contributors will also need to run <b><em>publican update_pot</em></b> when updating doc files and/or creating new files.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-Packagingin4.1"></a>Packaging in 4.1</h5>

<p>Hugo Trippaers <a href="http://markmail.org/message/jlvpt3dgefcwacxl" class="external-link" rel="nofollow">sent out an update</a> about the discussion on packaging for 4.1. Hugo says the main goal for redoing the current way of packaging CloudStack is to get "rid of ant and waf completely." The secondary goal "is to create a reference set of packages which in itself should be enough to get anyone going with CloudStack, but will hardly depend on the underlying distro. Real distro specific stuff should be handled by packagers from those distros. We just aim to provide a reference implementation."</p>

<p>Hugo also says that the plan is to rename the packages "to make it perfectly clear what somebody is installing." That's going to change the location of a number of files, but Hugo says "we intend to include symlinks for backwards compatibility." </p>

<blockquote>
<p>The planned packages for now are cloudstack-management, cloudstack-agent, cloudstack-common, cloudstack-cli, cloudstack-docs, cloudstack-awsapi and<br/>
cloudstack-usage. You might already have seen these names in some of the checkins.</p></blockquote>

<p>One of the side-effects of the new packaging plan is that <a href="http://markmail.org/message/47yguo5rfrszpie7" class="external-link" rel="nofollow">CloudMonkey may not be installed with the RPMs</a>, but instead require that admins use PIP to grab CloudMonkey. </p>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-SupportVMSnapshotHeldto4.2"></a>Support VM Snapshot Held to 4.2</h5>

<p>Mice Xia <a href="http://markmail.org/message/tctez5xpur2bzswe" class="external-link" rel="nofollow">proposed merging the VM Snapshot branch</a> to master ahead of the 4.1 branching/feature freeze on January 28th. However, there were a <a href="http://markmail.org/message/bmwbjet5q7nlav6j" class="external-link" rel="nofollow">number of questions</a> <a href="http://markmail.org/message/nk525qhfdwqqil6n" class="external-link" rel="nofollow">about the feature's implementation</a> and <a href="http://markmail.org/message/yjaddguj67dqzbhe" class="external-link" rel="nofollow">consensus was not reached</a> in time for the 4.1 branch's creation.</p>

<p>On the plus side, this is why we have time-based releases. While it will delay inclusion into CloudStack <b>slightly</b>, the feature will be well-poised to go into 4.2 and the additional attention that the discussion has raised will likely make it that much better a feature when merged to master. It also means that a single feature won't delay the 4.1 release, which already has quite a lot of improvements and new features that CloudStack users will want to have ready when it's scheduled for release.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-ProposaltoDeprecatethenonRESTfulAPIsandAPIServer"></a>Proposal to Deprecate the non-RESTful APIs and API Server</h5>

<p>Rohit Yadav has <a href="http://markmail.org/message/3nmgl5peuxeo4mvm" class="external-link" rel="nofollow">proposed deprecating CloudStack's non-RESTful APIs and API server</a> over a reasonable timeline. The reaction has been positive, and Min Chen <a href="http://markmail.org/message/xnjf5ylpn55ddneb" class="external-link" rel="nofollow">has offered to share an architecture design that's in-progress</a>, when it's ready.</p>

<h5><a name="ApacheCloudStackWeeklyNews-4February2013-HelpReviewingRunbook"></a>Help Reviewing Runbook</h5>

<p>David Nalley has <a href="http://markmail.org/message/jint25r5gwgnx6ju" class="external-link" rel="nofollow">sent out a request</a> for help reviewing his runbook, which is an opinionated guide to setting up a simple CloudStack install on a single CentOS 6.3 server using KVM. Other CloudStack users and contributors have expressed interest in creating similar runbooks for Ubuntu-based systems.</p>

<h3><a name="ApacheCloudStackWeeklyNews-4February2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
	<li><b>India User Group Meet-up</b>: Citrix, ShapeBlue, and CloudByte are&nbsp;combinedly&nbsp;organizing a <a href="http://www.meetup.com/CloudStack-Bangalore-Group/events/99690432/" class="external-link" rel="nofollow">CloudStack India User Group Meetup</a>&nbsp;in Bangalore (5 February, 2013).</li>
	<li><b>Build a Cloud Day (BACD)</b>: Full day <a href="http://buildacloud.org/about-cloudstack/cloudstack-events/viewevent/138-build-a-cloud-day-scale11x-.html" class="external-link" rel="nofollow">BACD</a> at SCALE on Friday (22 February 2013).</li>
	<li><b>CloudStack Booth at SCALE</b>: Meet with CloudStack folks at SCALE (23-24 February 2013), also Joe Brockmeier is <a href="http://www.socallinuxexpo.org/scale11x/presentations/taking-open-cloud-11-cloudstack" class="external-link" rel="nofollow">speaking about CloudStack at SCALE</a>.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-4February2013-Jira"></a>Jira </h3>

<p>Be sure to check the list of 4.1.0 <a href="https://issues.apache.org/jira/issues/?jql=project%20%3D%20CLOUDSTACK%20AND%20resolution%20%3D%20Unresolved%20AND%20fixVersion%20%3D%20%224.1.0%22%20ORDER%20BY%20priority%20DESC" class="external-link" rel="nofollow">bugs</a> to see if there are any open issues assigned to you, or any unassigned issues that you could take on. </p>

<h3><a name="ApacheCloudStackWeeklyNews-4February2013-NewCommittersandPPMCMembers"></a>New Committers and PPMC Members</h3>

<p>The Apache CloudStack project is pleased to welcome <a href="http://markmail.org/thread/p5b76rrp5h3j4k2u" class="external-link" rel="nofollow">Koushik Das</a> as a committer this week. Well done, Koushik!</p>
