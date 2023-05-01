---
title: Kubernetes
---


<style>
.jumbotron {
    margin-bottom: 100px;
}
.jumbotron h1 {
    font-size: 46px;
    margin-bottom: 50px;
}
.jumbotron p {
    color: #2ca4db;
    margin-bottom: 50px;
}

.dark-box {
    background-color: #2c3e50;
    border-radius: 10px;
    padding: 30px 50px;
    color: #fff;
    font-size: 15px;
}
.dark-box img {
    width: 100%;
    margin-bottom: 20px;
}

.img-holder {           
    background-color: #ecf0f1; 
    border-radius: 10px;
}
.title {
    background-color: #ecf0f1;
    border-radius: 5px 5px 0 0;
  } 
.img-holder-three {           
    border-radius: 5px;
    border: 1px solid #ecf0f1;
}
.title {
    padding: 5px 10px;
}
.btn {
    padding: 2px 10px;
}
.text-10 {
    padding: 10px;
}
.text-two {
    font-size: 22px;
}
.text-three {
    padding-top: 15px;
    font-size: 22px;
    min-height: 75px;
}

.cloudstack-img {
    width: 400px;
}

.img-fluid {
    height: 30px;
}

.nav-tabs > li > a {
    color: #2c3e50;
    font-size: 22px;
}

.nav-tabs > li.active > a,
.nav-tabs > li.active > a:focus,
.nav-tabs > li.active > a:hover {
    border: 0px;
    border-bottom: 3px solid #2c3e50;
    color: #2c3e50;
}
.tab-pane {
    padding-top: 30px;
}

.download {
    color: #2ca4db;
    font-size: 18px;
}

@media screen and (max-width: 480px) {
    .cloudstack-img {
    width: 100%;
    }
    .img-holder,          
    .img-holder-three {
    margin-bottom: 20px;
    }
}
</style>
  
<div class="row">
  <div class="col-lg-12">
    <div class="bs-example">
      <div class="jumbotron">
        <div class="row">
          <div class="col-lg-8" style="margin-top:22px;">
            <h1 style="margin-top:28px;">Kubernetes on CloudStack in Production</h1>
            <p>Reduces operational overhead and infrastrucrture costs</p>         
          </div>
          <div class="col-lg-4">
            <img src="images/CAPC-logo.png" style="width: 100%;" alt="CloudFest Servers">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-lg-6">    
    <p>Apache CloudStack is an open-source IaaS platform that is used to build public or private cloud environments. CloudStack allows you to easily deploy Kubernetes clusters into your own infrastructure without worrying about the underlying infrastructure and removing the coupling to specific virtualization platforms. It also allows easy deployment of Kubernetes as a Service (KaaS) offerings.</p>
    <p>Host your Kubernetes clusters on it to simplify your work and ensure consistent and predictable behavior of your applications, no matter the underlying infrastructure.</p>
    <p>CloudStack provides a Kubernetes Cluster API Provider and also the CloudStack Kubernetes Service  - giving a choice of integration techniques.</p>
    <p>CloudStack is in widespread production usage at many of the world’s largest organizations including many Fortune 500 companies. It includes the entire “stack” of features you need: compute orchestration, Network-as-a-Service, user and account management, a complete and open native API, resource accounting, and a first-class User Interface.</p>   
  </div>
  <div class="col-lg-6 text-center">
    <img src="images/CAPC-servers.png" class="cloudstack-img" alt="Cloud Management">
  </div>
</div>

<div class="row" style="margin-bottom: 100px">
  <div class="col-lg-12" style="margin: 50px 0">
    <h2 class="text-center">Explore the Kubernetes Cluster API Provider<br>for Apache CloudStack</h2>
  </div>
  <div class="col-md-6 col-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcfVkVT48Kk" title="Bootstrapping K8S Cluster using CAPC - Apache CloudStack - Kubernetes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class="col-md-6 col-6" style="padding-top: 50px;">
    <p>The Kubernetes Cluster API (CAPI) provider for Apache CloudStack allows Ku-
      bernetes users to build and manage resources on Apache CloudStack. The pro-
      vider is available under the Apache 2 open-source license and is managed by the
      Cloud Native Computing Foundation (CNCF). The Cluster API brings declara-
      tive, Kubernetes-style APIs to cluster creation, configuration and management.
      The API itself is shared across multiple cloud providers allowing for true Apache</p>
    <p>CloudStack hybrid deployments of Kubernetes. It is built atop the lessons
      learned from previous cluster managers such as kops and kubicorn.</p>
  </div>  
