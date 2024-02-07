---
layout: post
title: "[CVE-2013-2136] Apache CloudStack Cross-site scripting (XSS) vulnerabiliity"
tags: [announcement]
slug: cve_2013_2136_apache_cloudstack
---
<p>
Product: Apache CloudStack<br />
Vendor: The Apache Software Foundation<br />
Vulnerability Type(s): Cross-site scripting (XSS)<br />
Vulnerable version(s): Apache CloudStack versions 4.0.0-incubating,
                       4.0.1-incubating, 4.0.2 and 4.1.0<br />
CVE References: CVE-2013-2136<br />
Risk Level: Low<br />
CVSSv2 Base Scores: 4 (AV:N/AC:L/Au:S/C:N/I:P/A:N)</p>

<p>Description:</p>

<p>The Apache CloudStack Security Team was notified of an issue found in
the Apache CloudStack user interface that allows an authenticated user
to execute cross-site scripting attack against other users within the
system.</p>

<p>Mitigation:</p>

<p>Updating to Apache CloudStack versions 4.1.1 or higher will mitigate
this vulnerability.</p>

<p>Please see the 4.1.1 release notes for further information about how to
upgrade:</p>

<p><a href="http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.1.1/html/Release_Notes/index.html">http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.1.1/html/Release_Notes/index.html</a></p>

<p>References:</p>

<p><a href="https://issues.apache.org/jira/browse/CLOUDSTACK-2936">https://issues.apache.org/jira/browse/CLOUDSTACK-2936</a></p>

<p>Credit:</p>

<p>This issue was identified by Oleg Boytsev from strongserver.org.</p>
