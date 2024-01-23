---
layout: post
title: What’s new in Apache CloudStack 4.16 - A Deep Dive
tags: [news]
slug: what-s-new-in-apache
---
<a href="/blog/what-s-new-in-apache"><img src="/img/imported/9c07a866-c997-4b88-b17c-29203c8219c8" width="100%" alt="ACS-416.jpg" /></a>

Apache CloudStack 4.16 is the latest release of the cloud management platform from the Apache Software Foundation and is a result of months of work from the development community. 4.16 is an LTS (Long Term Support) release so will be maintained for a period of 18 months after release. 

<!-- truncate -->

As always, the release contains a myriad of small improvements and bug fixes but here we focus on the major new functionality of the release. 

<h2>New CloudStack Integrations</h2>

Two new major storage integrations are shipped with 4.16. 

<div>
<b>CloudStack and Dell PowerFlex Integration</b>

<a href="/img/imported/74265a54-7441-47a3-910e-b042f919d5c1"><img src="/img/imported/74265a54-7441-47a3-910e-b042f919d5c1?t=true" /></a>

A plugin for Dell PowerFlex (previously ScaleIO ) allows CloudStack to directly manage primary storage pools and enable enhanced VM & Volume operations on that pool including volume migrations. This integration is available for PowerFlex versions 4.3 onwards and only for the KVM hypervisor at this stage.  
</div>

<br/>
<div>
<b>LINBIT and CloudStack Integration</b>

<a href="/img/imported/8c768dc5-210a-41fc-911b-0f2f2f7c7453"><img src="/img/imported/8c768dc5-210a-41fc-911b-0f2f2f7c7453?t=true" /></a>

Support has also been added for Linstor storage. The plugin, again, allows CloudStack to manage Linstor volumes for primary storage and also supports snapshots. 

LINBIT SDS is deeply integrated with Apache CloudStack. It has a native driver in the OS which provides block devices to the KVM. The CloudStack integration helps administrators to manage storage functions like snapshots, migration with the API.
</div>

<div>
<b>Enhancements to CloudStack Kubernetes Service</b>

<a href="/img/imported/a407189f-02c6-4c71-ae99-bf0f99783fdf"><img src="/img/imported/a407189f-02c6-4c71-ae99-bf0f99783fdf?t=true" /></a>

CloudStack Kubernetes Service (CKS)  first shipped in CloudStack 4.14 and provides full Kubernetes integration to CloudStack – allowing users to run containerized services using Kubernetes clusters without the pain of having to deploy Kubernetes clusters themselves 

CloudStack 4.16 brings a number of improvements to CKS. Kubernetes autoscaling is now supported through the creation of a Kubernetes provider for CloudStack. This means that Kubernetes will be able to scale up a cluster if pods cannot be scheduled and then scale it back down. 

The base template for Kubernetes clusters in CloudStack has now been unified with the existing System VM Template, removing the dependency on CoreOS and simplifying ongoing maintenance.  
</div>

<h2>UI Improvements</h2>
The previous release saw a new, improved user interface experience for Apache CloudStack  – for both users and administrators. 4.16 sees many new features in that interface, all designed to make interactions with CloudStack easier. 

It is now possible to select multiple objects (i.e. Instances, volumes, etc) and perform actions against that bulk selection. For example, if you wish to restart 10 instances or lock 5 accounts, these types of actions can easily be done with a single click.  

<a href="/img/imported/7dd821bd-4237-4ac8-88d9-657f97e01429"><img src="/img/imported/7dd821bd-4237-4ac8-88d9-657f97e01429" alt="416-zone_card_view.png" /></a>

The UI has become much more visual with the addition of configurable icons for most types of resources. For example, zones can now be represented by geographical flags or instances by their OS type. Users can even upload a profile picture of themselves. 

These icons can be configured at the administrator level and also overridden by individual users. 

Users can also now make comments or notes against most resource types.  This can be used for making simple configuration notes or even as a full changelog against an object. This is available for most resource types including Instances, domains, hosts, SSH keypairs, volumes, snapshots, etc 

A full audit log of comments is maintained, including the date stamp and the user who made the comment. Administrators are able to create and remove comments from any object and can see all the comments on every object. Permissions are applied to domain administrators and users, allowing them to comment, remove and see comments only on the entities they have access to. 

There is also a new “Comments” section under the main menu, allowing users to see all of their comments across all objects and types.  

<a href="/img/imported/e40e8bff-146e-445c-ace9-f48130b1f977"><img src="/img/imported/e40e8bff-146e-445c-ace9-f48130b1f977" alt="416-comments.png" /></a>

The final UI improvement is a big time saver. Users can now submit any form by pressing CTRL Enter.

<h2>Upgrade Improvements</h2>

The last few versions of CloudStack have all seen major improvements to the upgrade process, with the overall goal of “zero downtime upgrades” getting ever closer. 

4.16 sees this work continue: the requirement to manually register the system VM Template before an upgrade has now been removed. Template registration is now automated as part of the package upgrade process. 

The database upgrade process has also been refined and can be run without needing the root user credentials.

<h2>Improved Tools & Management</h2> 

The ability to import and export existing Virtual machines as CloudStack instances is an area that has seen a lot of focus in recent versions. 4.16 sees new functionality in the UI that allows admins to take existing VMWare instances for a VMWare cluster and quickly put them under CloudStack management (or to “unmanage” them in reverse). This functionality was previously available only as an API command.    

<img src="/img/imported/580a39af-db79-4391-bb0f-83404d7018b3" alt="416-comments.png" />

Whether an instance is allowed to dynamically scale can now be controlled in a very granular fashion, down to the level of a template or an individual instance. Previously, this was only configurable on a global basis. The hot adding of CPU and RAM. 

CloudStack’s host HA feature has been extended to allow a host to be placed in a “degraded” state. In this state, HA kicks in to migrate workloads away, but the host is left running. 

Enhancements have been made to pod management to allow administrators to be able to update the size of the IP range of the management pod, upwards or downwards. 

Finally, CloudStack 4.16 sees an overhaul of the products documentation to reflect the new user interface.

<h2>Documentation and Downloads</h2>

The full list of new features can be found in the project release notes at <a href="https://docs.cloudstack.apache.org/en/4.16.0.0/releasenotes/changes.html">https://docs.cloudstack.apache.org/en/4.16.0.0/releasenotes/changes.html</a>

The CloudStack documentation includes upgrade instructions from previous versions of Apache CloudStack, and can be found at: <a href="https://docs.cloudstack.apache.org/en/4.16.0.0/upgrading/index.html">https://docs.cloudstack.apache.org/en/4.16.0.0/upgrading/index.html</a>

The official installation, administration and API documentation for each of the releases are available on our documentation page: <a href="https://docs.cloudstack.apache.org/">https://docs.cloudstack.apache.org/</a>

Download the new release here: <a href="https://cloudstack.apache.org/downloads.html">https://cloudstack.apache.org/downloads.html</a>
