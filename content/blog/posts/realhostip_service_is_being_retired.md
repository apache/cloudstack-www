---
layout: post
title: Realhostip Service is Being Retired
date: '2014-03-25T13:50:18+00:00'
permalink: realhostip_service_is_being_retired
---
<p>Recently the Apache CloudStack PMC was informed that the realhostip.com Dynamic DNS service that CloudStack currently uses as part of the console proxy will be disbanded this summer.  The realhostip service will be <b>shut down June 30th, 2014, meaning users have approximately 3 months to mitigate this</b>.</p>

<p>Prior to version 4.3, CloudStack used the realhostip.com service by default. With the release of CloudStack version 4.3 the default communication method with the console proxy is plaintext HTTP.</p>

<h3>Who is Affected</h3>
<p>CloudStack installations prior to version 4.3 that have not been reconfigured to use a DNS domain other than realhostip.com for Console Proxy or Secondary Storage must make changes to continue functioning past June 30th, 2014.</p>

<h3>Steps You Need to Take</h3>
<p>If you meet the criteria above, there are several options to prepare for realhostip retirement:</p>
<ul>
  <li> Set up wildcard SSL certificate and DNS entries: This method is already well supported within prior versions of CloudStack.</li>
  <li> Upgrade to CloudStack 4.3 and disable SSL: This is only recommended for development installations, or private clouds that contain no information of importance.</li>
  <li> Upgrade to CloudStack 4.3, set up static SSL certificate and configure load balancer to point to the correct IP address: While this allows an administrator to skip setting up the DNS entries from the previous option, it is a more advanced option as CloudStack 4.3 does not support automatic load balancer configuration for the Console Proxy. It is hoped this functionality will be available in future releases.</li>
</ul>

<p><b>For instructions</b> on how to set up SSL encryption for use with CloudStack console proxy, please read the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-administration/en/latest/systemvm.html#console-proxy">console proxy section of the CloudStack administration guide</a>.</p>

<p>Additionally, if you will be using an SSL vendor who requires an intermediate CA chain to be installed for proper SSL validation by web browsers, detailed instructions for configuring the intermediate CA chain in CloudStack can be found <a href="http://www.chipchilders.com/blog/2013/1/2/undocumented-feature-using-certificate-chains-in-cloudstack.html">here</a>.</p>

<p><i>The Apache CloudStack security team does not recommend running a production cloud with either the realhostip.com SSL certificate, or with no SSL encryption at all.</i></p>
