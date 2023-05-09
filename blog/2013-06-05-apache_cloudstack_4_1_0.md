---
layout: post
title: Apache CloudStack 4.1.0 Released
tags: [announcement]
slug: apache_cloudstack_4_1_0
---
<p><a href="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"><img src="/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true" alt="square-cloudmonkey.png" align="left" vspace="5" hspace="5"></img></a> The Apache CloudStack project is pleased to announce the 4.1.0 release of the CloudStack Infrastructure-as-a-Service (IaaS) cloud orchestration platform. This is the first major release from Apache CloudStack since its graduation from the Apache Incubator on March 20th. </p>

<p>Apache CloudStack is an integrated software platform that allows users to build a feature-rich IaaS. CloudStack includes an intuitive user interface and rich API for managing the compute, networking, accounting, and storage resources for private, hybrid, or public clouds. </p>

<p>The 4.1.0 release represents more than five months of development effort by the Apache CloudStack community. The release includes many new features and bugfixes from the 4.0.x cycle. The 4.1.0 release also marks major changes in the codebase to make CloudStack easier for developers, a new structure for creating RPM/Debian packages, and completes the changeover to using Maven as a build tool.</p>

<h2 id="newfeatures">New Features</h2>

<p>Some of the notable new features in Apache CloudStack 4.1.0 include:</p>

<ul>
<li>An API discovery service that allows an end point to list its supported APIs and their details.</li>
<li>Added an Events Framework to CloudStack to provide an &#8220;event bus&#8221; with publish, subscribe, and unsubscribe semantics. Includes a RabbitMQ plugin that can interact with AMQP servers. Introduces the notion of a state change event.</li>
<li>Implement L3 router functionality in the Nicira NVP plugin, and including support for KVM (previously Xen-only).</li>
<li>API request throttling to prevent attacks via frequent API requests.</li>
<li>AWS-style regions.</li>
<li>Egress firewall rules for guest networks.</li>
<li>Resizing root and data volumes.</li>
<li>Reset SSH key to access VMs.</li>
<li>Support for EC2 Query API.</li>
<li>Autoscaling support in conjunction with load balancing devices such as NetScaler.</li>
</ul>

<h2 id="downloads">Downloads</h2>

<p>The official source is available from:</p>

<p>http://cloudstack.apache.org/downloads.html</p>

<p>In addition to the official source code release, individual contributors also make convenience binaries available. 4.1.0 convenience binaries should be available within a day or so of the release announcement.</p>

<p>Note that there is a known issue with 4.1.0 and a recent Tomcat release. This has been addressed in the convenience binaries, but is still present in 4.1.0 source release. We will be working on a 4.1.1 release that will contain that fix shortly.</p>

<h2 id="cloudstackcollaborationconference">CloudStack Collaboration Conference</h2>

<p>The CloudStack community will be gathering for its second conference this month in Santa Clara, CA. The event will start on June 23rd with a hackathon, then formal programming on June 24th and 25th. This year we&#8217;ve gotten some fantastic keynotes, including DevOps legend Gene Kim (author of &#8220;The Phoenix Project&#8221;). You can find all the details at http://www.cloudstackcollab.org/, and the schedule at http://www.cloudstackcollab.org/schedule/. </p>

<h2 id="aboutapachecloudstack">About Apache CloudStack</h2>

<p>Apache CloudStack is a complete software suite for creating Infrastructure-as-a-Service (IaaS) clouds. Target environments include service providers and enterprises. It is used by many service providers to set up an on-demand, elastic cloud computing services and by enterprises to set up a private cloud for use by their own employees. Apache CloudStack is also available to individuals and organizations that wish to study and implement an IaaS for personal, educational, and/or production use.</p>

<p>Further information on Apache CloudStack can be found at cloudstack.apache.org.</p>
