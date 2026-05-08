---
layout: post
title: "[ADVISORY] Apache CloudStack LTS Security Releases 4.20.3.0 and 4.22.0.1"
tags: [announcement]
authors: [daan]
slug: security-release-advisory-4.20.3.0-4.22.0.1
---

[![](banner.png "Apache CloudStack LTS Security Releases 4.20.3.0 and 4.22.0.1")](/blog/security-release-advisory-4.20.3.0-4.22.0.1)

The Apache CloudStack project announces the release of LTS releases [4.20.3.0](https://github.com/apache/cloudstack/releases/tag/4.20.3.0) and [4.22.0.1](https://github.com/apache/cloudstack/releases/tag/4.22.0.1) that address the following security issues:

- CVE-2025-66170 (severity 'Low')
- CVE-2025-66171 (severity 'Important')
- CVE-2025-66172 (severity 'Important')
- CVE-2025-66467 (severity 'Important')
- CVE-2025-69233 (severity 'Moderate')
- CVE-2026-25077 (severity 'Important')
- CVE-2026-25199 (severity 'Moderate')


<!-- truncate -->

## [CVE-2025-66170](https://www.cve.org/CVERecord?id=CVE-2025-66170): Any user can list backups that they should not have access to.

The CloudStack Backup plugin has an improper authorization logic in
versions 4.21.0.0 and 4.22.0.0. Anyone with authenticated user-account
access in CloudStack 4.21.0.0+ environments, where this plugin is
enabled and have access to specific APIs can list backups from any
account in the environment. This vulnerability does not allow them to
see the contents of the backup.

### Credits

The CVEs are credited to the following reporters:

  - Fabricio Duarte <fabricio.duarte.jr@gmail.com> (reporter)
  - Gabriel Ortiga Fernandes <gabriel.ortiga@hotmail.com> (reporter)
  - Gabriel Pordeus Santos <gabrielpordeus@gmail.com> (reporter)

### Affected versions:

  - Apache CloudStack 4.21.0.0 through 4.22.0.0

### Resolution

Users are recommended to upgrade to version 4.22.0.1 or later, which
addresses these issues.

## [CVE-2025-66171](https://www.cve.org/CVERecord?id=CVE-2025-66171): Any user can create a new VM from backups they should not have access to

The CloudStack Backup plugin has an improper access logic in versions
4.21.0.0 and 4.22.0.0. Anyone with authenticated user-account access
in CloudStack 4.21.0.0+ environments, where this plugin is enabled and
have access to specific APIs can create new VMs using backups of any
other user of the environment.

### Credits

The CVEs are credited to the following reporters:

  - Fabricio Duarte <fabricio.duarte.jr@gmail.com> (reporter)
  - Gabriel Ortiga Fernandes <gabriel.ortiga@hotmail.com> (reporter)
  - Gabriel Pordeus Santos <gabrielpordeus@gmail.com> (reporter)

### Affected versions:

  - Apache CloudStack 4.21.0.0 through 4.22.0.0

### Resolution

Users are recommended to upgrade to version 4.22.0.1 or later, which
addresses these issues.

## [CVE-2025-66172](https://www.cve.org/CVERecord?id=CVE-2025-66172): Any user can attach a volume in their VMs from backups they should not have access to

The CloudStack Backup plugin has an improper access logic in versions
4.21.0.0 and 4.22.0.0. Anyone with authenticated user-account access
in CloudStack 4.21.0.0+ environments, where this plugin is enabled and
have access to specific APIs can restore a volume from any other
user's backups and attach the volume to their own VMs.

### Credits

The CVEs are credited to the following reporters:

  - Fabricio Duarte <fabricio.duarte.jr@gmail.com> (reporter)
  - Gabriel Ortiga Fernandes <gabriel.ortiga@hotmail.com> (reporter)
  - Gabriel Pordeus Santos <gabrielpordeus@gmail.com> (reporter)

### Affected versions:

  - Apache CloudStack 4.21.0.0 through 4.22.0.0

### Resolution

Users are recommended to upgrade to version 4.22.0.1 or later, which
addresses these issues.

## [CVE-2025-66467](https://www.cve.org/CVERecord?id=CVE-2025-66467): MinIO policy remains intact on bucket deletion

Missing MinIO policy cleanup on bucket deletion via Apache CloudStack
allows users to retain access to buckets which they previously
owned. If another user creates a new bucket with the same name, the
previous owners can gain unauthorized read and write access to it by
using the previously generated access and secret keys.

### Credits

The CVEs are credited to the following reporters:

  - Roman Kozello <roman.kozello@gmail.com> (reporter)

### Affected versions:

  - Apache CloudStack 4.19.0.0 through 4.20.2.0
  - Apache CloudStack 4.21.0.0 through 4.22.0.0

### Resolution

Users are recommended to upgrade to version 4.20.3.0 or 4.22.0.1 or
later, which addresses these issues.


## [CVE-2025-69233](https://www.cve.org/CVERecord?id=CVE-2025-69233): Domain/account resources limits not honored

Due to multiple time-of-check time-of-use race conditions in the
resource count check and increment logic, as well as missing
validations, users of the platform are able to exceed the allocation
limits configured for their accounts/domains. This can be used by an
attacker to degrade the infrastructure's resources and lead to denial
of service conditions.

### Credits

The CVEs are credited to the following reporters:

  - Fernando Oliveira <ferolicar82@gmail.com> (reporter)
  - Gustavo Viana <viana.gust@gmail.com> (reporter)

### Affected versions:

  - Apache CloudStack 4.0.0 through 4.20.2.0
  - Apache CloudStack 4.21.0.0 through 4.22.0.0

### Resolution

Users are recommended to upgrade to version 4.20.3.0 or 4.22.0.1 or
later, which addresses these issues.


## [CVE-2026-25077](https://www.cve.org/CVERecord?id=CVE-2026-25077):Unauthenticated Command Injection in Direct Download Templates

Account users are allowed by default to register templates to be
downloaded directly to the primary storage for deploying instances
using the KVM hypervisor. Due to missing file name sanitization, an
attacker can register malicious templates to execute arbitrary code on
the KVM hosts. This can result in the compromise of resource integrity
and confidentiality, data loss, denial of service, and availability of
the KVM-based infrastructure managed by CloudStack.

### Credits

The CVEs are credited to the following reporters:

  - Reza at HazardLab (https://hazardlab.ninja) (reporter)


### Affected versions:

  - Apache CloudStack 4.11.0 through 4.20.2.0
  - Apache CloudStack 4.21.0.0 through 4.22.0.0

### Resolution

Users are recommended to upgrade to version 4.20.3.0 or 4.22.0.1 or
later, which addresses the issue.


## [CVE-2026-25199](https://www.cve.org/CVERecord?id=CVE-2026-25199): Proxmox Extension Allows Unauthorized Cross-Tenant Instance Access

The Proxmox extension for CloudStack improperly uses a user-editable
instance setting, proxmox_vmid, to associate CloudStack instances with
Proxmox virtual machines. Because this value is not restricted or
validated against tenant ownership and Proxmox VM IDs are predictable,
a non-privileged attacker can modify the setting to reference a VM
belonging to another account. This allows unauthorized cross-tenant
access and enables full control over the targeted VM, including
starting, stopping, and destroying the virtual machine.

### Credits

The CVEs are credited to the following reporters:

  - Sander Grendelman <sander.grendelman@axians.com> (reporter)

### Affected versions:

  - Apache CloudStack 4.21.0.0 through 4.22.0.0

### Resolution

Users are recommended to upgrade to version 4.22.0.1 or later, which
addresses these issues.

As a workaround for the existing installations, editing of the
proxmox_vmid instance detail by users can be prevented by adding this
detail name to the global configuration parameter -
user.vm.denied.details.

## Downloads and Documentation

The official source code for the 4.22.0.1 release can be downloaded
from the project downloads page:

https://cloudstack.apache.org/downloads

The 4.22.0.1 release notes can be found at:
- https://docs.cloudstack.apache.org/en/4.22.0.1/releasenotes/about.html

In addition to the official source code release, individual
contributors have also made release packages available on the Apache
CloudStack download page, and available at:

- https://download.cloudstack.org/el/8/
- https://download.cloudstack.org/el/9/
- https://download.cloudstack.org/el/10/
- https://download.cloudstack.org/suse/15/
- https://download.cloudstack.org/ubuntu/dists/
- https://www.shapeblue.com/cloudstack-packages/
