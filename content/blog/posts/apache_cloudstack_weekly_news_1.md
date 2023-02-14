---
layout: post
title: Apache CloudStack Weekly News - 1 April 2013
date: '2013-04-01T22:30:11+00:00'
permalink: apache_cloudstack_weekly_news_1
---
<p><a href="https://blogs.apache.org/cloudstack/mediaresource/3b5a1e4e-90cb-469e-a58a-512bdcc28007"><img src="https://blogs.apache.org/cloudstack/mediaresource/3b5a1e4e-90cb-469e-a58a-512bdcc28007?t=true" alt="acwn-icon.png" align="left"></img></a>Welcome to the April 1 issue of the Apache CloudStack Weekly News. Don't worry, no foolishness in this issue – just a quick recap of the week's most important events. </p>

<p>As you recall, we officially announced that the CloudStack project was graduating from the incubator last week. Though there were no events quite of that magnitude this week, there was plenty of discussion of new features, a new Website design proposal, and Chiradeep Vittal has unveiled a new tool for testing and development called QuickCloud that will come in handy for many CloudStack contributors and users.</p>

<h3><a name="ApacheCloudStackWeeklyNews-1April2013-MajorDiscussions"></a>Major Discussions</h3>

<p>This is a summary of some of the most interesting/important discussions on the Apache CloudStack mailing lists. (Mostly dev@cloudstack.apache.org, but not excluding discussions on marketing@ and users@, of course.) This is provided as a convenient summary for folks who are not involved in day-to-day development of Apache CloudStack – if you're working on CloudStack or would like to get involved in development, we highly recommend being subscribed to dev@cloudstack.apache.org and keeping close tabs on the list!</p>

<h5><a name="ApacheCloudStackWeeklyNews-1April2013-WebsiteReDesignDiscussion"></a>Website Re-Design Discussion</h5>

<p>Sonny Chhen has <a href="http://markmail.org/message/rfgclvkfz6qtgy33" class="external-link" rel="nofollow">submitted a second mock-up design for the front page of the Apache CloudStack Web site</a> which has been met with quite a lot of enthusiasm. </p>

<h5><a name="ApacheCloudStackWeeklyNews-1April2013-Quickcloud:ZerotoCloudinLessthanaMinute!"></a>Quickcloud: Zero to Cloud in Less than a Minute! </h5>

<p>Chiradeep Vittal has developed Quickcloud, a <a href="http://markmail.org/thread/ajw7b6arhluqcuv2" class="external-link" rel="nofollow">much easier way</a> to start up a CloudStack cloud on a single box. <a href="http://markmail.org/message/weqbozgay44v3bro" class="external-link" rel="nofollow">Chiradeep announced on March 26th that QuickCloud is in a "rough-but-ready state"</a> for developers to try out.  </p>

<h5><a name="ApacheCloudStackWeeklyNews-1April2013-EIPAcrossZones"></a>EIP Across Zones</h5>

<p>Discussion <a href="http://markmail.org/message/6licrw7dve4f674h" class="external-link" rel="nofollow">continued</a> on Murali Reddy's <a href="http://markmail.org/message/flx3romoalsu5oiu" class="external-link" rel="nofollow">proposal</a> to enhance the EIP functionality to work at the region level. This week, Murali explained in more detail what he was thinking:</p>

<blockquote>
<p>CloudStack need not have a native capability to move IP across zone. From the CloudStack core perspective, all we need is abstraction of moving IP (presented as NAT) across the zones. Then we can have specific intelligence in the plug-ins which are providing EIP service. For e.g.'Route Health Injection' is commonly used solution in distributed data centres for disaster recovery supported by multiple vendors.</p></blockquote> 

<h5><a name="ApacheCloudStackWeeklyNews-1April2013-UpgradeProcessfrom4.0.xto4.1.0"></a>Upgrade Process from 4.0.x to 4.1.0</h5>

<p>Wido den Hollander <a href="http://markmail.org/message/5at5p2hasjltkt5z" class="external-link" rel="nofollow">started a discussion about how upgrades will work</a> for 4.0.x to 4.1.0, given the package renaming taking place in 4.1.0. See the discussion on the mailing list and <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Ubuntu+upgrade+process" class="external-link" rel="nofollow">docs in progress on the wiki</a>. </p>

<h5><a name="ApacheCloudStackWeeklyNews-1April2013-ProposedFeatures:ACLonPrivateGatewayandEgressFirewallRulesforSRX"></a>Proposed Features: ACL on Private Gateway and Egress Firewall Rules for SRX</h5>

