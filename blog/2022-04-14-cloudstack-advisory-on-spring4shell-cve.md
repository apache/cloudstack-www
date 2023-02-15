---
layout: post
title: CloudStack Advisory on Spring4Shell (CVE-2022-22965&nbsp;and&nbsp;CVE-2022-22963)

slug: cloudstack-advisory-on-spring4shell-cve
---

At the beginning of April 2022, vulnerabilities in the Spring Framework for Java were publicly revealed. Many companies noticed active exploitation of the Spring4Shell vulnerability assigned as CVE-2022-22965. This vulnerability allows hackers to execute the Mirai botnet malware. The exploit allows threat actors to download the Mirai sample to the `/tmp` folder and execute them after changing its execute permission using `chmod`.

Currently, there are two vulnerabilities that allow malicious actors to achieve remote code execution (RCE) for Spring Framework - <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-22965" target="_blank" rel="noopener">CVE-2022-22965</a>, <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-22963" target="_blank" rel="noopener">CVE-2022-22963</a>.

The origin appears to be tracked to VMware products and spring-framework has published new releases <a href="https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement#am-i-impacted" target="_blank" rel="noopener">v5.3.18 and v5.2.20</a> as mitigation.

CloudStack is not affected by Spring4Shell RCE and these CVEs because it isn't deployed as a WAR package and doesn't use Tomcat as the servlet container (it uses embedded Jetty and is deployed as an uber-jar). Further, it doesn't use spring-webmvc or spring-webflux dependencies.

As part of the Apache CloudStack project's routine maintenance and release efforts, a pull request towards the next 4.17 LTS release (4.17.0.0 milestone) that upgrades the spring-framework dependency to the latest v5.3.18 has been merged:

<a href="https://github.com/apache/cloudstack/pull/6250/files" target="_blank" rel="noopener">https://github.com/apache/cloudstack/pull/6250/files</a>