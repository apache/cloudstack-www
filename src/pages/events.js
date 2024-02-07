import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import EventContents from '@site/src/components/Events';

export default function Events() {
  const {siteConfig} = useDocusaurusContext();
    return (
    <Layout title="Apache CloudStack Events and Meetups" >
      <section class="events">
        <div class="container">
          <EventContents class="events"/>
        </div>
      </section>

      <section class="events container">
        <div>
          <p>
            older events:
          </p>
        </div>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=Ph-NQv80j0k&list=PLnIKk7GjgFlbG2W3lRW9Evjy2Vtg_HKHX">
              Virtual Event for the CloudStack European User Group May 2021
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=RNqK4dTjE0A&list=PLnIKk7GjgFlYfuOAl_LphJRYHcGiw0tCR">
              Virtual Event for the CloudStack European User Group February 2020
            </a>
          </li>
          <li>
            <a src="https://www.youtube.com/playlist?list=PLU2OcwpQkYCwcPxZMKX2BFoKE0Z7g1ENH">
              CloudStack Collaboration Conference June 2018 in Montreal
            </a>
          </li>
          <li>
            <a src="https://www.youtube.com/playlist?list=PLCfLScXpEyAS4YkJpeqDriP7JcU82Tx2r">
              CloudStack Collaboration Conference June 2016 in Montreal
            </a>
          </li>
          <li>
            <a src="https://www.youtube.com/playlist?list=PLGeM09tlguZSeNyOyQKJHNX4pxgK-yoTA">
              CloudStack Collaboration Conference Europe 2015 in Dublin
            </a>
          </li>
        </ul>
      </section>
    </Layout>
    );
}
