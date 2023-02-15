---
layout: post
title: Apache CloudStack Weekly News - 22 April 2013

slug: apache_cloudstack_weekly_news_22
---
<p><a href="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"><img src="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true" alt="square-cloudmonkey.png" align="left" hspace="5" vspace="5"></img></a>This time around, we have two release VOTEs in progress, which means that 4.1.0 is just about out the door. The CloudStack Collaboration Conference 2013 <a href="http://markmail.org/message/uqj2nazm6dcpg7h7" class="external-link" rel="nofollow">has been announced for June 23rd through 25th</a>. You'll also want to check in on the discussions about the length of the release cycle, Chip Childers and David Nalley appearing on FLOSS Weekly, and much more. </p>

<p>A lot has happened since the last issue of the CloudStack Weekly News, and not just because the community's been busy &ndash; we missed getting last week's issue out. Sorry about that! If you'd like to see consistent weekly delivery, check the end of the newsletter to see how you can help.</p>

<h3><a name="ApacheCloudStackWeeklyNews-22April2013-MajorDiscussions"></a>Major Discussions</h3>

<p>In this section, we summarize some of the more interesting discussions taking place in the CloudStack community. While we try to pull out the discussions that are "don't miss" discussions to anyone who's involved in using or contributing to CloudStack, it's a really good idea to <a href="http://cloudstack.apache.org/mailing-lists.html" class="external-link" rel="nofollow">make sure you're subscribed</a> to the mailing lists and follow along. </p>

<h5><a name="ApacheCloudStackWeeklyNews-22April2013-ReleaseSchedule"></a>Release Schedule</h5>

<p>Animesh Chaturvedi <a href="http://markmail.org/message/6suq2fhltdvgvcxd" class="external-link" rel="nofollow">started a discussion last week</a> about the release schedule for 4.2.0, trying to nail down the specific dates for feature freeze, docs freeze, etc. That was <a href="http://markmail.org/message/cp23tewephjuxv7f" class="external-link" rel="nofollow">accompanied by a question of whether we should consider a six-month cycle</a>. Ultimately, no resolution was reached on the schedule. </p>

<p>Animesh has <a href="http://markmail.org/message/3ctdwor5hfbpa3vx" class="external-link" rel="nofollow">started a new thread to discuss the release cycle</a>.</p>

<h5><a name="ApacheCloudStackWeeklyNews-22April2013-EasierSimpleInstalls"></a>Easier Simple Installs</h5>

<p>David has <a href="http://markmail.org/message/zvo3t26zjvedblah" class="external-link" rel="nofollow">started a conversation on dev@ about the ease, or lack thereof, of installing CloudStack</a>. David says, "what I want to do is get rid of sections 2-4 of the quick install guide, and replace it with - 'run this one or two lines worth of commands' (<a href="http://s.apache.org/runbook" class="external-link" rel="nofollow">http://s.apache.org/runbook</a>)." David describes what he'd like to see: </p>

<blockquote>
<p>The all-in-one installation process I'd like to see:</p>

<p>Install your host OS Install an meta-RPM/Deb that either (installs everything, or alternatively configures a repo - or just installs the repo and the stuff I need to install with) Run a command that activates one of these config tools - configures the machine, installs the packages I need, and gets me to the point where I'm ready to login and go through the beautiful new user gui setup stuff. </p></blockquote>

<p>No further comments on this so far. </p>

<h5><a name="ApacheCloudStackWeeklyNews-22April2013-DevelopingaStorageBackupObjectStorePluginFramework"></a>Developing a Storage Backup Object Store Plugin Framework</h5>

<p>Min Chin <a href="http://markmail.org/message/cspb6xweeupfvpit" class="external-link" rel="nofollow">has proposed a storage backup object store plugin framework</a> that would "allow CloudStack to systematically manage and configure various types of backup data stores from different vendors, like NFS, S3, Swift, etc." Specifically, Min says:</p>

<blockquote>
<p>With this new plugin framework, we would like to achieve following functionalities: </p>

<p>1. Support different object store providers in a uniform and pluggable fashion. <br/>
2. Enable region wide object backup using S3-like object store. <br/>
3. Provide pluggable data motion strategies to handle data transfer from one data store to another data store. <br/>
4. Provide a scalable cache storage framework while moving data between primary storage and backup storage for certain hypervisor needs.  <br/>
5. Support flexible combinations of primary storage, secondary storage and hypervisors, such as (NFS, NFS, Xen), (NF3, S3, Vmware), (ISCSI, Swift, KVM), ..., etc.</p></blockquote>

<p>The FS is <a href="https://cwiki.apache.org/CLOUDSTACK/storage-backup-object-store-plugin-framework.html" class="external-link" rel="nofollow">on the wiki</a>, and Min says in a follow-up that there's a plan to "provide a sample plugin implementation" for the work.</p>

<p>With regards to compatibility concerns, Edison Su <a href="http://markmail.org/message/sstnaimx62mnyles" class="external-link" rel="nofollow">responds</a> that existing APIs "can still be wired to new code" so that they continue to work, but "we can mark them as deprecated in the API document." Edison also notes that it can co-exist with the existing deployments and upgrades from pre-4.2.0 versions to 4.2.0 if the feature is accepted.</p>