<p>Jayapal Reddy Uradi <a href="http://markmail.org/message/3p5gwarljkqxlf4m" class="external-link" rel="nofollow">has proposed a new feature ACL on the private gateway</a>. Says Jayapal, "Currently we do not have way to control the traffic on the private gateway. Using this feature we can configure the ingress/egress ACL on the private gateway." </p>

<p>Jayapal has also proposed <a href="http://markmail.org/message/e6yrbl2b7rehk2g4" class="external-link" rel="nofollow">egress firewall rules for the external firewall device, SRX</a>. </p>

<h5><a name="ApacheCloudStackWeeklyNews-1April2013-JenkinsUpgrade"></a>Jenkins Upgrade</h5>

<p>Prasanna Santhanam has <a href="http://markmail.org/message/h5dmrprwyswuq5fv" class="external-link" rel="nofollow">pointed out a few bugs that were affecting build jobs</a>. Jenkins.cloudstack.org has been upgraded.</p>

<h3><a name="ApacheCloudStackWeeklyNews-1April2013-Newsworthy"></a>Newsworthy</h3>

<p>CloudStack's graduation garnered quite a bit of press last week! Some of the coverage:</p>

<ul>
	<li><b><a href="https://www.linux.com/news/enterprise/cloud-computing/711234-cloudstack-ups-enterprise-credibility-with-apache-top-level-status" class="external-link" rel="nofollow">CloudStack Ups 'Enterprise Credibility' with Apache Top-Level Status</a></b> on Linux.com</li>
	<li><b><a href="http://www.datamation.com/cloud-computing/apache-cloudstack-advances-open-source-cloud-efforts.html" class="external-link" rel="nofollow">Apache CloudStack Advances Open Source Cloud Efforts</a></b> on Datamation</li>
	<li><b><a href="http://www.itworld.com/cloud-computing/349596/apache-helps-free-cloudstack-citrix-fetters" class="external-link" rel="nofollow">Apache helps free CloudStack from Citrix fetters</a></b> on IT World</li>
	<li><b><a href="http://blogs.citrix.com/2013/03/25/becoming-the-apache-webserver-of-the-cloud-apache-cloudstack-graduation/" class="external-link" rel="nofollow">Becoming the Apache Webserver of the Cloud</a></b> on Peder Ulander's blog</li>
	<li><b><a href="http://www.h-online.com/open/news/item/CloudStack-rises-to-top-level-in-Apache-Software-Foundation-1829733.html" class="external-link" rel="nofollow">CloudStack rises to top level in Apache Software Foundation</a></b> on The H Open</li>
	<li><b><a href="http://blog.rightscale.com/2013/03/25/cloudstack-graduates-to-top-level-apache-status/" class="external-link" rel="nofollow">CloudStack Graduates to Top-Level Apache Status</a></b> on the RightScale blog</li>
	<li><b><a href="http://ceph.com/community/congratulations-to-apache-cloudstack/" class="external-link" rel="nofollow">Congratulations to Apache CloudStack</a></b> on the Ceph Blog</li>
	<li><b><a href="http://jaxenter.com/apache-cloudstack-graduates-but-is-it-qualified-to-challenge-openstack-46630.html" class="external-link" rel="nofollow">Apache CloudStack graduates, but is it qualified to challenge OpenStack?</a></b> on Jaxenter</li>
	<li><b><a href="http://www.techcentral.ie/21157/is-the-cloud-too-important-for-proprietary-software" class="external-link" rel="nofollow">Is the cloud too important for proprietary software?</a></b> on TechCentral.ie</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-1April2013-UpcomingEventsandCFPs"></a>Upcoming Events and CFPs</h3>

<ul>
	<li><b>CloudStack Introduction and Basics</b> - The inaugural meeting of the CloudStack NYC User Group will be Wednesday, April 10th in New York City. <a href="http://www.meetup.com/CloudStack-NYC-User-Group/events/106104162/" class="external-link" rel="nofollow">Sign up on Meetup.com</a>.</li>
	<li>UK/European CloudStack user group <a href="http://www.eventbrite.com/event/5816841329/eorg" class="external-link" rel="nofollow">meet-up</a> will be April 11th in London.</li>
	<li><b>Storage in Apache CloudStack</b> being held by the <a href="http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/" class="external-link" rel="nofollow">CloudStack SF Bay Area Users Group</a> on April 30, 2013 @ Citrix Conference Center, sign up on the Meetup.com Website.</li>
	<li><b>CloudStack Bangalore Meetup</b> Sometime in April, date not yet announced. Watch the <a href="http://www.meetup.com/CloudStack-Bangalore-Group/events/110900872/" class="external-link" rel="nofollow">Meetup page for details</a>.</li>
