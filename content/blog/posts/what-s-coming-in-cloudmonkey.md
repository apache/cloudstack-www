---
layout: post
title: What's coming in CloudMonkey v6.0.0
date: '2019-03-19T17:22:00+00:00'
permalink: what-s-coming-in-cloudmonkey
---
<b># Background</b>
<br/>
The original CloudMonkey was contributed to the Apache CloudStack project on 31 Oct 2012 under the Apache License 2.0. It is written in Python and shipped using the Python CheeseShop, and since its inception has gone through several refactors and rewrites. While this has worked well over the years, the installation and usage have been limited to just a few modern platforms due to the dependency on Python 2.7, meaning it is hard to install on older distributions such as CentOS6.
<br/>
Over the past two years, several attempts have been made to make the code compatible across Python 2.6, 2.7 and 3.x. However, it proved to be a maintenance and release challenge – making it code compatible across all the platforms, all the Python versions and the varied dependency versions; whilst also keeping it easy to install and use. During late 2017, an experimental CloudMonkey rewrite called cmk was written in Go, a modern, statically typed and compiled programming language which could produce cross-platforms standalone binaries. Finally, in early 2018, after reaching a promising state the results of the experiment were shared with the community, to build support and gather feedback for moving the CloudMonkey codebase to Go and deprecate the Python version.
<br/>
During 2018, two Go-based ports were written using two different readline and prompt libraries. The alpha / beta builds were shared with the community who tested them, reported bugs and provided valuable feedback (especially around tab-completion) which drove the final implementation. With the new rewrite CloudMonkey (for the first time) ships as a single executable file for Windows which can be easily installed and used having mostly the same user experience one would get on Linux or Mac OSX. The rewrite aims to maintain command-line tool backward compatibility as a drop-in replacement for the legacy Python-based CloudMonkey (i.e. shell scripts using legacy CloudMonkey can also use the modern CloudMonkey cmk). Legacy Python-based CloudMonkey will continue to be available for installation via pip but it will not be maintained moving forward.
<br/>
CloudMonkey 6.0 requires a final round of testing and bug-fixing before the release process will commence. The beta binaries are available for testing <a href="https://github.com/apache/cloudstack-cloudmonkey/releases">here</a>.
<br/><br/>
<b># Major changes in CloudMonkey 6.0</b>
<br/>
- Ships as standalone 32-bit and 64-bit binaries targeting Windows, Linux and Mac including ARM support (for example, to run on Raspberry Pi)<br/>
- Drop-in replacement for legacy Python-based CloudMonkey as a command line tool<br/>
- Interactive selection of API commands, arguments, and argument options<br/>
- JSON is the default API response output format<br/>
- Improved help docs output when ‘-h’ is passed to an API command<br/>
- Added new output format ‘column’ that outputs API response in a new columnar way like modern CLIs such as kubectl and docker<br/>
- Added new set option ‘debug’ to enable debug mode, set option ‘display’ renamed as ‘output’<br/>
- New CloudMonkey configuration file locking mechanism to avoid file corruption when multiple cmk instances run<br/>
- New configuration folder ~/.cmk to avoid conflict with legacy Python-based version<br/>
<br/><br/>
<b># Features removed in CloudMonkey 6.0:</b><br/>
- Removed XML output format.<br/>
- Removed CloudMonkey logging API requests and responses to a file.<br/>
- Coloured output removed.<br/>
- Removed set options: color (for coloured output), signatureversion and expires (no longer acceptable API parameters), paramcompletion (API parameter completion is not enabled by default), cache_file (the default cache file, now at ~/.cmk/cache ), history_file (the history file), log_file (API log file).
