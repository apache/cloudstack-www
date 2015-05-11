---
title: Apache CloudStack FAQ
---

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h1 id="indicators">Apache CloudStack: FAQ</h1>

</div>

</div>

</div>

This page is for Frequently Asked Questions (FAQ) having to do with Apache CloudStack as a project and its use.

Have a question that's not answered here? You might want to ask on the [CloudStack users mailing list](/mailing-lists.html). 

- [What is Apache CloudStack?](/cloudstack-faq.html#what)
- [Can I create my own private templates?](/cloudstack-faq.html#private)
- [How are users, accounts, and domains handled in CloudStack?](/cloudstack-faq.html#users)

### What is Apache CloudStack?

<a name="what"> </a>

Apache CloudStack is a complete software suite for creating Infrastructure as a Service (IaaS) clouds. Target environments include service providers and enterprises.

- The Apache CloudStack platform enables service providers to set up an on-demand, elastic cloud computing service. It enables a utility computing service by allowing service providers to offer self-service virtual machine instances, storage volumes, and networking configurations over the Internet.
- The Apache CloudStack platform enables enterprises to set up a private cloud for use by their own employees. The current generation of virtualization infrastructure targets enterprise IT departments who manage virtual machines the same way they would manage physical machines. The Apache CloudStack platform, on the other hand, enables self-service of virtual machines by users outside of the IT department. 
- As an open source IaaS, Apache CloudStack is available to individuals and organizations that wish to study and implement an IaaS for personal, educational, and/or production use.

The CloudStack platform includes the Management Server and extensions to industry-standard hypervisor software (*e.g.* XenServer, vSphere, KVM) installed on Hosts running in the cloud. The Management Server is deployed on a farm of management servers. The administrator provisions resources (Hosts, storage devices, IP addresses, etc.) into the Management Server and the Management Server manages those resources. The Management server presents web interfaces to end users and administrators that enable them to take actions on some or all of their instances in the IaaS cloud.

### Can I create my own private templates?

<a name="private"> </a>

Yes. Every template has a privacy level associated with it. Privacy levels include:</a>

- **Public**: The template is available to all users in the zone.
- **Private**: The template is available only to its owner. A user can make her private templates available to specific users.

Administrators and end users can add templates to the system. Users can see the template owner when viewing the template.

(Templates define the base OS image that will be used when a guest is first booted. For example, a template might be a 64-bit version of CentOS 5.3.)

### How are users, accounts, and domains handled in CloudStack?

<a name="users"> </a>

Apache CloudStack users are assigned accounts. An account is typically a customer of the service provider or a department in a large organization. Accounts are the unit of isolation in the cloud. Accounts are grouped by domains. Domains usually contain accounts that have some logical relationship to each other and a set of delegated administrators with some authority over the domain and its subdomains. For example, a service provider with several resellers could create a domain for each reseller.

Multiple users can exist in an account.  Users are like aliases in the account.  Users in the same account are not isolated from each other.  Most installations need not surface the notion of users; they just have one user per account.
