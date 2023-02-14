---
layout: post
title: How to Mitigate OpenSSL HeartBleed Vulnerability in Apache CloudStack
date: '2014-04-09T05:52:17+00:00'
permalink: how_to_mitigate_openssl_heartbleed
---
<b>UPDATE 1:</b> The instructions below are incomplete. The proper upgrade command is "apt-get install openssl libssl1.0.0". If you've just updated openssl, please go back and update libssl as well.<br>
<b>UPDATE 2:</b> Adding instructions for VMWare-hosted System VMs (Thanks to Geoff Higginbottom at ShapeBlue)</b><br>
<b>UPDATE 3:</b> Added instructions for verification of correct versions installed<br>
<b>UPDATE 4:</b> Apache CloudStack 4.0-4.1 not vulnerable, they use older Debian/openssl.<br>

<p>Earlier this week, a security vulnerability was disclosed in OpenSSL, one of the software libraries that Apache CloudStack uses to encrypt data sent over network network connections. As the vulnerability has existed in OpenSSL since early 2012, System VMs in Apache CloudStack versions 4.1.1-4.3 are running software using vulnerable versions of OpenSSL. This includes CloudStack's Virtual Router VMs, Console Proxy VMs, and Secondary Storage VMs.</p>

<p>We are actively working on creating updated System VM templates for each recent version of Apache CloudStack, and for each of the hypervisor platforms which Apache CloudStack supports. Due to our testing and QA processes, this will take several days. In the meantime, we want to provide our users with a temporary workaround for currently running System VMs.</p>

<p>If you are running Apache CloudStack 4.0.0-incubating through the recent 4.3 release, the the following steps will help ensure the security of your cloud infrastructure until an updated version of the System VM template is available:</p>

<h2> For KVM/Xen hosted systems</h2>
<ol>
<li> As an administrator in the CloudStack web UI, navigate to Infrastructure->System VMs</li>
<li> For each System VM listed, note the host it is running on, and it’s “Link Local IP address."</li>
<li> With that data, perform the following steps for each System VM:
<ol type="a">
<li> ssh into that host as root</li>
<li> From the host, ssh into the SSVM via it’s link local IP address: (e.g. ssh -i /root/.ssh/id_rsa.cloud -p 3922 169.254.3.33)</li>
<li> On the System VM, first run "apt-get update"</li>
<li> Then run apt-get install "openssl libssl1.0.0". If a dialog appears asking to restart programs, accept it’s request.</li>
<li> Next, for Secondary Storage VMs, run /etc/init.d/apache2 restart</li>
<li> Log out of the System VM and host server</li>
</ol>
</li>
<li>Back in the CloudStack UI, now navigate to Infrastructure->Virtual Routers. For each VR, host it's running on and it's link local IP address, and then repeat steps a-f above.</li>
</ol>

<h2> For VMWare hosted systems</h2>
<ol>
<li> As an administrator in the CloudStack web UI, navigate to Infrastructure->System VMs</li>
<li> For each System VM listed, note it's management IP address</li>
<li> With that data, perform the following steps for each System VM:</li>
<ol type="a">
<li> From the Management Server, ssh to the System VM via it's management IP: (eg ssh -i /var/lib/cloud/management/.ssh/id_rsa -p 3922 root@10.40.50.8)</li>
<li> On the System VM, first run "apt-get update"</li>
<li> Then run apt-get install "openssl libssl1.0.0". If a dialog appears asking to restart programs, accept it’s request.</li>
<li> Next, for Secondary Storage VMs, run /etc/init.d/apache2 restart</li>
<li> Log out of the System VM</li>
</ol>
</li>
<li>Back in the CloudStack UI, now navigate to Infrastructure->Virtual Routers. For each VR, host it's running on and it's link local IP address, and then repeat steps a-f above.</li>
</ol>

<h2>Verification</h2>

<p>On each System VM, you can test if it has non-vulnerable openssl packages installed by listing installed packages and looking at the installed versions of openssl and libssl. As in the example below, for a system to be non-vulnerable, the packages need to be at or above version 1.0.1e-2+deb7u6:</p>
<pre>
root@v-14-VM:~# dpkg -l|grep ssl
ii  libssl1.0.0:i386                     1.0.1e-2+deb7u6                  i386         SSL shared libraries
ii  openssl                              1.0.1e-2+deb7u6                  i386         Secure Socket Layer (SSL) binary and related cryptographic tools
</pre>

<p>We realize that for larger installations where System VMs are being actively created and destroyed based on customer demand, this is a very rough stop-gap. The Apache CloudStack security team is actively working on a more permanent fix and will be releasing that to the community as soon as possible.</p>

<p>For Apache CloudStack installations that secure the web-based user-interface with SSL, these may also be vulnerable to HeartBleed, but that is outside the scope of this blog post. We recommend testing your installation with [1] to determine if you need to patch/upgrade the SSL library used by any web servers (or other SSL-based services) you use.</p>

1: <a target="_new" href="http://filippo.io/Heartbleed/">http://filippo.io/Heartbleed/</a>
