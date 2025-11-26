---
title: Apache CloudStack Security
---

<h1>Apache CloudStack: Security</h1>

<h2>Security Model</h2>

The Apache CloudStack project understands that as a core infrastructure project,
the application security of Apache CloudStack is of critical importance to the
community and users.

It is important to know that the project can not guarantee that it will be secure with
the following usages:

- share access to the DataBase
- share database dumps or other forms of backups
- share log files
- use any of [the third party integration components](integrations), that are meant for monitoring, storage, network and more.

In addition to that, it is your own responsibility, as an operator to

- protect against DoS and brute-force attacks.
- provide full fledged monitoring. Though some facilities are provided, putting appropriate monitoring remains the ultimate responsibility of the operator.
- ensure the security and integrity, including safeguarding them against unauthorized external access of critical cloud resources. These include, but are not limited to OS level access to Hosts, Management Servers, SystemVMs and routers.
- make sure scripts and executables added as custom integrations in the extensions framework, are safe to use.

That all said, the project will work with any one on improving the secure
use of the software it provides, with any 3rd party integration
vendors or users of the software. This can be done on public GitHub
issues or confidentially if so desired.

<h2>Reporting Potential Vulnerabilities in Apache CloudStack</h2>

If you've found an issue that you believe is a security vulnerability in a
released version of CloudStack, please report it to the [ASF security
team](https://www.apache.org/security/) via email to
[security@apache.org](mailto:security@apache.org) with details about the
vulnerability, how it might be exploited, and any additional information that
might be useful.

Upon notification, the ASF security team will work with the CloudStack PMC
through validation and fixing the issue. If the issue is validated, it generally
takes 2-4 weeks from notification to public announcement of the vulnerability.
During this time, the team will communicate with you as they proceed through the
response procedure, and ask that the issue not be announced before an
agreed-upon date.

**Please do not create publicly-viewable JIRA tickets related to the issue**. If
validated, a JIRA ticket with the security flag set will be created for tracking
the issue in a non-public manner, and made public at the appropriate time.

<h2>Procedure for Responding to Potential Security Issues</h2>

We follow the Apache Security Team's procedures documented
[here](https://www.apache.org/security/committers.html).

<h2>For further information</h2>

Further information about Apache CloudStack's security practices can be found in
the [CloudStack Security wiki
page](https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Security).
