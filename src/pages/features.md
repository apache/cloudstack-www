---
title: Apache CloudStack Features
---

# ☁️ Apache CloudStack Features

As a mature and turnkey Infrastructure-as-a-Service (IaaS) platform, Apache CloudStack has a comprehensive set of features. This is an extensive, but not exhaustive, set of features.

Have a feature request? We'd invite you to [bring it up on the mailing list](/mailing-lists), and consider [filing a feature request in our issue tracker](https://github.com/apache/cloudstack/issues).

<h2>Rich Management User Interface</h2>

CloudStack provides a feature-rich out-of-the-box user interface implemented on
top of the CloudStack API to manage the cloud infrastructure. It is a fully AJAX
based solution compatible with most of the latest internet browsers and can also
be easily integrated with your existing portal.

<h2>Brand-able Self Service User Interface</h2>

Our out-of-the-box user interface was built using standard HTML and CSS with
jQuery as our standard JavaScript library. It can be easily customized and
branded to mirror your company’s existing look and feel.

<h2>Secure Console Access</h2>

A noVNC based client that allows users to access their virtual machine using any
of the latest internet browsers without the need of any external add-on such as
a JRE, ActiveX, or Flash.

<h2>Powerful API</h2>

Easily build, integrate, and use applications built on top of the CloudStack
API. The CloudStack API is well-documented and extensible. CloudStack also
includes support for the Amazon EC2 and S3 APIs.

<h2>Secure Single Sign On</h2>

Aggregate and integrate your existing applications with our management user
interface via our secure single sign-on for a better user experience.

<h2>Multi-role Support</h2>

Three distinct account roles for user interface and API access are supported out-of-the-box:
- Admin: can manage both the virtual and physical resources of the cloud
- Domain-Admin: can manage only the virtual resources owned by the accounts within their domain
- User: can manage their own virtual resources

In addition, CloudStack allows operators to define dynamic roles based on these core role types.

<h2>On Demand Virtual Data center Hosting</h2>

Provides users with virtually unlimited amount of computing resources – on
demand, as required and billed by actual usage.

<h2>Dynamic Workload Management</h2>

Completely automates the distribution of compute, network, and storage resource
across the physical infrastructure while adhering to defined policies on load
balancing, data security, and compliance.

<h2>Broad network Virtualization Capabilities</h2>

Support for embedded software-based network management as well as VLAN. Our
Direct Attached IP enables you to integrate with a virtual network architecture
that best fits your needs.

<h2>MPLS Support in the Cloud</h2>

CloudStack allows you to dedicate an entire VLAN to a specific account for MPLS
support between network nodes.

<h2>Secure Cloud Deployments</h2>

Ensures that all memory, CPU, network, and storage resources are both available
and isolated from one user account to another within the cloud.

<h2>Hypervisor Agnostic</h2>

CloudStack provides you with the flexibility to allow you to integrate with the
major hypervisors in the market today including KVM, VMware, Citrix
XenServer, XCP-ng.

<h2>Easy Template Creation Process</h2>

The CloudStack User Interface allows you to easily create pre-defined templates
for efficient virtual machine deployments. Templates can be created by attaching
a guest OS ISO to a blank VM or directly from existing VMs in the cloud.

<h2>Rich Template and ISO Management</h2>

Both users and administrators will be able to upload and manage their OS
templates and ISO images from within the cloud. A few management features
include the ability to allow others to use the templates/ISOs either on a global
public level or on a per-account basis, and to allow the management of templates
across multiple zones. CloudStack will ensure that templates are automatically
copied to the appropriate storage servers.

<h2>Domains and Delegated Administration</h2>

The support for domains allows you to segregate your cloud resources and
delegate the management of these domains to other administrators.

<h2>Snapshot Management</h2>

To help mitigate data loss and a way of disaster recovery, users are given the
capability of either taking ad hoc snapshots of their disk volumes or setting up
a comprehensive schedule for taking periodic snapshots of their data. Users can
set limits to the number of snapshots taken to creating new data disk volumes
from existing snapshots.

<h2>Comprehensive Service Management</h2>

Administrators can define, meter, deploy, and manage multiple service and disk
offerings within the cloud.

<h2>VM Sync and High Availability</h2>

Our custom VM Sync technology constantly monitors and maintains the state of all
virtual machines within the cloud from notifications of individual VM status to
the ability to automatically ensure that the VM remains running.

<h2>Resource Over Provisioning and Limits</h2>

By leveraging existing hypervisor, storage, and network technologies, you can
configure the cloud to allow over provisioning of physical resources to optimize
the allocation of your virtual machines.

CloudStack also provides administrators the capability of limiting virtual
resources (such as the number of VMs that an account can create to the number of
public IP addresses an account can own).

<h2>Usage Metering</h2>