</div>

<div class="row">
  <div class="col-lg-12">
    <div class="dark-box">
      <div class="row">
        <div class="col-md-7 px-5">
          <h2 style="margin-bottom: 30px;">Launching a Kubernetes cluster on Apache CloudStack</h2>
          <p>If users want to launch a Kubernetes cluster on Apache Cloudstack, they can check out the
            Getting Started Guide to create your first Kubernetes cluster on Apache CloudStack using
            Cluster API.</p>
          <p>CloudStack hybrid deployments of Kubernetes. It is built atop the lessons learned from pre-
            vious cluster managers such as kops and kubicorn.</p>
          <a href="https://cluster-api-cloudstack.sigs.k8s.io/getting-started.html"><button type="button" class="btn btn-success" style="margin-top: 20px;">Read more</button></a>
        </div>
        <div class="col-md-5 px-5" style="text-align:center">
            <img src="images/Kubernetes_logo.svg" style="width:300px" alt="Kubernetes logo" />
        </div>     
      </div>
    </div>
  </div>
</div>

<div class="row" style="margin: 100px 0">
  <div class="col-lg-12">
    <h2 class="text-center" style="margin-bottom: 50px;">Explore the CloudStack Kubernetes Service</h2>
  </div>
  <div class="col-md-6 col-6"><img src="images/CloudStack_NewUI.jpeg" width="100%" alt=""></div>
  <div class="col-md-6 col-6">
    <p>The CloudStack Kubernetes Service (CKS) gives Cloud Service Providers a Container as a Service (CaaS) offering within their existing IaaS environments, with no disruption to user experience or business process.</p>
    <p>The CloudStack Kubernetes Service is developed as a plug-in to Apache CloudStack. It gives users the ability to create Kubernetes clusters within an existing multi-tenant environment provided by CloudStack. The user experience is seamless: users can now manage container clusters and deploy & manage cloud-native applications all in the same user-interface they use to manage their existing compute, network and storage.</p>
  </div>  
</div>

<div class="row">
  <div class="col-lg-12">
    <h2 class="text-center" style="margin-bottom: 30px;">Use Cases</h2>
  </div>
</div>

<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">Self-Healing</a></li>
  <li><a data-toggle="tab" href="#menu1">Multiple Cluster management</a></li>
  <li><a data-toggle="tab" href="#menu2">Scaling</a></li>
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <div class="row">
      <div class="col-md-3">
        <img src="images/self-healing.png" style="width: 100%;" alt="">
      </div>
      <div class="col-md-9" style="padding-top: 50px;">
        <p>The ClusterAPI provides self-healing when a Kubernetes node fails, spawning new Instances of the pod on a new node, as native Kubernetes does not have the ability to provision new infrastructure when this occurs. Since ClusterAPI manages infrastructure and Kubernetes at the same time, it can throw more resources onto CloudStack when a failure occurs.</p>
        <p>The MachineHealthCheck controller is used to monitor and certify the health of the control plane of the work nodes, guaranteeing the integrity of the services. When a node fails, or resources are insufficient, or the services are unavailable, a new node is provisioned and added to the cluster. In this case, Kubernetes will reschedule the podes from failed nodes.</p>
      </div>
    </div>
  </div>
  <div id="menu1" class="tab-pane fade">
    <div class="row">
      <div class="col-md-3">
        <img src="images/multiple-clusters-management.png" style="width: 100%;" alt="">
      </div>
      <div class="col-md-9" style="padding-top: 50px;">
        <p>When Kubernetes cluster expansion is considered, ClusterAPI provides support for a range of different providers, including Apache CloudStack. This ClusterAPI capability is important for companies that use heterogeneous providers from different service providers.</p>
        <p>The ClusterAPI abstracts away the different deployment mechanisms that are offered by various providers and infrastructure vendors, allowing operators to fully standardize the entire deployment, regardless of vendor or datacenter or edge. As a result, operators have more control over the entire application environment in a standardized approach to cluster lifecycle management, enabling reuse of existing components across multiple clusters, thus reducing rework.</p>
      </div>
    </div>
  </div>
  <div id="menu2" class="tab-pane fade">
    <div class="row">
      <div class="col-md-3">
        <img src="images/scaling.png" style="width: 100%;" alt="">
      </div>
      <div class="col-md-9" style="padding-top: 50px;">
        <p>Application workload is often unpredictable, and to scale up and down Kubernetes clusters, the ClusterAPI facilitates scaling when workloads change. The main task of the ClusterAPI is to ensure that there is enough capacity to meet the current demand for access to the application, also guaranteeing redundancy so that, if a control plane fails, another can attend.</p>
        <p>With the Kubeadm Control Plane provider (KCP), the operator can declaratively expand the Kubernetes control plane, thus managing availability and ensuring that the control nodes are organized, minimizing failures during the cluster lifecycle.</p>
        <p>For worker nodes, just specify the number of nodes; the clusterAPI will provision the new CloudStack Instances and add them to the cluster. When using the Cluster Autoscaler, the number of worker nodes is automatically adjusted to the number of pods needed, thus meeting the access demand. Metrics can refer to application workload or average CPU usage for cluster tuning.</p>
      </div>
    </div>
  </div>
