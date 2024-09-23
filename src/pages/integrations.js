import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from './learn-more.mdx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
                  <TabItem value="automation" label="Automation" default>
                    <div className="tab-pane active" id="automation" role="tabpanel" aria-labelledby="automation-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/automation_icon.svg" alt="" className="me-3"/>Automation</h2>
                      <p>
CloudStack supports automation integrations through its robust API and
integration capabilities, enabling <strong>seamless orchestration and
automation of cloud infrastructure tasks</strong>.
                      </p>
                      <div className="row integration-images">
                        <div className="col-md-6">
                          <div className="tab-box box-puppet box278"><img src="/img/puppet_logo.svg" alt="hyper-v"/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-terraform box131"><img src="/img/terraform_logo.svg" alt="hyper-v"/></div>
                          <div className="tab-box box-ansible box131"><img src="/img/ansible_logo.svg" alt="hyper-v"/></div>
                        </div>
                        <div className="col-md-12">
                          <div className="tab-box box-chef box131"><img src="/img/chef-logo.png" alt="hyper-v"/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="backup" label="Backup &amp; Disaster Recovery">
                    <div className="tab-pane" id="backup" role="tabpanel" aria-labelledby="backup-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/Backup_icon.svg" alt="" className="me-3"/>Backup &amp; Disaster Recovery</h2>
                      <p>
Supports backup and disaster recovery solutions through
CloudStack’s <strong>APIs and extensible architecture</strong>,
enabling third-party tools and services to seamlessly integrate with
the platform for data protection and continuity.
                      </p>
                      <div className="row integration-images">
                        <div className="col">
                          <div className="tab-box box-acronis box192"><img src="/img/acronis_logo.svg" alt=""/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="containers" label="Containers">
                    <div className="tab-pane" id="containers" role="tabpanel" aria-labelledby="containers-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/containers_icon.svg" alt="" className="me-3"/>Containers</h2>
                      <p>
CloudStack supports different containers through its Container
Service, which can manage and orchestrate container-based workloads
alongside traditional virtual machines, <strong>providing a unified
cloud infrastructure platform</strong>.
                      </p>
                      <div className="row integration-images">
                        <div className="col">
                          <div className="tab-box box-kubernetes box192"><img src="/img/kubernetes_logo.svg" alt=""/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="hypervisors" label="Hypervisors">
                    <div className="tab-pane" id="hypervisors" role="tabpanel" aria-labelledby="hypervisors-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/Hypervisors_icon.svg" alt="" className="me-3"/>Hypervisors</h2>
                      <p>
Supports different hypervisors through
CloudStack’s <strong>hypervisor-agnostic architecture</strong>,
allowing deployment and management of virtualized resources across
various hypervisor platforms.
                      </p>
                      <div className="row integration-images">
                        <div className="col-md-6">
                          <div className="tab-box box-blue box278"><img src="/img/MS_hyper-v_logo.png" alt="hyper-v"/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-white box278"><img src="/img/VM_ware_logo.svg" alt="vmware"/></div>
                        </div>
                        <div className="col-md-12">
                          <div className="tab-box box-citrix box131"><img src="/img/citrix_logo.svg" alt="citrix"/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-dgray box131"><img src="/img/KVM_logo.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-lgray box131"><img src="/img/XCP-ng_logo.png" alt=""/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="monitoring" label="Monitoring">
                    <div className="tab-pane" id="monitoring" role="tabpanel" aria-labelledby="monitoring-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/monitoring_icon.svg" alt="" className="me-3"/>Monitoring</h2>
                      <p>
Apache CloudStack supports different hypervisors through
its <strong>hypervisor-agnostic architecture</strong>, allowing
deployment and management of virtualized resources across various
hypervisor platforms.
                      </p>
                      <div className="row integration-images">
                        <div className="col">
                          <div className="tab-box box-veeam box192"><img src="/img/veeam_logo.svg" alt=""/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="networking" label="Networking">
                    <div className="tab-pane" id="networking" role="tabpanel" aria-labelledby="networking-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/networking_icon.svg" alt="" className="me-3"/>Networking</h2>
                      <p>
Support different networking integrations through CloudStack’s modular
networking framework, which facilitates the integration
of <strong>various network technologies and services to meet diverse
infrastructure needs</strong>.
                      </p>
                      <div className="row integration-images">
                        <div className="col">
                          <div className="tab-box box-tfabric box192"><img src="/img/tungsten_logo.svg" alt=""/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="storage" label="Storage">
                    <div className="tab-pane" id="storage" role="tabpanel" aria-labelledby="storage-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/storage_icon.svg" alt="" className="me-3"/>Storage</h2>
                      <p>
Apache CloudStack supports different storage integrations through its
pluggable storage framework, allowing seamless integration with
various storage systems and technologies for <strong>versatile data
management and storage options</strong>.
                      </p>
                      <div className="row integration-images">
                        <div className="col-md-6">
                          <div className="tab-box box-white box278"><img src="/img/storpool_logo.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-netapp box278"><img src="/img/net_app__solidfire_logo.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-pure box131"><img src="/img/pure_storage-logo.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-ceph box131"><img src="/img/ceph_logo.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-gluster box90"><img src="/img/gluster_logo.png" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-nutanix box172"><img src="/img/nutanix_logo.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-dell box172"><img src="/img/dell_logo.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-cloudian box172"><img src="/img/cloudian_logo.svg" alt=""/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="billing" label="Billing">
                    <div className="tab-pane" id="storage" role="tabpanel" aria-labelledby="storage-tab" tabindex="0">
                      <h2 className="integration-title"><img src="/img/storage_icon.svg" alt="" className="me-3"/>Storage</h2>
                      <p>
Apache CloudStack offers integrations with a variety of self-service
intuitive billing and cloud management portals, designed to empower
administrators, and service providers with the tools they need to
manage cloud resources effectively . These solutions offer tools for
service orchestration, automation, billing, and seamless integration
with various IaaS cloud ecosystems.
                      </p>
                      <div className="row integration-images">
                        <div className="col-md-6">
                          <div className="tab-box box-cloudmc box131"><img src="/img/cloud-mc-white.png" height="47p" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-stackconsole box131"><img src="/img/Stack Console SVG.svg" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-stackbill box131"><img src="/img/stack-bill-logo-02.png" height="47p" alt=""/></div>
                        </div>
                        <div className="col-md-6">
                          <div className="tab-box box-hostbill box131"><img src="/img/hostbill-logo.png" height="47p" alt=""/></div>
                        </div>
                        <div className="col-md-12">
                          <div className="tab-box box-apiculus box131"><img src="/img/apiculus-logo.png" height="47p" alt=""/></div>
                        </div>
                      </div>
                    </div>
                  </TabItem>
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
make the most of CloudStack’s capabilities, fostering a collaborative
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
                    <a href="" className="btn btn-primary">Download</a>
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
                    <a href="" className="btn btn-primary">Download</a>
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
