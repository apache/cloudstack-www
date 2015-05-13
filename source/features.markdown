---
title: Apache CloudStack Features
---

##<i class="icon-cloud"></i> Apache CloudStack Features

As a mature and turnkey Infrastructure-as-a-Service (IaaS) platform, Apache CloudStack has a comprehensive set of features. This is an extensive, but not exhaustive, set of features. 

Have a feature request? We'd invite you to [bring it up on the mailing list](mailing-lists.html), and consider [filing a feature request in our bug tracker](https://issues.apache.org/jira/browse/CLOUDSTACK). 

<table id="features" style="width: 100%;" border="1" cellpadding="2" cellspacing="2">
<tbody>
<tr>
<td class="head-left">
<h2><strong>Feature</strong></h2>
</td>
<td class="head-right">
<h2><strong>Description</strong></h2>
</td>
</tr>
<tr>
<td><strong>Rich Management User Interface</strong></td>
<td>CloudStack provides a feature-rich out-of-the-box <strong>user interface</strong> implemented on top of the CloudStack <strong>API</strong> to manage the cloud infrastructure. It is a fully AJAX based solution compatible with most of the latest internet browsers and can also be easily integrated with your existing portal.</td>
</tr>
<tr>
<td><strong>Brand-able Self Service User Interface</strong></td>
<td>Our out-of-the-box <strong>user interface</strong> was built using standard HTML and CSS with jQuery as our standard JavaScript library. It can be <strong>easily customized</strong> and branded to mirror your company’s existing look and feel.</td>
</tr>
<tr>
<td><strong><strong>Secure AJAX Console Access</strong></strong></td>
<td>A VNC AJAX client that allows users to access their virtual machine using any of the latest internet browsers without the need of any external add-on such as a JRE, ActiveX, or Flash.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Powerful <strong>API</strong></strong></td>
<td style="width: 518px;">Easily build, integrate, and use applications built on top of the CloudStack <strong>API</strong>. The CloudStack API is well-documented and extensible. CloudStack also includes support for the Amazon EC2 and S3 APIs.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>Secure Single Sign On</strong></strong></td>
<td style="width: 518px;">Aggregate and integrate your existing applications with our management <strong>user interface</strong> via our secure single sign-on for a better user experience.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>Multi-role Support</strong></strong></td>
<td style="width: 518px;">Three distinct account roles for <strong>user interface</strong> and <strong>API</strong> access are supported out-of-the-box:
<ul>
<li><strong>Admin:</strong> can manage both the virtual and physical resources of the cloud</li>
<li><strong>Domain-Admin:</strong> can manage only the virtual resources owned by the accounts within their domain</li>
<li><strong>User:</strong> can manage their own virtual resources</li>
</ul>
</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>On Demand Virtual Data center Hosting</strong></td>
<td style="width: 518px;">Provides users with virtually unlimited amount of computing resources – on demand, as required and billed by actual usage.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>Dynamic Workload Management</strong></strong></td>
<td style="width: 518px;">Completely automates the distribution of compute, network, and storage resource across the physical infrastructure while adhering to defined policies on load balancing, data security, and compliance.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Broad network Virtualization Capabilities</strong></td>
<td style="width: 518px;">Support for embedded software-based network management as well as <strong>VLAN</strong>. Our Direct Attached IP enables you to integrate with a virtual network architecture that best fits your needs.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>MPLS</strong> Support in the Cloud</strong></td>
<td style="width: 518px;">CloudStack allows you to dedicate an entire <strong>VLAN</strong> to a specific account for <strong>MPLS</strong> support between network nodes.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Secure Cloud Deployments</strong></td>
<td style="width: 518px;">Ensures that all memory, CPU, network, and storage resources are both available and isolated from one user account to another within the cloud.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>Hypervisor Agnostic</strong></strong></td>
<td style="width: 518px;">CloudStack provides you with the flexibility to allow you to integrate with the major hypervisors in the market today including VMware, KVM, Citrix XenServer, and Citrix Xen Cloud Platform.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Easy Template Creation Process</strong></td>
<td style="width: 518px;">The CloudStack User Interface allows you to easily create pre-defined templates for efficient virtual machine deployments. Templates can be created by attaching a guest OS ISO to a blank VM or directly from existing VMs in the cloud.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Rich Template and ISO Management</strong></td>
<td style="width: 518px;">Both users and administrators will be able to upload and manage their OS templates and ISO images from within the cloud. A few management features include the ability to allow others to use the templates/ISOs either on a global public level or on a per-account basis, and to allow the management of templates across multiple zones. CloudStack will ensure that templates are automatically copied to the appropriate storage servers.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Domains and Delegated Administration</strong></td>
<td style="width: 518px;">The support for domains allows you to segregate your cloud resources and delegate the management of these domains to other administrators.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Snapshot Management</strong></td>
<td style="width: 518px;">To help mitigate data loss and a way of disaster recovery, users are given the capability of either taking ad hoc snapshots of their disk volumes or setting up a comprehensive schedule for taking periodic snapshots of their data. Users can set limits to the number of snapshots taken to creating new data disk volumes from existing snapshots.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Comprehensive Service Management</strong></td>
<td style="width: 518px;">Administrators can define, meter, deploy, and manage multiple service and disk offerings within the cloud.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>VM Sync and High Availability</strong></td>
<td style="width: 518px;">Our custom VM Sync technology constantly monitors and maintains the state of all virtual machines within the cloud from notifications of individual VM status to the ability to automatically ensure that the VM remains running.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Resource Over Provisioning and Limits</strong></td>
<td style="width: 518px;">By leveraging existing hypervisor, storage, and network technologies, you can configure the cloud to allow over provisioning of physical resources to optimize the allocation of your virtual machines.
<p>CloudStack also provides administrators the capability of limiting virtual resources (such as the number of VMs that an account can create to the number of public IP addresses an account can own).</p>
</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Usage Metering</strong></td>
<td style="width: 518px;">Be able to deliver real-time visibility, produce historical usage reports, and create billing invoices by integrating with metering data generated by the CloudStack Usage Engine.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Alerts and Notifications</strong></td>
<td style="width: 518px;">With built-in cloud system monitoring processes, you will be able to receive up-to-the-minute alerts such as reaching a certain physical resource threshold or detecting machine failures through the CloudStack <strong>API</strong> and/or via email using SMTP.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Virtual Routers, Firewalls and Load Balancers</strong></td>
<td style="width: 518px;">CloudStack supports integration with both software and hardware firewalls and load balancers to provide additional security and scalability to a user’s cloud environment. Including F5 and Netscaler</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Multiple Storage Solutions</strong></td>
<td style="width: 518px;">CloudStack supports many storage solutions with&nbsp; iSCSI and NFS being preferred, but anything that can have multiple nodes mount it simultaneously will work.&nbsp; This gives you the ultimate freedom in deciding your storage servers from using commodity hardware to integrating with enterprise-grade solutions such as Dell EqualLogic or NetApp.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Storage Tiering</strong></td>
<td style="width: 518px;">As part of the CloudStack’s ability to integrate with multiple storage solutions, you will also be able to target specific storage servers to be used for VM deployments. This can be extremely beneficial when you have storage servers built with commodity hardware to support non disk intensive applications and dedicate fast and robust hardware for disk intensive applications such as databases.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Block Storage Volumes</strong></td>
<td style="width: 518px;">CloudStack supports the creation of block storage volumes of arbitrary size on both network attached storage (NAS) or local disk that can be attached and detached to and from your virtual machine.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Wide Range Guest VM OS Support</strong></td>
<td style="width: 518px;">Depending on the configured hypervisor, CloudStack supports a wide range of guest operating system including Windows®, Linux®, and various versions of BSD®.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Event/Audit Logs</strong></td>
<td style="width: 518px;">All user interactions via the CloudStack UI or <strong>API</strong> are recorded as events. Each event will indicate the type, severity level, description, owner of the resource, the user that initiated the action, and when the event occurred.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>User Data Support</strong></td>
<td style="width: 518px;">CloudStack supports the notion of allowing a user to submit any type of binary user data when deploying a new virtual machine. This gives you the flexibility of giving each virtual machine created from the same OS template its own identity in the cloud.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Guest OS Preferences</strong></td>
<td style="width: 518px;">To take advantage of today’s hardware and OS licensing models, CloudStack allows administrators to identify physical hosts to “prefer” specific operating systems. For example this means that whenever possible, your Windows based operating systems will be instantiated on all hosts that have been identified as Windows “preferred.”</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Host Maintenance with Live Migration</strong></td>
<td style="width: 518px;">Upgrades and hardware maintenance can be achieved on the cloud with no downtime for guest VMs. CloudStack will live-migrate any VMs from hosts that have been targeted for maintenance to prevent any disruption of service.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Flexible Adapter Framework</strong></td>
<td style="width: 518px;">The CloudStack was built from the ground up to support integration with a variety of hypervisors, storage, network, and authentication solutions. Due to this flexibility, we have created an Adapter Framework that will easily allow you to further customize the cloud to suit your business needs.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Random Password for Guest OS</strong></td>
<td style="width: 518px;">You can further enhance your guest OS templates to include our custom random password feature that will automatically generate a unique password upon the creation of a VM. This will allow your customers to securely log in and change their password. Both Windows and Linux based OS platforms are currently supported.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>OpenStack Swift Integration for Secondary Storage&nbsp;</strong></td>
<td style="width: 518px;">Secondary storage (templates and VM snapshots) can be stored in OpenStack Swift as an alternative to NFS.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Projects</strong></td>
<td style="width: 518px;">Allow users to collaborate and share resources within a defined group or "project". When a user creates an a project all usage under the project is attributed to the account who becomes the project owner.&nbsp;</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong>Clustered LVM Support</strong></td>
<td style="width: 518px;">CloudStack can utilize clustered Logical Volume Manager (LVM) storage configurations starting with version 3.0.&nbsp;</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>NetScaler Support</strong></strong></td>
<td style="width: 518px;"><strong></strong>CloudStack supports MPX, VPX &amp; SDX devices. Users can set up Layer-4 load balancing rules. Supported protocols: HTTP, TCP &amp; UDP; Algorithms: least loaded and round robin; Persistent sessions: source IP based, cookie based.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>Network As a Service<br data-mce-bogus="1" /></strong></strong></td>
<td style="width: 518px;">Admin can compose network offerings with different network behaviors. For example, a basic network offering with CloudStack Virtual Router offering network services and a high-performance network offering with physical devices such as NetScaler and Juniper SRX. Users can select the network offering of choice while deploying a VM and also migrate VMs from one network offering to another.</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>LDAP Integration<br data-mce-bogus="1" /></strong></strong></td>
<td style="width: 518px;">CloudStack supports LDAP authentication as a built-in optional AUTH adapter</td>
</tr>
<tr>
<td style="width: 200px; text-align: left;"><strong><strong>Notification &amp; Capacity Thresholds<br data-mce-bogus="1" /></strong></strong></td>
<td style="width: 518px;">Admin can set notification threshold to receive an alert when resource pool crosses the notification threshold. Capacity threshold prevents CloudStack from allocating further resources to that pool.</td>
</tr>
</tbody>
</table>

