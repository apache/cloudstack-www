---
layout: post
title: CloudStack Kubernetes Provider v1.2.0 Release
tags: [announcement]
authors: [vishesh]
slug: cloudstack-kubernetes-provider-v1.2.0
---

[![](banner.jpg "CloudStack Kubernetes Provider v1.2.0 Release")](/blog/cloudstack-kubernetes-provider-v1.2.0)

The Apache CloudStack project is pleased to announce the release of
[CloudStack Kubernetes Provider
v1.2.0](https://github.com/apache/cloudstack-kubernetes-provider/releases/tag/v1.2.0)
that facilitates Kubernetes deployments on CloudStack.

It allows Kubernetes to dynamically allocate IP addresses and the
respective networking rules on CloudStack to ensure seamless TCP, UDP
and TCP-Proxy LoadBalancer deployments on Kubernetes. This was
historically part of the Kubernetes codebase which was later removed
and donated to the project to allow for further maintenance of the
provider plugin.

This release contains various bug fixes and improvements. Some of the
highlighted features include:
* Support for NetworkACLs for LB on VPC networks
* Support configuring source CIDR list
* ARM support for docker images

<!-- truncate -->

# Documentation

* https://github.com/apache/cloudstack-kubernetes-provider/blob/v1.2.0/README.md
* https://docs.cloudstack.apache.org/en/latest/plugins/cloudstack-kubernetes-provider.html

# Downloads

The official source code for the v1.2.0 release can be downloaded from
the downloads page:
https://cloudstack.apache.org/downloads#cloudstack-kubernetes-provider-release

Changelog for this release can be found here:
https://github.com/apache/cloudstack-kubernetes-provider/releases/tag/v1.2.0

In addition to the official source code release, the container image
is available here:
https://hub.docker.com/layers/apache/cloudstack-kubernetes-provider/v1.2.0