<h5><a name="ApacheCloudStackWeeklyNews-22April2013-VOTEsfor4.1.0and4.0.2"></a>VOTEs for 4.1.0 and 4.0.2</h5>

<p>After a couple of false starts, it looks like the third time is the charm for the 4.0.2 release. Joe Brockmeier <a href="http://markmail.org/message/nfe2lyxj4mjsmxdb" class="external-link" rel="nofollow">started the third voting round on Saturday 20 April</a>, and it has quite a few +1 (binding) votes so far. Unless -1'ed by Tuesday morning, it will be ready for release. </p>

<p>Chip has also <a href="http://markmail.org/thread/vfcje3fs5ilvm47c" class="external-link" rel="nofollow">started the first vote</a> for 4.1.0, which will be open for 72 hours &ndash; assuming no show-stopping defects are found, and it garners at least 3 +1 PMC votes. Note that <b>everyone</b> in the CloudStack community is encouraged to test out the release candidate and cast a vote, regardless of whether the vote is "binding" or not. More testing is always better, and an informed -1 from a non-PMC member isn't going to be ignored when deciding whether to release or not. </p>

<h5><a name="ApacheCloudStackWeeklyNews-22April2013-DomainAdminLimitations"></a>Domain Admin Limitations</h5>

<p>Pranav Saxena has <a href="http://markmail.org/message/ucxsapyannat2z6b" class="external-link" rel="nofollow">raised a discussion about the limitations for DOMAIN admins</a>, and wonders "why hasn't the domain -admin been given the privilege of creating sub-child domains himself? Are there any concerns/threats because of which the current architecture doesn't serve this purpose?" Alena Prokharchyk responds that there <a href="http://markmail.org/message/nyzosjot2ov5lb7m" class="external-link" rel="nofollow">may be a feature request matching Pranav's concerns</a> and suggests checking its status. This might be a good feature/improvement to see in 4.2.0 if there's not already work afoot.</p>

<h3><a name="ApacheCloudStackWeeklyNews-22April2013-CloudStackPlanetPostsfromtheCloudStackCommunity"></a>CloudStack Planet - Posts from the CloudStack Community</h3>

<ul>
    <li><b><a href="http://www.chipchilders.com/blog/2013/4/10/floss-weekly-interview-on-apache-cloudstack.html" class="external-link" rel="nofollow">FLOSS Weekly Interview on Apache CloudStack</a></b>: Chip and David appeared on FLOSS Weekly on April 10th. If you missed the live show, be sure to checkout the <a href="http://twit.tv/show/floss-weekly/247" class="external-link" rel="nofollow">video</a>.</li>
</ul>


<ul>
    <li><b><a href="http://www.youtube.com/watch?v=vvgIkF1e1QE" class="external-link" rel="nofollow">4.0.2 Testing Procedure</a></b>: Sebastien Goasguen has <a href="http://www.youtube.com/watch?v=vvgIkF1e1QE" class="external-link" rel="nofollow">put together a screencast</a> for testing the 4.0.2 release that also might be worth looking over for folks interested in testing any CloudStack release.</li>
</ul>


<ul>
    <li><b><a href="http://buildacloud.org/blog/254-google-summer-of-code-2013-with-cloudstack.html" class="external-link" rel="nofollow">Google Summer of Code with CloudStack</a></b>: Sebastien has also <a href="http://buildacloud.org/blog/254-google-summer-of-code-2013-with-cloudstack.html" class="external-link" rel="nofollow">put together a slide show</a> about contributing to the Google Summer of Code (GSoC) with CloudStack.</li>
</ul>


<ul>
    <li><b><a href="http://www.cupfighter.net/index.php/2013/04/knife-cloudstack-plugin-0-0-14-has-been-released-but-what-does-this-mean/" class="external-link" rel="nofollow">Knife CloudStack plugin 0.0.14 has been released</a></b>: Sander Botman writes about the latest release of the CloudStack plugin. David has also <a href="http://buildacloud.org/blog/252-a-new-version-of-the-knife-cloudstack-plugin-appears.html" class="external-link" rel="nofollow">written about the new knife-cloudstack plugin</a>.</li>
</ul>


<ul>
    <li><b><a href="http://buildacloud.org/blog/253-to-rest-or-not-to-rest.html" class="external-link" rel="nofollow">To REST or not to REST</a></b>: Sebastien tackles the question, "is the CloudStack API RESTful?" The short answer is "<a href="http://buildacloud.org/blog/253-to-rest-or-not-to-rest.html" class="external-link" rel="nofollow">the CloudStack API is RESTlike but not RESTful</a> since it is only based on the GET method. Being an http based API that can return JSON does not make it a RESTfull API. This should not be seen as negative criticism but just a clarification." Read the rest for the full scoop.</li>
</ul>


