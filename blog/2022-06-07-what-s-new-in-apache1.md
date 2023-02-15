---
layout: post
title: What's New in Apache CloudStack 4.17

slug: what-s-new-in-apache1
---
<p>Apache CloudStack 4.17 is the latest release of the cloud management platform from the Apache Software Foundation and is a result of months of work from the development community. Apache CloudStack 4.17 is an LTS (Long Term Support) release so will be maintained for a period of 18 months after release.</p>

<p>As always, the release contains a myriad of small improvements and bug fixes but here we focus on the major new functionality of the release.</p>

<p><strong>VR Zero Downtime upgrades and Live Patching</strong></p>

<a href="/img/imported/bc49a766-6b83-4e9c-b4f9-a233a176699f"><img src="/img/imported/bc49a766-6b83-4e9c-b4f9-a233a176699f" alt="0.png" width="750" height="393" /></a>

<p>This is one of the most anticipated improvements by existing Apache CloudStack operators. CloudStack has always been easier to upgrade than many of its competitors but has required its virtual routers to be redeployed during an upgrade.</p>

<p><strong>o Zero Downtime Upgrades for Virtual Routers</strong><br />
With this new feature, the virtual router does not have to go through the process of complete removal and instantiating a new one involving shutdown, resource release, system VM template copy from secondary storage to primary, starting and VR configuration<br />
Previously when a new release of Apache CloudStack was deployed, the operations team had to organize maintenance windows to allow the redeployment of every virtual router. Now an in-place upgrade of CloudStack virtual routers can be performed with zero downtime.<br />
</p>

<p><strong>o VR Live Patching</strong><br />
Underpinning zero downtime upgrades is the new feature VR live patching. This feature can also be used independently of upgrades and allow CloudStack admins to apply software updates to Virtual Routers on the fly. Previously all Apache CloudStack scripts to manage the Virtual Router were stored in an ISO image and mounted during the first boot and then copied to the Virtual Router. Now the update is performed dynamically , as long as the base OS remains constant , users to not need to recreate the Virtual Router.</p>

<p><strong>IPv6 support for Isolated and VPC Networks</strong></p>
<a href="/img/imported/919e55f8-b723-4680-b538-f9afc2ce0e01"><img src="/img/imported/919e55f8-b723-4680-b538-f9afc2ce0e01" alt="2.png" width="750" height="393" /></a>

<p>IPv6 is considered a natural evolution of any system that intends to be present in computing environments in the future. The RIPE NCC, which assigns IP addresses in 76 countries to ISPs and other organizations, got its final allocation of IPv4 addresses from the Internet Assigned Numbers Authority (IANA) in 2012.<br />
Apache CloudStack already supported IPv6 for Shared Networks; now IPv6 is also supported for Isolated Networks and VPC. Users can deploy IPv6 networks where routing is currently static, allowing users to use subnets of IPv6 networks directly in CloudStack instances.<br />
In this context, unlike IPv4 that relies on NAT to deliver network services to users, the Virtual Router behaves like a real router, routing IPv6 packets and allowing users to configure firewall.</p>

<p><strong>StorPool Storage Plugin</strong></p>
<a href="/img/imported/c15f95e5-3b77-4bc5-b518-dc42ca867041"><img src="/img/imported/c15f95e5-3b77-4bc5-b518-dc42ca867041" alt="3.png" width="710" height="456"/></a>

<p>StorPool is a software defined storage platform in use by many CloudStack operators globally. StorPool has had &ldquo;managed storage&rdquo; integration with CloudStack for some time but now the StorPool Storage plug-in is natively included with Apache CloudStack. Thanks to the built-in automation of the plug-in, cloud builders can seamlessly manage their cloud from CloudStack&rsquo;s familiar user interfaces, and all storage-related operations are transparently passed down to the underlying StorPool primary storage system.</p>

<p>With the Storpool plug-in, the features available in StorPool get inherited by each cloud-deployed - enabling cloned provisioning, instant snapshots, thin provisioning, backup/DR and QoS policies per virtual disk and/or per Instance. Instance provisioning is nearly instantaneous and data placement policies and other settings can be changed in-flight to address changes in user requirements.</p>

<p><strong>Self-service Network Improvements</strong></p>

<a href="/img/imported/417bd9d1-ba39-4904-b56b-bcf226dab4ff"><img src="/img/imported/417bd9d1-ba39-4904-b56b-bcf226dab4ff" alt="4.png" width="668" height="575" /></a>

<p>Previously, the creation of Shared Networks and Private Gateways was an admin- only feature. When a user needed a Shared Network or Private Gateway, they would have to make a service request to the Service Provider or infrastructure operations team. Only after that, users could configure and use their respective resources.</p>

<p>With Apache CloudStack 4.17, users can self-serve the creation of these resources through the UI or API with no involvement of the admin.</p>

<p><strong>Multi-account Network Access</strong></p>

<a href="/img/imported/6c540c73-9951-4cb7-8a4c-7fdf1b25a000"><img src="/img/imported/6c540c73-9951-4cb7-8a4c-7fdf1b25a000" alt="5.png" width="750" height="242" /></a>

