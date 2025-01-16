---
title: Apache CloudStack Features
---

# ☁️ Apache CloudStack Features

As a mature, turnkey Infrastructure-as-a-Service (IaaS) platform, Apache CloudStack has a comprehensive set of features. This is an extensive, but not exhaustive, set of features.

Do you have a feature request? If so, we’d like to invite you to [bring it up on the mailing list](/mailing-lists), and consider [filing a feature request in our issue tracker](https://github.com/apache/cloudstack/issues).

## User Interface

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Rich Management User Interface</div> | CloudStack provides a feature-rich out-of-the-box UI implemented on top of the CloudStack API to manage the cloud infrastructure. It is a fully AJAX-based solution compatible with the latest internet browsers and can be integrated with existing portals. |
| <div style={{ width: '120pt' }}>Brand-able Self Service User Interface</div> | The user interface, built with standard HTML and CSS using jQuery, can be easily customized and branded to match your company’s look and feel. |
| <div style={{ width: '120pt' }}>Secure Console Access</div> | A noVNC client allows users to access their virtual machines via any latest internet browser without needing external add-ons like JRE, ActiveX, or Flash. |
| <div style={{ width: '120pt' }}>Usage Management UI</div> | Offers a user-friendly graphical interface for monitoring, reporting, and managing resource usage, enhancing transparency and operational efficiency. |

## Security and Access Control

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>OAuth2 Authentication</div> | OAuth2 plugin provides Single-Sign-On with third-party identity providers such as Google and GitHub. |
| <div style={{ width: '120pt' }}>Two-Factor Authentication Framework</div> | Enables two-factor authentication for access to the CloudStack UI, applicable globally, by domain, or for specific users. |
| <div style={{ width: '120pt' }}>Support for Time based OTP (TOTP) Authenticator</div> | Provides a Time-based OTP (TOTP) Authenticator plugin for random OTP per transaction when authenticating cloud users. |
| <div style={{ width: '120pt' }}>Secure Single Sign</div> | On Aggregate and integrate existing applications with the management UI via secure single sign-on for a better user experience. |
| <div style={{ width: '120pt' }}>Multi-role Support</div> | Supports distinct account roles: Admin, Domain-Admin, and User, with dynamic role definition options. |
| <div style={{ width: '120pt' }}>SAML and LDAP Integration with 2FA</div> | Supports SAML and LDAP authentication and two-factor authentication as a built-in optional AUTH adapter. |

## APIs

Visit the [Integrations page](/integrations/) to find out more about the integrations available with Apache CloudStack.

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Powerful API</div> | Easily build, integrate, and use applications with the well-documented and extensible CloudStack API. Supports Amazon EC2 and S3 APIs. |
| <div style={{ width: '120pt' }}>VMware to KVM Migration</div> | Supports converting VMware disks to KVM via virt-v2v, facilitating migrations from managed and unmanaged vCenter to CloudStack-managed KVM hosts. |
| <div style={{ width: '120pt' }}>KVM Import</div> | Enables cloud administrators to import unmanaged KVM hypervisor infrastructure into Apache CloudStack. |
| <div style={{ width: '120pt' }}>Flexible Adapter Framework</div> | Built to support integration with various hypervisors, storage, network, and authentication solutions. The Adapter Framework allows for easy customization. |
| <div style={{ width: '120pt' }}>Object Storage</div> | Implements the Object Storage Framework, allowing operators to select external object store providers for users as a first-class resource. |

## Virtualization and Compute

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Hypervisor Agnostic</div> | Provides flexibility to integrate with major hypervisors including KVM, VMware, Citrix XenServer, and XCP-ng. |
| <div style={{ width: '120pt' }}>Dynamic Workload Management</div> | Automates distribution and rebalancing of compute, network, and storage resources based on defined policies on load balancing, compliance and data security. |
| <div style={{ width: '120pt' }}>VM Sync and High Availability</div> | Monitors and maintains VM state, ensuring continuous operation by handling status notifications and maintaining VM performance. |
| <div style={{ width: '120pt' }}>Host Maintenance with Live Migration</div> | Enables upgrades and hardware maintenance with no downtime for guest VMs through live migration. |
| <div style={{ width: '120pt' }}>Scheduled Instance Lifecycle Operations</div> | Allows users to automate state transitions of cloud resources with predefined schedules. |
| <div style={{ width: '120pt' }}>ARM64 Support and Multi-Architecture Zones</div> | Enables ARM64 compatibility, allowing seamless deployment across mixed ARM64 and x86_64 Hosts within a single Zone for optimized performance and flexibility. |

## Storage and Data Management

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Multiple Storage Solutions</div> | CloudStack supports various storage solutions, with iSCSI and NFS preferred, and also supports Ceph RBD with KVM. It offers flexibility for both commodity and enterprise-grade storage systems. |
| <div style={{ width: '120pt' }}>KVM Multiple Local Storage</div> | Supports multiple local storage volumes for KVM-based hosts. |
| <div style={{ width: '120pt' }}>Storage Tiering</div> | CloudStack allows targeting specific storage servers for VM deployments, enabling use of commodity hardware for less demanding apps and high-performance hardware for disk-intensive applications like databases. |
| <div style={{ width: '120pt' }}>Volume Encryption</div> | Supports encryption of both root and data volumes on KVM hypervisors, utilizing various storage types including NFS and ScaleIO. |
| <div style={{ width: '120pt' }}>Block Storage Volumes</div> | Supports creation and management of block storage volumes of arbitrary size on network-attached or local disks. |
| <div style={{ width: '120pt' }}>Snapshot Management</div> | Allows ad hoc snapshots or scheduled snapshots of data volumes, with options to create new volumes from existing snapshots. |
| <div style={{ width: '120pt' }}>Rich Template and ISO Management</div> | Users and administrators can upload and manage OS templates and ISO images, with global or per-account access and automatic copying to storage servers. |
| <div style={{ width: '120pt' }}>Easy Template Creation Process</div> | Facilitates creation of pre-defined templates from guest OS ISOs or existing VMs for efficient deployment. |
| <div style={{ width: '120pt' }}>CloudStack Snapshot Copy</div> | Enables copying volume snapshots across zones to ensure data recovery and continuity. |
| <div style={{ width: '120pt' }}>Managed User Data</div> | Users can register and manage UserData scripts as CloudStack resources, associating them with templates or during deployment. |
| <div style={{ width: '120pt' }}>Shared File Systems</div> | Provides Instances with shared file system access, supporting NFS with XFS or EXT4, ideal for high-availability and distributed storage solutions. |
| <div style={{ width: '120pt' }}>NAS Backup and Recovery Plugin</div> | Enhances backup capabilities by integrating NAS-based storage, providing a cost-effective solution for protecting cloud resources. |

## Networking

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Broad Network Virtualization Capabilities</div> | Supports software-based network management and VLANs, with Direct Attached IP integration. |
| <div style={{ width: '120pt' }}>MPLS Support in the Cloud</div> | Supports dedicating a VLAN to a specific account for MPLS between network nodes. |
| <div style={{ width: '120pt' }}>Virtual Routers, Firewalls and Load Balancers</div> | Integrates with software and hardware firewalls and load balancers, including F5 and Netscaler. |
| <div style={{ width: '120pt' }}>Network As a Service</div> | Allows composition of network offerings with various behaviors and migration of VMs across network offerings. |
| <div style={{ width: '120pt' }}>IPv6 support for Isolated and VPC Networks</div> | Before the CloudStack 4.17 release, CloudStack already supported IPv6 for Shared Networks; since the release IPv6 is also supported for Isolated Networks and VPC. |
| <div style={{ width: '120pt' }}>Dynamic and Static Routing</div> | Supports Static Routing with manual route configuration and Dynamic Routing using BGP for automatic route propagation, enabling flexible and efficient network traffic management. |
| <div style={{ width: '120pt' }}>VNF Appliances Support</div> | Allows cloud operators to integrate custom Virtual Network Functions (VNFs) for enhanced network services, including routing, firewalls, WAN optimization, IDS/IPS, and load balancing, while adhering to organizational security policies. |
| <div style={{ width: '120pt' }}>VMware NSX-T Support</div> | Seamlessly integrates with NSX-T v4 to provide advanced networking capabilities such as dynamic routing, security services, and enhanced scalability in VMware environments. |
| <div style={{ width: '120pt' }}>Security Groups for Shared Networks in Advanced Zones</div> | Adds support for Security Groups in Shared Networks, allowing Instance-level security enforcement in Advanced Zones. |
| <div style={{ width: '120pt' }}>Tungsten Fabric Support / OpenSDN</div> | Integrates the Tungsten Fabric / OpenSDN, offering high-performance networking with DPDK optimization and lifecycle management. Enhances security and network capabilities, supporting features like Static NAT, Port Forwarding, Firewall, and Load Balancing without Virtual Router overhead in KVM environments. |

## Management and Monitoring

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Usage Metering</div> | Provides real-time visibility, historical usage reports, and billing invoices through integration with the CloudStack Usage Engine. |
| <div style={{ width: '120pt' }}>Alerts and Notifications</div> | Built-in monitoring for alerts on resource thresholds and machine failures via API and email. |
| <div style={{ width: '120pt' }}>Event/Audit Logs</div> | Records all user interactions with details on type, severity, description, owner, user, and timestamp. |
| <div style={{ width: '120pt' }}>Notification & Capacity Thresholds</div> | Allows setting of notification thresholds and capacity limits to manage resource allocation. |
| <div style={{ width: '120pt' }}>CloudStack Webhooks</div> | Introduces a Webhook Framework enabling real-time notifications and seamless integration with third-party tools triggered by system events. |

## Projects and Resource Management

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Projects</div> | Enables collaboration and resource sharing within defined groups, with all usage attributed to the project owner. |
| <div style={{ width: '120pt' }}>Domains and Delegated Administration</div> | Supports cloud resource segregation and delegation of domain management to other administrators. |
| <div style={{ width: '120pt' }}>Resource Over Provisioning and Limits</div> | Allows over-provisioning of physical resources and setting limits on virtual resources. |

## Guest OS and Customization

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Wide Range Guest VM OS Support</div> | Supports various guest operating systems including Windows®, Linux®, and BSD® based on the hypervisor configuration. |
| <div style={{ width: '120pt' }}>Guest OS Preferences</div> | Allows administrators to prefer specific OS on physical hosts to optimize for hardware and licensing models. |
| <div style={{ width: '120pt' }}>User Data Support</div> | Supports binary user data submission during VM deployment for custom VM identities. |
| <div style={{ width: '120pt' }}>Random Password for Guest OS</div> | Enhance guest OS templates with the custom random passwords upon VM creation for unique, secure logins on both Windows and Linux OS platforms. |

## Additional Features/<br/>Functionality

| <div style={{ width: '120pt' }}>Feature/<br/>Functionality</div> | Description |
| --- | --- |
| <div style={{ width: '120pt' }}>Secure Cloud Deployments</div> | Ensures that all memory, CPU, network, and storage resources are both available and isolated from one user account to another within the cloud. |
| <div style={{ width: '120pt' }}>Comprehensive Service Management</div> | Administrators can define, meter, deploy, and manage multiple service and disk offerings within the cloud. |
| <div style={{ width: '120pt' }}>CloudStack DRS</div> | Automates workload distribution and rebalancing between hosts to enhance performance and resource utilization. |
| <div style={{ width: '120pt' }}>Edge Zones</div> | Simplifies deployment of lightweight zones in edge locations by removing complexities like shared storage, external switching and System VMs not being required for Edge Zones. |
| <div style={{ width: '120pt' }}>Autoscaling</div> | Native autoscaling support starting from CloudStack 4.18, removing the need for external devices for metrics. |
| <div style={{ width: '120pt' }}>Clustered LVM Support</div> | Supports clustered Logical Volume Manager (LVM) storage configurations. |
| <div style={{ width: '120pt' }}>NetScaler Support</div> | Integration with MPX, VPX & SDX devices for Layer-4 load balancing with support for HTTP, TCP & UDP protocols. |
| <div style={{ width: '120pt' }}>VR Zero Downtime Upgrades and Live Patching</div> | Enables zero downtime upgrades and live patching of virtual routers without complete removal or re-instantiation. |
| <div style={{ width: '120pt' }}>On Demand Virtual Data Center Hosting</div> | Provides users with virtually unlimited amount of computing resources – on demand, as required and billed by actual usage. |
| <div style={{ width: '120pt' }}>VR Live Patching</div> | This feature can also be used independently of upgrades and allow CloudStack admins to apply software updates to Virtual Routers on the fly. |
| <div style={{ width: '120pt' }}>Granular Resource Limits</div> | Empowers Administrators to define precise Compute and Storage limits, including specialized resources such as GPU Servers, ARM/x86 Hosts, and diverse Primary Storage types, ensuring optimal resource management. |
| <div style={{ width: '120pt' }}>Scheduled Instance Lifecycle Operations</div> | Enables users to automate Instance state transitions, such as start, stop, or reboot, based on predefined schedules for efficient resource management. |
