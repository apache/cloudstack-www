---
layout: post
title: Apache CloudStack CloudMonkey 6.4.0 Release
tags: [announcement]
authors: [rohit]
slug: cloudmonkey-6.4-release
---

[![](/img/banner.svg "CloudMonkey Image")](/blog/cloudmonkey-6.4-release)

We are pleased to announce the release of Apache CloudStack CloudMonkey v6.4.0,
the latest version of the popular command-line interface tool for managing
Apache CloudStack environments.

<!-- truncate -->

CloudMonkey 6.4.0 comes packed with several new features, enhancements, and bug
fixes to make it even more robust and reliable. Some of the key highlights of
this release include:

- Improve CLI mode usage and output handling
- Add support for http POST handling for password and user-data
- Optimise async API jobs polling
- Better interrupt handling of Ctrl+C to cancel on-going API request but not crash cmk
- Remove unnecessary call to listApis (sync) when using CLI mode with url, api key, secret key
- Updates inbuilt API precache to ACS v4.19

CloudMonkey v6.4.0 is [available for download](https://cloudstack.apache.org/downloads.html)
now from the Apache CloudStack website. For more information on the release, including a full list
of new features and bug fixes, please refer to the release notes.

<a class="button button--primary" href="https://github.com/apache/cloudstack-cloudmonkey/releases/tag/6.4.0" target="_blank">Download CloudMonkey v6.4.0</a>
<br/>
<br/>

# Downloads and Documentation

The official source code for CloudMonkey v6.4.0 can be downloaded from:
https://cloudstack.apache.org/downloads.html

CloudMonkey's usage details are documented at
https://github.com/apache/cloudstack-cloudmonkey/wiki

We encourage all CloudStack users to upgrade to CloudMonkey 6.4.0 to take
advantage of the latest features and improvements. As always, we welcome
feedback and contributions from the community to help make CloudMonkey even
better.

Thank you for your continued support of Apache CloudStack CloudMonkey.
