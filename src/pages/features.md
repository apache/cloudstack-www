---
title: Apache CloudStack Features
---

# ☁️ Apache CloudStack Features

As a mature and turnkey Infrastructure-as-a-Service (IaaS) platform, Apache CloudStack has a comprehensive set of features. This is an extensive, but not exhaustive, set of features. 

Have a feature request? We'd invite you to [bring it up on the mailing list](/mailing-lists), and consider [filing a feature request in our issue tracker](https://github.com/apache/cloudstack/issues).

## Rich Management User Interface

CloudStack provides a feature-rich out-of-the-box user interface implemented on
top of the CloudStack API to manage the cloud infrastructure. It is a fully AJAX
based solution compatible with most of the latest internet browsers and can also
be easily integrated with your existing portal.

## Brand-able Self Service User Interface

Our out-of-the-box user interface was built using standard HTML and CSS with
jQuery as our standard JavaScript library. It can be easily customized and
branded to mirror your company’s existing look and feel.

## Secure Console Access

A noVNC based client that allows users to access their virtual machine using any
of the latest internet browsers without the need of any external add-on such as
a JRE, ActiveX, or Flash.

## Powerful API

Easily build, integrate, and use applications built on top of the CloudStack
API. The CloudStack API is well-documented and extensible. CloudStack also
includes support for the Amazon EC2 and S3 APIs.

## Secure Single Sign On

Aggregate and integrate your existing applications with our management user
interface via our secure single sign-on for a better user experience.

## Multi-role Support

Three distinct account roles for user interface and API access are supported out-of-the-box:
- Admin: can manage both the virtual and physical resources of the cloud
- Domain-Admin: can manage only the virtual resources owned by the accounts within their domain
- User: can manage their own virtual resources

In addition, CloudStack allows operators to define dynamic roles based on these core role types.

## On Demand Virtual Data center Hosting

Provides users with virtually unlimited amount of computing resources – on
demand, as required and billed by actual usage.

## Dynamic Workload Management

Completely automates the distribution of compute, network, and storage resource
across the physical infrastructure while adhering to defined policies on load
balancing, data security, and compliance.

## Broad network Virtualization Capabilities

Support for embedded software-based network management as well as VLAN. Our
Direct Attached IP enables you to integrate with a virtual network architecture
that best fits your needs.

## MPLS Support in the Cloud

CloudStack allows you to dedicate an entire VLAN to a specific account for MPLS
support between network nodes.

## Secure Cloud Deployments

Ensures that all memory, CPU, network, and storage resources are both available
and isolated from one user account to another within the cloud.

## Hypervisor Agnostic

CloudStack provides you with the flexibility to allow you to integrate with the
major hypervisors in the market today including KVM, VMware, Citrix
XenServer/Hypervisor, XCP-ng, Hyper-V and OVM3.

## Easy Template Creation Process

The CloudStack User Interface allows you to easily create pre-defined templates
for efficient virtual machine deployments. Templates can be created by attaching
a guest OS ISO to a blank VM or directly from existing VMs in the cloud.

## Rich Template and ISO Management

Both users and administrators will be able to upload and manage their OS
templates and ISO images from within the cloud. A few management features
include the ability to allow others to use the templates/ISOs either on a global
public level or on a per-account basis, and to allow the management of templates
across multiple zones. CloudStack will ensure that templates are automatically
copied to the appropriate storage servers.

## Domains and Delegated Administration

The support for domains allows you to segregate your cloud resources and
delegate the management of these domains to other administrators.

## Snapshot Management

To help mitigate data loss and a way of disaster recovery, users are given the
capability of either taking ad hoc snapshots of their disk volumes or setting up
a comprehensive schedule for taking periodic snapshots of their data. Users can
set limits to the number of snapshots taken to creating new data disk volumes
from existing snapshots.

## Comprehensive Service Management

Administrators can define, meter, deploy, and manage multiple service and disk
offerings within the cloud.

## VM Sync and High Availability

Our custom VM Sync technology constantly monitors and maintains the state of all
virtual machines within the cloud from notifications of individual VM status to
the ability to automatically ensure that the VM remains running.

## Resource Over Provisioning and Limits

By leveraging existing hypervisor, storage, and network technologies, you can
configure the cloud to allow over provisioning of physical resources to optimize
the allocation of your virtual machines.

CloudStack also provides administrators the capability of limiting virtual
resources (such as the number of VMs that an account can create to the number of
public IP addresses an account can own).

## Usage Metering

