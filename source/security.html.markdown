---
title: Apache CloudStack Security
---

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h1 id="indicators">Apache CloudStack: Security</h1>

</div>

</div>

</div>

The Apache CloudStack project understands that as a core infrastructure project, the application security of Apache CloudStack is of critical importance to the community and users.

## Apache CloudStack Security Team

The PMC has decided to create a "Security Team" for CloudStack.  The Security Team's charter is to manage the response to vulnerabilities reported with Apache CloudStack.  This includes communication with the report, issue verification, issue correction, public communication creation, and vendor coordination.  The Security Team may ask assistance from other community members to help verify or correct a reported issue.

Members of the PMC are eligible to join the security team, but lurking is discouraged.

Community members engaged by the Security Team are expected to hold the issue in confidence until public announcement of the vulnerability.  This protects the users of the software and gives reasonable time for the response process to be implemented.  Further information can be found on the ASF's [How it Works](http://www.apache.org/foundation/how-it-works.html) page.

The CloudStack security team works closely with, and under the direction of, the [ASF security team](http://www.apache.org/security/).

## Reporting Potential Vulnerabilities in Apache CloudStack

If you've found an issue that you believe is a security vulnerability in a released version of CloudStack, please report it to [security@cloudstack.apache.org](mailto:security@cloudstack.apache.org) with details about the vulnerability, how it might be exploited, and any additional information that might be useful.

Upon notification, the ACS security team will initiate the security response procedure. If the issue is validated, the team generally takes 2-4 weeks from notification to public announcement of the vulnerability. During this time, the team will communicate with you as they proceed through the response procedure, and ask that the issue not be announced before an agreed-upon date.

The security team asks that you **please do not create publicly-viewable JIRA tickets related to the issue**. If validated, a JIRA ticket with the security flag set will be created for tracking the issue in a non-public manner.

## Procedure for Responding to Potential Security Issues

<ul>
  <li>Upon receiving notice of a potential security issue, a security team member will create a bug to track the investigation, this bug must be flagged as a security issue. Security flag should mean contents of ticket are not visible to non-security team members</li>
  <li>Security team investigates the issue to confirm/deny the presence of a vulnerability within CloudStack</li>
  <li>If the issue is determined not to be a vulnerability the reporter will be notified and the issue will be closed as invalid</li>
  <li>If issue is confirmed as a CloudStack vulnerability:
    <ul>
      <li>Security team notifies the Apache Security team</li>
      <li>Security team assigns a risk rating to the vulnerability using the Common Vulnerability Scoring System</li>
      <li>Security team works with reporter to get a chance to investigate and mitigate the issue in a timely manner before public announcement. This should be between 15-30 days, depending on the severity and complexity of the issue</li>
      <li>Security team works with Apache Security Team to reserve a CVE Identifier for future public release</li>
      <li>Security team works with appropriate code maintainer(s) to create patch to mitigate the issue</li>
      <li>Testing is conducted to verify patch mitigates issue and does not cause regression errors</li>
      <li>Security team creates a vulnerability announcement</li>
      <li>Patch is committed to trunk and other supported branches that are affected.  The commit should not refer to a particular vulnerability</li>
      <li>A new CloudStack release or hotfix is prepared and tested, containing the new security patch</li>
      <li>Distributor coordination is implemented to enable a coordinated announcement</li>
      <li>Security team posts vulnerability announcement to...
        <ul>
          <li>CloudStack dev list</li>
          <li>CloudStack users list</li>
          <li>The Bugtraq mailing list</li>
        </ul>
      </li>
      <li>After announcement, CHANGES and NEWS files need to be updated to reflect the vulnerability and fix. This must happen AFTER the announcement.</li>
      <li>Also after announcement, modify the Jira ticket so that the issue is now publicly viewable.</li>
    </ul>
  </li>
  <li>After the vulnerability is addressed, the CloudStack community should review development processes to see how the community can minimize the chance of similar vulnerabilities being introduced in the future.</li>
</ul>

## For further information

Further information about Apache CloudStack's security practices can be found in the [CloudStack Security wiki page](https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Security).

