---
layout: post
title: CloudStack and OpenSSL CVE-2015-1793
tags: [announcement]
slug: cloudstack_and_openssl_cve_2015
---
<b>Updated July 11th, 2015:</b>
<p>After reviewing CloudStack components and seeing <a href="https://security-tracker.debian.org/tracker/CVE-2015-1793">Debian's advisory</a> on CVE-2015-1793 (CloudStack's "system VM" is Debian based), it looks like CloudStack is not affected by this vulnerability.
</p>

<p>Original post follows...</p>
<p>On the 9th of July, the OpenSSL project announced a high severity vulnerability within the OpenSSL library. While this particular vulnerability does not seem to affect SSL servers, there are security issues with SSL clients powered by OpenSSL.  Because of this, we suspect there may be issues with parts of CloudStack which initiate SSL connections.</p>

<p>At this point we are still reviewing which particular versions of OpenSSL are used by different versions of CloudStack. Once this review is complete, we will further update the community and this post as to our next steps.</p>
