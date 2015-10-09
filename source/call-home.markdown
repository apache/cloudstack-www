---
title: Apache CloudStack Call Home
---

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h1 id="indicators">Apache CloudStack: Call Home</h1>

</div>

</div>

</div>

Since version 4.7 a Management server will automatically 'call-home' towards the Apache CloudStack project.

On a weekly basis the Management Server(s) will generate a report about how your CloudStack deployment is being used.

## Report contents
This report does not contain any personal information, it only includes statiscs on how CloudStack is being used:

* The number of Instances
* The number of Zones and their hypervisor type
* The amount of Primary Storage pools
* The total size of the Primary Storage pools
* The version of CloudStack and the history
* The IP-Address where the report came from (used for Geolocation)

## Disabling
For the CloudStack project this is vital information for tracking how and where CloudStack is being used, but if an administrator
whishes the reports can be disabled.

Setting the global setting 'usage.report.interval' to 0 makes sure no report is being send.

## How is the data being used
The data gathered by the CloudStack project is being used to determine how CloudStack is being used and in which configuration.

It provides the project valuable information which can be used to find out which features are being used and which are not.

## Who has access to the data
All PMC members from the Apache CloudStack project have access to the data.