</div>

<div class="row" style="margin: 100px 0 50px;">
  <div class="col-lg-12">
    <h2 class="text-center">Learn More about Apache CloudStack</h2>
  </div>
</div>

<div class="row" style="margin-bottom: 50px;">
  <div class="col-lg-6">
    <div class="img-holder">
      <div style="height: 20px; background-color: #2c3e50; border-radius: 10px 10px 0 0;"></div>
      <img src="images/Apache-CloudStack-at-a-glance.jpg" width="100%" alt="">
      <div class="text-10">
        <p><b>Apache CloudStack at a Glance</b></p>
        <p>Learn more about Apache CloudStack and the capabilities it provides for IaaS builders</p>
        <a href="https://blogs.apache.org/cloudstack/mediaresource/ea033a7f-6854-4211-99c9-71575b7216bc"><button type="button" class="btn btn-success">Download</button></a>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="img-holder">
      <div style="height: 20px; background-color: #2c3e50; border-radius: 10px 10px 0 0;"></div>
      <img src="images/step-by-step-guide.jpg" width="100%" alt="">
      <div class="text-10">
        <p><b>Apache CloudStack Proof of Concept Guide</b></p>
        <p>This PoC guide gives you all the guidance you need to perform a successful Proof of Concept of Apache CloudStack</p>
        <a href="https://cwiki.apache.org/confluence/download/attachments/240885394/Apache%20CloudStack%20PoC%20Guide%20Step-by-Step%20Guide%20Installation%20and%20Use%20Cases_Clean.pdf?api=v2"><button type="button" class="btn btn-success">Download</button></a>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-lg-4">
    <div class="img-holder-three">
      <div class="title">Solution Brief</div>
      <img src="images/ACS-solution-brief.jpg" width="100%" alt="">
      <div class="text-10">
        <p><b>Delivering Public Cloud Services with CloudStack</b></p>
        <p>Discover how to use CloudStack to provision public cloud services and improve your profitability</p>
        <a href="https://blogs.apache.org/cloudstack/mediaresource/9aa03eed-1a2c-4b40-a434-23a2b266b194"><button type="button" class="btn btn-sm btn-success">Download</button></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="img-holder-three">
      <div class="title">Case Study</div>
      <img src="images/Ikoula-case-study.jpg" width="100%" alt="">
      <div class="text-10">
        <p><b>IKOULA - The cloud leader and innovator in France</b></p>
        <p>IKOULA Simplifies the Management of Large-Scale Cloud Infrastructure with CloudStack and XCP-ng</p>
        <a href="https://cwiki.apache.org/confluence/download/attachments/30757703/CloudStack_Case-Study_IKOULA_2021-11_EN.pdf?version=1&modificationDate=1638874264049&api=v2"><button type="button" class="btn btn-sm btn-success">Download</button></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="img-holder-three">
      <div class="title">Case Study</div>
      <img src="images/your-online-case-study.jpg" width="100%" alt="">
      <div class="text-10">
        <p><b>Your.Online -  a leading European online services platform</b></p>
        <p>Future-Proof Open-Source Platform Hosting Millions of Websites for Your.Online Powered by CloudStack, KVM and Ceph</p>
        <a href="https://blogs.apache.org/cloudstack/mediaresource/d9f0bb38-580a-411c-9318-b1a11143e881"><button type="button" class="btn btn-sm btn-success">Download</button></a>
      </div>
    </div>
  </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>