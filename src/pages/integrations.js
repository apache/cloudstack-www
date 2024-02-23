import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from './learn-more.mdx';
import BrowserOnly from '@docusaurus/BrowserOnly';

function IntegrationsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header class="header-integrations header-homepage">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>Apache CloudStack <br/><strong>Integrations</strong></h1>
            <p class="px18 my-4 text-center text-lg-start">
              Apache CloudStack is a comprehensive infrastructure-as-a-service (IaaS)
              cloud computing solution that offers extensive integration options to
              seamlessly align with your technology stack.
            </p>
            <div class="center-buttons">
            </div>
          </div>
          <div class="col-lg-7"><img src="img/oss_vs_css_integration_illustration.png" class="img-fluid" alt=""/></div>
        </div>
      </div>
    </header>
  );
}

function OurUsers() {
  const {siteConfig} = useDocusaurusContext();
  return (
        <section class="our-users">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section-title text-center mb-4">Learn from our users</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 order-lg-2">
                <div class="card-users">
                  <div class="card-images clearfix mb-4">
                    <img src="img/quotes_icon.svg" class="float-start" alt=""/>
                    <img src="img/Kshtish_img.png" class="float-start" alt=""/>
                    <img src="img/apiculus_logo.svg" class="float-end" alt=""/>
                  </div>
                  <div class="card-text">
                    <p class="mb-4">
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
                  <div class="card-info">
                    <div class="card-name">— Kshitish Purohit</div>
                    <p class="blue-title">CHIEF PRODUCT OFFICER</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 order-lg-2">
                <div class="card-users">
                  <div class="card-images clearfix mb-4">
                    <img src="img/quotes_icon.svg" class="float-start" alt=""/>
                    <img src="img/Tamara_img.png" class="float-start" alt=""/>
                    <img src="img/Frauhofer_logo.svg" class="float-end" alt=""/>
                  </div>
                  <div class="card-text">
                    <p class="mb-4">
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
                  <div class="card-info">
                    <div class="card-name">— Tamara Muryshkin</div>
                    <p class="blue-title">ENTERPRISE SERVICE MANAGER</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 order-lg-2">
                <div class="card-users">
                  <div class="card-images clearfix mb-4">
                    <img src="img/quotes_icon.svg" class="float-start" alt=""/>
                    <img src="img/Sven_img.png" class="float-start" alt=""/>
                    <img src="img/ewerk_group_logo.png" class="float-end" alt=""/>
                  </div>
                  <div class="card-text">
                    <p class="mb-4">
“The EWERK Group mainly serves organizations in system-relevant
industries with regulated IT. <strong>In these industries, highly
complex IT infrastructure projects place special demands on the
network</strong>. In order to meet these requirements, a
future-oriented further development with the highest demand on
technological know-how and flexibility of the software is needed. The
support of Tungsten Fabric helps us to meet these requirements.”
                    </p>
                  </div>
                  <div class="card-info">
                    <div class="card-name">— Sven Vogel</div>
                    <p class="blue-title">SENIOR MANAGER R&amp;D</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default function CloudStackIntegrations() {
  let page = (
    <Layout title="Apache CloudStack Integrations">
      <IntegrationsHeader />
      <main>
	<section class="integrations">
	  <div class="container">
	    <div class="row">
	      <div class="col-lg-6">
		<h2 class="section-title mb-4">CloudStack Integrations</h2>
                <ul class="nav nav-integrations" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="automation-tab" data-bs-toggle="tab" data-bs-target="#automation" type="button" role="tab" aria-controls="automation" aria-selected="true">Automation</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="backup-tab" data-bs-toggle="tab" data-bs-target="#backup" type="button" role="tab" aria-controls="backup" aria-selected="false" tabindex="-1">Backup &amp; Disaster Recovery</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="containers-tab" data-bs-toggle="tab" data-bs-target="#containers" type="button" role="tab" aria-controls="containers" aria-selected="false" tabindex="-1">Containers</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="hypervisors-tab" data-bs-toggle="tab" data-bs-target="#hypervisors" type="button" role="tab" aria-controls="hypervisors" aria-selected="false" tabindex="-1">Hypervisors</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="monitoring-tab" data-bs-toggle="tab" data-bs-target="#monitoring" type="button" role="tab" aria-controls="monitoring" aria-selected="false" tabindex="-1">Monitoring</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="networking-tab" data-bs-toggle="tab" data-bs-target="#networking" type="button" role="tab" aria-controls="networking" aria-selected="false" tabindex="-1">Networking</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="storage-tab" data-bs-toggle="tab" data-bs-target="#storage" type="button" role="tab" aria-controls="storage" aria-selected="false" tabindex="-1">Storage</button>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <div class="tab-content mt-5">
                  <div class="tab-pane active" id="automation" role="tabpanel" aria-labelledby="automation-tab" tabindex="0">
                    <h2 class="integration-title"><img src="img/automation_icon.svg" alt="" class="me-3"/>Automation</h2>
                    <p>
CloudStack supports automation integrations through its robust API and
integration capabilities, enabling <strong>seamless orchestration and
automation of cloud infrastructure tasks</strong>.
                    </p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tab-box box-puppet box278"><img src="img/puppet_logo.svg" alt="hyper-v"/></div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-box box-terraform box131"><img src="img/terraform_logo.svg" alt="hyper-v"/></div>
                        <div class="tab-box box-ansible box131"><img src="img/ansible_logo.svg" alt="hyper-v"/></div>
                      </div>
                      <div class="col-md-12">
                        <div class="tab-box box-chef box131"><img src="img/chef-logo.png" alt="hyper-v"/></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="backup" role="tabpanel" aria-labelledby="backup-tab" tabindex="0">
                    <h2 class="integration-title"><img src="img/Backup_icon.svg" alt="" class="me-3"/>Backup &amp; Disaster Recovery</h2>
                    <p>
Supports backup and disaster recovery solutions through
CloudStack’s <strong>APIs and extensible architecture</strong>,
enabling third-party tools and services to seamlessly integrate with
the platform for data protection and continuity.
                    </p>
                    <div class="row">
                      <div class="col">
                        <div class="tab-box box-acronis box192"><img src="img/acronis_logo.svg" alt=""/></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="containers" role="tabpanel" aria-labelledby="containers-tab" tabindex="0">
                    <h2 class="integration-title"><img src="img/containers_icon.svg" alt="" class="me-3"/>Containers</h2>
                    <p>
CloudStack supports different containers through its Container
Service, which can manage and orchestrate container-based workloads
alongside traditional virtual machines, <strong>providing a unified
cloud infrastructure platform</strong>.
                    </p>
                    <div class="row">
                      <div class="col">
                        <div class="tab-box box-kubernetes box192"><img src="img/kubernetes_logo.svg" alt=""/></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="hypervisors" role="tabpanel" aria-labelledby="hypervisors-tab" tabindex="0">
                    <h2 class="integration-title"><img src="img/Hypervisors_icon.svg" alt="" class="me-3"/>Hypervisors</h2>
                    <p>
Supports different hypervisors through
CloudStack’s <strong>hypervisor-agnostic architecture</strong>,
allowing deployment and management of virtualized resources across
various hypervisor platforms.
                    </p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tab-box box-blue box278"><img src="img/MS_hyper-v_logo.png" alt="hyper-v"/></div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-box box-white box278"><img src="img/VM_ware_logo.svg" alt="vmware"/></div>
                      </div>
                      <div class="col-md-12">
                        <div class="tab-box box-citrix box131"><img src="img/citrix_logo.svg" alt="citrix"/></div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-box box-dgray box131"><img src="img/KVM_logo.svg" alt=""/></div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-box box-lgray box131"><img src="img/XCP-ng_logo.png" alt=""/></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="monitoring" role="tabpanel" aria-labelledby="monitoring-tab" tabindex="0">
                    <h2 class="integration-title"><img src="img/monitoring_icon.svg" alt="" class="me-3"/>Monitoring</h2>
                    <p>
Apache CloudStack supports different hypervisors through
its <strong>hypervisor-agnostic architecture</strong>, allowing
deployment and management of virtualized resources across various
hypervisor platforms.
                    </p>
                    <div class="row">
                      <div class="col">
                        <div class="tab-box box-veeam box192"><img src="img/veeam_logo.svg" alt=""/></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="networking" role="tabpanel" aria-labelledby="networking-tab" tabindex="0">
                    <h2 class="integration-title"><img src="img/networking_icon.svg" alt="" class="me-3"/>Networking</h2>
                    <p>
Support different networking integrations through CloudStack’s modular
networking framework, which facilitates the integration
of <strong>various network technologies and services to meet diverse
infrastructure needs</strong>.
                    </p>
                    <div class="row">
                      <div class="col">
                        <div class="tab-box box-tfabric box192"><img src="img/tungsten_logo.svg" alt=""/></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="storage" role="tabpanel" aria-labelledby="storage-tab" tabindex="0">
                    <h2 class="integration-title"><img src="img/storage_icon.svg" alt="" class="me-3"/>Storage</h2>
                    <p>
Apache CloudStack supports different storage integrations through its
pluggable storage framework, allowing seamless integration with
various storage systems and technologies for <strong>versatile data
management and storage options</strong>.
                    </p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="tab-box box-white box278"><img src="img/storpool_logo.svg" alt=""/></div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-box box-netapp box131"><img src="img/net_app__solidfire_logo.svg" alt=""/></div>
                        <div class="tab-box box-pure box131"><img src="img/pure_storage-logo.svg" alt=""/></div>
                      </div>
                      <div class="col-12">
                        <div class="tab-box box-ceph box131"><img src="img/ceph_logo.svg" alt=""/></div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-box box-gluster box90"><img src="img/gluster_logo.png" alt=""/></div>
                        <div class="tab-box box-nutanix box172"><img src="img/nutanix_logo.svg" alt=""/></div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-box box-dell box172"><img src="img/dell_logo.svg" alt=""/></div>
                        <div class="tab-box box-cloudian box90"><img src="img/cloudian_logo.svg" alt=""/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurUsers/>

        <section class="grey-splash">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 order-lg-2">
                <h2 class="section-title mb-4">Why Integrate with CloudStack</h2>
                <p class="px18">
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
              <div class="col-lg-6 text-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHIRetdt-pxPT62IesXMoQUmhQ8ATGKcYZa507mB9uwzn-Q/viewform" target="_blank">
                  <img src="img/CloudStack_survey4.png" class="img-fluid mt-4" alt="CloudStack survey"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="m80px">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section-title text-center mb-4">Solution briefs</div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <p class="px18 text-center mb-5">
The CloudStack community has made a significant impact through the
creation of numerous solution briefs. These documents serve
as <strong>invaluable resources</strong> for users and organizations
looking to harness the power of CloudStack for various cloud computing
needs. By sharing best practices, deployment strategies, and
real-world use cases, these solution briefs <strong>empower users to
make the most of CloudStack’s capabilities, fostering a collaborative
and thriving ecosystem.</strong>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <div class="apache-card card-border">
                  <div class="img-holder"><img src="img/Terraform%20Solution%20Brief_img.png" alt="" width="100%"/></div>
                  <div class="apache-card-body height300">
                    <p class="blue-title">CASE STUDY</p>
                    <div class="apache-card-title">Apache CloudStack and Terraform Solution Brief</div>
                    <p>
IT solution providers need to satisfy the demand for the delivery of
diverse services in the short-term.
                    </p>
                  </div>
                  <div class="apache-card-footer">
                    <a href="" class="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="apache-card card-border">
                  <div class="img-holder"><img src="img/StorPool%20Storage_img.png" alt="" width="100%"/></div>
                  <div class="apache-card-body height300">
                    <p class="blue-title">CASE STUDY</p>
                    <div class="apache-card-title">
CloudStack Integrations: StorPool Storage - High-performance primary
storage platform
                    </div>
                    <p>
This PoC guide gives you all the guidance you need to perform a
successful Proof of…
                    </p>
                  </div>
                  <div class="apache-card-footer">
                    <a href="files/acs-solution-brief-storpool-2022.pdf" class="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="apache-card card-border">
                  <div class="img-holder"><img src="img/LinBit_img.png" alt="" width="100%"/></div>
                  <div class="apache-card-body height300">
                    <p class="blue-title">CASE STUDY</p>
                    <div class="apache-card-title">CloudStack Integrations: LINBIT - Open-source SDS Solution</div>
                    <p>CloudStack is a multi-hypervisor, multi-tenant, high-availability cloud management…</p>
                  </div>
                  <div class="apache-card-footer">
                    <a href="" class="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