Be able to deliver real-time visibility, produce historical usage reports, and
create billing invoices by integrating with metering data generated by the
CloudStack Usage Engine.

<h2>Alerts and Notifications</h2>

With built-in cloud system monitoring processes, you will be able to receive
up-to-the-minute alerts such as reaching a certain physical resource threshold
or detecting machine failures through the CloudStack API and/or via email using
SMTP.

<h2>Virtual Routers, Firewalls and Load Balancers</h2>

CloudStack supports integration with both software and hardware firewalls and
load balancers to provide additional security and scalability to a user’s cloud
environment. Including F5 and Netscaler.

<h2>Multiple Storage Solutions</h2>

CloudStack supports many storage solutions with  iSCSI and NFS being preferred,
but anything that can have multiple nodes mount it simultaneously will work.
Ceph RBD is also supported in combination with the KVM hypervisor. This gives
you the ultimate freedom in deciding your storage servers from using commodity
hardware to integrating with enterprise-grade solutions such as Dell EqualLogic,
NetApp, Dell/EMC PowerFlex, Linbit, Storpool.

<h2>Storage Tiering</h2>

As part of the CloudStack’s ability to integrate with multiple storage
solutions, you will also be able to target specific storage servers to be used
for VM deployments. This can be extremely beneficial when you have storage
servers built with commodity hardware to support non disk intensive applications
and dedicate fast and robust hardware for disk intensive applications such as
databases.

<h2>Block Storage Volumes</h2>

CloudStack supports the creation of block storage volumes of arbitrary size on
both network attached storage (NAS) or local disk that can be attached and
detached to and from your virtual machine.

<h2>Wide Range Guest VM OS Support</h2>

Depending on the configured hypervisor, CloudStack supports a wide range of
guest operating system including Windows®, Linux®, and various versions of BSD®.

<h2>Event/Audit Logs</h2>

All user interactions via the CloudStack UI or API are recorded as events. Each
event will indicate the type, severity level, description, owner of the
resource, the user that initiated the action, and when the event occurred.

<h2>User Data Support</h2>

CloudStack supports the notion of allowing a user to submit any type of binary
user data when deploying a new virtual machine. This gives you the flexibility
of giving each virtual machine created from the same OS template its own
identity in the cloud.

<h2>Guest OS Preferences</h2>

To take advantage of today’s hardware and OS licensing models, CloudStack allows
administrators to identify physical hosts to “prefer” specific operating
systems. For example this means that whenever possible, your Windows based
operating systems will be instantiated on all hosts that have been identified as
Windows “preferred.”

<h2>Host Maintenance with Live Migration</h2>

Upgrades and hardware maintenance can be achieved on the cloud with no downtime
for guest VMs. CloudStack will live-migrate any VMs from hosts that have been
targeted for maintenance to prevent any disruption of service.

<h2>Flexible Adapter Framework</h2>

The CloudStack was built from the ground up to support integration with a
variety of hypervisors, storage, network, and authentication solutions. Due to
this flexibility, we have created an Adapter Framework that will easily allow
you to further customize the cloud to suit your business needs.

<h2>Random Password for Guest OS</h2>

You can further enhance your guest OS templates to include our custom random
password feature that will automatically generate a unique password upon the
creation of a VM. This will allow your customers to securely log in and change
their password. Both Windows and Linux based OS platforms are currently
supported.

<h2>OpenStack Swift Integration for Secondary Storage</h2>

Secondary storage (templates and VM snapshots) can be stored in OpenStack Swift
as an alternative to NFS.

<h2>Projects</h2>

Allow users to collaborate and share resources within a defined group or
"project". When a user creates an a project all usage under the project is
attributed to the account who becomes the project owner.

<h2>Clustered LVM Support</h2>

CloudStack can utilize clustered Logical Volume Manager (LVM) storage
configurations starting with version 3.0.

<h2>NetScaler Support</h2>

CloudStack supports MPX, VPX & SDX devices. Users can set up Layer-4 load
balancing rules. Supported protocols: HTTP, TCP & UDP; Algorithms: least loaded
and round robin; Persistent sessions: source IP based, cookie based.

<h2>Network As a Service</h2>

Admin can compose network offerings with different network behaviors. For
example, a basic network offering with CloudStack Virtual Router offering
network services and a high-performance network offering with physical devices
such as NetScaler and Juniper SRX. Users can select the network offering of
choice while deploying a VM and also migrate VMs from one network offering to
another.

<h2>SAML and LDAP Integration with 2FA</h2>

CloudStack supports SAML LDAP authentication as a built-in optional AUTH adapter.
CloudStack also supports two-factor authentication.

<h2>Notification & Capacity Thresholds</h2>

Admin can set notification threshold to receive an alert when resource pool
crosses the notification threshold. Capacity threshold prevents CloudStack from
allocating further resources to that pool.
