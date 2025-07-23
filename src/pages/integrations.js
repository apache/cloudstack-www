import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from './learn-more.mdx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// Simple markdown renderer component for basic markdown patterns
function SimpleMarkdown({ children }) {
  if (!children || typeof children !== 'string') {
    return null;
  }

  // Split content by double newlines to create paragraphs
  const paragraphs = children.split('\n\n').filter(p => p.trim());

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Process bold markdown syntax **text**
        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
        const processedParts = parts.map((part, partIndex) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.slice(2, -2);
            return <strong key={partIndex}>{boldText}</strong>;
          }
          return part;
        });

        return <p key={index}>{processedParts}</p>;
      })}
    </>
  );
}

function IntegrationsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="header-integrations header-homepage">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h1>Apache CloudStack <br/><strong>Integrations</strong></h1>
            <p className="px18 my-4 text-center text-lg-start">
              Apache CloudStack is a comprehensive infrastructure-as-a-service (IaaS)
              cloud computing solution that offers extensive integration options to
              seamlessly align with your technology stack.
            </p>
            <div className="center-buttons">
            </div>
          </div>
          <div className="col-lg-7"><img src="/img/oss_vs_css_integration_illustration.png" className="img-fluid" alt=""/></div>
        </div>
      </div>
    </header>
  );
}