Be able to deliver real-time visibility, produce historical usage reports, and
create billing invoices by integrating with metering data generated by the
CloudStack Usage Engine.

## Alerts and Notifications

With built-in cloud system monitoring processes, you will be able to receive
up-to-the-minute alerts such as reaching a certain physical resource threshold
or detecting machine failures through the CloudStack API and/or via email using
SMTP.

## Virtual Routers, Firewalls and Load Balancers

CloudStack supports integration with both software and hardware firewalls and
load balancers to provide additional security and scalability to a user’s cloud
environment. Including F5 and Netscaler.

## Multiple Storage Solutions

CloudStack supports many storage solutions with  iSCSI and NFS being preferred,
but anything that can have multiple nodes mount it simultaneously will work.
Ceph RBD is also supported in combination with the KVM hypervisor. This gives
you the ultimate freedom in deciding your storage servers from using commodity
hardware to integrating with enterprise-grade solutions such as Dell EqualLogic,
NetApp, Dell/EMC PowerFlex, Linbit, Storpool.

## Storage Tiering

As part of the CloudStack’s ability to integrate with multiple storage
solutions, you will also be able to target specific storage servers to be used
for VM deployments. This can be extremely beneficial when you have storage
servers built with commodity hardware to support non disk intensive applications
and dedicate fast and robust hardware for disk intensive applications such as
databases.

## Block Storage Volumes

CloudStack supports the creation of block storage volumes of arbitrary size on
both network attached storage (NAS) or local disk that can be attached and
detached to and from your virtual machine.

## Wide Range Guest VM OS Support

Depending on the configured hypervisor, CloudStack supports a wide range of
guest operating system including Windows®, Linux®, and various versions of BSD®.

## Event/Audit Logs

All user interactions via the CloudStack UI or API are recorded as events. Each
event will indicate the type, severity level, description, owner of the
resource, the user that initiated the action, and when the event occurred.

## User Data Support

CloudStack supports the notion of allowing a user to submit any type of binary
user data when deploying a new virtual machine. This gives you the flexibility
of giving each virtual machine created from the same OS template its own
identity in the cloud.

## Guest OS Preferences

To take advantage of today’s hardware and OS licensing models, CloudStack allows
administrators to identify physical hosts to “prefer” specific operating
systems. For example this means that whenever possible, your Windows based
operating systems will be instantiated on all hosts that have been identified as
Windows “preferred.”

## Host Maintenance with Live Migration

Upgrades and hardware maintenance can be achieved on the cloud with no downtime
for guest VMs. CloudStack will live-migrate any VMs from hosts that have been
targeted for maintenance to prevent any disruption of service.

## Flexible Adapter Framework

The CloudStack was built from the ground up to support integration with a
variety of hypervisors, storage, network, and authentication solutions. Due to
this flexibility, we have created an Adapter Framework that will easily allow
you to further customize the cloud to suit your business needs.

## Random Password for Guest OS

You can further enhance your guest OS templates to include our custom random
password feature that will automatically generate a unique password upon the
creation of a VM. This will allow your customers to securely log in and change
their password. Both Windows and Linux based OS platforms are currently
supported.

## OpenStack Swift Integration for Secondary Storage

Secondary storage (templates and VM snapshots) can be stored in OpenStack Swift
as an alternative to NFS.

## Projects

Allow users to collaborate and share resources within a defined group or
"project". When a user creates an a project all usage under the project is
attributed to the account who becomes the project owner.

## Clustered LVM Support

CloudStack can utilize clustered Logical Volume Manager (LVM) storage
configurations starting with version 3.0.

## NetScaler Support

CloudStack supports MPX, VPX & SDX devices. Users can set up Layer-4 load
balancing rules. Supported protocols: HTTP, TCP & UDP; Algorithms: least loaded
and round robin; Persistent sessions: source IP based, cookie based.

## Network As a Service

Admin can compose network offerings with different network behaviors. For
example, a basic network offering with CloudStack Virtual Router offering
network services and a high-performance network offering with physical devices
such as NetScaler and Juniper SRX. Users can select the network offering of
choice while deploying a VM and also migrate VMs from one network offering to
another.

## SAML and LDAP Integration with 2FA

CloudStack supports SAML LDAP authentication as a built-in optional AUTH adapter.
CloudStack also supports two-factor authentication.

## Notification & Capacity Thresholds

Admin can set notification threshold to receive an alert when resource pool
crosses the notification threshold. Capacity threshold prevents CloudStack from
allocating further resources to that pool.

