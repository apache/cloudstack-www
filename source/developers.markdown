---
title: Developer Resources for Apache CloudStack
---

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h1 id="indicators">Developer Resources for Apache CloudStack</h1>

</div>

</div>

</div>

<div class="row">

<div class="col-lg-8">

<h2>CloudStack Repositories</h2>
<p><a href="https://github.com/apache/cloudstack" target="_blank">System Source Code</a>. The main CloudStack-related project, 
where almost all activities take place.<br />
Repository Link: <a href="https://github.com/apache/cloudstack" target="_blank">https://github.com/apache/cloudstack</a>
</p>

<p><a href="https://github.com/apache/cloudstack-cloudmonkey" target="_blank">CloudMonkey CLI utility</a>. CloudMonkey is de-facto standard CloudStack CLI utility which
supports scripting, automation, searching over data and working with CloudStack from console.<br />
Repository Link: <a href="https://github.com/apache/cloudstack-cloudmonkey" target="_blank">https://github.com/apache/cloudstack-cloudmonkey</a>
</p>

<p><a href="https://github.com/apache/cloudstack-www" target="_blank">WebSite Source Code</a>. The project defines the product information, 
news and updates, displayed at the Apache <a href="http://cloudstack.apache.org/" target="_blank">CloudStack</a> website.<br />
Repository Link: <a href="https://github.com/apache/cloudstack-www" target="_blank">https://github.com/apache/cloudstack-www</a>
</p>

<p><a href="https://github.com/apache/cloudstack-documentation" target="_blank">Project Documentation</a>. This project hosts product documentation which
covers installation, management, plug-ins and other scopes of knowledge, related to the product.<br />
Repository Link: <a href="https://github.com/apache/cloudstack-documentation" target="_blank">https://github.com/apache/cloudstack-documentation</a>
</p>

<h2>Contributing as a Non-Committer</h2>

<p>If you're a committer on an Apache project, it means that you can commit directly to the project's repository. For instance, with Apache CloudStack committers are allowed to directly push commits into the git repository.</p>

<p>Non-committers, however, have to submit patches for review. Apache CloudStack accepts <a href="https://github.com" target="_blank">GitHub</a> pull requests. If you are new to Git and GitHub, check these two links:</p>
<p>
<ul>
  <li><a href="https://try.github.io/levels/1/challenges/1" target="_blank">GitHub 15 minutes </a>tutorial</li>
  <li><a href="https://help.github.com/articles/creating-a-pull-request/" target="_blank">Creating </a>Pull Requests</li>
</ul>
</p>

<p>Apache CloudStack has a read-only mirror on <a href="https://github.com/apache/cloudstack" target="_blank">GitHub</a> that is kept in sync with the canonical Git repo maintained by the Apache Software Foundation. Submitting GitHub pull requests is the easiest way to get your contribution upstream. For detailed instructions see the link below:</p>

<br><a href="https://github.com/apache/cloudstack/blob/master/CONTRIBUTING.md" target="_blank">GitHub Contribution Guidelines</a>

<h3>Submitting a patch through JIRA</h3>

<p>While we encourage you to submit your contribution through GitHub pull requests, you can also attach a patch in a JIRA ticket. For the purpose of these instructions, we'll assume that you already have a system with <a href="http://git-scm.com/" target="_blank">Git</a> and have found a bug to fix or have a feature that you'd like to submit, and you're willing to contribute that code or documentation under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache License 2.0</a>.</p>

<p>Further, if you're fixing a bug we'll assume that you've either filed a bug report (where you will attach your patch) or are submitting a fix for a known bug. If you find a bug and would like to fix it, that's awesome! Please be sure to file the bug too, though.</p>

<p>If you want to add a feature, you should bring it up for discussion on the <a href="mailto:dev@cloudstack.apache.org">dev@cloudstack.apache.org</a> mailing list before implementing it. This ensures that it meshes with the plans that other contributors have for Apache CloudStack, and that you're not doing redundant work. Other developers may also have ideas for the feature or suggestions that will help you land the feature without having to re-do the work. More information about our mailing lists can be found <a href="/mailing-lists.html">here</a>.</p>

<p>In short, communication is a vital part of making a contribution to an Apache project.</p>

<h3> Getting Started </h3>

<p>First, lets make sure that you've added your name and email to your `~/.gitconfig`:</p>

<pre>
$ git config --global user.name "Your Name"
$ git config --global user.email you@domain.com
</pre>

<p>You'll grab the CloudStack source with git:</p>

<pre>
$ git clone https://gitbox.apache.org/repos/asf/cloudstack.git
</pre>

<p>If you already have the source, make sure you're working with the most recent version. Do a `git pull` if you cloned the source more than a few hours ago. (Apache CloudStack development can move pretty fast!)</p>

