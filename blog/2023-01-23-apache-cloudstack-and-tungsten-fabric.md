---
layout: post
title: Apache CloudStack and Tungsten Fabric SDN - Solution Brief
tags: [case-studies]
slug: apache-cloudstack-and-tungsten-fabric
---
<a href="/blog/apache-cloudstack-and-tungsten-fabric"><img src="/img/imported/b2495a18-898c-44c0-bbe4-5b227bad1565" alt="Tungsten-Fabric-Banner.png" width="750" height="393" /></a>

CloudStack is a multi-hypervisor, multi-tenant, high-availability cloud management platform that delivers the flexibility and freedom of open-source technology and the power of an enterprise-grade virtualization management platform.

In the <strong>new blog series named CloudStack Integrations</strong>, we present a range of technologies with which CloudStack is integrated and can become part of your technology stack. You will be able to<strong>&nbsp;learn more about different software solutions, which can be combined with CloudStack</strong> and dive deep into specialized&nbsp;<strong>Technical Solution Briefs</strong>&nbsp;presenting the integrations.

Today we will introduce you to <a href="https://tungsten.io/">Tungsten.</a>

<!-- truncate -->

<h1>Tungsten Fabric's Integration with Apache CloudStack</h1>

<p>Tungsten Fabric (TF) comprises components like controller and vRouter; plus additional components for analytics and third-party integration. In this Solution Brief, TF integrates with CloudStack as an SDN plugin to enable rich networking capabilities and lifecycle management of VMs and containers where TF components or control functions are deployed.</p>
<p>The deployment and life-cycle management of Tungsten Fabric can be done with tools like Ansible. After Tungsten Fabric and CloudStack are installed, we need to create a zone with the TF isolation method, and then, when we create a network or a vm in CloudStack, TF plugin will call the TF Controller API to create the resources.</p>

<a class="button button--primary button--lg" target="_blank" href="/files/acs-tungsten-fabric-sdn.pdf"><b>DOWNLOAD THE SOLUTION BRIEF</b></a><br/><br/>

<strong>Key Outcomes for Users</strong>

<p>Apache Cloudstack has long provided flexibility regarding network configuration to serve the needed use case. Along with built-in functionality, ACS has supported a number of different Software Defined Networking (SDN) controllers, including VMware NSX multi-hypervisor (formally Nicara), Nuage and others.</p>
<p>However, Apache CloudStack lacked a fully-featured open-source SDN controller to deliver advanced networking features.&nbsp;&nbsp;</p>
<p>Apache Cloudstack's integration with Tungsten Fabric will finally close this feature gap providing many long sought-after features, including BGP, MPLS, service stitching and deep security policy capabilities to meet even the most stringent industry requirements.</p>
<p>CloudStack will be able to manage these advanced functions via tight integration with the underlying best-of-breed network controller, while Tungsten Fabric handles the network fabric.&nbsp;</p>
<p><span><strong>The Community Adopting the Integration of Apache CloudStack and Tungsten Fabric</strong></span></p>
<p>A number of community members have already adopted Tungsten Fabric as part of their cloud infrastructure. We reached out to the community to hear their thoughts on the integration and how it benefits their organisation.</p>
<p><em>&lsquo;&rsquo;The EWERK Group mainly serves organizations in system-relevant industries with regulated IT. In these industries, highly complex IT infrastructure projects place special demands on the network. In order to meet these requirements, a future-oriented further development with the highest demand on technological know-how and flexibility of the software is needed. The support of Tungsten Fabric helps us to meet these requirements.&rsquo;&rsquo;</em></p>
<p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Sven Vogel, Senior Manager R&amp;D for Cloud and Infrastructure - </strong><a href="https://www.ewerk.com/startseite"><strong>EWERK</strong></a></p>
<p><em>"ENA is committed to the continued success of Apache CloudStack and we felt integrating Tungsten Fabric, a class leading open source Software Defined Networking (SDN) product addresses a key feature gap"</em>, remarked Simon Weller. <em>"ENA has been part of Apache CloudStack since its inception and we're proud that we're able to continue our work within the ACS community".</em></p>
<p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Simon Weller, VP of Technology - </strong><a href="https://www.ena.com/"><strong>Education Networks of America</strong></a><strong>&nbsp;</strong></p>

<p><strong>About Tungsten Fabric</strong></p>
<p>Tungsten Fabric is an open-source network and security orchestrator which provides secure connectivity for cloud-native environments. Tungsten Fabric enables developers, network and security operations staff to deploy zero-trust micro-segmentation within a DevOps workflow to reduce the friction in application deployment. It ensures performance and security for deployments of tens of thousands of nodes at Tier 1 service providers, major research centers and enterprises with global operations.</p>
<p>With Tungsten Fabric, security and network engineers can build secure microservices that can be deployed on various container orchestration platforms, allowing them to work directly within the DevOps workflow. This ensures applications and infrastructure alike are secure against sophisticated attacks, while increasing development velocity and site reliability. Tungsten Fabric analytics provide flow-level visibility, while port mirroring provides application-level visibility.&nbsp;</p>
<p>Together these features enable network and security operations staff, streamlining troubleshooting and mean time to resolution (MTTR). Tungsten Fabric manages and implements physical and virtual networking and security for cloud environments. Since the same controller and forwarding components are used in every implementation, Tungsten Fabric provides a consistent interface for managing connectivity and policy in all the environments it supports, and can provide seamless and secure connectivity between workloads managed by different orchestrators, whether virtual machines or containers.</p>