</ul>


<h4><a name="ApacheCloudStackWeeklyNews-1April2013-CallsforPapers"></a>Calls for Papers</h4>

<p>Want to help promote Apache CloudStack? Submit a talk at one of the conferences or events listed here. (Missing an event? Please send a note to marketing@cloudstack.apache.org). Note that events are listed in order of the close of the CFP, not the order of the events themselves. </p>

<ul>
	<li><b>Cloud Expo</b> takes place June 10 through June 13 in New York, NY. CFP closes on April 5. See <a href="http://www.cloudcomputingexpo.com/general/papers2013east.htm" class="external-link" rel="nofollow">http://www.cloudcomputingexpo.com/general/papers2013east.htm</a>.</li>
	<li><b>VMworld</b> takes place from August 26 through August 29. CFP closes on April 12th. See <a href="http://www.vmworld.com/community/conference/cfp" class="external-link" rel="nofollow">http://www.vmworld.com/community/conference/cfp</a>.</li>
	<li><b>CloudSlam</b> takes place on June 18th in Santa Clara, CA. CFP closes on April 25th. See <a href="http://cloudslam.org/cfp" class="external-link" rel="nofollow">http://cloudslam.org/cfp</a>.</li>
	<li><b>CloudConnect Chicago</b> takes place from September 10 through 13 in Chicago, IL. The CFP closes on April 29th. See <a href="http://www.cloudconnectevent.com/chicago/call-for-submissions/" class="external-link" rel="nofollow">http://www.cloudconnectevent.com/chicago/call-for-submissions/</a>.</li>
	<li><b>CloudOpen and LinuxCon</b> take place from September 16 through 18 in New Orleans, LA. The CFP closes on June 17th. See <a href="http://events.linuxfoundation.org/events/cloudopen/cfp" class="external-link" rel="nofollow">http://events.linuxfoundation.org/events/cloudopen/cfp</a>.</li>
	<li><b>Ohio LinuxFest</b> takes place from September 13 through 15 in Columbus, OH. The CFP closes on July 8th. See <a href="http://www.ohiolinux.org/cfp" class="external-link" rel="nofollow">http://www.ohiolinux.org/cfp</a>.</li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-1April2013-Jira"></a>Jira</h3>

<p>4.1.0 is still in process, but getting much closer to completion. Here's the numbers so far:</p>

<ul>
	<li>Last week: 3 blocker bugs. This week: 2 <a href="http://is.gd/blockers41acs" class="external-link" rel="nofollow">blocker bugs</a>, only one of which is truly a bug. (The other is a task that must be completed before release.)</li>
	<li>Last week: 6 critical bugs. This week: 5 <a href="http://is.gd/critical41acs" class="external-link" rel="nofollow">critical bugs</a></li>
	<li>Last week: 126 major bugs. This week: 122 <a href="http://is.gd/major41acs" class="external-link" rel="nofollow">major bugs</a></li>
	<li>Last week: 22 minor bugs. This week: 23 <a href="http://is.gd/minor41acs" class="external-link" rel="nofollow">minor bugs</a></li>
</ul>


<h3><a name="ApacheCloudStackWeeklyNews-1April2013-NewCommittersandPMCMembers"></a>New Committers and PMC Members</h3>

<p>The Apache CloudStack project is proud to welcome two new committers this week!</p>

<ul>
	<li>The Apache CloudStack PMC has invited Animesh Chaturvedi to become a committer and <a href="http://markmail.org/message/3juqneabgdx6yx3m" class="external-link" rel="nofollow">he has accepted</a>.</li>
	<li>The Apache CloudStack PMC has invited Ilya Musayev to become a committer and <a href="http://markmail.org/message/jqjntj3pjn2v5erc" class="external-link" rel="nofollow">he has accepted</a>.</li>
</ul>


<p>Please welcome our new committers!</p>

<h3><a name="ApacheCloudStackWeeklyNews-1April2013-ContributingtotheApacheCloudStackWeeklyNews"></a>Contributing to the Apache CloudStack Weekly News</h3>

<p>If you have an event, discussion, or other item to contribute to the <em>Weekly News</em>, you can add it directly to the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News" class="external-link" rel="nofollow">wiki</a> by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em> or email the newsletter editor directly (jzb at apache.org), again with the subject <a href="/confluence/display/CLOUDSTACK/News" title="News">News</a>: <em>description of topic</em>. <b>Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.</b></p>