<pre>
$ git checkout -b mybranch
</pre>

<p>This does two things: One, it creates the branch <em>mybranch</em> and two, it changes your working branch to <em>mybranch</em>. Running `git branch` will show you which branch you're working on, with an asterisk next to the active branch, like so:</p>

<pre>
[user@localhost cloudstack]$ git branch
  master
  * mybranch
  </pre>

<p>Make whatever changes you're going to make, be sure to use <code>git add</code> to stage the changes, and then you're going to commit the changes to your working branch:</p>

<pre>git commit -m "Insert a meaningful summary of changes here."</pre>

<p>Finally, you can create a patch and attach it to the JIRA issue that you created for the bug you are fixing.</p>

<pre>git format-patch master --stdout > ~/patch-name.patch</pre>

<h3>Review</h3>

<p>Once you've submitted your pull request, you should receive a response within a few days. If you receive no response within a week, please ping the cloudstack-dev mailing list (dev@cloudstack.apache.org).</p>

<h3>Screencast</h3>

<p>If you are new to git you might want to watch this screencast:</p>

<iframe width="560" height="315" src="//www.youtube.com/embed/3c5JIW4onGk?list=PLb899uhkHRoZCRE00h_9CRgUSiHEgFDbC" frameborder="0" allowfullscreen></iframe>

<h3>Further Reading</h3>

<p>You might want to peruse the <a href="http://www.apache.org/foundation/getinvolved.html" target="_blank">Get Involved</a> page on Apache.org, and the <a href="http://commons.apache.org/patches.html" target="_blank">On Contributing Patches</a> doc as well. Note that some of that does not apply to Apache CloudStack, as we're using git rather than Subversion. But do respect the original style of the CloudStack code, and ensure that you're using spaces rather than tabs, and your patches have Unix line endings (LF) rather than Windows-type line endings (CRLF).</p>

</div>

<div class="col-lg-4">


<div class="list-group">

<div class="list-group-item active">Resources</div>

<a href="https://issues.apache.org/jira/browse/CLOUDSTACK" class="list-group-item" target="_blank">Jira</a>

<a hread="https://github.com/apache/cloudstack/blob/master/CONTRIBUTING.md" class="list-group-item" target="_blank">Contribution Guidelines</a>

<a href="https://builds.apache.org/view/A-D/view/Cloudstack/" class="list-group-item" target="_blank">ASF Jenkins</a>

<a href="http://jenkins.buildacloud.org/" class="list-group-item" target="_blank">CloudStack Jenkins</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Development+101" class="list-group-item" target="_blank">CloudStack Development 101</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Setting+up+CloudStack+Development+Environment" class="list-group-item" target="_blank">Setting up a Dev Environment</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Coding+conventions" class="list-group-item" target="_blank">Code Conventions</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Testing" class="list-group-item" target="_blank">Testing CloudStack</a>

</div>



<div class="panel panel-success">

<div class="panel-heading">
                
<h3 class="panel-title">Git Repositories</h3>
              
</div>
              
<div class="panel-body">
                
<p>The git repositories are hosted on Apache infrastructure, and can be found here:</p>

<ul>
<li><a href="https://gitbox.apache.org/repos/asf/cloudstack.git" target="_blank">Apache CloudStack source code</a></li>
<li><a href="https://gitbox.apache.org/repos/asf/cloudstack-cloudmonkey.git" target="_blank">Apache CloudStack Cloudmonkey source code</a></li>
<li><a href="https://github.com/apache/cloudstack-ec2stack" target="_blank">Apache CloudStack EC2stack Inteface</a></li>
<li><a href="https://github.com/apache/cloudstack-gcestack" target="_blank">Apache CloudStack GCEstack Interface</a></li>
<li><a href="https://github.com/apache/cloudstack-docs" target="_blank">General Documentation</a></li>
<li><a href="https://github.com/apache/cloudstack-docs-install" target="_blank">Installation Guide</a></li>
<li><a href="https://github.com/apache/cloudstack-docs-admin" target="_blank">Administrative Guide</a></li>
<li><a href="https://github.com/apache/cloudstack-docs-rn" target="_blank">Release Notes</a></li>
<li><a href="https://github.com/apache/cloudstack-www" target="_blank">Apache CloudStack Website</a></li>
</ul>

<p>To get the most recent source for Apache CloudStack, use:</p>

<pre>
git clone https://gitbox.apache.org/repos/asf/cloudstack.git
</pre>

<p>Similarly, clone the cloudstack-cloudmonkey repository or the other repositories to get access to the most recent source of all CloudStack subprojects.</p>

<p>For projects related to Apache CloudStack but not under ASF governance, see the <a href="https://github.com/cloudstack-extras" target="_blank">CloudStack-extras repositories on GitHub</a>.</p>
              
</div>
            
</div>


</div>

</div>

