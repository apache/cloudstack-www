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
    <header className={clsx('hero', styles.heroBanner)}>
      <div class="container">
        <h1 className="hero__title">{siteConfig.title}™</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <p>Apache CloudStack is open source software designed to deploy and manage large networks of virtual machines, as a highly available, highly scalable Infrastructure as a Service (IaaS) cloud computing platform. CloudStack is used by a number of service providers to offer public cloud services, and by many companies to provide an on-premises (private) cloud offering, or as part of a hybrid cloud solution. <a href="/about">Learn More</a>.
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
        <img src="img/logo.svg" />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Apache Kvrocks is a distributed key value NoSQL database that uses RocksDB as storage engine and is compatible with Redis protocol.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
