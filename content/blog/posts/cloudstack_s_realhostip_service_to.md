---
layout: post
title: CloudStack's realhostip service to retire in less than a week!
date: '2014-09-26T18:41:06+00:00'
permalink: cloudstack_s_realhostip_service_to
---
<p>As <a href="https://blogs.apache.org/cloudstack/entry/realhostip_service_is_being_retired">previously</a> <a href="https://blogs.apache.org/cloudstack/entry/realhostip_reprieve">mentioned</a>, the realhostip.com dynamic DNS service is being retired at the end of September.</p>

<p>Citrix is reporting that they are still seeing DNS queries against the domain; Those who have not reconfigured their CloudStack installations will find part of their installations breaking once the realhostip service is retired on September 30th.</p>

<p>If you are running a version of CloudStack older than 4.3 and you have not reconfigured your installation to not use realhostip.com, please take the time to do so now before users are affected. Instructions are available in the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Procedure+to+Replace+realhostip.com+with+Your+Own+Domain+Name">CloudStack Wiki</a> as well as other blogs on the Internet.</p>
