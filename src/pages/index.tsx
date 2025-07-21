import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import EventContents from '@site/src/components/Events';
import LearnMore from './learn-more.mdx';
import ArchitectureSVG from '@site/static/img/Apache CloudStack Infrastructure_illustration.svg';
import styles from './index.module.css';

const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="header-homepage">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-white">
            <h1><strong>Open–Source</strong> Cloud Computing™</h1>
            <p className="px18 my-4">
Apache CloudStack™  is an open-source software system designed to deploy and manage large networks of virtual machines, as a highly available, highly scalable Infrastructure as a Service (IaaS) cloud computing platform.
            </p>
            <div className="center-buttons">
              <a href="downloads" className="btn btn-light btn-size">Download</a>
	      &nbsp;
              <a href="https://docs.cloudstack.apache.org/en/4.20.1.0/" target="_blank" className="btn btn-outline-light btn-size">Documentation</a>
              <p className="small mt-3">Apache CloudStack 4.20.1.0 is out!</p>
            </div>
          </div>
          <div className="col-lg-7"><img src="/img/CloudStack_monkey_cloud.png" className="img-fluid" alt=""/></div>
        </div>
      </div>
      <div className="partners-holder">
        <div className="partners">
          <img src="/img/brainboard.png" height="25" alt=""/>
          <img src="/img/ntt.svg" height="18" alt=""/>
          <img src="/img/leaseweb.svg" height="25" alt=""/>
          <img src="/img/logo-yotta .png" height="20" alt=""/>
          <img src="/img/Logo_arsat.png" height="20" alt=""/>
          <img src="/img/we_systems.svg" height="50" alt=""/>
          <img src="/img/AT&T_logo_2016.svg" height="38" alt=""/>
          <img src="/img/Dimsi SVG Logo.svg" height="30" alt=""/>
          <img src="/img/jotelulu.png" height="50" alt=""/>
          <img src="/img/proio_logo.svg" height="30" alt=""/>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Apache CloudStack is an opensource infrastructure-as-a-service cloud computing platform that is easy to use, turnkey, highly available and highly scalable.">
      <HomepageHeader />
      <main>
        <section className="light-blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <h2 className="section-title mt-lg-5">Apache CloudStack Infrastructure for Virtual Machines and Bare Metal</h2>
                <p className="px18">
Apache CloudStack is open-source software designed to deploy and
manage large networks of virtual machines, as a highly available,
highly scalable Infrastructure as a Service (laaS) cloud computing
platform. CloudStack is used by a number of service providers to offer
public cloud services, and by many companies to provide an on-premises
(private) cloud offering, or as part of a hybrid cloud solution.
                </p>
                <p className="px18">
CloudStack is a turnkey solution that includes the entire “stack” of
features most organizations want with an laaS cloud: compute
orchestration, Network-as-a-Service, user and account management, a
full and open native API, resource accounting, and a first-class User
Interface (UI).
                </p>
                <p className="px18">
Users can manage their cloud with an easy to use Web interface,
command line tools, and/or a full-featured RESTful API. In addition,
CloudStack provides an API that’s compatible with AWS EC2 and S3 for
organizations that wish to deploy hybrid clouds.
                </p>
              </div>
              <ArchitectureSVG className="col col-lg-6"/>
            </div>
          </div>
        </section>

        <section className="powers">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="section-title mb-5">Apache CloudStack Powers Globally Leading Clouds</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="power-card line">
                  <img src="/img/Cloud_Solution_icon.svg" alt=""/>
                  <p className="card-title mb-3">Cloud Solution Provider</p>
                  <p className="card-text">
Apache CloudStack seamlessly integrates with your existing
infrastructure, <strong>significantly reducing the costs and time
required</strong> to build a multi-tenant IaaS platform.
                  </p>
                  <a href="/cloud-builders" className="btn btn-outline-secondary btn-card">Learn More</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="power-card line">
                  <img src="/img/MSPs_icon.svg" alt=""/>
                  <p className="card-title mb-3">MSPs</p>
                  <p className="card-text">
<strong>Ensure simplicity, scalability and avoid vendor lock-in with
CloudStack.</strong> Provision IaaS with ease and manage all your
cloud environments from a single plane.
                  </p>
                  <a href="blog/we-systems-case-study" className="btn btn-outline-secondary btn-card">Discover a Success Story</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="power-card line">
                  <img src="/img/Telcos_icon.svg" alt=""/>
                  <p className="card-title mb-3">Telcos</p>
                  <p className="card-text">
Deliver cutting-edge cloud-based services, including <strong>virtual
network functions, infrastructure as a service, and advanced edge
computing</strong> capabilities with Edge zones.
		  </p>
                  <a href="" className="btn btn-card">&nbsp;</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="power-card line">
                  <img src="/img/enterprises_icon.svg" alt=""/>
                  <p className="card-title mb-3">Enterprises</p>
                  <p className="card-text">
<strong>Align your IT infrastructure with your specific business
requirements</strong> and security concerns, driving efficiency and
optimizing resource utilization.
		  </p>
                  <a href="https://cloudstack.apache.org/blog/cloudstack-and-gitops-at-scale/" className="btn btn-outline-secondary btn-card">Discover a Success Story</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="power-card">
                  <img src="/img/continuous_integration_icon.svg" alt=""/>
                  <p className="card-title mb-3">Kubernetes CAPC/CKS</p>
                  <p className="card-text">
CAPI implementation CAPC integrates Kubernetes with CloudStack&nbsp;
<strong>simplifying cluster management</strong>. Apache 2 licensed, CNCF-managed for
hybrid deployments.
		  <br/>
		  <br/>
