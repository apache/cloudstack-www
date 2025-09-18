import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import EventContents from '@site/src/components/Events';

export default function Events() {
  const {siteConfig} = useDocusaurusContext();
    return (
    <Layout title="Apache CloudStack Events and Meetups" >
      <section className="events">
        <div className="container">
          <EventContents className="events"/>
        </div>
      </section>
    </Layout>
    );
}
