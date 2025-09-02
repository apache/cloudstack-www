---
layout: post
title: Apache CloudStack CloudMonkey 6.5.0 Release
tags: [announcement]
authors: [shwstppr]
slug: cloudmonkey-6.5-release
---

[![](/img/banner.svg "CloudMonkey Image")](/blog/cloudmonkey-6.5-release)

We are pleased to announce the release of Apache CloudStack CloudMonkey v6.5.0,
the latest version of the popular command-line interface tool for managing
Apache CloudStack environments.

<!-- truncate -->

CloudMonkey 6.5.0 focuses on practical improvements: simpler template/ISO
uploads from the CLI, built-in 2FA prompts for secure sign-in, and more helpful
autocompletion that suggests resource names (with details) as you type.
Some of the key highlights of this release include:

- Adds support for template/ISO file upload
- Adds support for Two-Factor Authentication (2FA) prompts
- Improves autocompletion filtering and listing for different
resources, with name/detail-based suggestions
- Enables sending API requests using HTTP POST
- Improves output formatting for multiple formats and asynchronous APIs
- Enhances filtering output, with support for async APIs and reverse
filtering via the excludefilter option
- Updates inbuilt API precache to ACS v4.21
- Improves credential fallback for command-line scenario
- Hardens file permissions for config and history file access
- Improves validation when setting configuration values
- Improves overall linting, tests, and automated workflows for the repository

CloudMonkey v6.5.0 is [available for download](https://cloudstack.apache.org/downloads.html)
now from the Apache CloudStack website. For more information on the release, including a full list
of new features and bug fixes, please refer to the release notes.

<a class="button button--primary" href="https://github.com/apache/cloudstack-cloudmonkey/releases/tag/6.5.0" target="_blank">Download CloudMonkey v6.5.0</a>
<br/>
<br/>

# Downloads and Documentation

The official source code for CloudMonkey v6.5.0 can be downloaded from:
https://cloudstack.apache.org/downloads.html

CloudMonkey's usage details are documented at
https://github.com/apache/cloudstack-cloudmonkey/wiki

We encourage all CloudStack users to upgrade to CloudMonkey 6.5.0 to take
advantage of the latest features and improvements. As always, we welcome
feedback and contributions from the community to help make CloudMonkey even
better.

Thank you for your continued support of Apache CloudStack CloudMonkey.
