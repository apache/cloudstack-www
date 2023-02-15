---
layout: post
title: "[ADVISORY] Apache CloudStack Advisory on KVM Shared Mount Point issues on
  version 4.17.0.0"

slug: advisory-apache-cloudstack-advisory-on
---
<p>On 14th June 2022, a new issue affecting only KVM users using Shared Mount Point storage was reported [1]. This issue affects the creation and the usage of existing Shared Mount Point storage pools on Apache CloudStack 4.17.0.0.<br />

Apache CloudStack 4.17.0.0 added support for the StorPool storage based on Shared Mount Point. However, the current version of CloudStack doesn&#39;t allow multiple implementations of Shared Mount Point storage pool providers, causing the StorPool provider to override the default implementation. This affected the other storage pool providers for Shared Mount Point since CloudStack tries to add them as a StorPool storage pool.<br />

To mitigate the issue, a CloudStack administrator needs to do the following on version 4.17.0.0:<br />
- On each management server: stop the CloudStack management service, remove the Storpool plugin jar on /usr/share/cloudstack-management/lib/cloud-plugin-storage-volume-storpool-4.17.0.0.jar and restart the Cloudstack management service<br />
- On each KVM host: stop the CloudStack agent service, remove the StorPool plugin jar on /usr/share/cloudstack-agent/lib/cloud-plugin-storage-volume-storpool-4.17.0.0.jar and restart the CloudStack agent service<br />

Note: This workaround removes the StorPool plugin support. StorPool users should not apply the workaround to continue using their Storpool storage.<br />

This issue will be fixed in the upcoming CloudStack version 4.17.1.0.<br />

[1]&nbsp;<a href="https://github.com/apache/cloudstack/issues/6455" title="https://github.com/apache/cloudstack/issues/6455">https://github.com/apache/cloudstack/issues/6455</a></p>