<ul>
    <li><b><a href="http://blog.widodh.nl/2013/04/cloudstack-zone-x-is-is-not-ready-to-launch-console-proxy-yet/" class="external-link" rel="nofollow">Zone X is Not Ready to Launch Console Proxy Yet</a></b>: Wido den Hollander writes about an odd error that he troubleshot to find an unlikely culprit.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-22April2013-UpcomingEvents"></a>Upcoming Events</h3>

<ul>
    <li><b><a href="http://linuxfestnorthwest.org/" class="external-link" rel="nofollow">LinuxFest Northwest</a></b> is being held in Bellingham, Washington from 27 April to 28 April.
    <ul>
        <li>Mark Hinkle is presenting the <a href="http://linuxfestnorthwest.org/content/hitchikers-guide-open-source-cloud-computing" class="external-link" rel="nofollow">Hitchhiker's Guide to Open Source Cloud Computing</a> on Saturday 27 April at 11:00.</li>
        <li>David Nalley is presenting <a href="http://linuxfestnorthwest.org/content/building-iaas-clouds-apache-cloudstack" class="external-link" rel="nofollow">Building IaaS Clouds with Apache CloudStack</a> on Saturday 27 April at 1:30.</li>
    </ul>
    </li>
    <li><b>Storage in Apache CloudStack</b> being held by the <a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/" class="external-link" rel="nofollow">CloudStack SF Bay Area Users Group</a> on April 30, 2013 @ Citrix Conference Center, sign up on the Meetup.com Website.</li>
    <li><b><a href="http://buildacloud.org/about-diy-cloud-computing/cloud-events/viewevent/148-build-a-cloud-day-cloudcon-san-francisco-ca.html" class="external-link" rel="nofollow">Build a Cloud Day CloudCon San Francisco</a></b> being held at the South San Francisco Conference Center on 15 May.</li>
    <li><b><a href="http://cloudstackcollab.net/" class="external-link" rel="nofollow">CloudStack Collaboration Conference 2013</a></b> is being held from 23 June to 25 June in Santa Clara, CA at the Santa Clara Convention Center. See the <a href="http://cloudstackcollab.net/CfP/" class="external-link" rel="nofollow">Call for Proposals</a> if you're interested in speaking!</li>
</ul>


<p>If you want to to check in on events related to Apache CloudStack, see the <a href="http://lanyrd.com/topics/apache-cloudstack/" class="external-link" rel="nofollow">Lanyard Page for the Apache CloudStack topic</a>. </p>

<h3><a name="ApacheCloudStackWeeklyNews-22April2013-Jira"></a>Jira</h3>

<p>With the 4.0.2 and 4.1.0 VOTES in process, it's time to start looking at bugs against <a href="https://issues.apache.org/jira/browse/CLOUDSTACK/fixforversion/12324122" class="external-link" rel="nofollow">4.1.1</a> and <a href="https://issues.apache.org/jira/browse/CLOUDSTACK/fixforversion/12323906" class="external-link" rel="nofollow">4.2.0</a>.</p>

<p>At the moment, bugs against 4.1.0 haven't been re-assigned to 4.1.1. This means that the bug counts for 4.1.1 are much lower than they should be. Taking into account the actual number of bugs, we're looking at one blocker bug, two critical bugs, 114 major bugs, and 25 minor.</p>

<p>For 4.2.0, we have:</p>

<ul>
    <li>5 <a href="http://is.gd/blocker_acs420" class="external-link" rel="nofollow">blocker bugs for 4.2.0</a>.</li>
    <li>34 <a href="http://is.gd/critical_acs420" class="external-link" rel="nofollow">critical bugs for 4.2.0</a>.</li>
    <li>263 <a href="http://is.gd/major_acs420" class="external-link" rel="nofollow">major bugs for 4.2.0</a>.</li>
    <li>35 <a href="http://is.gd/minor_acs420" class="external-link" rel="nofollow">minor bugs for 4.2.0</a>.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-22April2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<ul>
    <li>Bruno Demion was invited to become a committer and <a href="http://markmail.org/search/list:org.apache.incubator.cloudstack-dev+New+Committer:+Bruno+Demion+%28a.k.a+milamber%29" class="external-link" rel="nofollow">has accepted</a>.</li>
</ul>


<ul>
    <li>Go Chiba was invited to become a committer and <a href="http://markmail.org/message/5yn6fbeim33bm7d3" class="external-link" rel="nofollow">has accepted</a>.</li>
</ul>


<ul>
    <li>Prasanna Santhanam was invited to become a PMC member and <a href="http://markmail.org/message/iifnhhkfext3gbve" class="external-link" rel="nofollow">has accepted</a>.</li>
</ul>


<p>Please join us in congratulating all of the new committers and PMC members!</p>

<h3><a name="ApacheCloudStackWeeklyNews-22April2013-ContributingtotheWeeklyNews"></a>Contributing to the Weekly News</h3>

<p>Want to keep reading the CloudStack Weekly News? Many hands make light work, but having only one editor means getting the weekly news out every week is a "best effort" activity. A healthy community publication needs several contributors to ensure weekly issues go out on time.</p>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) </p>

<p>Alternatively, you can send a note to the marketing@cloudstack.apache.org mailing list with a subject including <a href="" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b> </p>