function OurUsers() {
  const {siteConfig} = useDocusaurusContext();
  return (
        <section className="our-users">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section-title text-center mb-4">Learn from our users</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 order-lg-2">
                <div className="card-users">
                  <div className="card-images clearfix mb-4">
                    <img src="/img/quotes_icon.svg" className="float-start" alt=""/>
                    <img src="/img/Kshtish_img.png" className="float-start" alt=""/>
                    <img src="/img/apiculus_logo.svg" className="float-end" alt=""/>
                  </div>
                  <div className="card-text">
                    <p className="mb-4">
“<strong>CloudStack is extremely easy to set up, learn, manage and
operate</strong>. In our market(s), this not only helps our customers
launch quickly, but also makes them feel empowered by way of using a
technology that can easily be in-sourced.
                    </p>
                    <p>
Our aim is to position the combination of CloudStack and Apiculus as a
robust cloud solution in 100+ countries and 300+”
                    </p>
                  </div>
                  <div className="card-info">
                    <div className="card-name">— Kshitish Purohit</div>
                    <p className="blue-title">CHIEF PRODUCT OFFICER</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 order-lg-2">
                <div className="card-users">
                  <div className="card-images clearfix mb-4">
                    <img src="/img/quotes_icon.svg" className="float-start" alt=""/>
                    <img src="/img/Tamara_img.png" className="float-start" alt=""/>
                    <img src="/img/Frauhofer_logo.svg" className="float-end" alt=""/>
                  </div>
                  <div className="card-text">
                    <p className="mb-4">
“<strong>CloudStack and Terraform bring scalability and
flexibility</strong>. The immediate benefit out of them is that you
can have tested and proven blueprints and roll out environments
quickly. Terraform is perfect for quickly creating Test/Dev
environments.
                    </p>
                    <p>
In distributed teams, collaboration is extremely
important. Infrastructure as code is a huge boost, helping teams to
collaborate on code.”
                    </p>
                  </div>
                  <div className="card-info">
                    <div className="card-name">— Tamara Muryshkin</div>
                    <p className="blue-title">ENTERPRISE SERVICE MANAGER</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 order-lg-2">
                <div className="card-users">
                  <div className="card-images clearfix mb-4">
                    <img src="/img/quotes_icon.svg" className="float-start" alt=""/>
                    <img src="/img/Sven_img.png" className="float-start" alt=""/>
                    <img src="/img/ewerk_group_logo.png" className="float-end" alt=""/>
                  </div>
                  <div className="card-text">
                    <p className="mb-4">
“The EWERK Group mainly serves organizations in system-relevant
industries with regulated IT. <strong>In these industries, highly
complex IT infrastructure projects place special demands on the
network</strong>. In order to meet these requirements, a
future-oriented further development with the highest demand on
technological know-how and flexibility of the software is needed. The
support of Tungsten Fabric helps us to meet these requirements.”
                    </p>
                  </div>
                  <div className="card-info">
                    <div className="card-name">— Sven Vogel</div>
                    <p className="blue-title">SENIOR MANAGER R&amp;D</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default function CloudStackIntegrations() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  // Add hover styles and clickable indicators
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .integration-item:hover .learn-more-overlay {
        opacity: 1 !important;
      }
      .integration-item:hover {
        box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        transform: translateY(-2px) !important;
      }
      .integration-item:hover .clickable-icon {
        opacity: 0 !important;
      }
      .clickable-icon {
        opacity: 0.9;
        transition: all 0.3s ease;
        animation: pulse-subtle 2s infinite;
      }
      @keyframes pulse-subtle {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .integration-item:hover .clickable-icon {
        animation: none;
        transform: scale(1.1);
      }
      @media (max-width: 768px) {
        .clickable-icon {
          opacity: 0.95 !important;
          animation: pulse-subtle 3s infinite;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Centralized integration configuration - tabs and modal data in single JSON
  const integrationConfig = {
    automation: {
      label: "Automation",
      icon: "/img/automation_icon.svg",
      description: "CloudStack supports automation integrations through its robust API and integration capabilities, enabling **seamless orchestration and automation of cloud infrastructure tasks**.",
      integrations: [
        {
          key: "puppet",
          title: "Puppet",
          description: "The puppet-cloudstack module (Apache-2.0 license) is designed exclusively for provisioning and configuring the Apache CloudStack infrastructure—covering management servers, database, NFS, and hypervisor hosts like XenServer and KVM. It uses Puppet manifests and custom types to automate the setup of zones, clusters, network configuration, and system components. However, it does not provide management of CloudStack objects such as virtual machines, users, networks, or storage offerings via the API. Its purpose is to enable consistent, repeatable deployment of CloudStack systems, but further resource-level operations must be handled through other tools.",
          className: "box-puppet box192",
          imageSrc: "/img/puppet_logo.svg",
          altText: "puppet",
          colClass: "col-md-6",
          iconColor: "dark"
        },
        {
          key: "terraform",
          title: "Terraform",
          description: "Terraform is an open-source infrastructure-as-code (IaC) tool developed by HashiCorp that enables organizations to automate the provisioning and management of their IT infrastructure. It uses a declarative configuration language called HashiCorp Configuration Language (HCL) to describe the desired state of infrastructure, allowing for consistent and repeatable deployments across various environments.\n\nApache CloudStack integrates with Terraform through the official CloudStack Terraform Provider, facilitating seamless automation of cloud infrastructure tasks. This provider acts as a bridge between Terraform and CloudStack, leveraging CloudStack's APIs to manage resources such as virtual machines, networks, templates, volumes, and more. Administrators can define infrastructure components in HCL, and Terraform will handle the creation, modification, and deletion of these resources to match the desired state.\n\nThe integration supports a wide range of CloudStack resources and features, including provisioning and management of virtual machines with specified service offerings and templates, creation an d configuration of isolated networks, VPCs, and associated network offerings, management of storage resources including volumes and templates, assignment of public IP addresses and configuration of firewall rules, and support for advanced configurations such as UEFI boot, vApp properties, and Kubernetes cluster creation.\n\nThe CloudStack Terraform Provider is maintained under the Apache License 2.0 and is available through the Terraform Registry. Recent releases have introduced enhancements like support for Kubernetes cluster creation, new data sources, and improved resource management capabilities. This integration empowers organizations to adopt infrastructure-as-code practices within their CloudStack environments, promoting automation, consistency, and efficiency in cloud infrastructure management.",
          className: "box-terraform box192",
          imageSrc: "/img/terraform_logo.svg",
          altText: "terraform",
          colClass: "col-md-6",
          iconColor: "light" // light icon for dark terraform logo
        },
        {
          key: "ansible",
          title: "Ansible",
          description: "Ansible is an open-source automation tool developed by Red Hat that simplifies IT tasks such as configuration management, application deployment, and orchestration. It utilizes a human-readable language (YAML) to define automation tasks and operates with an agentless architecture, relying on SSH for remote execution. Ansible's simplicity and flexibility make it a preferred choice for organizations aiming to streamline their IT operations and enhance consistency across their infrastructure.\n\nApache CloudStack integrates with Ansible through the ngine_io.cloudstack collection, which provides a comprehensive set of modules for managing CloudStack resources. These modules enable administrators to automate tasks such as provisioning virtual machines, managing networks, configuring storage, and handling user accounts within CloudStack environments. The integration supports idempotent operations, ensuring that automation tasks can be executed reliably and repeatedly without unintended side effects.\n\nBy leveraging Ansible's automation capabilities alongside Apache CloudStack, organizations can achieve greater efficiency and agility in managing their cloud infrastructure, reducing manual intervention, and accelerating deployment processes.",
          className: "box-ansible box192",
          imageSrc: "/img/ansible_logo.svg",
          altText: "ansible",
          colClass: "col-md-6",
          iconColor: "dark" // dark icon for light ansible logo
        },
        {
          key: "chef",
          title: "Chef",
          description: "Chef users can reliably manage CloudStack infrastructure by combining knife-cloudstack-fog and kitchen-cloudstack. The knife‑cloudstack‑fog plugin acts as a command-line bridge between Chef workflows and CloudStack APIs, supporting VM provisioning, network and storage orchestration, and resource cleanup. On the testing side, kitchen‑cloudstack integrates CloudStack into Test Kitchen to spin up actual instances, apply cookbooks, run validation tests, and destroy environments—all driven by declarative .kitchen.yml configurations. Together, these projects provide full lifecycle automation and test-driven infrastructure management for CloudStack environments, fitting seamlessly into Chef-based CI/CD pipelines.",
          className: "box-white box192",
          imageSrc: "/img/chef-logo.png",
          altText: "chef",
          colClass: "col-md-6",
          iconColor: "light"
        }
      ]
    },
    backup: {
      label: "Backup & Disaster Recovery",
      icon: "/img/Backup_icon.svg",
      description: "Supports backup and disaster recovery solutions through CloudStack's **APIs and extensible architecture**, enabling third-party tools and services to seamlessly integrate with the platform for data protection and continuity.",
      integrations: [
        {
          key: "acronis",
          className: "box-acronis box192",
          imageSrc: "/img/acronis_logo.svg",
          altText: "acronis",
          colClass: "col-md-6"
        },
        {
          key: "dell-networker",
          title: "Networker",
          description: "Dell NetWorker is an enterprise-grade backup and recovery solution designed to protect data across diverse IT environments. It offers centralized backup management, policy-driven automation, and integration with various storage systems, including Dell's Data Domain. NetWorker supports a wide range of workloads, providing efficient and reliable data protection for critical applications and systems.\n\nApache CloudStack integrates with Dell NetWorker through a native backup plugin introduced in version 4.18. This plugin enables administrators to register a NetWorker backup server and configure backup policies directly within the CloudStack interface. The integration supports full and incremental backups for instances running on KVM hypervisors, allowing for scheduled and ad-hoc backup operations. Backups are stored on external backup storage targets, such as Dell's Data Domain systems, ensuring data durability and efficient storage utilization.\n\nThe plugin leverages CloudStack's Backup and Recovery framework, providing a standardized approach to backup management. Administrators can define backup offerings, assign them to instances, and monitor backup jobs through the CloudStack UI or API. The integration also supports features like cross-zone backups and policy management, enhancing operational flexibility and compliance with disaster recovery strategies.\n\nBy combining Dell NetWorker with Apache CloudStack, organizations can achieve a unified and streamlined backup solution that ensures data protection and business continuity across their cloud infrastructure.",
          className: "box-dell box192",
          imageSrc: "/img/dell_logo.svg",
          altText: "Dell",
          colClass: "col-md-6"
        },
        {
          key: "backroll",
          title: "BackRoll",
          description: "BackROLL is an open-source, containerized backup and disaster recovery solution tailored for KVM-based virtualized environments. Designed with simplicity and reliability in mind, BackROLL offers agentless, image-based backups with features like fast recovery, file-level restoration, and a user-friendly web interface. Its architecture leverages modern technologies, including Docker and RESTful APIs, ensuring ease of deployment and integration into existing infrastructures.\n\nApache CloudStack integrates with BackROLL through a dedicated plugin that aligns with CloudStack's Backup and Recovery (B&R) framework. This integration enables administrators to register a BackROLL server within CloudStack, define backup offerings, and manage backup policies directly from the CloudStack interface. The plugin supports full and incremental backups of running or stopped virtual machines, with backups stored externally and indexed for rapid recovery. Additionally, it facilitates operations such as scheduling backups, monitoring backup status, and restoring instances or individual volumes. The integration is optimized for KVM hypervisors and supports multi-zone environments, enhancing data protection strategies across diverse deployments.\n\nBy combining BackROLL with Apache CloudStack, organizations can implement a robust, open-source backup solution that ensures data integrity, minimizes downtime, and simplifies backup management within their cloud infrastructure.",
          className: "box-lgray box192",
          imageSrc: "/img/backroll_logo.png",
          altText: "backroll",
          colClass: "col-md-6",
          iconColor: "dark"
        },
        {
          key: "cloudstack-b-and-r",
          title: "NAS B&R",
          description: "Apache CloudStack's Backup and Recovery (B&R) framework, introduced in version 4.14, provides a standardized and extensible approach to integrating backup solutions within the CloudStack ecosystem. Expanding upon this framework, version 4.20 introduced the NAS Backup and Recovery Plugin, a native solution designed specifically for KVM hypervisors. This plugin enables administrators to perform full instance backups to shared Network Attached Storage (NAS) systems, such as NFS, without relying on third-party backup software.\n\nThe NAS B&R Plugin operates using libvirt's push backup mode, capturing full disk images in the qcow2 format. To utilize this functionality, KVM hosts must be equipped with libvirt version 7.2.0 or higher and QEMU version 4.2 or higher. Administrators configure backup repositories by specifying NAS details, including type (currently supporting NFS), address, and mount options. These repositories are then associated with backup offerings, which can be assigned to virtual machines to facilitate scheduled or ad-hoc backups. Backup operations are managed directly through the CloudStack UI or API, streamlining the backup process within the existing cloud management workflow.\n\nWhile the NAS B&R Plugin currently supports full backups and restoration to NFS and local primary storage, it lays the groundwork for future enhancements, such as incremental backups and broader storage compatibility. This native integration offers a cost-effective and straightforward backup solution for organizations utilizing KVM within their CloudStack environments.",
          className: "box-cloudstack box192",
          imageSrc: "/img/ACS_logo.svg",
          altText: "cloudstack",
          colClass: "col-md-6",
          iconColor: "dark"
        }
      ]
    },
    containers: {
      label: "Containers",
      icon: "/img/containers_icon.svg",
      description: "CloudStack supports different containers through its Container Service, which can manage and orchestrate container-based workloads alongside traditional virtual machines, **providing a unified cloud infrastructure platform**.",
      integrations: [
        {
          key: "kubernetes",
          title: "Kubernetes",
          description: "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Developed by Google and now maintained by the Cloud Native Computing Foundation (CNCF), Kubernetes has become the industry standard for container orchestration, providing a powerful and flexible solution for managing complex, distributed applications.\n\nApache CloudStack integrates with Kubernetes through two primary mechanisms: the CloudStack Kubernetes Service (CKS) and the Cluster API Provider for CloudStack (CAPC).\n\nThe CloudStack Kubernetes Service (CKS) is a fully managed container service that simplifies the deployment and management of Kubernetes clusters on CloudStack infrastructure. With CKS, organizations can easily deploy, scale, and manage Kubernetes clusters within their CloudStack environments, providing a unified and simplified approach to managing both virtualized and containerized workloads. CKS supports features such as multi-version Kubernetes support, integration with CloudStack networking, and user-friendly interfaces for cluster management.\n\n\n\nThe Cluster API Provider for CloudStack (CAPC) enables declarative, Kubernetes-style APIs to create, configure, and manage Kubernetes clusters on CloudStack. CAPC allows for seamless integration of Kubernetes clusters with CloudStack deployments, facilitating hybrid cloud scenarios and providing infrastructure as code capabilities. It supports features like multi-node control plane clusters, deployment on isolated and shared networks, and cloud-init based node bootstrapping.\n\nBy leveraging these integrations, organizations can optimize their cloud infrastructure management, enhance operational efficiency, and embrace modern, cloud-native application architectures within the Apache CloudStack ecosystem.",
          className: "box-kubernetes box192",
          imageSrc: "/img/kubernetes_logo.svg",
          altText: "kubernetes",
          colClass: "col-md-6",
          iconColor: "light"
        },
        {
          key: "capc",
          title: "Cluster API Provider for CloudStack",
          description: "The Cluster API Provider for CloudStack (CAPC) extends Kubernetes Cluster API to support automated provisioning and lifecycle management of Kubernetes clusters on Apache CloudStack environments. Developed and maintained under the Kubernetes SIG Cluster Lifecycle project, CAPC allows administrators to declaratively define, deploy, and manage Kubernetes clusters using Kubernetes-native resources, applying infrastructure-as-code principles consistently across environments.\n\nUsing CAPC, organizations can automate the creation of management and workload clusters on CloudStack, leveraging Cluster API concepts like MachineDeployments and KubeadmControlPlane. CAPC interacts directly with CloudStack APIs to provision virtual machines, configure networking, and orchestrate node lifecycles. Features include support for multi-node control planes, use of isolated or shared networks, cloud-init-based instance bootstrapping, and infrastructure reconciliation aligned with Kubernetes best practices.\n\nThis integration empowers CloudStack users to standardize Kubernetes deployments, simplify cluster scaling and upgrades, and adopt hybrid or multi-cloud strategies using a consistent Kubernetes-centric management approach.",
          className: "box-kubernetes box192",
          imageSrc: "/img/cluster_api.svg",
          altText: "capc",
          colClass: "col-md-6",
          iconColor: "light"
        }
      ]
    },
    hypervisors: {
      label: "Hypervisors",
      icon: "/img/Hypervisors_icon.svg",
      description: "Supports different hypervisors through CloudStack's **hypervisor-agnostic architecture**, allowing deployment and management of virtualized resources across various hypervisor platforms.",
      integrations: [
        {
          key: "hyperv",
          className: "box-blue box131",
          imageSrc: "/img/MS_hyper-v_logo.png",
          altText: "hyperv",
          colClass: "col-md-6"
        },
        {
          key: "vmware",
          title: "VMware vSphere",
          description: "VMware vSphere is an enterprise-grade virtualization platform that combines the ESXi hypervisor and vCenter Server to provide a robust foundation for virtualized data centers. It offers advanced features such as live migration (vMotion), distributed resource scheduling (DRS), high availability (HA), fault tolerance (FT), and storage management capabilities like Storage vMotion and snapshot support. These features enable efficient resource utilization, minimal downtime, and streamlined operations in virtual environments.\n\nApache CloudStack integrates seamlessly with VMware vSphere, allowing administrators to manage vSphere resources through CloudStack's unified interface. This integration supports comprehensive VM lifecycle management, including provisioning, scaling, and decommissioning of virtual machines. CloudStack leverages vSphere's capabilities to orchestrate complex operations such as automated load balancing via DRS, rapid recovery with HA, and dynamic resource allocation.\n\nBy incorporating VMware vSphere into CloudStack deployments, organizations can achieve a cohesive and scalable cloud infrastructure that benefits from vSphere's mature virtualization features and CloudStack's flexible orchestration capabilities. This combination is ideal for enterprises seeking to maintain high performance, reliability, and operational efficiency in their cloud environments.",
          className: "box-white box131",
          imageSrc: "/img/vmware_vsphere_logo.png",
          altText: "vmware",
          colClass: "col-md-6",
          iconColor: "dark" // dark icon for light vmware logo
        },
        {
          key: "kvm",
          title: "KVM",
          description: "KVM is a Linux-native hypervisor that transforms the Linux kernel into a full virtualization platform, enabling the creation and management of virtual machines (VMs) with hardware-assisted performance. Integrated seamlessly with Apache CloudStack, KVM supports a wide array of features essential for modern cloud infrastructures.\n\nThrough CloudStack, administrators can orchestrate VM lifecycle operations, including provisioning, scaling, and deletion, across KVM hosts. The integration facilitates advanced functionalities such as live migration, allowing VMs to move between hosts without downtime, and high availability configurations to ensure service continuity. KVM's support for thin provisioning optimizes storage utilization by allocating disk space dynamically as needed, while snapshot capabilities enable point-in-time VM state captures for backup and recovery purposes.\n\nCloudStack's management interfaces provide full control over KVM environments, including CPU and memory overcommitment policies, network configurations, and storage management. The open-source nature of both KVM and CloudStack ensures flexibility, scalability, and cost-effectiveness, making them ideal for enterprises seeking robust and customizable virtualization solutions.",
          className: "box-dgray box131",
          imageSrc: "/img/KVM_logo.svg",
          altText: "KVM",
          colClass: "col-md-12"
        },
        {
          key: "citrix",
          title: "XenServer",
          description: "XenServer is an enterprise-grade, open-source virtualization platform built on the Xen Project hypervisor. It offers robust features such as live virtual machine (VM) migration, high availability (HA), dynamic memory control, and resource pooling. XenServer utilizes a control domain (dom0) for managing guest VMs and coordinating access to networking and storage resources, enabling efficient and scalable virtualization for cloud infrastructure.\n\nApache CloudStack provides native integration with XenServer, allowing administrators to manage virtual resources through a unified orchestration layer. The integration supports key operations such as VM provisioning and lifecycle management, live migration, storage repository integration, and snapshot and template management. These capabilities are fully exposed via the CloudStack UI and API, enabling seamless automation and control of XenServer environments.\n\nThis combination offers a stable and flexible solution for organizations deploying private and hybrid clouds, ensuring strong performance, simplified management, and open-source freedom across the virtualization stack.",
          className: "box-citrix box131",
          imageSrc: "/img/citrix_logo.svg",
          altText: "citrix",
          colClass: "col-md-6",
        },
        {
          key: "xcpng",
          title: "XCPNG",
          description: "XCP-ng is an open-source virtualization platform built upon the Xen Project hypervisor, offering a robust and scalable solution for managing virtualized environments. It provides features such as live migration, high availability (HA), dynamic memory control, and resource pooling, enabling efficient utilization of hardware resources across multiple hosts. XCP-ng's architecture includes a control domain (dom0) that manages guest virtual machines (VMs) and coordinates access to networking and storage resources.\n\nApache CloudStack integrates seamlessly with XCP-ng, allowing administrators to orchestrate VM lifecycle operations, including provisioning, scaling, and migration, through CloudStack's unified interface. The integration supports advanced functionalities such as snapshot management, template deployment, and storage repository handling. CloudStack's support for XCP-ng ensures efficient resource utilization and streamlined management of virtualized environments.\n\nThis combination offers a stable and flexible solution for organizations deploying private and public clouds, ensuring strong performance, simplified management, and open-source freedom across the virtualization stack.",
          className: "box-lgray box131",
          imageSrc: "/img/XCP-ng_logo.png",
          altText: "XCP-ng",
          colClass: "col-md-6",
          iconColor: "dark"
        }
      ]
    },
    monitoring: {
      label: "Monitoring",
      icon: "/img/monitoring_icon.svg",
      description: "Apache CloudStack supports different hypervisors through its **hypervisor-agnostic architecture**, allowing deployment and management of virtualized resources across various hypervisor platforms.",
      integrations: [
        {
          key: "veeam",
          title: "Veeam Backup & Replication",
          description: "Veeam Backup & Replication is an enterprise-grade data protection and disaster recovery solution designed to ensure the availability and resiliency of virtualized environments. It offers features such as instant VM recovery, granular file-level recovery, and replication, providing comprehensive backup and recovery capabilities. Apache CloudStack integrates with Veeam Backup & Replication through a native plugin, enabling backup and recovery functionalities for instances running on VMware vSphere hypervisors. This integration allows administrators to define backup offerings based on Veeam's template jobs, which can be assigned to instances for scheduled or ad-hoc backups. The plugin supports operations like initiating backups, configuring backup schedules, restoring entire instances, and restoring individual volumes. The integration requires Veeam Backup & Replication Enterprise Edition, including the Enterprise Manager API, and supports versions 11 and 12. It leverages a combination of REST API calls and PowerShell commands to perform backup operations. Administrators can manage backup offerings and monitor backup tasks directly from the CloudStack UI, providing a unified interface for cloud infrastructure and data protection management. By combining Veeam's robust backup capabilities with CloudStack's orchestration features, organizations can enhance their cloud infrastructure's data protection strategy, ensuring business continuity and efficient recovery processes.",
          className: "box-veeam box192",
          imageSrc: "/img/veeam_logo.svg",
          altText: "veeam",
          colClass: "col-md-6",
          iconColor: "dark"
        },
        {
          key: "prometheus",
          title: "Prometheus",
          description: "Apache CloudStack includes built‑in support for exporting real‑time metrics in Prometheus format via a dedicated plugin. Once enabled through global settings (such as prometheus.exporter.enable), the management server exposes an HTTP /metrics endpoint. This endpoint delivers zone‑aware metrics covering host status (online/offline), CPU and memory usage, VM counts, and more. A typical monitoring setup involves running Prometheus to scrape these metrics, alongside complementary exporters like node_exporter (for host-level system metrics) or libvirt/vmware exporters for hypervisor specifics. These metrics can be visualized and analyzed using dashboards in Grafana — several community resources document this end-to-end integration. The plugin is widely adopted in production environments, and enhances operational visibility out‑of‑the‑box, enabling better capacity planning, alerting, and SLA monitoring.",
          className: "box-white box192",
          imageSrc: "/img/prometheus.svg",
          altText: "prometheus",
          colClass: "col-md-6",
          iconColor: "dark"
        }
      ]
    },
    networking: {
      label: "Networking",
      icon: "/img/networking_icon.svg",
      description: "Support different networking integrations through CloudStack's modular networking framework, which facilitates the integration of **various network technologies and services to meet diverse infrastructure needs**.",
      integrations: [
        {
          key: "tungsten",
          className: "box-tfabric box192",
          imageSrc: "/img/tungsten_logo.svg",
          altText: "tungsten fabric",
          colClass: "col-md-6"
        },
        {
          key: "netris",
          title: "Switch Fabric Manager",
          description: "Netris is a modern Software-Defined Networking (SDN) platform that enables automated, intent-based management of network infrastructure for cloud-native, virtualized, and bare-metal environments. It transforms traditional networking hardware—such as switches, routers, and firewalls—into agile and programmable infrastructure, providing a \"Network-as-Code\" experience through APIs, Kubernetes Custom Resource Definitions (CRDs), and intuitive interfaces. This approach bridges the gap between traditional networking and modern DevOps practices, making it ideal for dynamic cloud environments.\n\nApache CloudStack integrates with Netris via a native network plugin introduced in version 4.21. This plugin allows CloudStack administrators to manage Layer 2 and Layer 3 networks, NAT, DHCP, Access Control Lists (ACLs), load balancing, and Virtual Private Clouds (VPCs) directly through the CloudStack interface, all orchestrated via Netris. The integration supports full VPC lifecycle management, including the creation of subnets, gateways, and services such as firewalls and load balancers. Netris translates CloudStack networking primitives into real-time configurations applied to physical or virtual networking equipment, significantly reducing manual work and eliminating configuration drift.\n\nFurthermore, Netris integrates with Kubernetes clusters deployed on CloudStack, enabling consistent network policies across virtual machine and container-based workloads. This integration ensures seamless networking across diverse environments, enhancing operational efficiency and scalability.\n\nBy combining Netris with Apache CloudStack, organizations can achieve scalable, automated networking that aligns with modern cloud infrastructure demands.",
          className: "box-white box192",
          imageSrc: "/img/netris_logo.png",
          altText: "Netris Switch Fabric Manager",
          colClass: "col-md-6",
          iconColor: "dark"
        },
        {
          key: "vmware-nsx",
          title: "Vmware NSX",
          description: "VMware NSX is a software-defined networking (SDN) and security platform that delivers virtualized networking services, including distributed firewalls, logical routing, and microsegmentation. By abstracting network functionality from hardware and embedding it into the hypervisor, NSX enables a flexible, programmable infrastructure for modern cloud and data center environments.\n\nApache CloudStack integrates with VMware NSX through an official plugin introduced in version 4.20. This plugin allows administrators to define isolated networks in CloudStack, which are then backed by NSX-managed logical switches and routers. Features such as distributed routing, source NAT, static NAT, port forwarding, load balancing, and network ACLs are automatically provisioned and managed through NSX. The plugin translates CloudStack virtual networking models into NSX constructs and handles the lifecycle of NSX logical components such as Tier-1 routers and segments, ensuring consistency between the orchestration layer and the SDN fabric.\n\nThis integration supports VMware vSphere as the underlying hypervisor platform. NSX-T resources are directly mapped to CloudStack constructs, enabling full network lifecycle automation and policy enforcement within vSphere environments. By combining VMware NSX with Apache CloudStack, organizations gain scalable, automated networking capabilities that align with modern cloud infrastructure and hybrid cloud strategies.",
          className: "box-white box192",
          imageSrc: "/img/vmware_nsx_logo.jpg",
          altText: "VMware NSX",
          colClass: "col-md-12",
          iconColor: "dark"
        }
      ]
    },
    storage: {
      label: "Storage",
      icon: "/img/storage_icon.svg",
      description: "Apache CloudStack supports different storage integrations through its pluggable storage framework, allowing seamless integration with various storage systems and technologies for **versatile data management and storage options**.",
      integrations: [
        {
          key: "storpool",
          title: "StorPool",
          description: "StorPool is a distributed block storage system optimized for high performance, low latency, and linear scalability. It aggregates local SSDs or NVMe drives across a cluster of standard servers into a single, resilient storage pool. The integration with Apache CloudStack allows StorPool to function as a primary storage backend, supporting advanced features such as instant volume provisioning, live migration, thin provisioning, and rapid snapshot creation and restoration.\n\nThe CloudStack driver for StorPool exposes full storage functionality via the CloudStack UI and API, enabling per-volume Quality of Service (QoS) policies, cloning of volumes and templates, and live updates to data placement settings. This native integration removes the need to manage the storage system directly, as all interactions are fully automated and orchestrated by CloudStack.\n\nStorPool is suitable for both private and public cloud environments where performance, reliability, and operational efficiency are critical. Its architecture ensures high availability and fault tolerance, making it a robust solution for production-grade cloud deployments.",
          className: "box-white box131",
          imageSrc: "/img/storpool_logo.svg",
          altText: "storpool",
          colClass: "col-md-6",
          iconColor: "dark"
        },
        {
          key: "linbit",
          title: "LinBit SDS",
          description: "LINBIT SDS is an open-source software-defined storage solution that combines DRBD® (Distributed Replicated Block Device) and LINSTOR® to provide high-performance, resilient block storage for Linux-based environments. DRBD ensures real-time data replication between nodes, offering high availability and disaster recovery capabilities, while LINSTOR manages the provisioning and orchestration of storage resources across clusters.\n\nApache CloudStack integrates seamlessly with LINBIT SDS, enabling administrators to leverage its advanced storage features within CloudStack-managed infrastructures. This integration supports operations such as provisioning, thin provisioning, snapshots, storage live migration, high availability, and redundancy. Quality of Service (QoS) aspects are also addressed, allowing control over storage hardware allocation to specific primary storage pools and limiting IOPS on designated volumes or volume classes to mitigate the \"noisy neighbor\" problem.\n\nThe integration is particularly optimized for KVM hypervisors, where LINBIT SDS provides block devices via a native driver in the operating system, facilitating efficient storage management. Administrators can manage storage functions like snapshots and migrations through CloudStack's API, ensuring a streamlined and unified management experience.\n\nBy combining LINBIT SDS with Apache CloudStack, organizations can build scalable, high-performance, and resilient cloud infrastructures, benefiting from the flexibility and reliability of open-source technologies.",
          className: "box-linbit box131",
          imageSrc: "/img/linbit_sds_logo.svg",
          altText: "linbit",
          colClass: "col-md-6"
        },
        {
          key: "netapp",
          className: "box-netapp box131",
          imageSrc: "/img/net_app__solidfire_logo.svg",
          altText: "netapp solidfire",
          colClass: "col-md-6"
        },
        {
          key: "pure",
          className: "box-pure box131",
          imageSrc: "/img/pure_storage-logo.svg",
          altText: "pure storage",
          colClass: "col-md-6"
        },
        {
          key: "ceph",
          title: "Ceph",
          description: "Ceph is an open-source, software-defined storage platform that provides scalable and resilient block storage through its RADOS Block Device (RBD) interface. Designed for high-performance and fault-tolerant environments, Ceph distributes data across multiple nodes, ensuring redundancy and eliminating single points of failure. Its architecture supports features like thin provisioning, snapshots, and cloning, making it suitable for dynamic and demanding cloud infrastructures.\n\nApache CloudStack integrates seamlessly with Ceph RBD, allowing administrators to configure Ceph as primary storage within CloudStack deployments. This integration enables the provisioning and management of virtual machine (VM) volumes directly on Ceph, leveraging its distributed storage capabilities. Administrators can define storage pools in Ceph, create corresponding disk offerings in CloudStack, and manage VM disk operations such as creation, deletion, and snapshotting through CloudStack's interface.\n\nBy combining Ceph's robust storage features with CloudStack's orchestration capabilities, organizations can deploy a flexible and resilient cloud infrastructure that meets diverse workload requirements.",
          className: "box-ceph box131",
          imageSrc: "/img/ceph_logo.svg",
          altText: "ceph",
          colClass: "col-md-6"
        },
        {
          key: "gluster",
          className: "box-gluster box131",
          imageSrc: "/img/gluster_logo.png",
          altText: "gluster",
          colClass: "col-md-6"
        },
        {
          key: "nutanix",
          className: "box-nutanix box131",
          imageSrc: "/img/nutanix_logo.svg",
          altText: "nutanix",
          colClass: "col-md-6"
        },
        {
          key: "powerflex",
          title: "PowerFlex",
          description: "Dell PowerFlex is a software-defined storage (SDS) platform that delivers high-performance, scalable, and resilient block storage by aggregating local storage resources across standard x86 servers. Designed for modern data centers, PowerFlex transforms direct-attached storage into a unified, shared storage pool, providing flexibility and efficiency for various workloads. \n\nApache CloudStack integrates natively with Dell PowerFlex, enabling it to function as managed primary storage within CloudStack environments utilizing the KVM hypervisor. This integration allows administrators to configure PowerFlex storage pools at the zone or cluster level through CloudStack's UI or API. Key features supported include dynamic volume provisioning, disk-only snapshots, thin provisioning, per-volume Quality of Service (QoS) parameters such as bandwidth and IOPS limits, and live volume migration within and across PowerFlex storage pools.\n\nRecent enhancements to the PowerFlex plugin in CloudStack versions 4.18 and above include support for volume encryption, improved management of Storage Data Client (SDC) connections, and dynamic control of client connections on KVM hosts. These features enhance data security, performance, and operational efficiency.\n\nBy leveraging Dell PowerFlex's robust storage capabilities within Apache CloudStack, organizations can build flexible, high-performance cloud infrastructures that meet diverse workload requirements.",
          className: "box-dell box131",
          imageSrc: "/img/dell_logo.svg",
          altText: "dell",
          colClass: "col-md-6"
        }
      ]
    },
    objectStorage: {
      label: "Object Storage",
      icon: "/img/storage_icon.svg",
      description: "Apache CloudStack supports different object storage integrations through its pluggable storage framework, allowing seamless integration with various object storage systems and technologies for **versatile data management and storage options**.",
      integrations: [
        {
          key: "cloudian",
          title: "Cloudian Object Storage",
          description: "Cloudian HyperStore is an enterprise-grade, S3-compatible object storage platform designed for scalability, durability, and multi-tenancy. It offers a distributed architecture that ensures high availability and fault tolerance, making it suitable for diverse workloads such as backups, archives, media content, and unstructured data.\n\nApache CloudStack integrates with Cloudian HyperStore through a native plugin, enabling its use as secondary storage within CloudStack environments. This integration allows administrators to store templates, ISO images, and snapshots directly in Cloudian's object storage, facilitating efficient resource management and scalability. The plugin supports single sign-on (SSO), providing seamless access to the Cloudian Management Console (CMC) from the CloudStack UI. Additionally, CloudStack domains and accounts are mapped to Cloudian groups and users, respectively, with automatic provisioning and deprovisioning based on CloudStack's account lifecycle.\n\nBy combining Cloudian HyperStore's robust object storage capabilities with CloudStack's orchestration features, organizations can deploy a flexible and resilient cloud infrastructure that meets diverse workload requirements.",
          className: "box-cloudian box192",
          imageSrc: "/img/cloudian_logo.svg",
          altText: "cloudian",
          colClass: "col-md-6"
        },
        {
          key: "minio",
          title: "MinIO Object Storage",
          description: "MinIO is a high-performance, S3-compatible object storage system built for cloud-native environments. It is optimized for speed, simplicity, and massive scalability, making it suitable for storing a wide range of unstructured data including media files, logs, and application artifacts.\n\nApache CloudStack integrates with MinIO through its Object Storage Plugin framework, introduced in version 4.18. This integration allows CloudStack administrators to configure MinIO as an Object Storage Pool that is exposed to tenants as a self-service storage option. Tenants can create buckets, upload and manage objects, and interact with storage via S3-compatible APIs.\n\nUnlike traditional secondary storage in CloudStack, MinIO serves as a dedicated object storage service for tenant applications and workloads, enabling use cases such as backup targets, data lakes, and application artifact storage. The integration is fully decoupled from CloudStack's internal template and snapshot systems, focusing instead on providing tenant-facing, scalable, and API-driven Object Storage as a Service (OSaaS).",
          className: "box-white box192",
          imageSrc: "/img/minio_logo.svg",
          altText: "minio",
          colClass: "col-md-6",
          iconColor: "dark"
        },
        {
          key: "ceph-radosgw",
          title: "Ceph RADOSGW",
          description: "Ceph is a leading open-source distributed storage platform that provides unified object, block, and file storage within a single cluster. Its object storage component, the RADOS Gateway (radosgw), offers a RESTful interface fully compatible with Amazon S3 and OpenStack Swift APIs. This compatibility enables scalable, multi-tenant, and secure object storage, making it ideal for cloud-native applications, backups, media files, and logs—all supported by Ceph's self-healing and self-managing architecture.\n\nApache CloudStack integrates with radosgw through its Object Storage Plugin framework, introduced in version 4.18 and enhanced in version 4.20. This integration allows administrators to register Ceph RGW endpoints as Object Storage Pools, enabling tenants to create and manage S3-compatible buckets, upload and retrieve objects via API keys and signed URLs, and consume Object Storage as a Service (OSaaS) directly within their CloudStack environment. This integration focuses on providing tenant-facing object storage for application and data use, rather than managing internal CloudStack artifacts.\n\nBy combining Ceph's robust object storage capabilities with CloudStack's orchestration, organizations can offer scalable and secure object storage services within their cloud infrastructure.",
          className: "box-ceph box192",
          imageSrc: "/img/ceph_logo.svg",
          altText: "ceph",
          colClass: "col-md-12"
        },
      ]
    },
    billing: {
      label: "Billing",
      icon: "/img/storage_icon.svg",
      description: "Apache CloudStack offers integrations with a variety of self-service intuitive billing and cloud management portals, designed to empower administrators, and service providers with the tools they need to manage cloud resources effectively. These solutions offer tools for service orchestration, automation, billing, and seamless integration with various IaaS cloud ecosystems.",
      integrations: [
        {
          key: "cloudmc",
          title: "CloudMC",
          description: "CloudMC is a service orchestration and monetization platform developed by CloudOps, designed to unify the management of cloud resources in hybrid and multi-cloud environments. Its integration with Apache CloudStack enables full-service automation, allowing administrators to manage compute, network, and storage resources directly through CloudMC's interface. Leveraging native CloudStack APIs, the platform offers capabilities such as metering, invoicing, customer onboarding, and multi-tenant access control. This tight integration facilitates the delivery of white-labeled, self-service cloud experiences for service providers, ISPs, and enterprises deploying CloudStack-based IaaS.",
          className: "box-cloudmc box131",
          imageSrc: "/img/cloud-mc-white.png",
          altText: "cloud mc",
          colClass: "col-md-6"
        },
        {
          key: "stack console",
          title: "Stack Console",
          description: "Stack Console provides a comprehensive cloud management platform built to support Apache CloudStack environments in production. Designed for service providers and data centers, the integration allows for full control of CloudStack resources—including virtual machines, networks, and storage—via a multi-tenant, white-labeled interface. Through API-level integration, Stack Console enables advanced capabilities such as prepaid and postpaid billing, provisioning automation, user management, and monitoring. It supports deployments across multiple CloudStack zones and streamlines operations for providers delivering cloud services in regulated or competitive markets.",
          className: "box-stackconsole box131",
          imageSrc: "/img/Stack Console SVG.svg",
          altText: "stack console",
          colClass: "col-md-6"
        },
        {
          key: "stackbill cmp",
          title: "StackBill CMP",
          description: "StackBill is an enterprise-grade cloud management portal that overlays Apache CloudStack with a self-service interface and advanced service monetization capabilities. The integration allows users to manage CloudStack resources—such as virtual machines, volumes, Kubernetes clusters, and networks—while automating billing, resource metering, autoscaling, and monitoring. Built on a microservices architecture with open APIs, StackBill supports multi-currency transactions and payment gateways. Designed for public cloud operators, StackBill enables rapid deployment of branded, tenant-isolated cloud environments powered by CloudStack's orchestration engine.",
          className: "box-stackbill box131",
          imageSrc: "/img/stack-bill-logo-02.png",
          altText: "stack bill",
          colClass: "col-md-6"
        },
        {
          key: "hostbill",
          title: "HostBill",
          description: "HostBill is a powerful billing and automation platform used by cloud providers, hosting companies, and telcos to manage service delivery and customer operations. Its integration with Apache CloudStack enables automatic provisioning, metering, and lifecycle management of virtual resources—including compute instances, networks, and public IPs—through a fully customizable interface. The system supports multi-tenant environments, client self-service, usage-based invoicing, and a wide range of payment gateways. With its modular design and API extensibility, HostBill allows providers to tailor billing models, automate provisioning workflows, and deliver a streamlined experience around CloudStack-powered infrastructure.",
          className: "box-hostbill box131",
          imageSrc: "/img/hostbill-logo.png",
          altText: "host bill",
          colClass: "col-md-6"
        },
        {
          key: "apiculus",
          title: "Apiculus",
          description: "Apiculus is a business enablement and cloud operations platform tailored for regional and edge service providers. Now a part of Yotta Data Services, Apiculus integrates with Apache CloudStack to deliver an end-to-end solution that covers orchestration, billing, customer lifecycle, and cloud marketplace functionality. The integration leverages CloudStack for core IaaS operations—compute, storage, VPC, and Kubernetes—while layering a customizable CMP (Cloud Management Platform) with multi-site Availability Zones, monetization tools, and operational dashboards. This architecture allows providers to offer public cloud services with high localization and scalability, backed by commercial support from Yotta.",
          className: "box-apiculus box131",
          imageSrc: "/img/apiculus-logo.png",
          altText: "apiculus",
          colClass: "col-md-12"
        }
      ]
    }
  };

  // Create a flattened integrationData object for modal support
  const integrationData = {};
  Object.values(integrationConfig).forEach(tab => {
    tab.integrations.forEach(integration => {
      if (integration.title && integration.description) {
        integrationData[integration.key] = {
          title: integration.title,
          description: integration.description
        };
      }
    });
  });

  const openModal = (integrationKey) => {
    const integration = integrationData[integrationKey];
    if (integration) {
      setModalContent(integration);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({});
  };

  // Generic helper function to create integration boxes with optional modal support
  const createIntegrationBox = (integration) => {
    const hasModal = integrationData[integration.key];

    let borderRadius = '8px';

    const baseProps = {
      className: `tab-box ${integration.className}${hasModal ? ' integration-item' : ''}`,
      key: integration.key,
      style: {
        position: 'relative',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        borderRadius: borderRadius
      }
    };

    if (hasModal) {
      baseProps.onClick = () => openModal(integration.key);
      baseProps.style = { ...baseProps.style, cursor: 'pointer' };
    }

    return (
      <div className={integration.colClass} key={integration.key}>
        <div {...baseProps}>
          <img src={integration.imageSrc} alt={integration.altText || integration.key} style={{ borderRadius: borderRadius }} />
          {hasModal && (
            <>
              {/* Clickable indicator icon */}
              <div className="clickable-icon" style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: integration.iconColor === 'dark'
                  ? '#000000'
                  : '#ffffff',
                fontSize: '18px',
                fontWeight: 'bold',
                zIndex: 2,
                cursor: 'pointer',
                textShadow: integration.iconColor === 'dark'
                  ? '0 0 3px rgba(255,255,255,0.8)'
                  : '0 0 3px rgba(0,0,0,0.8)'
              }}>
                ⓘ
              </div>
              {/* Learn more overlay */}
              <div className="learn-more-overlay" style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '600',
                opacity: '0',
                transition: 'opacity 0.3s ease',
                borderRadius: borderRadius,
                zIndex: 1
              }}>
                Learn more
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  // Function to render tab content dynamically
  const renderTabContent = (tabConfig) => {
    return (
      <div className="tab-pane active" role="tabpanel" tabIndex="0">
        <h2 className="integration-title">
          <img src={tabConfig.icon} alt="" className="me-3"/>
          {tabConfig.label}
        </h2>
        <SimpleMarkdown>{tabConfig.description}</SimpleMarkdown>
        <div className="row integration-images">
          {tabConfig.integrations.map(integration => createIntegrationBox(integration))}
        </div>
      </div>
    );
  };

  let page = (
    <Layout title="Apache CloudStack Integrations">
      <IntegrationsHeader />
      <main>
	<section className="integrations">
	  <div className="container">
	    <div className="row">
	      <div className="col-lg-6 text-center">
		<div className="section-title mb-4 text-center">CloudStack Integrations</div>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-12">
                <Tabs className="tabbed-examples tab-box">
                  {Object.entries(integrationConfig).map(([tabKey, tabConfig], index) => (
                    <TabItem
                      key={tabKey}
                      value={tabKey}
                      label={tabConfig.label}
                      default={index === 0}
                    >
                      {renderTabContent(tabConfig)}
                    </TabItem>
                  ))}
                </Tabs>
              </div>
              <div className="col-lg-6">
                <div className="tab-content mt-5">
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurUsers/>

        <section className="grey-splash">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <h2 className="section-title mb-4">Why Integrate with CloudStack</h2>
                <p className="px18">
Integrating with Apache CloudStack offers a number of benefits to an
organisation, including:
                </p>
                <ul>
                  <li><strong>Access to a New Market Segment</strong> and Opportunities</li>
                  <li>New <strong>Revenue Stream</strong></li>
                  <li>Contribute to and <strong>Influence the Future Direction of the Project</strong></li>
                  <li>Building <strong>New Strategic Partnerships</strong></li>
                  <li><strong>Building New Services</strong> on Top of a Proven Open-source Technologies</li>
                  <li>Collaboration and <strong>Community Engagement</strong></li>
                </ul>
              </div>
              <div className="col-lg-6 text-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHIRetdt-pxPT62IesXMoQUmhQ8ATGKcYZa507mB9uwzn-Q/viewform" target="_blank">
                  <img src="/img/CloudStack_survey4.png" className="img-fluid mt-4" alt="CloudStack survey"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="m80px">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section-title text-center mb-4">Solution briefs</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <p className="px18 text-center mb-5">
The CloudStack community has made a significant impact through the
creation of numerous solution briefs. These documents serve
as <strong>invaluable resources</strong> for users and organizations
looking to harness the power of CloudStack for various cloud computing
needs. By sharing best practices, deployment strategies, and
real-world use cases, these solution briefs <strong>empower users to
make the most of CloudStack's capabilities, fostering a collaborative
and thriving ecosystem.</strong>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="apache-card card-border">
                  <div className="img-holder"><img src="/img/Terraform%20Solution%20Brief_img.png" alt="" width="100%"/></div>
                  <div className="apache-card-body height300">
                    <p className="blue-title">CASE STUDY</p>
                    <div className="apache-card-title">Apache CloudStack and Terraform Solution Brief</div>
                    <p>
IT solution providers need to satisfy the demand for the delivery of
diverse services in the short-term.
                    </p>
                  </div>
                  <div className="apache-card-footer">
                    <a href="/files/terraform-solution-brief%202023.pdf" className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="apache-card card-border">
                  <div className="img-holder"><img src="/img/StorPool%20Storage_img.png" alt="" width="100%"/></div>
                  <div className="apache-card-body height300">
                    <p className="blue-title">CASE STUDY</p>
                    <div className="apache-card-title">
CloudStack Integrations: StorPool Storage - High-performance primary
storage platform
                    </div>
                    <p>
This PoC guide gives you all the guidance you need to perform a
successful Proof of…
                    </p>
                  </div>
                  <div className="apache-card-footer">
                    <a href="files/acs-solution-brief-storpool-2022.pdf" className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="apache-card card-border">
                  <div className="img-holder"><img src="/img/LinBit_img.png" alt="" width="100%"/></div>
                  <div className="apache-card-body height300">
                    <p className="blue-title">CASE STUDY</p>
                    <div className="apache-card-title">CloudStack Integrations: LINBIT - Open-source SDS Solution</div>
                    <p>CloudStack is a multi-hypervisor, multi-tenant, high-availability cloud management…</p>
                  </div>
                  <div className="apache-card-footer">
                    <a href="/blog/cloudstack-integrations-linbit-open-source/" className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="modal-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                borderBottom: '1px solid #eee',
                paddingBottom: '1rem'
              }}>
                <h2 id="modal-title" style={{ margin: 0, color: '#333' }}>{modalContent.title}</h2>
                <button
                  onClick={closeModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: '#666'
                  }}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div style={{ lineHeight: '1.6', color: '#555' }}>
                  <SimpleMarkdown>{modalContent.description}</SimpleMarkdown>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
      <LearnMore/>

      <BrowserOnly fallback={<div>Loading...</div>}>
	{() => {
	  let items = document.querySelectorAll('.carousel .carousel-item')
	  items.forEach((el) => {
	    const minPerSlide = 3;
	    let next = el.nextElementSibling;
	    for (var i=1; i<minPerSlide; i++) {
              if (!next) {
                // wrap carousel by using first child
                next = items[0]
              }
              let cloneChild = next.cloneNode(true)
              el.appendChild(cloneChild.children[0])
              next = next.nextElementSibling
            }
          })
        }}
      </BrowserOnly>
    </Layout>
    );
    return page;
}
