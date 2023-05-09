---
layout: post
title: Dnsmasq Vulnerabilities Advisory for CloudStack
tags: [announcement]
slug: dnsmasq-vulnerabilities-advisory-for-cloudstack
---
<p>Recently, a number of security flaws were recently found in the DNSMasq tool. This tool is used by many systems to provide DNS and DHCP services, including by the CloudStack System VMs.</p>

<p>According to Google’s investigation into the software, out of seven issues, three — CVE-2017-14491, CVE-2017-14492, and CVE-2017-14493 — are remote code execution flaws caused by heap buffer overflow and stack buffer overflow errors through DHCP and DNS vectors.</p>

<p>Another issue, CVE-2017-14494, can be exploited to bypass the Address space layout randomization (ASLR) memory protection function, leading to information leaks.</p>

<p>In addition, three more bugs, CVE-2017-14495, CVE-2017-14496, and CVE-2017-13704, can lead to denial-of-service (DoS) attacks caused by invalid boundary checks, bug collision, and a coding issue.</p>

<h2>Affect On CloudStack</h2>

<p>CloudStack’s System VMs use DNSMasq to provide DNS and DHCP services to the guest VMs from the virtual routers.  These services are only exposed on the internal guest interface(s) of the virtual routers. Therefore a malicious user could compromise a virtual router to which they have a guest instance attached.
</p>

<h2>The Fix</h2>
<p>On 9th October, an updated version of DNSMasq was released by the authors of DNSMasq for the Debian Wheezy Operating System which the CloudStack System VMs use.  We have created new versions of the System VM templates which should be used to replace your existing System VMs using the procedure described below.
</p>

<p>A short-term fix for currently running System VMs (if they have internet access) is to log into the System VMs and run:</p>
<code>
apt-get update <br/>
apt-get upgrade dnsmasq -y
</code>

<p>For information on logging into System VMs please see: http://docs.cloudstack.apache.org/en/latest/administration_guide.html?#accessing-system-vms</p>

<p>The above procedure will patch existing virtual routers, but should a virtual router be destroyed and recreated or a new virtual router created, the subsequent virtual router will no longer be patched.</p>

<p>The full fix is to replace the existing System VM template(s) with the latest patched versions as well as recreating or patch existing virtual routers.</p>

<h2>System VM Patching Procedure</h2>

<p>New System VM templates with updated DNSMasq for major CloudStack versions for XenServer, VMware and KVM hypervisors have been built. We advise CloudStack users to upgrade to the appropriate System VM template and either;</p>

<p>Patch all existing virtual routers using the procedure above or recreate all virtual routers using the procedure detailed in the link for updating system VM templates (below)<br/>
For ACS 4.10+: http://download.cloudstack.org/systemvm/4.10/dnsmasq/<br/>
For ACS 4.6-4.9: http://download.cloudstack.org/systemvm/4.6/dnsmasq/
</p>

<p>The procedure for updating the system VM templates can be found at http://docs.cloudstack.apache.org/projects/cloudstack-administration/en/latest/systemvm.html#enhanced-upgrade-for-virtual-routers.</p>
