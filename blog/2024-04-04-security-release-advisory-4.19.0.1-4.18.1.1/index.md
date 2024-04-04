---
layout: post
title: "[ADVISORY] Apache CloudStack Security Releases 4.18.1.1 and 4.19.0.1"
tags: [announcement]
authors: [rohit]
slug: security-release-advisory-4.19.0.1-4.18.1.1
---

Apache CloudStack security releases
[4.18.1.1](https://github.com/apache/cloudstack/releases/tag/4.18.1.1) and
[4.19.0.1](https://github.com/apache/cloudstack/releases/tag/4.19.0.1) address the CVEs
listed below. Affected users are recommended to
[upgrade](https://cloudstack.apache.org/downloads) their CloudStack
installations.

<!-- truncate -->

[**CVE-2024-29006**](https://www.cve.org/CVERecord?id=CVE-2024-29006): x-forwarded-for HTTP header parsed by default

Severity: moderate

Description: By default the CloudStack management server honours the
x-forwarded-for HTTP header and logs it as the source IP of an API
request. This could lead to authentication bypass and other
operational problems should an attacker decide to spoof their IP
address this way.

Affected versions: Apache CloudStack 4.11.0.0 through 4.18.1.0, and 4.19.0.0

Credit: Yuyang Xiao < superxyyang@gmail.com > (finder)

[**CVE-2024-29007**](https://www.cve.org/CVERecord?id=CVE-2024-29007): When
downloading templates or ISOs, the management server and SSVM follow HTTP
redirects with potentially dangerous consequences

Severity: moderate

Affected versions: Apache CloudStack 4.9.1.0 through 4.18.1.0, and 4.19.0.0

Description: The CloudStack management server and secondary storage VM could be
tricked into making requests to restricted or random resources by
means of following 301 HTTP redirects presented by external servers
when downloading templates or ISOs. Users are recommended to upgrade
to version 4.18.1.1 or 4.19.0.1, which fixes this issue.

Credit: Yuyang Xiao < superxyyang@gmail.com > (finder)

[**CVE-2024-29008**](https://www.cve.org/CVERecord?id=CVE-2024-29008): The
extraconfig feature can be abused to load hypervisor resources on a VM instance

Severity: critical

Affected versions: Apache CloudStack 4.14.0.0 through 4.18.1.0, and 4.19.0.0

Description: A problem has been identified in the CloudStack additional VM
configuration (extraconfig) feature which can be misused by anyone who
has privilege to deploy a VM instance or configure settings of an
already deployed VM instance, to configure additional VM configuration
even when the feature is not explicitly enabled by the administrator.
In a KVM based CloudStack environment, an attacker can exploit this
issue to attach host devices such as storage disks, and PCI and USB
devices such as network adapters and GPUs, in a regular VM instance
that can be further exploited to gain access to the underlying network
and storage infrastructure resources, and access any VM instance disks
on the local storage.

Credit: Wei Zhou < ustcweizhou@gmail.com > (finder)
