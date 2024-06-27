---
layout: post
title: CloudStack Kubernetes Provider v1.1.0 Release
tags: [announcement]
authors: [ivet]
slug: cloudstack-kubernetes-provider-v1.1.0
---

[![](banner.jpg "CloudStack Kubernetes Provider v1.1.0 Release")](/blog/cloudstack-kubernetes-provider-v1.1.0)

The Apache CloudStack project is pleased to announce the release of
[CloudStack Kubernetes Provider
v1.1.0](https://github.com/apache/cloudstack-kubernetes-provider/releases/tag/v1.1.0)
that facilitates Kubernetes deployments on Cloudstack.

It allows Kubernetes to dynamically allocate IP addresses and the
respective networking rules on CloudStack to ensure seamless TCP, UDP
and TCP-Proxy LoadBalancer deployments on Kubernetes. This was
historically part of the Kubernetes codebase which was later removed
and donated to the project to allow for further maintenance of the
provider plugin.

<!-- truncate -->

# Documentation

https://docs.cloudstack.apache.org/en/latest/plugins/cloudstack-kubernetes-provider.html

# Downloads

The official source code for the v1.1.0 release can be downloaded from
the downloads page:

https://cloudstack.apache.org/downloads#cloudstack-kubernetes-provider-release

Changelog for this release can be found here:

https://github.com/apache/cloudstack-kubernetes-provider/releases/tag/v1.1.0

In addition to the official source code release, the container image
is available here::

https://hub.docker.com/layers/apache/cloudstack-kubernetes-provider/v1.1.0/images/sha256-10c058968e7d2f8e55da5976336a42d88b057e75880f000d3120aa2d75649e97?context=explore
