---
layout: post
title: "[CVE-2014-7807] Apache CloudStack unauthenticated LDAP binds"
date: '2014-12-08T20:11:09+00:00'
permalink: cve_2014_7807_apache_cloudstack
---
<p>CVE-2014-7807: Apache CloudStack unauthenticated LDAP binds</p>

<p>CVSS:<br>
7.5, AV:N/AC:L/Au:N/C:P/I:P/A:P</p>

<p>Vendors:<br>
The Apache Software Foundation<br>
Citrix, Inc.</p>

<p>Versions Afffected:<br>
Apache CloudStack 4.3, 4.4</p>

<p>Description:<br>
Apache CloudStack may be configured to authenticate LDAP users.
When so configured, it performs a simple LDAP bind with the name
and password provided by a user.  Simple LDAP binds are defined
with three mechanisms (RFC 4513): 1) username and password; 2)
unauthenticated if only a username is specified; and 3) anonymous
if neither username or password is specified.  Currently, Apache
CloudStack does not check if the password was provided which could
allow an attacker to bind as an unauthenticated user.
</p>
<p>Mitigation:<br>
Users of Apache CloudStack 4.4 and derivatives should update to the
latest version (4.4.2)
</p>
<p>An updated release for Apache CloudStack 4.3.2 is in testing. Until
that is released, we recommend following the mitigation below:
</p>
<p>By default, many LDAP servers are not configured to allow unauthenticated
binds.  If the LDAP server in use allow this behaviour, a potential
interim solution would be to consider disabling unauthenticated
binds.
</p>
<p>Credit:<br>
This issue was identified by the Citrix Security Team.
</p>