CKS is an easy to use quick start integration with kubernetes for
starting clusters easily.
		  </p>
                  <a href="/kubernetes" className="btn btn-outline-secondary btn-card">Learn More</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="power-card">
                  <img src="/img/edge_icon.svg" alt=""/>
                  <p className="card-title mb-3">Edge Computing</p>
                  <p className="card-text">
Manage both traditional Cloud (Core Zones) and Edge Zones from a
single, unified platform. <strong>Unlock new opportunities for growth
and innovation.</strong>
		  </p>
                  <a href="" className="btn btn-card">&nbsp;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="section-title mt-lg-5">CloudStack Solves Key Challenges for Cloud Builders and IaaS Providers</h2>
                <p className="px18 mt-4">
CloudStack can manage tens of thousands of physical servers installed
in geographically distributed data centers. It is a powerful laaS
management solution, but it is still easy to use and implement with a
small team. Powered by a solid open-source community, Apache
CloudStack eliminates the dependencies and allows you to follow your
own cloud development plan, and use the hardware and software of your
choice and business requirements.
		</p>
              </div>
              <div className="col-lg-6 text-center"><img src="/img/key_challenges_illustration.png" alt="" className="img-fluid"/></div>
            </div>
            <div className="take">Take charge of your cloud management. <strong>Decrease operational costs and simplify cloud management</strong> with Apache CloudStack!</div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <h2 className="section-title mb-4 margin-first">Run a Multi-hypervisor Environment at Scale</h2>
                <p className="px18">
CloudStack is hypervisor agnostic, supporting VMware, KVM, XenServer
and Xen Cloud Platform. This gives CloudStack a unique position in the
market: it is not proprietary technology and is not tied to any
specific infrastructure.
		</p>
              </div>
              <div className="col-lg-6 text-center"><img src="/img/Multi-hypervisor-environment.png" alt="" className="img-fluid"/></div>
            </div>

            <div className="row">
              <div className="col col-lg-5">
                <h2 className="section-title mb-4 margin-second">Latest Release</h2>
                <div className="center-buttons">
                  <p className="px18">Apache CloudStack 4.20.1.0 is out!<br/>This is the latest LTS release.</p>
                  <a href="downloads" className="btn btn-primary btn-size">Download</a>
                  &nbsp;
                  <a href="https://docs.cloudstack.apache.org/en/4.20.1.0/" target="_blank" className="btn btn-outline-secondary btn-size">Documentation</a>
                </div>
              </div>
              <div className="col-lg-7"><img src="/img/CloudStack_release_illustration.png" className="img-fluid img-release" alt=""/></div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <EventContents/>
          </div>
        </section>

        <section className="community">
          <div className="light-blue">
            <div className="container">
              <div className="row">
                <div className="col col-lg-6">
                  <div className="section-title">Join Our Community</div>
                  <p className="px18 my-4">
Learn more about involved with Apache CloudStack on the Contributing
to Apache page, or go straight to our Developer Resources page.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-3 col-md-6">
                  <div className="join-card">
                    <img src="/img/git_logo.svg" alt=""/>
                    <p className="blue-title">DEVELOPER RESOURCES</p>
                    <p className="join-title">Contribute to Apache CloudStack</p>
                    <p className="text">
Interested in helping out with Apache CloudStack? Great! We welcome
participation from anybody willing to work The Apache Way.
                    </p>
                    <a href="https://github.com/apache/cloudstack" className="btn btn-primary">Explore the Code</a>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6">
                  <div className="join-card">
                    <img src="/img/slack_logo.svg" alt=""/>
                    <p className="blue-title">JOIN US ON SLACK</p>
                    <p className="join-title">Getting Involved</p>
                    <p className="text">
We need folks to help with documentation, translation, promotion, and
having someone with snazzy Web design skills would not be a bad thing!
                    </p>
                    <a href="mailto:users@cloudstack.apache.org?subject=Request%20to%20join%20Slack%20community&body=Thanks,%0A%0ARegards." className="btn btn-primary">Request Access</a>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6">
                  <div className="join-card">
                    <img src="/img/blog_icon.svg" alt=""/>
                    <p className="blue-title">CONTRIBUTE CONTENT</p>
                    <p className="join-title">Blog</p>
                    <p className="text">
Share a feature you have been working on, a success story, or alternative content to the CloudStack blog!
                    </p>
                    <a href="blog" className="btn btn-primary">Dive In</a>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6">
                  <div className="join-card">
                    <img src="/img/mailing_list_icon.svg" alt=""/>
                    <p className="blue-title">WHERE TO ASK FOR HELP</p>
                    <p className="join-title">Mailing List</p>
                    <p className="text">Need some help getting started? Feel free to ask on the Mailing List.</p>
                    <a href="mailing-lists" className="btn btn-primary">Subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="survey-announce">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="section-title mb-4 margin-third">Take the Apache CloudStack User Survey</h2>
                  <p className="px18 mb-5">
Participate in the Apache CloudStack User Survey and help us build the
Annual State of CloudStack Report. This survey will take you less than
5 minutes to complete. Your input is vital for the CloudStack
Community!
                  </p>
                  <div className="center-buttons"><a href="https://docs.google.com/forms/d/e/1FAIpQLScPHIRetdt-pxPT62IesXMoQUmhQ8ATGKcYZa507mB9uwzn-Q/viewform" target="_blank" className="btn btn-outline-secondary btn-size">Take the Survey</a></div>
                </div>
                <div className="col-lg-6 text-center">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHIRetdt-pxPT62IesXMoQUmhQ8ATGKcYZa507mB9uwzn-Q/viewform" target="_blank">
                    <img src="/img/CloudStack_survey.png" className="img-fluid mt-5"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
