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
      <div className="container">
        <img src="img/banner.svg" />
      </div>
      <div class="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">An easy to use, robust, turnkey, highly available and scalable infrastructure-as-a-service (IaaS) opensource cloud computing platform <a class="button button--secondary" href="/about">Learn More</a>
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
