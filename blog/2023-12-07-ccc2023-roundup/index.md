---
layout: post
title: CloudStack Collaboration Conference 2023 Event Roundup
tags: [news, roundup]
authors: [jamie]
slug: ccc2023-roundup
---

[![](banner.jpg "CCC 2023 Roundup")](/blog/ccc2023-roundup)

The [CloudStack Collaboration Conference
2023](https://www.cloudstackcollab.org/) took place on 23-24th November. The
annual event is the largest get-together for the global Apache CloudStack
community. The hybrid event is aimed at developers, operators and users to
discuss and evolve the open-source software, its functionality and real-world
operability. It introduces attendees to the CloudStack family, community
leaders, project members and contributors.

The conference, arranged by a group of volunteers from the Apache CloudStack
Community, took place in the voco hotel, in Porte de Clichy, Paris. It hosted
over 350 attendees from 30+ countries, with 47 speakers holding sessions and
workshops.

The Apache CloudStack community would like to express their gratitude to the
sponsors of the conference, whose support made the event a reality – [ShapeBlue](https://www.shapeblue.com/),
[StorPool](https://storpool.com/), [LINBIT](https://linbit.com/), [DIMSI](https://cloud.dimsi.io/#/), [Vates](https://vates.tech/), [mitteldeutsche IT](https://mitteldeutsche-it.de/), [Leaseweb](https://www.leaseweb.com/), [proIO](https://www.proio.com/) and
[Your.Online](https://your.online/).

This blog provides a summary of the event, featuring the session slides and recordings.

<a class="button button--primary button--lg" href="https://photos.app.goo.gl/9Ke53cngVzTCS2wE7" target="_blank">View Photo Gallery</a><br/>

<!-- truncate -->

## Day 1 Sessions

### State of the Union, [Rohit Yadav](https://www.linkedin.com/in/rohityadavcloud/)

The Apache CloudStack project has had another exciting year – with growth in
adoption, functionality and community size. In the project’s annual State of The
Union talk, the current VP of the project, Rohit Yadav, reflects on the last
year of the project’s collaboration, developments in CloudStack and community
activity. He sets out how he sees the project developing over the next few
years.

[![](youtube/01-StateOfTheUnion.png "State of the Union - video")](https://www.youtube.com/watch?v=cCNCmJxxEPA&si=4gDlygRMvxFkKtpf9)

[![](slides/01-stateoftheunion.png "State of the Union - slides")](https://www.slideshare.net/slideshow/embed_code/key/hH2CO8kHcQaCQo?hostedIn=slideshare&page=upload)

### What’s New in CloudStack 4.19, [Abhishek Kumar](https://www.linkedin.com/in/shwstppr/)

This session gives a brief introduction of the new and exciting feature in the
latest (upcoming) CloudStack LTS release, ie, 4.19.0. The discussion includes
the details on the timeline of the CloudStack 4.19.0 release, overview of some
of the marquee, new feature of the release – Object storage framework, KVM
ingestion, Hypervisor agnostic simple DRS, CAPC aware CKS, OAuth2, DRaaS with
Multi zone disaster recovery, etc and a summary of improvements added since the
previous major LTS release of the CloudStack, ie, 4.18.0.

[![](youtube/02-whatsnew4.19.png "What's New in CloudStack 4.19 - video")](https://www.youtube.com/watch?v=2TOM0oI80fU&si=I4k8FQJ_XGp4gDDK9&controls=0)

[![](slides/02-whatsnew.png "What's New in CloudStack 4.19 - slides")](https://www.slideshare.net/slideshow/embed_code/key/CeiT7H0R6N62rM?hostedIn=slideshare&page=upload)

### Keynote Talk: Open Source is Not Dead, [Charles Schulz](https://www.linkedin.com/in/charlesschulz/)

Successful Open Source companies change their business models and then the open
source license they were distributing their software on. More and more it feels
like Open Source is just a marketing buzzword designed to lure customers to a
particular solution. On the regulatory front, the EU is implementing the CRA and
handling software as it were trucks manufacturing. Is there any hope left for
Open Source? Has it failed in delivering its premise? Fear not. Open Source’s
not dead. It has already won and it will prevail again.

[![](youtube/03-keynote.png "Open Source is Not Dead - video")](https://www.youtube.com/watch?v=sEWBox97qG4&si=cJ7ZVRnaSBK5l9k9&controls=0)

[![](slides/03-keynote.png "Open Source is Not Dead - slides")](https://www.slideshare.net/slideshow/embed_code/key/8AqGBCIdZV8jFe?hostedIn=slideshare&page=upload)

### Why and How CloudStack at weSystems, [Stephan Bienek](https://www.linkedin.com/in/stephan-bienek-66aa69206/)

Why? What? How? During the session, Stephan shares what made weSystems choose
CloudStack as their main platform, which they base most of their managed
services on. In addition, he talks about which services they provide based on
CloudStack and how they integrated and use CloudStack today.

[![](youtube/04-wesystems.png "Why and How CloudStack at weSystems - video")](https://www.youtube.com/watch?v=UyjxheK1Dp0&si=Pemo-3Zy8wja4Glr&controls=0)

[![](slides/04-wesystems.png "Why and How CloudStack at weSystems - slides")](https://www.slideshare.net/slideshow/embed_code/key/yezSoxOEeGFX8c?hostedIn=slideshare&page=upload)


### How We Use CloudStack to Provide Managed Hosting, [Swen Brüseke](https://www.linkedin.com/in/swen-br%C3%BCseke-391912193/)

Swen shows how proIO utilize CloudStack to provide customers with managed
hosting solutions and versatile public and private cloud solutions, mainly based
on open-source software.

[![](youtube/05-proIO.png "How We Use CloudStack to Provide Managed Hosting - video")](https://www.youtube.com/watch?v=zZV8689HiUk&si=6HYye9qr_jV3mXSP&controls=0)

[![](slides/05-proio.png "How We Use CloudStack to Provide Managed Hosting - slides")](https://www.slideshare.net/slideshow/embed_code/key/cTLrJgXbrFKyrj?hostedIn=slideshare&page=upload)

### Panel Discussion: Apache CloudStack Question Time, Giles Sirett, Wido den Hollander, Stephan Bienek, Swen Brüseke

Panel group – taking a range of submitted questions from the audience (across
any subject).

[![](youtube/06-PanelDay1.png "Panel Discussion: Apache CloudStack Question Time")](https://www.youtube.com/watch?v=Bx0zECFsyPg&si=3Ww-yWC3McoMNNyQ&controls=0)

### KVM Security Groups Under the Hood, [Wido den Hollander](https://www.linkedin.com/in/widodh/)

They are just a few clicks in the UI or a single API call, but how do security groups work at KVM hypervisor level? How do they filter traffic and what else do they do in addition to firewalling? What Anti-Spoofing policies are implemented by the security groups?

In this talk, Wido dives into the specifics of the security groups on the KVM hypervisor for both IPv4 and IPv6.

[![](youtube/07-KVMsecurity.png "KVM Security Groups Under the Hood - video")](https://www.youtube.com/watch?v=NU1b7x2HO_E&si=G5QPOffq9Gcz6qX1&controls=0)

[![](slides/06-kvm.png "KVM Security Groups Under the Hood - slides")](https://www.slideshare.net/slideshow/embed_code/key/jpvFeSSAGBIoq0?hostedIn=slideshare&page=upload)

### Elevating Privacy and Security in CloudStack, [Boris Stoyanov](https://www.linkedin.com/in/bstoyanov/)

In an increasingly interconnected digital landscape, safeguarding data privacy
and ensuring robust security measures are paramount. CloudStack offers a dynamic
ecosystem for deploying and managing cloud resources. However, to fully harness
its potential, it is crucial to address privacy and security concerns
effectively.

This presentation explores the realm of possibilities and demonstrates how
CloudStack can enhance the privacy and security of your cloud deployments. Boris
examines practical approaches to protect sensitive data, fortify communications,
and secure your infra against emerging threats. Join us on a journey to discover
how CloudStack can be your trusted ally in the quest for a more secure and
private cloud environment.

[![](youtube/08-elevatingprivacy&security.png "Elevating Privacy and Security in CloudStack - video")](https://www.youtube.com/watch?v=1xeDKARcZQI&si=fBjXXoOqdWN7qgSB&controls=0)

[![](slides/07-privacy.png "Elevating Privacy and Security in CloudStack - slides")](https://www.slideshare.net/slideshow/embed_code/key/yFdoBH1au7v1gl?hostedIn=slideshare&page=upload)

### Migrating VMware Infra to KVM Using CloudStack, [Nicolas Vazquez](https://www.linkedin.com/in/nvazquezuy/)

In this session, Nicolas presents a new feature, targeted for CloudStack 4.19,
which allows administrators to migrate Instances from a VMware environment
(external or connected to CloudStack) and import them into a KVM
CloudStack-managed environment.

[![](youtube/09-vmware.png "Migrating VMware Infra to KVM - video")](https://www.youtube.com/watch?v=B-hoNG_PPQk&si=uf0b8L-J6f4kG-Cn&controls=0)

[![](slides/08-vmware.png "Migrating VMware Infra to KVM - slides")](https://www.slideshare.net/slideshow/embed_code/key/2rNDwbqdxlZ3YW?hostedIn=slideshare&page=upload)

### Updates on the LINSTOR Driver for CloudStack, [Rene Peinthor](https://github.com/rp-)

About two Years ago, the LINSTOR driver for CloudStack was merged into the
CloudStack code base, and it has received updates since then. Rene gives a quick
overview of LINSTOR/DRBD and the driver, followed by more details on recently
added features.

One is the ability to optionally store data snapshots on secondary storage,
about making deep copies of templates vs using snapshots, about using
LINSTOR/DRBD on XCP-ng hypervisors under Apache CloudStack, and (if finished by
November) about VM-snapshots on LINSTOR/DRBD.

[![](youtube/10-LINSTOR.png "Updates on the LINSTOR Driver for CloudStack - video")](https://www.youtube.com/watch?v=_5voWyJOZlg&si=BunHIxkl3xgWk_E0&controls=0)

[![](slides/09-linstor.png "Updates on the LINSTOR Driver for CloudStack - slides")](https://www.slideshare.net/slideshow/embed_code/key/JulMCxkdkq002m?hostedIn=slideshare&page=upload)

### Zero to Cloud Hero: Crafting a Private Cloud from Scratch with XCP-ng, Xen Orchestra and CloudStack, [Olivier Lambert](https://www.linkedin.com/in/olivier-lambert-22316b26/)

Dive into the seamless integration of the Vates stack as the foundation for your
CloudStack deployment. In this workshop, you’ll witness the power and simplicity
of XCP-ng and Xen Orchestra. From a blank slate to a fully operational private
cloud, Olivier guides you through each pivotal step. Learn how to streamline
your cloud setup process and unlock the potential of a private cloud
infrastructure that’s both efficient and easy to manage. Watch to discover how
to transform bare metal into a cloud powerhouse in mere minutes.

[![](youtube/11-zero.png "Zero to Cloud Hero: Crafting a Private Cloud from Scratch - video")](https://www.youtube.com/watch?v=btRZMpfsg4E&si=mrz7xTQaXL41J62g&controls=0)

[![](slides/10-zero.png "Zero to Cloud Hero: Crafting a Private Cloud from Scratch - slides")](https://www.slideshare.net/slideshow/embed_code/key/JSyhBTmluzWpSV?hostedIn=slideshare&page=upload)

### VNF Integration and Support in CloudStack, [Wei Zhou](https://www.linkedin.com/in/wei-zhou-3635b633/)

In this session, Wei presents how CloudStack 4.19 adds the capability to easily
and quickly perform a light-touch integration of networking appliances with ACS,
allowing for operators to offer a broader range of networking services while
empowering end-users to effortlessly deploy their own virtualized network
functions.

[![](youtube/12-VNF.png "VNF Integration and Support - video")](https://www.youtube.com/watch?v=JZTT9OlqtDs&si=16FEtwBr3iMaMV90&controls=0)

[![](slides/11-vnf.png "VNF Integration and Support - slides")](https://www.slideshare.net/slideshow/embed_code/key/s3DBuNWRn9HnOe?hostedIn=slideshare&page=upload)

### Developments to CloudStack’s SDN ecosystem: Integration with VMWare NSX 4, [Pearl Dsilva](https://www.linkedin.com/in/pearldsilva/), [Alexandre Mattioli](https://www.linkedin.com/in/alexandremattiolibastos/)

In recent releases, Apache CloudStack has been evolving towards richer support
for Software Defined Networking (SDN) solutions. In ACS 4.18, we introduced
integration with Tungsten Fabric SDN, which opened ACS to several long-awaited
features such as overlay networks, BGP, MPLS and other sophisticated networking
capabilities. We now are working towards integrating VMWare NSX 4 with
CloudStack, which will enable agile software-defined infrastructure for building
cloud-native micro-segmented application environments on VMWare using
CloudStack.

In this talk, Pearl and Alex delve into the expansion of ACS’s SDN ecosystem
with the integration of VMWare NSX 4, thus enabling operators to make informed
decisions regarding the right SDN platform for their CloudStack deployment. They
also look into what it takes to create a new network provider in CloudStack.

[![](youtube/13-SDN.png "Developments to CloudStack’s SDN ecosystem: Integration with VMWare NSX 4 - video")](https://www.youtube.com/watch?v=f7ao-vv7Ahk&si=OfeLhVMWfk0daXmt&controls=0)

[![](slides/12-nsx.png "Developments to CloudStack’s SDN ecosystem: Integration with VMWare NSX 4 - slides")](https://www.slideshare.net/slideshow/embed_code/key/24zqzqc3nH7QtT?hostedIn=slideshare&page=upload)

### Backroll, News and Demo, [Pierre Charton](https://www.linkedin.com/in/pierre-charton-068b6748/), [Matthias Dhellin](https://www.linkedin.com/in/matthias-dhellin-217068298/), [Ousmane Diarra](https://www.linkedin.com/in/odiarra1/)

Pierre, Matthias, and Ousmane demonstrate the new Backroll version, with a new
and easy installation process. They also give a demo of the new features of the
project and its integration with CloudStack, providing an all-in-one solution.

[![](youtube/14-backroll.png "Backroll, News and Demo - video")](https://www.youtube.com/watch?v=yh-purfnMGg&si=bFugsXhrmew02Xui&controls=0)

[![](slides/13-backroll.png "Backroll, News and Demo - slides")](https://www.slideshare.net/slideshow/embed_code/key/apYEI9VvvPULUe?hostedIn=slideshare&page=upload)

### Backup and Disaster Recovery with CloudStack and StorPool – Workshop, [Venko Moyankov](https://www.linkedin.com/in/venkomoyankov/)

One of the main shortcomings of CloudStack compared to VMware is the lack of built-in support for disaster recovery. In this workshop, Venko shows how you can build a cloud using Apache CloudStack and StorPool storage that features disaster recovery capabilities and off-site backups. He shows a reference architecture of the solution, followed by a live demo on how to set backup policies, backup virtual machines and recover the VMs in a site-down event.

The workshop allows an open discussion about the practical aspects of implementing a DR service, the difficulties of building such solutions and how to address them.

[![](youtube/15-backup.png "Backup and Disaster Recovery with CloudStack and StorPool - video")](https://www.youtube.com/watch?v=JOveVuzpnFo&si=eTwNgu5eh96gmifr&controls=0)

[![](slides/14-storpool.png "Backup and Disaster Recovery with CloudStack and StorPool - slides")](https://www.slideshare.net/slideshow/embed_code/key/Daittf77mUHGFb?hostedIn=slideshare&page=upload)

### Mitigating Common CloudStack Instance Deployment Failures, [Jithin Raju](https://www.linkedin.com/in/rajujith/)

A discussion on the common failures when using CloudStack taking instance
deployment as an example. The session includes 15 specific failure scenarios,
their causes, and possible mitigation steps.

[![](youtube/16-mitigating.png "Mitigating Common CloudStack Instance Deployment Failures - video")](https://www.youtube.com/watch?v=G_W_wK8Urmo&si=MZiOgA3xvgK0kofU&controls=0)

[![](slides/15-mitigating.png "Mitigating Common CloudStack Instance Deployment Failures - slides")](https://www.slideshare.net/slideshow/embed_code/key/uG9TbWhwII4lz?hostedIn=slideshare&page=upload)

## Day 2 Sessions

### How to Re-use Old Hardware with CloudStack. Saving Money and the Environment, [Wido den Hollander](https://www.linkedin.com/in/widodh/)

CloudStack allows you to use older hardware for a longer time in your cloud
environment. By using older hardware for a longer time you can save money and
the environment by not producing new hardware.

[![](youtube/17-re-use.png "How to Re-use Old Hardware - video")](https://www.youtube.com/watch?v=KAJCkC00tzQ&si=56v3sWaRj93XfF2m&controls=0)

[![](slides/16-your.online.png "How to Re-use Old Hardware - slides")](https://www.slideshare.net/slideshow/embed_code/key/wIknV9DWEOPPXG?hostedIn=slideshare&page=upload)

### Hypervisor Agnostic DRS in CloudStack - Brief overview & demo, [Vishesh Jindal](https://www.linkedin.com/in/vishesh92)

Vishesh has been working on the feature hypervisor-agnostic DRS in CloudStack. He briefly overviews the implementation and discusses the algorithms currently available and how they can improve resource allocation and workload balancing in virtualized environments. Additionally, Vishesh showcases a live demo of hypervisor agnostic DRS in action, highlighting its capabilities and effectiveness.

[![](youtube/18-DRS.png "Hypervisor Agnostic DRS - video")](https://www.youtube.com/watch?v=nSwpHgRUVoI&si=i0m2QSrQ1XO7Flfn&controls=0)

[![](slides/17-drs.png "Hypervisor Agnostic DRS - slides")](https://www.slideshare.net/slideshow/embed_code/key/GxMdQm0x29aIwl?hostedIn=slideshare&page=upload)

### Building a Software Makerspace with CloudStack to Drive Innovation by Improving Learning and Research Abilities at Universities, [Jonas Willén](https://www.linkedin.com/in/jonas-will%C3%A9n-6a745a56), [Pierre Le Fèvre](https://www.linkedin.com/in/pierrelefevre), [Emil Karlsson](https://www.linkedin.com/in/e-karlsson)

A makerspace today is focused on turning ideas into physical prototypes by
providing resources in terms of tools and infrastructure. In a university, a
makerspace provides students with an opportunity to build a portfolio. Students
experiment through an entire development life cycle by creating prototypes for
each stage of a cycle. It has been shown to be a productive method for learning.

To the best of our knowledge, software development is yet to be included in the
makerspace concept. In the case of our software makerspace, it is following the
same principles as a traditional makerspace for device and mechanical
prototyping, but instead provides software development tools. One such
indispensable tool is cloud-based infrastructure. A cloud facilitates rapid
prototyping of machine learning tools, microservices, IoT data mining, etc.

This talk presents their approach to extend the concept of a makerspace to
software development using a student developed private cloud. They present the
method they used to gather requirements from various researchers and students.
They also present the final design and the current implementation of the cloud
using Apache CloudStack. Finally, they discuss how other universities could
implement their own software makerspace and its benefits.

[![](youtube/19-makerspace.png "Building a Software Makerspace with CloudStack - video")](https://www.youtube.com/watch?v=QYT1HA6krU4&si=2OD0flTkxgZvRV9x&controls=0)

[![](slides/18-kth.png "Building a Software Makerspace with CloudStack - slides")](https://www.slideshare.net/slideshow/embed_code/key/ghw7Vj1Kvco7t?hostedIn=slideshare&page=upload)

### DRBD Deep Dive, [Philipp Reisner](https://www.linkedin.com/in/philipp-reisner)

LINSTOR/DRBD became a primary storage option for Apache CloudStack nearly two years ago. In this session, Philipp shares insights about the internals of DRBD, the data-path part of the data-storage solution.

Knowing about DRBD’s meta-data, the activity log, and the bitmap will enable you to make more educated decisions when it comes to selecting the right hardware for your next ApacheCloudStack+LINSTOR+DRBD deployment. When your servers have different storage tiers, what are the advantages and trade-offs regarding putting data and meta-data on different tiers?

Recently, DRBD got a new transport, load-balancing TCP, that joins the existing TCP transport, and the RDMA transport received important updates. Looking beyond DRBD, what is important to know when selecting the RAID level and data alignment? Philipp concludes the session with comments regarding LVM compared to ZFS.

[![](youtube/20-DRBD.png "DRBD Deep Dive - video")](https://www.youtube.com/watch?v=NG74BPK7oYQ&si=0B3tHBOK-DHPJKN9&controls=0)

[![](slides/19-drbd.png "DRBD Deep Dive - slides")](https://www.slideshare.net/slideshow/embed_code/key/E9cbsIaqiLwtpz?hostedIn=slideshare&page=upload)

### Setting Up Your First CloudStack Environment with Beginners Challenges, [MD Rasel](https://www.linkedin.com/in/mdrasel0)

Are you eager to embark on your journey into the world of cloud computing with Apache CloudStack but don’t know where to start? This informative session is designed especially for beginners. MD Rasel guides you through the essential steps of setting up your very first CloudStack environment, from initial installation to basic configuration.

This session aims to equip newcomers to Apache CloudStack with the fundamental knowledge and practical skills required to establish their own cloud infrastructure. MR Rasel addresses common challenges that beginners often encounter during the setup process and provide valuable insights on how to overcome them.

The session consists of a combination of presentations and live demonstrations. Attendees had the opportunity to follow along with the setup process in real time and ask questions.

[![](youtube/21-beginners.png "Setting Up Your First CloudStack Environment with Beginners Challenges - video")](https://www.youtube.com/watch?v=vZfHfoYEMdY&si=IQ6w1EH6gcHPtwGQ&controls=0)

[![](slides/20-beginners.png "Setting Up Your First CloudStack Environment with Beginners Challenges - slides")](https://www.slideshare.net/slideshow/embed_code/key/dp1tvpjta0Ehur?hostedIn=slideshare&page=upload)

### Transitioning from VMware vCloud to Apache CloudStack: A Path to Profitability and Competitiveness, [Marco Sinhoreli](https://www.linkedin.com/in/msinhore)

In this session, Marco explores the potential of migrating from VMware vCloud to
Apache CloudStack with KVM. VMware vCloud Suite is a robust cloud infrastructure
and management solution that combines vSphere and vRealize Suite, providing
automation and operations capabilities for traditional and modern infrastructure
and apps. However, the transition to Apache CloudStack can offer enhanced
profitability and competitiveness.

Marco delves into the benefits of Apache CloudStack, including its
cost-effectiveness and open-source nature, and discusses how a gradual migration
from VMware vCloud can reduce ownership costs, increase profitability, and
enhance competitiveness. He also covers the practical steps and considerations
in planning and executing this transition effectively.

[![](youtube/22-vCloud.png "Transitioning from VMware vCloud to Apache CloudStack - video")](https://www.youtube.com/watch?v=yZMjGUwU_yY&si=K66whqgepnCvZ0g0&controls=0)

[![](slides/21-transitioning.png "Transitioning from VMware vCloud to Apache CloudStack - slides")](https://www.slideshare.net/slideshow/embed_code/key/l4d4JDv6nhe9K2?hostedIn=slideshare&page=upload)

### CloudStack and GitOps at Enterprise Scale, [Alex Dometrius](https://www.linkedin.com/in/alexdometrius), [Rene Glover](https://www.linkedin.com/in/rene-glover)

The AT&T team recently embarked on a journey with CloudStack and has since
deployed a solution which encompasses multiple data-centers. This talk focuses
on how they are using open source tools like CloudStack, FreeIPA, and Metal as a
Service (MaaS) to support KVM-based VM provisioning at an enterprise scale
within a GitOps model.

[![](youtube/23-Gitops.png "CloudStack and GitOps at Enterprise Scale - video")](https://www.youtube.com/watch?v=Bc1a8YHdEq4&si=qhKphND6qi0B2Lo5&controls=0)

[![](slides/22-gitops.png "CloudStack and GitOps at Enterprise Scale - slides")](https://www.slideshare.net/slideshow/embed_code/key/7vtRbqok6FEeUV?hostedIn=slideshare&page=upload)

### 2FA and OAuth2 in CloudStack, [Andrija Panić](https://www.linkedin.com/in/andrijapanic)

This talk is about authentication and authorization – Two-Factor Authentication
(2FA) and OAuth2 explaining their critical roles in enhancing security and user
experience within the realm of Apache CloudStack.

With Two-Factor Authentication (2FA), we strengthen the authentication process,
mitigate password-related or usual login vulnerabilities, and ensure compliance
with security standards. On the other side of the authentication spectrum,
OAuth2, the industry-standard authorization framework, simplifies the process of
granting access to resources. Andrija discusses how this can be used and how it
fits in CloudStack.

[![](youtube/24-2FA.png "2FA and OAuth2 - video")](https://www.youtube.com/watch?v=62TovtIQW9s&si=YL2kfSjy6Fx9xr6G&controls=0)

[![](slides/23-2fa.png "2FA and OAuth2 - slides")](https://www.slideshare.net/slideshow/embed_code/key/1GwD0PDHEPecvl?hostedIn=slideshare&page=upload)

### Centralized Logging Feature in CloudStack using ELK and Grafana, [Kiran Chavala](https://www.linkedin.com/in/kiran-chavala-1bb6a97)

In this session, Kiran demonstrates how to centralize all the CloudStack-related
logs in one place using Elastic Search and generate beautiful dashboards in
Grafana. This session simplifies the troubleshooting process involved with
CloudStack and quickly helps to resolve the issue.

[![](youtube/25-ELK.png "Centralized Logging Feature in CloudStack using ELK and Grafana - video")](https://www.youtube.com/watch?v=p8Qugu9stpI&si=hT18taTw6HPlCBYz&controls=0)

[![](slides/24-elk.png "Centralized Logging Feature in CloudStack using ELK and Grafana - slides")](https://www.slideshare.net/slideshow/embed_code/key/yalVUMOq5J3b30?hostedIn=slideshare&page=upload)

### DRaaS using Snapshot copy and destination selection (DRaaS), [Alexandre Mattioli](https://www.linkedin.com/in/alexandremattiolibastos)

Apache CloudStack 4.19 introduces the capability for end-users to copy their
root disk or volume snapshots to one (or more) ACS Zones without operator
intervention. In this talk, Alex shows how this simple yet powerful new feature
enables for end-users to control where their data resides and for operators to
provide low-cost and robust DRaaS to their customers.

[![](youtube/26-DraaS.png "DRaaS using Snapshot copy and destination selection - video")](https://www.youtube.com/watch?v=fVgKUM-mWMA&si=gc46OYlqcZbd68Oe&controls=0)

[![](slides/25-draas.png "DRaaS using Snapshot copy and destination selection - slides")](https://www.slideshare.net/slideshow/embed_code/key/Cvm7rz3ZGuJBMR?hostedIn=slideshare&page=upload)

### Use Existing Assets to Build a Powerful In-house Cloud Solution, [Magali Pervan](https://www.linkedin.com/in/magali-pervan), [Joffrey Luangsaysana](https://www.linkedin.com/in/jluang), [Grégoire Lamodière](https://www.linkedin.com/in/gr%C3%A9goire-lamodi%C3%A8re-04171210)

How to minimize the impact when it’s time to implement a cloud solution for
automating internal workloads and delivering efficient solutions? Magali,
Joffrey, and Grégoire present a case study of a successful hardware reuse
project, including key metrics: Business objectives, Performance objectives and
Financial objectives.

[![](youtube/27-DIMSI.png "Use Existing Assets to Build a Powerful In-house Cloud Solution - video")](https://www.youtube.com/watch?v=32djHek0_3Q&si=Rs1YQ12NBYuDW5S8&controls=0)

[![](slides/26-dimsi2.png "Use Existing Assets to Build a Powerful In-house Cloud Solution - slides")](https://www.slideshare.net/slideshow/embed_code/key/2QOHFP4MHSSlnK?hostedIn=slideshare&page=upload)

### CloudStack Managed User Data and Demo, [Harikrishna Patnala](https://www.linkedin.com/in/harikrishnapatnala)

We know existing Userdata support in CloudStack enables users to inject custom
scripts or data into virtual machines during provisioning, facilitating
automation and customization of VM setup and configuration. This talk is about
delivering the extended support of userdata with “Managed UserData” which
enables users to register and manage their own UserData script(s) as a
CloudStack resource - followed by a demo.

[![](youtube/28-UserData.png "CloudStack Managed User Data - video")](https://www.youtube.com/watch?v=T0A5bg0Emho&si=SkpBlOYviC5AKivS&controls=0)

[![](slides/27-userdata.png "CloudStack Managed User Data - slides")](https://www.slideshare.net/slideshow/embed_code/key/IaWWuPofZoFYXs?hostedIn=slideshare&page=upload)

### Project Sustainability and Vendor Contributions in an Apache Governance Model – Panel, [Ivet Petrova](https://www.linkedin.com/in/ivpetrova), [Daan Hoogland](https://www.linkedin.com/in/dhoogland) and [Alex Ivanov](https://www.linkedin.com/in/alex-p-ivanov)

This Panel discusses the Apache CloudStack project sustainability and vendor
contributions in an Apache Governance Model. The participants present the
different points of view from the development perspective, vendor contributions
and PMCs. Panellists share their perspectives on how to help the project grow,
increase its visibility and ensure its longevity and healthy development.

[![](youtube/29-PanelDay2.png "Project Sustainability and Vendor Contributions in an Apache Governance Model")](https://www.youtube.com/watch?v=L9ruZKpSYoU&si=YvIf0X87GM0szqfU&controls=0)

### Enabling DPU Hardware Accelerators in XCP-ng Cloud Platform Environment, Andrei Semenov

In cloud computing environments, VMs require fast access to resources like
storage and networking. The hardware that the VMs access is implemented in
software and/or by passing through a dedicated hardware device. Software-based
solutions consume extra CPU cycles, thus resulting in poor performance. Also,
these require to expose a device-model to the guest, thus increasing the attack
surface. Conversely, hardware passthrough provides better performance and
security but can be expensive in terms of the number of physical resources,
since each device is dedicated to a single VM. This talk focuses on how Vates is
working on sharing hardware resources among VMs by relying on dedicated
processors named Data Processing Units (DPU). More precisely, Vates work on
offloading Xen hypervisor of storage emulation by relying on Kalray K200 DPU
PCIe controllers, a hardware accelerator based on MPPA architecture.

[![](youtube/30-DPU.png "Enabling DPU Hardware Accelerators in XCP-ng - video")](https://www.youtube.com/watch?v=hZQ2_f4FC6o&si=P7rsd8zjrN24i8JL&controls=0)

[![](slides/28-xcpng.png "Enabling DPU Hardware Accelerators in XCP-ng - slides")](https://www.slideshare.net/slideshow/embed_code/key/toAUvWJuD5HvnH?hostedIn=slideshare&page=upload)

### CloudStack Object Storage - An Introduction, [Vladimir Petrov](https://www.linkedin.com/in/vladimir)

CloudStack 4.19 introduces a new framework for object storage. In this talk,
Vladi explains what has driven this development, the architecture chosen and
current integration points with Object store providers.

[![](youtube/31-ObjectStorage.png "CloudStack Object Storage - video")](https://www.youtube.com/watch?v=ldBwDAh6DqE&si=axGOKCR-4DRIlhgO&controls=0)

[![](slides/29-objectstorages.png "CloudStack Object Storage - slides")](https://www.slideshare.net/slideshow/embed_code/key/2g3H0XORXa8Byk?hostedIn=slideshare&page=upload)

### Confidence in CloudStack, [Aron Wagner](https://www.linkedin.com/in/aronwagne), [Nathan Gleason](https://www.linkedin.com/in/nathangleason)

In an ever-growing landscape of thousands of virtualization and cloud native
projects it can be hard to understand what projects reliably just work.
Fortunately for the growing community at CloudStack that is precisely what we
(American Cloud) found.

[![](youtube/32-Confidence.png "Confidence in CloudStack - video")](https://www.youtube.com/watch?v=V_bF_2K0lQk&si=kxek5nT4vWBp81CM&controls=0)

[![](slides/30-confidence.png "Confidence in CloudStack - slides")](https://www.slideshare.net/slideshow/embed_code/key/1hKnRYpnYOxYuz?hostedIn=slideshare&page=upload)

### Declarative Kubernetes Cluster Deployment with CloudStack and Cluster API, [Ozhan Karaman](https://www.linkedin.com/in/ozhan-karaman)

Are you currently managing Kubernetes clusters in the cloud and considering a
transition to on-premises infrastructure using CloudStack? This session is an
exciting demonstration of how you can deploy Kubernetes clusters in a
declarative manner, leveraging the capabilities of CloudStack and Cluster API.
In this demo, Ozhan showcases a comprehensive solution that combines Packer,
Gitlab CI, ArgoCD, Cluster API, and Cluster Autoscaler to create a seamless
on-premises deployment strategy adaptable to diverse requirements over
CloudStack Infrastructure.

[![](youtube/33-Kubernetes.png "Declarative Kubernetes Cluster Deployment - video")](https://www.youtube.com/watch?v=W88X8W3hl6U&si=2J4yPYdjthOfdlqJ&controls=0)

[![](slides/31-kubernetes.png "Declarative Kubernetes Cluster Deployment - slides")](https://www.slideshare.net/slideshow/embed_code/key/gCBMWODsKqeLIC?hostedIn=slideshare&page=upload)

### Extending KVM Host HA for Non-NFS Storage, [Alex Ivanov](https://www.linkedin.com/in/alex-p-ivanov)

The current KVM Host HA feature depends on the existence of an NFS primary storage to detect which nodes are online, even if other types of primary storage are used. StorPool extends the HA feature to allow other methods to be used for this. The new implementation adds support for using StorPool Storage for HA heartbeats, removing the need for NFS primary storage. The solution developed by StorPool allows new storage vendors and protocols to be added easily.

[![](youtube/34-KVM.png "Extending KVM Host HA - video")](https://www.youtube.com/watch?v=Ar0_I9JZXSI&si=r-FsDzku1QcaNt4f&controls=0)

[![](slides/32-storpool.png "Extending KVM Host HA - slides")](https://www.slideshare.net/slideshow/embed_code/key/NtAYLfN0M09uDg?hostedIn=slideshare&page=upload)

### Live Demo Showcase: Unveiling Dell PowerFlex’s IaaS Capabilities with Apache CloudStack, [Florian Coulombel](https://www.linkedin.com/in/fcoulombel)

Dell PowerFlex is the latest storage platform to offer advanced integration with
Apache CloudStack. Powerflex, a software-defined platform, has built a
reputation for performance, agility, and scalability and is already being used
in a number of large-scale CloudStack IaaS environments.

Watch the session to see the live demo of the integration and automation
capabilities.

Some of the key features showcased are: Infrastructure Provisioning and
Configuration, VM operations & lifecycle management and Infrastructure
Management & Monitoring.

[![](youtube/35-Demo.png "Unveiling Dell PowerFlex’s IaaS Capabilities with Apache CloudStack - video")](https://www.youtube.com/watch?v=jQrVb49RihA&si=9bw-S4l1LKTChv5a&controls=0)

[![](slides/33-powerflex.png "Unveiling Dell PowerFlex’s IaaS Capabilities with Apache CloudStack - slides")](https://www.slideshare.net/slideshow/embed_code/key/sIcZSOX4lCHcv?hostedIn=slideshare&page=upload)

### Import Export Virtual Machine for KVM Hypervisor, [Ayush Pandey](https://www.linkedin.com/in/itsayushpandey)

Ayush talks about his contribution as a GSoC Contributor, for implementing the
Import-Export Instances feature for the KVM Hypervisor.

[![](youtube/36-ImportExport.png "Import Export Virtual Machine for KVM Hypervisor - video")](https://www.youtube.com/watch?v=ZKKMW4aAprY&si=rGTJeyU51SlGaJdz&controls=0)

[![](slides/34-importexport.png "Import Export Virtual Machine for KVM Hypervisor - slides")](https://www.slideshare.net/slideshow/embed_code/key/fUIK05TiJtVJ5f?hostedIn=slideshare&page=upload)

