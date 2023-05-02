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
        <h3 className="hero__title">Flexible, easy-to-use and powerful open-souce cloud management platform</h3>
        <p className="hero__subtitle">
          Apache CloudStack is used by a number of cloud providers, telecoms, MSPs and enterprises around the world! &nbsp;
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
      </div>
      <div className="container">
        <img src="img/banner.svg" />
      </div>
    </header>
  );
}

function UsersHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner, styles.heroUsers)}>
      <div class="container">
        <p className="hero__subtitle">
          Apache CloudStack Powers the Clouds of Global Leaders
        </p>
        <a href="/users">
        <div className="row">
          <div className="col col--2">
            <img src="users/arsat.png" height="60px" />
          </div>
          <div className="col col--2">
            <img src="users/bt.jpg" height="50px" />
          </div>
          <div className="col col--2">
            <img src="users/ntt.png" height="50px" />
          </div>
          <div className="col col--2">
            <img src="users/apple.png" height="50px" />
          </div>
          <div className="col col--2">
            <img src="users/dimsi.png" height="50px" />
          </div>
          <div className="col col--2">
            <img src="users/gtt.png" height="40px" />
          </div>
        </div>
        </a>
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
      <UsersHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <img src="img/dashboard.png" />
            </div>
            <div className="col col--6">
              <h3>Enjoy the flexibility and freedom to use open-source technology for your cloud</h3>
              Apache CloudStack is open source software designed to deploy and
              manage large networks of virtual machines, as a highly available, highly
              scalable Infrastructure as a Service (IaaS) cloud computing platform. CloudStack
              is used by a number of service providers to offer public cloud services, and by
              many companies to provide an on-premises (private) cloud offering, or as part of
              a hybrid cloud solution.<br/><br/>
              CloudStack is a turnkey solution that includes the entire "stack" of features
              most organiza- tions want with an IaaS cloud: compute orchestration,
              Network-as-a-Service, user and account management, a full and open native API,
              resource accounting, and a first-class User Interface (UI). &nbsp;
              <Link
                className="button button--secondary"
                to="about">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
