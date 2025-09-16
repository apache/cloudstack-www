---
layout: post
title: 'CVE-2025-22828: Unauthorised access to annotations'
tags: [announcement]
authors: [nux]
slug: unauthorised-access-to-annotations
---

## [CVE-2025-22828](https://www.cve.org/CVERecord?id=CVE-2025-22828): Unauthorised access to annotations

Severity: Low

Affected versions:

- Apache CloudStack 4.16.0 or later

## Description:

CloudStack users can add and read comments (annotations) on resources they are authorised to access.

<!-- truncate -->

Due to an access validation issue that affects Apache CloudStack versions from 4.16.0, users who have access, prior access or knowledge of resource UUIDs can list and add comments (annotations) to such resources.

An attacker with a user-account and access or prior knowledge of resource UUIDs may exploit this issue to read contents of the comments (annotations) or add malicious comments (annotations) to such resources.

This may cause potential loss of confidentiality of CloudStack environments and resources if the comments (annotations) contain any privileged information. However, guessing or brute-forcing resource UUIDs are generally hard to impossible and access to listing or adding comments isn't same as access to CloudStack resources, making this issue of very low severity and general low impact.


CloudStack admins may also disallow listAnnotations and addAnnotation API access to non-admin roles in their environment as an interim measure.

## Credit:

Alex Perrakis <alexperrakis1@gmail.com> (reporter)

Efstratios Chatzoglou <efchatzoglou@gmail.com> (reporter)

## References:

https://cloudstack.apache.org/

https://www.cve.org/CVERecord?id=CVE-2025-22828
