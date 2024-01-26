import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import EventContents from '@site/src/components/Events';
import LearnMore from './learn-more.mdx';

import styles from './index.module.css';

const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header class="header-homepage">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-white">
            <h1><strong>Open–Source</strong> Cloud Computing™</h1>
            <p class="px18 my-4">
Apache CloudStack™  is an open-source software system designed to deploy and manage large networks of virtual machines, as a highly available, highly scalable Infrastructure as a Service (IaaS) cloud computing platform.
            </p>
            <div class="center-buttons">
              <a href="downloads" class="btn btn-light btn-size">Download</a>
	      &nbsp;
              <a href="https://docs.cloudstack.apache.org/en/4.18.1.0/" target="_blank" class="btn btn-outline-light btn-size">Documentation</a>
              <p class="small mt-3">Apache CloudStack 4.18.1.0 is out!</p>
            </div>
          </div>
          <div class="col-lg-7"><img src="img/CloudStack_monkey_cloud.png" class="img-fluid" alt=""/></div>
        </div>
      </div>
      <div class="partners-holder">
        <div class="partners">
          <img src="img/brainboard.png" height="25" alt=""/>
          <img src="img/ntt.svg" height="18" alt=""/>
          <img src="img/leaseweb.svg" height="25" alt=""/>
          <img src="img/logo-indiqus.png" height="20" alt=""/>
          <img src="img/Logo_arsat.png" height="20" alt=""/>
          <img src="img/we_systems.svg" height="50" alt=""/>
          <img src="img/AT&T_logo_2016.svg" height="38" alt=""/>
          <img src="img/Dimsi SVG Logo.svg" height="30" alt=""/>
          <img src="img/jotelulu.png" height="50" alt=""/>
          <img src="img/proio_logo.svg" height="30" alt=""/>
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
        <section class="light-blue">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 order-lg-2">
                <h2 class="section-title mt-lg-5">Apache CloudStack Infrastructure for Virtual Machines and Bare Metal</h2>
                <p class="px18">
Apache CloudStack is open-source software designed to deploy and
manage large networks of virtual machines, as a highly available,
highly scalable Infrastructure as a Service (laaS) cloud computing
platform. CloudStack is used by a number of service providers to offer
public cloud services, and by many companies to provide an on-premises
(private) cloud offering, or as part of a hybrid cloud solution.
                </p>
                <p class="px18">
CloudStack is a turnkey solution that includes the entire “stack” of
features most organizations want with an laaS cloud: compute
orchestration, Net-work-as-a-Service, user and account management, a
full and open native API, resource accounting, and a first-class User
Interface (UI).
                </p>
                <p class="px18">
Users can manage their cloud with an easy to use Web interface,
command line tools, and/or a full-featured RESTful API. In addition,
CloudStack provides an API that’s compatible with AWS EC2 and S3 for
organizations that wish to deploy hybrid clouds.
                </p>
              </div>
              <div class="col-lg-6 text-center"><img src="img/Apache%20CloudStack%20Infrastructure_illustration.svg" class="img-fluid" alt="Apache CloudStack Infrastructure Illustration"/></div>
            </div>
          </div>
        </section>
        
        <section class="powers">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h2 class="section-title mb-5">Apache CloudStack Powers Globally Leading Clouds</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="power-card line">
                  <img src="img/Cloud_Solution_icon.svg" alt=""/>
                  <p class="card-title mb-3">Cloud Solution Provider</p>
                  <p class="card-text">
Apache CloudStack seamlessly integrates with your existing
infrastructure, <strong>significantly reducing the costs and time
required</strong> to build a multi-tenant IaaS platform.
                  </p>
                  <a href="/cloud-builders" class="btn btn-outline-secondary btn-card">Learn More</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="power-card line">
                  <img src="img/MSPs_icon.svg" alt=""/>
                  <p class="card-title mb-3">MSPs</p>
                  <p class="card-text">
<strong>Ensure simplicity, scalability and avoid vendor lock-in with
CloudStack.</strong> Provision IaaS with ease and manage all your
cloud environments from a single plane.
                  </p>
                  <a href="blog/we-systems-case-study" class="btn btn-outline-secondary btn-card">Discover a Success Story</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="power-card line">
                  <img src="img/Telcos_icon.svg" alt=""/>
                  <p class="card-title mb-3">Telcos</p>
                  <p class="card-text">
Deliver cutting-edge cloud-based services, including <strong>virtual
network functions, infrastructure as a service, and advanced edge
computing</strong> capabilities with Edge zones.
		  </p>
                  <a href="" class="btn btn-card">&nbsp;</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="power-card">
                  <img src="img/enterprises_icon.svg" alt=""/>
                  <p class="card-title mb-3">Enterprises</p>
                  <p class="card-text">
<strong>Align your IT infrastructure with your specific business
requirements</strong> and security concerns, driving efficiency and
optimizing resource utilization.
		  </p>
                  <a href="" class="btn btn-card">&nbsp;</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="power-card">
                  <img src="img/continuous_integration_icon.svg" alt=""/>
                  <p class="card-title mb-3">Kubernetes CAPC/CKS</p>
                  <p class="card-text">
CAPI implementation CAPC integrates Kubernetes with CloudStack&nbsp;
<strong>simplifying cluster management</strong>. Apache 2 licensed, CNCF-managed for
hybrid deployments.
		  <br/>
		  <br/>
