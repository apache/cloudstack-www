import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from './learn-more.mdx';

function CloudBuildersHeader() {
  const {siteConfig} = useDocusaurusContext();
    return (
    <header className="header-cloud header-homepage">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <h1>Apache CloudStack– <strong>A Turnkey Solution for Cloud Builders</strong></h1>
                    <p className="px18 my-4 text-center text-lg-start">Decrease total cost of ownership, eliminate vendor lock-in and operational overhead</p>
                    <div className="center-buttons">
                        <a href="/downloads" className="btn btn-primary btn-size mb-5">Download</a>
                    </div>
                </div>
                <div className="col-lg-7"><img src="/img/CloudStack_cloud_builderfs_illustration.png" className="img-fluid" alt=""/></div>
            </div>
	</div>
    </header>
    );
}


export default function CloudBuilders() {
  return (
    <Layout title="Apache CloudStack - A Turnkey Solution for Cloud Builders">
        <CloudBuildersHeader/>
    <main>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <h2 className="section-title mb-4">About Apache CloudStack</h2>
                        <p className="px18">Apache CloudStack is a highly
scalable IaaS cloud computing platform that provides a cloud
orchestration layer, automating the creation, provisioning and
configuration of IaaS components. It turns existing virtual
infrastructure into a cloud-based Infrastructure as a Service (IaaS)
platform. Because CloudStack leverages existing infrastructure, the
costs and time for the organization to build a multi-tenant IaaS
platform are greatly reduced.</p>
                        <p className="px18">CloudStack is a turnkey solution
 for MSPs, cloud providers and telcos. It includes the entire “stack” of
 features you need: compute orchestration, Network-as-a-Service, user
and account management, a full and open native API, resource accounting,
 and a first-class User Interface.</p>
                    </div>
                    <div className="col-lg-6 text-center">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHIRetdt-pxPT62IesXMoQUmhQ8ATGKcYZa507mB9uwzn-Q/viewform" target="_blank">
                        <img src="/img/CloudStack_survey3.png" className="img-fluid mt-4 mt-lg-2" alt="CloudStack survey"/>
                      </a>
                    </div>
                </div>
            </div>
        </section>

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="partners-holder">
                        <p className="blue-title mb-4 mb-lg-5">LEADING COMPANIES TRUST APACHE CLOUDSTACK</p>
                        <div className="partners cloud-partners">
                            <img src="/img/BT_logo.svg" height="50" alt=""/>
                            <img src="/img/CloudOps_logo.svg" height="30" alt=""/>
                            <img src="/img/ikoula_logo.svg" height="40" alt=""/>
                            <img src="/img/M5Hosting_logo.png" height="30" alt=""/>
                            <img src="/img/versio-logo.png" height="20" alt=""/>
                            <img src="/img/yourhosting.nl_logo.svg" height="30" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="powers bg-none">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2 className="section-title text-center mb-4">CloudStack Solves Key Challenges for Cloud Providers &amp; MSPs</h2>
                        <p className="px18 text-center mb-5">CloudStack can
manage tens of thousands of physical servers installed in geographically
 distributed data centers. It is a powerful IaaS man- agement solution,
but it is still easy to use and implement with a small team. Powered by a
 solid open-source community, Apache CloudStack eliminates the
dependencies and allows you to follow your own cloud development plan,
and use the hardware and software of your choice and business
requirements.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="power-card line">
                            <img src="/img/decrease_TCO_icon.svg" alt=""/>
                            <p className="card-title">Decrease TCO for your IaaS</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="power-card line">
                            <img src="/img/open-source_icon.svg" alt=""/>
                            <p className="card-title">Completely open-source</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="power-card line">
                            <img src="/img/community_icon.svg" alt=""/>
                            <p className="card-title">Powered by an active community</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="power-card">
                            <img src="/img/easy_to_use_icon.svg" alt=""/>
                            <p className="card-title">Easy to use</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="power-card">
                            <img src="/img/quick_deploy_icon.svg" alt=""/>
                            <p className="card-title">Quick to deploy</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="power-card">
                            <img src="/img/vendor_integration_icon.svg" alt=""/>
                            <p className="card-title">Strong vendor integrations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    <LearnMore/>
    </main>
    </Layout>
			);
			}
