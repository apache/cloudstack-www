import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from '../learn-more.mdx';

function KubernetesHeader() {
  const {siteConfig} = useDocusaurusContext();
    return (
    <header class="header-kubernetes">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1><strong>Kubernetes on<br/> CloudStack</strong> in Production</h1>
                    <p class="px18 k-subtitle">Reduces operational overhead and infrastructure costs</p>                    
                </div>
                <div class="col-lg-6"><img src="img/CloudStack_release_illustration2.png" class="img-fluid mtm50" alt=""/></div>
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
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 order-lg-2">
                        <h2 class="section-title mt-lg-5">About Apache CloudStack</h2>
                        <p class="px18">Apache CloudStack is an 
open-source IaaS platform that is used to build public or private cloud 
environments. CloudStack allows you to easily deploy Kubernetes clusters
 into your own infrastructure without worrying about the underlying 
infrastructure and removing the coupling to specific virtualization 
platforms. It also allows easy deployment of Kubernetes as a Service 
(KaaS) offerings.</p>
                        <p class="px18">Host your Kubernetes clusters on
 it to simplify your work and ensure consistent and predictable behavior
 of your applications, no matter the underlying infrastructure.</p>
                        <p class="px18">CloudStack provides a Kubernetes
 Cluster API Provider and also the CloudStack Kubernetes Service - 
giving a choice of integration techniques.</p>
                        <p class="px18">CloudStack is in widespread 
production usage at many of the world’s largest organizations including 
many Fortune 500 companies. It includes the entire “stack” of features 
you need: compute orchestration, Network-as-a-Service, user and account 
management, a complete and open native API, resource accounting, and a 
first-class User Interface.</p>                        
                    </div>
                    <div class="col-lg-6 margin-second text-center"><img src="../img/CloudStack_survey2.png" class="img-fluid" alt="CloudStack survey"/></div>
                </div>
            </div>
        </section>

        <section class="bgr-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-title">Explore the Kubernetes Cluster API Provider for Apache CloudStack</div>
                        <p class="px18 mt-4">The Kubernetes Cluster API 
(CAPI) provider for Apache CloudStack allows Ku- bernetes users to build
 and manage resources on Apache CloudStack. The pro- vider is available 
under the Apache 2 open-source license and is managed by the Cloud 
Native Computing Foundation (CNCF). The Cluster API brings declara- 
tive, Kubernetes-style APIs to cluster creation, configuration and 
management. The API itself is shared across multiple cloud providers 
allowing for true Apache CloudStack hybrid deployments of Kubernetes. It
 is built atop the lessons learned from previous cluster managers such 
as kops and kubicorn.</p>
                    </div>
                    <div class="col-lg-6">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcfVkVT48Kk" title="Bootstrapping K8S Cluster using CAPC - Apache CloudStack - Kubernetes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <section class="dark-blue p-5 right-banner">
                <div class="row">
                    <div class="col-lg-7">
                        <h2 class="section-title">Launching a Kubernetes cluster on Apache CloudStack</h2>
                        <p class="px18 mt-4">If users want to launch a 
Kubernetes cluster on Apache Cloudstack, they can check out the Getting 
Started Guide to create your first Kubernetes cluster on Apache 
CloudStack using Cluster API.</p>
                        <p class="px18 mb-4">CloudStack hybrid 
deployments of Kubernetes. It is built atop the lessons learned from 
pre- vious cluster managers such as kops and kubicorn.</p>
                        <a href="" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </section>
        </div>

        <section class="m80px">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 order-lg-2">
                        <h2 class="section-title mb-4">Explore the CloudStack Kubernetes Service</h2>
                        <p class="px18">The CloudStack Kubernetes 
Service (CKS) gives Cloud Service Providers a Container as a Service 
(CaaS) offering within their existing IaaS environments, with no 
disruption to user experience or business process.</p>
                        <p class="px18">The CloudStack Kubernetes 
Service is developed as a plug-in to Apache CloudStack. It gives users 
the ability to create Kubernetes clusters within an existing 
multi-tenant environment provided by CloudStack. The user experience is 
seamless: users can now manage container clusters and deploy &amp; 
manage cloud-native applications all in the same user-interface they use
 to manage their existing compute, network and storage.</p>
                    </div>
                    <div class="col-lg-6 text-center"><img src="img/apache_cloudstack_services.png" alt="" class="img-fluid"/></div>
                </div>
            </div>
        </section>

        <section class="light-blue">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="section-title mb-4">Use Cases</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-lg-6 offset-lg-3">
                        <nav class="mb-4">
                            <div class="nav nav-underline nav-justified pb-4" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="self-healing-tab" data-bs-toggle="tab" data-bs-target="#self-healing" type="button" role="tab" aria-controls="self-healing" aria-selected="true" tab-index="0">Self–Healing</button>
                                <button class="nav-link" id="mcm-tab" data-bs-toggle="tab" data-bs-target="#mcm" type="button" role="tab" aria-controls="mcm" aria-selected="false" tabindex="1">Multiple Cluster Management</button>
                                <button class="nav-link" id="scaling-tab" data-bs-toggle="tab" data-bs-target="#scaling" type="button" role="tab" aria-controls="scaling" aria-selected="false" tabindex="2">Scaling</button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-lg-8 offset-lg-2">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="self-healing" role="tabpanel" aria-labelledby="self-healing-tab" tabindex="0">
                                <div class="tab-content">
                                    <div class="row p-4">
                                        <div class="col-lg-2 text-center"><img src="img/kubernetes_healing_icon.svg" alt="Self–Healing" class="mb-4"/></div>
                                        <div class="col-lg-10">
                                            <p class="px18"><strong>The 
ClusterAPI provides self-healing when a Kubernetes node fails, spawning 
new Instances of the pod on a new node, as native Kubernetes does not 
have the ability to provision new infrastructure when this occurs.</strong>
 Since ClusterAPI manages infrastructure and Kubernetes at the same 
time, it can throw more resources onto CloudStack when a failure occurs.</p>
                                            <p class="px18">The 
MachineHealthCheck controller is used to monitor and certify the health 
of the control plane of the work nodes, guaranteeing the integrity of 
the services. When a node fails, or resources are insufficient, or the 
services are unavailable, a new node is provisioned and added to the 
cluster. In this case, Kubernetes will reschedule the podes from failed 
nodes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="mcm" role="tabpanel" aria-labelledby="mcm-tab" tabindex="1">
                                <div class="tab-content">
                                    <div class="row p-4">
                                        <div class="col-lg-2 text-center"><img src="img/multi-cluster_icon.svg" alt="Multiple Cluster Management" class="mb-4"/></div>
                                        <div class="col-lg-10">
                                            <p class="px18">When 
Kubernetes cluster expansion is considered, ClusterAPI provides support 
for a range of different providers, including Apache CloudStack. This 
ClusterAPI capability is important for companies that use heterogeneous 
providers from different service providers.</p>
                                            <p class="px18">The 
ClusterAPI abstracts away the different deployment mechanisms that are 
offered by various providers and infrastructure vendors, allowing 
operators to fully standardize the entire deployment, regardless of 
vendor or datacenter or edge. As a result, operators have more control 
over the entire application environment in a standardized approach to 
cluster lifecycle management, enabling reuse of existing components 
across multiple clusters, thus reducing rework.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="scaling" role="tabpanel" aria-labelledby="scaling-tab" tabindex="2">
                                <div class="tab-content">
                                    <div class="row p-4">
                                        <div class="col-lg-2 text-center"><img src="img/scaling_icon.svg" alt="Scaling" class="mb-4"/></div>
                                        <div class="col-lg-10">
                                            <p class="px18">Application 
workload is often unpredictable, and to scale up and down Kubernetes 
clusters, the ClusterAPI facilitates scaling when workloads change. The 
main task of the ClusterAPI is to ensure that there is enough capacity 
to meet the current demand for access to the application, also 
guaranteeing redundancy so that, if a control plane fails, another can 
attend.</p>
                                            <p class="px18">With the 
Kubeadm Control Plane provider (KCP), the operator can declaratively 
expand the Kubernetes control plane, thus managing availability and 
ensuring that the control nodes are organized, minimizing failures 
during the cluster lifecycle.</p>
                                            <p class="px18">For worker 
nodes, just specify the number of nodes; the clusterAPI will provision 
the new CloudStack Instances and add them to the cluster. When using the
 Cluster Autoscaler, the number of worker nodes is automatically 
adjusted to the number of pods needed, thus meeting the access demand. 
Metrics can refer to application workload or average CPU usage for 
cluster tuning.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>

        <section class="m80px">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-title text-center mb-5">Learn More about Apache CloudStack</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="apache-card bgd-blue">
                            <div class="img-holder"><img src="img/Apache%20CloudStack%20at%20a%20Glance_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <div class="apache-card-title">Apache CloudStack at a Glance</div>
                                <p>Learn more about Apache CloudStack and the capabilities it provides for IaaS builders</p>
                                <a href="" class="btn btn-primary btn-dark-blue">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="apache-card bgd-dark-blue">
                            <div class="img-holder"><img src="img/Apache%20CloudStack%20Proof%20of%20Concept_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <div class="apache-card-title">Apache CloudStack Proof of Concept Guide</div>
                                <p>This PoC guide gives you all the guidance you need to perform a successful Proof of Concept of Apache CloudStack</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 mb-4">
                        <div class="apache-card card-border">
                            <div class="img-holder"><img src="img/Delivering%20Public%20Cloud%20Services_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <p class="blue-title">SOLUTION BRIEF</p>
                                <div class="apache-card-title">Delivering Public Cloud Services with CloudStack</div>
                                <p>Discover how to use CloudStack to provision public cloud services and improve your profitability</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-4">
                         <div class="apache-card card-border">
                            <div class="img-holder"><img src="img/IKOULA_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <p class="blue-title">CASE STUDY</p>
                                <div class="apache-card-title">IKOULA - The cloud leader &amp; innovator in France</div>
                                <p>IKOULA Simplifies the Management of Large-Scale Cloud Infrastructure with CloudStack and XCP-ng</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                         <div class="apache-card card-border">
                            <div class="img-holder"><img src="img/Your.Online_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body pt-0">
                                <p class="blue-title">CASE STUDY</p>
                                <div class="apache-card-title">Your.Online – A leading European online services platform</div>
                                <p>Future-Proof Open-Source Platform Hosting Millions of Websites for Your.Online Powered by CloudStack, KVM and Ceph</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
      <LearnMore/>
    </Layout>
  );
}
