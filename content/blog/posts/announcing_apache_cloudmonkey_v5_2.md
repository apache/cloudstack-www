---
layout: post
title: Announcing Apache™ CloudMonkey™ v5.2.0
date: '2014-08-28T11:00:12+00:00'
permalink: announcing_apache_cloudmonkey_v5_2
---
<em><h2>Command Line Interface Tool Simplifies Apache CloudStack Configuration and Management</h2></em>

<p>28 August 2014 —Apache CloudStack, the mature, turnkey Open Source cloud computing software platform used for creating private, public, and hybrid cloud environments, today announced Apache
CloudMonkey v5.2.0, the latest feature release of its command line interface tool.</p>

<p>CloudMonkey is written in Python, and can be used both as an interactive shell and as a command line tool that simplifies CloudStack configuration and management.</p>

<p>Apache CloudMonkey v5.2.0 is the latest feature release of the 5.x line that was first released in September 2013. Some of the new features and changes include:</p>
<ul>
<li>Multiple server profiles where users can use CloudMonkey against different CloudStack management servers and switch between them using a profile option;</li>
<li>A default profile under the section [local] is added with default values;</li>
<li>Some bugfixes related to network requests, error handling, JSON decoding and shell interactivity;</li>
<li>Every time 'set' is called, CloudMonkey will write the config and reload config file;</li>
<li>Configuration options 'protocol', 'host', 'port', 'path' are deprecated now but setting them is still allowed which sets a single "url" option, in the config file the [server] section is deprecated now and CloudMonkey won’t read values from this section anymore but instead read from current server profile;</li>
<li>Missing key/values are automatically set with defaults by CloudMonkey;</li>
<li>During installation and upgrades, it will detect the platform to install either pyreadline (Windows) or readline (OSX and Linux);</li>
</ul>

<p><h3  id="downloadsanddocumentation">Downloads and Documentation</h3></p>
<p>The official source code for CloudMonkey v5.2.0 can be downloaded from <a href="http://cloudstack.apache.org/downloads.html">http://cloudstack.apache.org/downloads.html</a>. A community-maintained distribution is available at the Python Package Index (PyPi) at <a href="http://pypi.python.org/pypi/CloudMonkey/">http://pypi.python.org/pypi/CloudMonkey/</a></p>

<p>CloudMonkey's usage is documented at <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+CloudMonkey+CLI">https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+CloudMonkey+CLI</a>
Package documentation can be found at <a href="http://pythonhosted.org/cloudmonkey/">http://pythonhosted.org/cloudmonkey/</a></p>

<p><h3 id="availabilityandoversight">Availability and Oversight</h3></p>
<p>As with all Apache products, CloudMonkey is released under the Apache License v2.0, and is overseen by a self-selected team of active contributors to the project.  The Apache CloudStack Project Management Committee (PMC) guides the Project's day-to-day operations, including community development and product releases.</p>

<p><h3  id="aboutapachecloudstack">About Apache CloudStack</h3></p>
<p>Apache CloudStack is a mature, turnkey integrated Infrastructure-as-a-Service (IaaS) Open Source software platform that allows users to build feature-rich public and private cloud environments. Hailed by Gartner Group as "a solid product", CloudStack includes an intuitive user interface and rich APIs for managing the compute, networking, software, and storage infrastructure resources. CloudStack entered the Apache Incubator in April 2012 and became an Apache Top-level Project in March 2013. For downloads, documentation, and ways to become involved with Apache CloudStack, visit <a href="http://cloudstack.apache.org/">http://cloudstack.apache.org/</a> and <a href="https://twitter.com/CloudStack">https://twitter.com/CloudStack</a></p>

# # #
