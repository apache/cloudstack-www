---
layout: post
title: CloudStack and the "Ghost" glibc vulnerability
date: '2015-01-28T19:06:04+00:00'
permalink: cloudstack_and_the_ghost_glibc
---
<b>UPDATE: mitigation instructions have been improved (don't update openswan) and we forgot to mention rebooting.</b><br>
<b>UPDATE: Links to updated System VM templates are now below</b><br>
<br>
<p>Yesterday, a buffer overflow vulnerability was announced in glibc that affects most current Linux distributions. In CloudStack, the system VMs contain a vulnerable version of glibc. </p>

<p>CloudStack community members have built an updated system VM template, which ShapeBlue is hosting at <a href="http://packages.shapeblue.com/systemvmtemplate/">http://packages.shapeblue.com/systemvmtemplate/</a> (More information on the packages at <a href="http://shapeblue.com/packages">http://shapeblue.com/packages</a>). </p>

<p>For instructions on how to update the SystemVM template in CloudStack, see <a href="http://support.citrix.com/article/CTX200024">here</a>.</p>

<p>For those who wish to patch their running system VMs, ssh into each one and run:</p>

<pre>
apt-mark hold openswan
apt-get clean
apt-get update && apt-get upgrade
</pre>

After updating glibc, the system will need to be rebooted.

<p>Information about how to connect to your System VMs is available <a href="https://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.2.0/html/Admin_Guide/accessing-system-vms.html">here</a>.</p>

<h2>Other CloudStack-related systems may be affected!</h2>
<p>Please review security updates from Linux distributions you use on your management server, storage systems, hypervisors, as well as other Linux VMs and bare-metal systems running in your environments. <a href="http://www.cyberciti.biz/faq/cve-2015-0235-patch-ghost-on-debian-ubuntu-fedora-centos-rhel-linux/">This post</a> provides instructions for determining if a system is vulnerable, as well as patching directions for common Linux distributions.</p>
