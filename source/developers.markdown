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

<h2>Contributing as a Non-Committer</h2>

<p>If you're a committer on an Apache project, it means that you can commit directly to the project's repository. For instance, with Apache CloudStack committers are allowed to directly push commits into the git repository.</p>

<p>Non-committers, however, have to submit patches for review. Don't worry, it's not an onerous process at all. The first time you submit a patch, it will take a minute or two to create an account on <a href="http://reviews.apache.org/">Review Board</a>, but it's a piece of cake from start to finish.</p>

<h3> Assumptions </h3>

<p>For the purpose of this post, we'll assume that you already have a system with <a href="http://git-scm.com/">Git</a> and have found a bug to fix or have a feature that you'd like to submit, and you're willing to contribute that code or documentation under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License 2.0</a>.</p>

<p>Further, if you're fixing a bug we'll assume that you've either filed a bug report or are submitting a fix for a known bug. If you find a bug and would like to fix it, that's awesome! Please be sure to file the bug too, though.</p>

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
$ git clone https://git-wip-us.apache.org/repos/asf/cloudstack.git
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

<p>Finally, you're going to create a patch to upload to <a href="http://reviews.apache.org/">Review Board</a>:</p>

<pre>git format-patch master --stdout > ~/patch-name.patch</pre>

<h3>Using Review Board</h3>

<p>Review Board is the main method of sending patches to the Apache CloudStack project. That's not to say that a patch sent directly to the mailing list will be ignored, but the <em>strong preference</em> is that patches be submitted through Review Board. Don't worry, it's a very easy tool to use.</p>

<p>If you haven't already, create an account with Review Board. Registering only requires an email address, first name, and last name. After you're registered, head to <a href="https://reviews.apache.org/r/new/">New Review Request</a> and select the repository (<strong>cloudstack-git</strong>) and upload the patch (diff) created with git.</p>

<p>Click <strong>Create Review Request</strong> and then fill out the information required. Specifically:</p>

<ol>
<li>Summary</li>
<li>Groups (choose cloudstack)</li>
<li>People (only use if you need specific committers to review changes)</li>
<li>Description</li>
<li>Testing Done</li>
</ol>

<p>The <strong>Summary</strong> will be the subject that's sent to the cloudstack-dev mailing list. So if your summary is "fixed feature foo" the subject of the mail sent to the list will be "Review Request: fixed feature foo". Try to be descriptive with the Summary. If you're submitting a patch for a bug, please be sure to include the bug number in the summary. (Like "Bugfix CS-15942: Fixing problem with redundant routers.")</p>

<p>The description should be a full description of what you've done. Please be specific, and include enough information that any reviewer will be able to look at your patch without asking for follow-up information.   You need to include the bug ID that your patch relates to as well (ex:  CLOUDSTACK-XXX ).</p>

<p>If you're submitting a patch that modifies code, adds features, etc. you should test before submitting. Please be sure to describe your tests here.</p>

<p>Once you're sure everything is OK, go ahead and submit the patch. But that's <em>not</em> the end of the process. The work isn't done until the patch is committed!</p>

<h3> Review </h3>

<p>Once you've submitted your patch, you should receive a response within a few days. If you receive no response within a week, please ping the cloudstack-dev mailing list. One of the features of Review Board is that shows all of the requests and when they were posted, and the committers know that they should be responsible for reviewing patches in a timely fashion.</p>

<p>When your patch is reviewed, it may be accepted as-is or you may be asked to make changes. If you're asked to make changes, please work with the committer to see the patch through to acceptance.</p>

<p>If the patch is accepted and committed, you have one last task (don't worry, it's minor and kind of satisfying).</p>

<p>Go back to Review Board, click <strong>My Dashboard</strong> and then <strong>Outgoing Reviews</strong>. Go to your submission, you should see a "Ship it!" message from the reviewer. Click the <strong>Close</strong> button and choose <strong>Submitted</strong>. The status has now changed from <em>pending</em> to <em>submitted</em>.</p>

<p>That's it &ndash; you've helped make Apache CloudStack a better project. Thanks!</p>

<h3>Screencast</h3>

<p>If you are new to git you might want to watch this screencast:</p>

<iframe width="560" height="315" src="//www.youtube.com/embed/3c5JIW4onGk?list=PLb899uhkHRoZCRE00h_9CRgUSiHEgFDbC" frameborder="0" allowfullscreen></iframe>

<h3>Further Reading</h3>

<p>You might want to peruse the <a href="http://www.apache.org/foundation/getinvolved.html">Get Involved</a> page on Apache.org, and the <a href="http://commons.apache.org/patches.html">On Contributing Patches</a> doc as well. Note that some of that does not apply to Apache CloudStack, as we're using git rather than Subversion. But do respect the original style of the CloudStack code, and ensure that you're using spaces rather than tabs, and your patches have Unix line endings (LF) rather than Windows-type line endings (CRLF).</p>

</div>

<div class="col-lg-4">


<div class="list-group">

<div class="list-group-item active">Resources</div>

<a href="https://issues.apache.org/jira/browse/CLOUDSTACK" class="list-group-item">Jira</a>

<a href="https://reviews.apache.org/dashboard/" class="list-group-item">Reviewboard</a>

<a href="https://builds.apache.org/view/A-D/view/Cloudstack/" class="list-group-item">ASF Jenkins</a>

<a href="http://jenkins.buildacloud.org/" class="list-group-item">CloudStack Jenkins</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Development+101" class="list-group-item">CloudStack Development 101</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Setting+up+CloudStack+Development+Environment" class="list-group-item">Setting up a Dev Environment</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Coding+conventions" class="list-group-item">Code Conventions</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Testing" class="list-group-item">Testing CloudStack</a>

</div>



<div class="panel panel-success">

<div class="panel-heading">
                
<h3 class="panel-title">Git Repositories</h3>
              
</div>
              
<div class="panel-body">
                
<p>The git repositories are hosted on Apache infrastructure, and can be found here:</p>

<ul>
<li>Apache CloudStack <a href="https://git-wip-us.apache.org/repos/asf/cloudstack.git">https://git-wip-us.apache.org/repos/asf/cloudstack.git</a></li>
<li>Apache CloudStack CloudMonkey <a href="https://git-wip-us.apache.org/repos/asf/cloudstack-cloudmonkey.git">https://git-wip-us.apache.org/repos/asf/cloudstack-cloudmonkey.git</a></li>
</ul>

<p>To get the most recent source for Apache CloudStack, use:</p>

<pre>
git clone https://git-wip-us.apache.org/repos/asf/cloudstack.git
</pre>

<p>Similarly, clone the cloudstack-cloudmonkey repository to get access to the most recent source for CloudMonkey.</p>

<p>For projects related to Apache CloudStack, see the <a href="https://github.com/cloudstack-extras">CloudStack-extras repositories on GitHub</a>.</p>
              
</div>
            
</div>


</div>

</div>
