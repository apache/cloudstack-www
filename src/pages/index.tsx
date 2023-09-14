import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Events from './events.mdx';
import LearnMore from './learn-more.mdx';

import styles from './index.module.css';

const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBg)}>
      <div className={clsx('container')}>
        <div className="row">
          <div className="col col--1">
          </div>
          <div className="col col--6">
            <h3 className="hero__title">Apache CloudStack™</h3>
            <p className="hero__subtitle">
              Easy-to-use, Reliable, Scalable and Powerful IaaS Open Source Cloud Computing Platform
            </p>
            <br/>
            <p className="hero__subtitle">
              Apache CloudStack 4.18.1.0 LTS is out!
            </p>
            <div>
              <Link
                className="button button--primary button--lg"
                to="downloads">
                Download
              </Link>
              &nbsp;&nbsp;
              <Link
                className="button button--secondary button--lg"
                to="https://docs.cloudstack.apache.org">
                Documentation
              </Link>
            </div>
          </div>
          <div className="col col--5 row">
            <img src="/img/logo.svg" width="100%" />
          </div>
        </div>
        <br/>
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
              <Link
                className="button button--info"
                href="https://qa.cloudstack.cloud/simulator/">
                Try CloudStack Simulator Demo
              </Link>
              <div class="hero"/>
              <div class="row">
                <h2>Latest Announcements and Blogs</h2>
                <ul>
                  {recentPosts.items.slice(0, 5).map((item, index) => (
                    <li key={index}>
                      <a href={`${item.permalink}`}>{item.title}</a>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col--6">
              <h2>About CloudStack™</h2>

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
              hybrid clouds.<br/><br/>
              <Link
                className="button button--secondary"
                to="about">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Events/>
            </div>
            <div className="col col--6">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="CloudStack"
                options={{height: 900}}
              />
            </div>
          </div>
        </div>
        <div className="container hero">
          <div className="row">
            <div className="col col--6">
              <h2>Join Us</h2>
              <p>
              Learn more about getting involved with Apache CloudStack on the
              <a href="/contribute"> Contributing to Apache CloudStack</a> page,
              or go straight to our <a href="/developers">Developer Resources</a> page.
              </p>
            </div>
            <div className="col col--6">
              <h2>Take the Apache CloudStack User Survey!</h2>
              <p>
              Participate in the Apache CloudStack User Survey and help us build
              the Annual State of CloudStack Report. This survey will take you less than 5
              minutes to fill in. Your input is vital for the CloudStack Community!<br/>
              <Link
                className="button button--info"
                to="survey">
                Take the Survey
              </Link>
              </p>
            </div>
          </div>
        </div>
        <LearnMore/>
        <br/>
      </main>
    </Layout>
  );
}
