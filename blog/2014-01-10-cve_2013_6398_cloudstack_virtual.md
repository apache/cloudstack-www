---
layout: post
title: "[CVE-2013-6398] CloudStack Virtual Router stop/start modifies firewall rules
  allowing additional access"

slug: cve_2013_6398_cloudstack_virtual
---
<p>
Product: Apache CloudStack<br/>
Vendor: Apache Software Foundation<br/>
Vulnerability type: Bypass<br/>
Vulnerable Versions: Apache CloudStack 4.1.0, 4.1.1, 4.2.0<br/>
CVE References: CVE-2013-2136<br/>
Risk Level: Low<br/>
CVSSv2 Base Scores: 2.8 (AV:N/AC:M/Au:M/C:P/I:N/A:N)<br/></p>

<p>Description:</p> 
<p>The Apache CloudStack Security Team was notified of a an issue in the Apache CloudStack virtual router that failed to preserve source restrictions in firewall rules after a virtual router had been stopped and restarted.</p>

<p>Mitigation:</p>
<p>Upgrading to CloudStack 4.2.1 or higher will mitigate this issue.</p>

<p>References:</p>
<p>https://issues.apache.org/jira/browse/CLOUDSTACK-5263</p>

<p>Credit:</p>
<p>This issue was identified by the Cloud team at Schuberg Philis</p>
