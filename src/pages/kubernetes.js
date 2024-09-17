import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from './learn-more.mdx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function KubernetesHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="header-kubernetes header-homepage">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1><strong>Kubernetes on<br/> CloudStack</strong> in Production</h1>
            <p className="px18 k-subtitle">Reduces operational overhead and infrastructure costs</p>
          </div>
          <div className="col-lg-6"><img src="/img/CloudStack_release_illustration2.png" className="img-fluid mtm50" alt=""/></div>
        </div>
        </div>
    </header>
  );
}

export default function KubernetesOnCloudStack() {
  return (
    <Layout title="Kubernetes on CloudStack in Production" description="Kubernetes on CloudStack in Production">
      <KubernetesHeader />
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <h2 className="section-title mt-lg-5">About Apache CloudStack</h2>
                <p className="px18">
Apache CloudStack is an open-source IaaS platform that is used to
build public or private cloud environments. CloudStack allows you to
easily deploy Kubernetes clusters into your own infrastructure without
worrying about the underlying infrastructure and removing the coupling
to specific virtualization platforms. It also allows easy deployment
of Kubernetes as a Service (KaaS) offerings.
                </p>
                <p className="px18">
Host your Kubernetes clusters on it to simplify your work and ensure
consistent and predictable behavior of your applications, no matter
the underlying infrastructure.
                </p>
                <p className="px18">
CloudStack provides a Kubernetes Cluster API Provider and also the
CloudStack Kubernetes Service - giving a choice of integration
techniques.
                </p>
                <p className="px18">
CloudStack is in widespread production usage at many of the world’s
largest organizations including many Fortune 500 companies. It
includes the entire “stack” of features you need: compute
orchestration, Network-as-a-Service, user and account management, a
complete and open native API, resource accounting, and a first-class
User Interface.
                </p>
              </div>
              <div className="col-lg-6 margin-second text-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHIRetdt-pxPT62IesXMoQUmhQ8ATGKcYZa507mB9uwzn-Q/viewform" target="_blank">
                  <img src="/img/CloudStack_survey2.png" className="img-fluid" alt="CloudStack survey"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bgr-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">Explore the Kubernetes Cluster API Provider for Apache CloudStack</div>
                <p className="px18 mt-4">
The Kubernetes Cluster API (CAPI) provider for Apache CloudStack
allows Ku- bernetes users to build and manage resources on Apache
CloudStack. The pro- vider is available under the Apache 2 open-source
license and is managed by the Cloud Native Computing Foundation
(CNCF). The Cluster API brings declara- tive, Kubernetes-style APIs to
cluster creation, configuration and management. The API itself is
shared across multiple cloud providers allowing for true Apache
CloudStack hybrid deployments of Kubernetes. It is built atop the
lessons learned from previous cluster managers such as kops and
kubicorn.
                </p>
              </div>
              <div className="col-lg-6">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcfVkVT48Kk" title="Bootstrapping K8S Cluster using CAPC - Apache CloudStack - Kubernetes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="dark-blue p-5 right-banner">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="section-title">Launching a Kubernetes cluster on Apache CloudStack</h2>
                <p className="px18 mt-4">
If users want to launch a
Kubernetes cluster on Apache Cloudstack, they can check out the Getting
Started Guide to create your first Kubernetes cluster on Apache
CloudStack using Cluster API.
                </p>
                <p className="px18 mb-4">
CloudStack hybrid deployments of Kubernetes. It is built atop the
lessons learned from pre- vious cluster managers such as kops and
kubicorn.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="m80px">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <h2 className="section-title mb-4">Explore the CloudStack Kubernetes Service</h2>
                <p className="px18">
The CloudStack Kubernetes Service (CKS) gives Cloud Service Providers
a Container as a Service (CaaS) offering within their existing IaaS
environments, with no disruption to user experience or business
process.
                </p>
                <p className="px18">
The CloudStack Kubernetes Service is developed as a plug-in to Apache
CloudStack. It gives users the ability to create Kubernetes clusters
within an existing multi-tenant environment provided by
CloudStack. The user experience is seamless: users can now manage
container clusters and deploy &amp; manage cloud-native applications
all in the same user-interface they use to manage their existing
compute, network and storage.
                </p>
              </div>
              <div className="col-lg-6 text-center"><img src="/img/apache_cloudstack_services.png" alt="" className="img-fluid"/></div>
            </div>
          </div>
        </section>
        <section className="light-blue">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section-title mb-4">Use Cases</div>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-9 offset-lg-2">
                <Tabs className="tabbed-examples tab-box">
                  <TabItem value="self–healing" label="Self–Healing" default>
                    <div className="row p-4">
                      <div className="col-lg-2 text-center"><img src="/img/kubernetes_healing_icon.svg" alt="Self–Healing" className="mb-4"/></div>
                      <div className="col-lg-10">
                        <p className="px18">
<strong>The ClusterAPI provides self-healing when a Kubernetes node
fails, spawning new Instances of the pod on a new node, as native
Kubernetes does not have the ability to provision new infrastructure
when this occurs.</strong>  Since ClusterAPI manages infrastructure
and Kubernetes at the same time, it can throw more resources onto
CloudStack when a failure occurs.
                        </p>
                        <p className="px18">
The MachineHealthCheck controller is used to monitor and certify the
health of the control plane of the work nodes, guaranteeing the
integrity of the services. When a node fails, or resources are
insufficient, or the services are unavailable, a new node is
provisioned and added to the cluster. In this case, Kubernetes will
reschedule the podes from failed nodes.
                        </p>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem value="mcm" label="Multiple Cluster Management">
                    <div className="row p-4">
                      <div className="col-lg-2 text-center"><img src="/img/multi-cluster_icon.svg" alt="Multiple Cluster Management" className="mb-4"/></div>
                      <div className="col-lg-10">
                        <p className="px18">
When Kubernetes cluster expansion is considered, ClusterAPI provides
support for a range of different providers, including Apache
CloudStack. This ClusterAPI capability is important for companies that
use heterogeneous providers from different service providers.
                        </p>
                        <p className="px18">
The ClusterAPI abstracts away the different deployment mechanisms that
are offered by various providers and infrastructure vendors, allowing
operators to fully standardize the entire deployment, regardless of
vendor or datacenter or edge. As a result, operators have more control
over the entire application environment in a standardized approach to
cluster lifecycle management, enabling reuse of existing components
across multiple clusters, thus reducing rework.
                        </p>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem className="nav-link" value="scaling" label="Scaling">
                    <div className="row p-4">
                      <div className="col-lg-2 text-center"><img src="/img/scaling_icon.svg" alt="Scaling" className="mb-4"/></div>
                      <div className="col-lg-10">
                        <p className="px18">
Application workload is often unpredictable, and to scale up and down
Kubernetes clusters, the ClusterAPI facilitates scaling when workloads
change. The main task of the ClusterAPI is to ensure that there is
enough capacity to meet the current demand for access to the
application, also guaranteeing redundancy so that, if a control plane
fails, another can attend.
                        </p>
                        <p className="px18">
With the Kubeadm Control Plane provider (KCP), the operator can
declaratively expand the Kubernetes control plane, thus managing
availability and ensuring that the control nodes are organized,
minimizing failures during the cluster lifecycle.
                        </p>
                        <p className="px18">
For worker nodes, just specify the number of nodes; the clusterAPI will provision
the new CloudStack Instances and add them to the cluster. When using the
 Cluster Autoscaler, the number of worker nodes is automatically
adjusted to the number of pods needed, thus meeting the access demand.
Metrics can refer to application workload or average CPU usage for
cluster tuning.
                        </p>
                      </div>
                    </div>
                  </TabItem>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

      </main>
      <LearnMore/>
    </Layout>
  );
}
