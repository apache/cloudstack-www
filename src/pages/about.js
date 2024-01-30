import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from './learn-more.mdx';


export default function About() {
  return (
    <Layout title="About Apache CloudStack">
      <header>
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="section-title text-center mb-5">About Apache CloudStack</h1>
              <div>
                <h2 class="text-center">What is Apache CloudStack?</h2>
                <p>
Apache CloudStack is a top-level project of the Apache Software
Foundation (ASF). The project develops open source software for
deploying public and private Infrastructure-as-a-Service (IaaS)
clouds.  <br/> CloudStack provides an open and flexible cloud
orchestration platform to deliver reliable and scalable private and
public clouds. What does that <strong>mean</strong>, exactly?
                </p>
                <p>
Apache CloudStack is a Java-based project that provides a management
server and agents (if needed) for hypervisor hosts so that you can run
an IaaS cloud. Some, but not all, of the features and functionality
provided by CloudStack:
                </p>
                <ul>
                  <li>
Works with hosts running XenServer/XCP, KVM, Hyper-V, and/or VMware
ESXi with vSphere
                  </li>
                  <li>
Provides a friendly Web-based UI for managing the cloud
                  </li>
                  <li>
Provides a native <a href="/api" alt="api overview">API</a>.
                  </li>
                  <li>
May provide an Amazon S3/EC2 compatible API (optional)
                  </li>
                  <li>
Manages storage for instances running on the hypervisors (primary
storage) as well as templates, snapshots, and ISO images (secondary
storage)
                  </li>
                  <li>
Orchestrates network services from the data link layer (L2) to some
application layer (L7) services, such as DHCP, NAT, firewall, VPN, and
so on
                  </li>
                  <li>
Accounting of network, compute, and storage resources
                  </li>
                  <li>
Multi-tenancy/account separation
                  </li>
                  <li>
User management
                  </li>
                </ul>
                <p>
In short, organizations can use Apache CloudStack to deploy a
full-featured public or private IaaS cloud.
                </p>
              </div>
              <div>
                <h2>People of Apache CloudStack</h2>
                <p>
Apache projects are managed by
a <a href="https://www.apache.org/dev/pmc.html#what-is-a-pmc"
alt="link to describtion of what a PMC entails">Project Management
Committee</a> <a href="/who">(PMC)</a>, and much of the work is done
by the
project's&nbsp;<a href="https://www.apache.org/dev/committers.html"
alt="link to committers">committers</a>. Note that committer status
is <strong>not</strong> limited to developers, but is conferred to
individuals who have made sustained contributions of high quality, and
have shown a commitment to mentoring other contributors and following
[The Apache Way](https://theapacheway.com).
                </p>
                <p>
The current Vice President of Apache CloudStack and chair of the PMC,
along with the full list of PMC members and committer contributors is
available on the <a href="/who" alt="who are we"><strong>Who We
Are</strong></a> page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <LearnMore/>
    </Layout>
  );
}