CKS is an easy to use quick start integration with kubernetes for
starting clusters easily.
		  </p>
                  <a href="kubernetes" class="btn btn-outline-secondary btn-card">Learn More</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="power-card">
                  <img src="img/edge_icon.svg" alt=""/>
                  <p class="card-title mb-3">Edge Computing</p>
                  <p class="card-text">
Manage both traditional Cloud (Core Zones) and Edge Zones from a
single, unified platform. <strong>Unlock new opportunities for growth
and innovation.</strong>
		  </p>
                  <a href="" class="btn btn-card">&nbsp;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="dark-blue">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h2 class="section-title mt-lg-5">CloudStack Solves Key Challenges for Cloud Builders and IaaS Providers</h2>
                <p class="px18 mt-4">
CloudStack can manage tens of thousands of physical servers installed
in geographically distributed data centers. It is a powerful laaS
management solution, but it is still easy to use and implement with a
small team. Powered by a solid open-source community, Apache
CloudStack eliminates the dependencies and allows you to follow your
own cloud development plan, and use the hardware and software of your
choice and business requirements.
		</p>
              </div>
              <div class="col-lg-6 text-center"><img src="img/key_challenges_illustration.png" alt="" class="img-fluid"/></div>
            </div>
            <div class="take">Take charge of your cloud management. <strong>Decrease operational costs and simplify cloud management</strong> with Apache CloudStack!</div>
          </div>
        </section>

        <section class="events">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 order-lg-2">
                <h2 class="section-title mb-4 margin-first">Run a Multi-hypervisor Environment at Scale</h2>
                <p class="px18">
CloudStack is hypervisor agnostic, supporting VMware, KVM, XenServer
and Xen Cloud Platform. This gives CloudStack a unique position in the
market: it is not proprietary technology and is not tied to any
specific infrastructure.
		</p>
              </div>
              <div class="col-lg-6 text-center"><img src="img/Multi-hypervisor_illustration.png" alt="" class="img-fluid"/></div>
            </div>

            <div class="row">
              <div class="col-lg-5">
                <h2 class="section-title mb-4 margin-second">Latest Release</h2>
                <div class="center-buttons">
                  <p class="px18">Apache CloudStack 4.18.1.0 is out!<br/>This is the latest LTS release.</p>
                  <a href="downloads" class="btn btn-primary btn-size">Download</a>
                  &nbsp;
                  <a href="https://docs.cloudstack.apache.org/en/4.18.1.0/" target="_blank" class="btn btn-outline-secondary btn-size">Documentation</a>
                </div>
              </div>
              <div class="col-lg-7"><img src="img/CloudStack_release_illustration.png" class="img-fluid img-release" alt=""/></div>
            </div>

        <EventContents/>

          </div>
        </section>

        <section class="community">
          <div class="light-blue">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">Join Our Community</div>
                  <p class="px18 my-4">
Learn more about involved with Apache CloudStack on the Contributing
to Apache page, or go straight to our Developer Resources page.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="join-card">
                    <img src="img/git_logo.svg" alt=""/>
                    <p class="blue-title">DEVELOPER RESOURCES</p>
                    <p class="join-title">Contribute to Apache CloudStack</p>
                    <p class="text">
Interested in helping out with Apache CloudStack? Great! We welcome
participation from anybody willing to work The Apache Way.
                    </p>
                    <a href="https://github.com/apache/cloudstack" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="join-card">
                    <img src="img/slack_logo.svg" alt=""/>
                    <p class="blue-title">JOIN US ON SLACK</p>
                    <p class="join-title">Getting Involved</p>
                    <p class="text">
We need folks to help with documentation, translation, promotion, and
having someone with snazzy Web design skills would not be a bad thing!
                    </p>
                    <a href="https://join.slack.com/t/apachecloudstack/shared_invite/zt-2aegc22z7-tPCxpptfcebTBtd59qcZSQ" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="join-card">
                    <img src="img/blog_icon.svg" alt=""/>
                    <p class="blue-title">CONTRIBUTE CONTENT</p>
                    <p class="join-title">Blog</p>
                    <p class="text">
Want to share your success story? Or you are working on a new feature?
Contribute your content to our blog or join the Meet the Community
Video Series.
                    </p>
                    <a href="blog" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="join-card">
                    <img src="img/mailing_list_icon.svg" alt=""/>
                    <p class="blue-title">WHERE TO ASK FOR HELP</p>
                    <p class="join-title">Mailing List</p>
                    <p class="text">Need some help getting started? Feel free to ask on the Mailing List.</p>
                    <a href="mailing-lists" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="survey-announce">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <h2 class="section-title mb-4 margin-third">Take the Apache CloudStack User Survey</h2>
                  <p class="px18 mb-5">
Participate in the Apache CloudStack User Survey and help us build the
Annual State of CloudStack Report. This survey will take you less than
5 minutes to complete. Your input is vital for the CloudStack
Community!
                  </p>
                  <div class="center-buttons"><a href="/survey" class="btn btn-outline-secondary btn-size">Take the Survey</a></div>
                </div>
                <div class="col-lg-6 text-center"><img src="img/CloudStack_survey.png" class="img-fluid mt-5"/></div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