<p>In Apache CloudStack, users are organized into a logical structure of Accounts and Domains. In previous version of Apache CloudStack, the resources of each Account weren&rsquo;t shared, and each Account had its own resources. As an example, sometimes​​​​​​ a particular software application from a specific Account needed to access an application in another account under the same Domain. For this to be feasible, users configured their networks with the firewall rules, port forwarding, load balancing or private gateway to allow this type of use case. In addition, this configuration caused a lot of network overhead as all packets had to go through 2 different Virtual Routers to reach their destination.</p>

<p>With Apache CloudStack 4.17, users can connect their instances by adding a new network interface from an Account under the same Domain, simplifying this kind of use case. Furthermore, if the communication between instances occurs only at OSI layer 2, several overheads are removed, considering that the I/O packets will be established between the instances directly in the same network layer to which they are connected.</p>

<p><strong>Multiple SSH Keys</strong></p>

<a href="/img/imported/6242bd8e-d5ad-4027-aed4-3dd576a58199"><img src="/img/imported/6242bd8e-d5ad-4027-aed4-3dd576a58199" alt="6.png" width="750" height="393" /></a>

<p>CloudStack users can now create Instances and include multiple SSH Keys. This avoids the need to share private keys between users that access the Instance.</p>

<p>Previously, if users needed to add more SSH Keys to access the instance, it was necessary to connect to the instance and then edit the .ssh/authorized_keys file, however now all the keys needed can be selected during the instance creation itself.</p>

<p><strong>Structured System Events</strong></p>

<a href="/img/imported/69265134-a914-48d2-8af0-70cb5d8d0828"><img src="/img/imported/69265134-a914-48d2-8af0-70cb5d8d0828" alt="Untitled design.png" width="750" height="647" /></a>

<p>Apache CloudStack 4.17 brings much more structure to its system Events. Auditability and traceability of operations performed are important requirements for most organisations.</p>

<p>CloudStack Events are the primary data-source for auditing and troubleshooting a CloudStack environment. Events have now been improved by being explicitly linking to the resource that the event concerns. This allows Events to be searched, filtered and sorted by object.</p>

<p>Navigation is also improved, allowing users to navigate easily to the events for a specific object i.e. Instance, Network, Host</p>

<p>Many CloudStack operators had previously parsed the Event messages to store them in a 3rd party data source. The messages remain unchanged to allow backwards compatibility of such integrations.</p>

<p><strong>Snapshot improvements</strong></p>

<p>Apache CloudStack 4.17 introduces storage-based snapshots - an alternative for taking snapshots of virtual machines running under the KVM hypervisor. The current implementation uses libvirt to perform the snapshot and doesn&rsquo;t allow storage providers that keep VM virtual disks in RAW format (e.g., Ceph/NetApp SolidFire/LINSTOR/StorPool Storage) to take VM snapshots.</p>

<p>The storage-based snapshots feature provides for such storage systems the functionality to take crash-consistent snapshots of any VM&rsquo;s virtual disks without the memory. The feature relies on each underlying storage plug-in&rsquo;s capability to create/revert/delete virtual disk snapshots.</p>

<p><strong>Instance and Volumes migration improvements</strong></p>

<p>Apache CloudStack allows admins to migrate Instances and volumes using a wizard. Previously this wizard would automatically allocate Primary Storage for Instance Volumes based solely on storage tags. CloudStack 4.17 now allows the admin to explicitly allocate each Instance Volume to different specific Primary Storages.</p>

<p>In addition, to make more informed decisions while selecting destination host and storage, additional information is presented in the UI such as the occupancy of existing capacity of these resources, which brings a significant improvement in migration functionality.</p>

<p><strong>More flexible service offerings</strong></p>

<a href="/img/imported/7d34a18b-a0d9-4da5-8ffe-bfb66496aaf3"><img src="/img/imported/7d34a18b-a0d9-4da5-8ffe-bfb66496aaf3" alt="9.png" width="750" height="596"/></a>

<p>Apache CloudStack 4.17 redefines the relationship between the Service Offerings used for Instance Root Disks and the Service Offering for the Instance itself.</p>

<p>Instance Root Volumes were previously handled decoupled from Disk Offerings: a change of the Root Volume characteristics wasn&rsquo;t possible due to this logical disconnection. Thus, users couldn&rsquo;t, for example, change to a Disk Offering that guaranteed higher I/O needs if necessary. So, there were two types of resources, Root volume and Data volume, but the treatment used in both was not unified.</p>

<p>The existing model is still fully supported if required, but this improvement gives operators far greater flexibility when it comes to the provisioning and billing for root volumes.</p>

<p><strong>Server Status Report</strong>
Apache CloudStack 4.17 now gives admins the ability to see the status/health of their Management Servers, the Usage Server, and the underlying database server (and their respective individual components). This feature is available in the UI and API for integration/monitoring purposes.</p>

<p><strong>KVM multiple local storage</strong></p>

<p>Apache CloudStack 4.17 now supports multiple local storage volumes for KVM based Hosts. Previously, for KVM hosts, it was only possible to have one primary local storage, which prevented providers from adding extra disks to be offered on CloudStack.</p>

<p>With this improvement, if more than one local disk on the KVM host is available, it is possible to designate them to be offered as a local disk offering , thus enabling a better use of allocated resources.</p>

<p><strong>Reserve and release Public IPs</strong>
Users can now reserve public IPs for later use on their networks. This new functionality makes managing this feature easier, as users often need to have IP information available beforehand to parameterize DNS records, for example.</p>
