---
layout: post
title: CloudStack Advisory on Insecure Project Invitation Token (CVE-2022-26779)

slug: cloudstack-advisory-on-insecure-project
---
<p>Apache CloudStack prior to 4.16.1.0 used insecure random number generation for project invitation tokens. If a project invite is created based only on an email address, a random token is generated. An attacker with knowledge of the project ID and the fact that the invite is sent, could generate time deterministic tokens and brute force attempt to use them prior to the legitimate receiver accepting the invite.</p>
<p>This feature is not enabled by default, the attacker is required to know or guess the project ID for the invite in addition to the invitation token, and the attacker would need to be an existing authorized user of CloudStack. Due to this the impact is considered low risk. As of 9th March 2022, this is now tracked under CVE-2021-44228: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-26779">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-26779</a></p>
<p>To mitigate the risk, a CloudStack admin can do any of the following:</p>
<p>1. Disable the feature by setting `project.invitation.required` to false.</p>
<p>2. Disable the project SMTP global settings.</p>
<p>3. Upgrade to Apache CloudStack 4.16.1.0 or higher.</p>
