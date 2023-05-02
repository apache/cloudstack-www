import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, styles.heroBg)}>
      <div class="container">
        <h3 className="hero__title">Apache CloudStack™</h3>
        <p className="hero__subtitle">
          Open Source IaaS Cloud Computing Platform
        </p>
        <p>
          Apache CloudStack 4.18.0.0 is out! This is current CloudStack LTS release.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="download">
            Download
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://docs.cloudstack.apache.org">
            Documentation
          </Link>
        </div>
        <br/>
        <p>
          Looking for other versions of Apache CloudStack? You can find them in
          our <a href="/archives">archives</a> page as well.
        </p>
      </div>
      <div className="container">
        <img src="img/banner.svg" />
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
        <div className="container hero">
          <div className="row">
            <div className="col col--6">
              <img src="img/dashboard.png" />
            </div>
            <div className="col col--6">
              <h3>About CloudStack</h3>

              Apache CloudStack is open source software designed to deploy and manage large
              networks of virtual machines, as a highly available, highly scalable
              Infrastructure as a Service (IaaS) cloud computing platform. CloudStack is used
              by a number of service providers to offer public cloud services, and by many
              companies to provide an on-premises (private) cloud offering, or as part of a
              hybrid cloud solution.
              <br/><br/>

              CloudStack is a turnkey solution that includes the entire "stack" of features
              most organizations want with an IaaS cloud: compute orchestration,
              Network-as-a-Service, user and account management, a full and open native API,
              resource accounting, and a first-class User Interface (UI).
              CloudStack currently supports the most popular hypervisors: VMware, KVM, Citrix
              XenServer/Hypervisor, XCP-ng, Oracle VM server and Microsoft Hyper-V.
              <br/><br/>

              Users can manage their cloud with an easy to use Web interface, command line
              tools, and/or a full-featured RESTful API. In addition, CloudStack provides an
              API that's compatible with AWS EC2 and S3 for organizations that wish to deploy
              hybrid clouds. &nbsp;
              <Link
                className="button button--secondary"
                to="about">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
