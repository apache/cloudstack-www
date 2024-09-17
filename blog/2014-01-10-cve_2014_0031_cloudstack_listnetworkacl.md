---
layout: post
title: "[CVE-2014-0031] CloudStack ListNetworkACL API discloses ACLs for other users"
tags: [announcement]
slug: cve_2014_0031_cloudstack_listnetworkacl
---
<p>
Product: Apache CloudStack<br/>
Vendor: Apache Software Foundation<br/>
Vulnerability type: Information Disclosure<br/>
Vulnerable Versions: Apache CloudStack 4.2.0<br/>
CVE References: CVE-2014-0031<br/>
Risk Level: Low<br/>
CVSSv2 Base Scores: 3.5  (AV:N/AC:M/Au:S/C:P/I:N/A:N)<br/>
</p>

<p>Description:</p>
<p>The Apache CloudStack Security Team was notified of a an
issue in Apache CloudStack which permits an authenticated user to list
network ACLs for other users.</p>


<p>Mitigation:</p>
<p>Upgrading to CloudStack 4.2.1 or higher will mitigate this issue.</p>

<p>References:</p>
<p>https://issues.apache.org/jira/browse/CLOUDSTACK-5145</p>

<p>Credit:</p>
<p>This issue was identified by Marcus Sorensen</p>
