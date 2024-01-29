---
title: Developer Resources for Apache CloudStack
---

# CloudStack Developer Resources

## Contributing as a Non-Committer

If you're a committer on an Apache project, it means that you can commit
directly to the project's repository. For instance, with Apache CloudStack
committers are allowed to directly push commits into the git repository.

Non-committers, however, have to submit patches for review. Apache CloudStack
accepts <a href="https://github.com/apache/cloudstack"
target="_blank">GitHub</a> pull requests. If you are new to Git and GitHub,
check these two links:

- [GitHub in 15 minutes](https://try.github.io/levels/1/challenges/1)
- [Creating GitHub Pull Request](https://help.github.com/articles/creating-a-pull-request/)

The Apache CloudStack repository is on <a
href="https://github.com/apache/cloudstack" target="_blank">GitHub</a> that is
kept in sync with the canonical Git repo maintained by the Apache Software
Foundation. Submitting GitHub pull requests is the easiest way to get your
contribution upstream.

For detailed instructions see the link below: <a
href="https://github.com/apache/cloudstack/blob/main/CONTRIBUTING.md"
target="_blank">CloudStack GitHub Contribution Guidelines</a>.

### Submitting a patch

While we encourage you to submit your contribution through GitHub pull requests,
you can also attach a patch in a GitHub issue/ticket. For the purpose of these
instructions, we'll assume that you already have a system with <a
href="http://git-scm.com/" target="_blank">Git</a> and have found a bug to fix
or have a feature that you'd like to submit, and you're willing to contribute
that code or documentation under the <a
href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache
License 2.0</a>.

Further, if you're fixing a bug we'll assume that you've either filed a bug
report (where you will attach your patch) or are submitting a fix for a known
bug. If you find a bug and would like to fix it, that's awesome! Please be sure
to file the bug too, though.

If you want to add a feature, you should bring it up for discussion on the <a
href="mailto:dev@cloudstack.apache.org">dev@cloudstack.apache.org</a> mailing
list before implementing it. This ensures that it meshes with the plans that
other contributors have for Apache CloudStack, and that you're not doing
redundant work. Other developers may also have ideas for the feature or
suggestions that will help you land the feature without having to re-do the
work. More information about our mailing lists can be found <a
href="/mailing-lists">here</a>.

In short, communication is a vital part of making a contribution to an Apache
project.

## Getting Started

### Fork the code

In your browser, navigate to: <a
href="https://github.com/apache/cloudstack">https://github.com/apache/cloudstack</a>.

Fork the repository by clicking on the 'Fork' button on the top right hand side.
The fork will happen and you will be taken to your own
fork of the repository. Copy the Git repository URL by clicking on the clipboard
next to the URL on the right hand side of the page under '<b>HTTPS</b> clone
URL'.

You will paste this URL when doing the following <code>git clone</code> command.

On your computer, follow these steps to setup a local repository for working on ACS:

```
$ git clone https://github.com/YOUR_ACCOUNT/cloudstack.git
$ cd cloudstack
$ git remote add upstream https://github.com/apache/cloudstack.git
$ git checkout main
$ git fetch upstream
$ git rebase upstream/main
```

### Making Changes

It is important that you create a new branch to make changes on and that you do
not change the <code>main</code> branch (other than to rebase in changes from
<code>upstream/main</code>).  In this example I will assume you will be making
your changes to a branch called <code>feature_x</code>. This
<code>feature_x</code> branch will be created on your local repository and will
be pushed to your forked repository on GitHub. Once this branch is on your fork
you will create a Pull Request for the changes to be added to the ACS
project.

It is best practice to create a new branch each time you want to contribute
to the project and only track the changes for that pull request in this
branch.

```
$ git checkout -b feature_x
   (make your changes)
$ git status
$ git add .
$ git commit -a -m "descriptive commit message for your changes"
```

<blockquote>The <code>-b</code> specifies that you want to create a new branch
called <code>feature_x</code>.  You only specify <code>-b</code> the first time
you 
checkout because you are creating a new branch.  Once the <code>feature_x</code>
branch exists, you can later switch to it with only <code>git checkout
feature_x</code>.</blockquote>

### Rebase <code>feature_x</code> to include updates from <code>upstream/main</code>

It is important that you maintain an up-to-date <code>main</code> branch in
your local repository.  This is done by rebasing in the code 
changes from <code>upstream/main</code> (the official ACS project repository)
into your local repository.  You will want to do this before you start 
working on a feature as well as right before you submit your changes as a pull
request. We recommend you do this process periodically while you work to make 
sure you are working off the most recent project code.

This process will do the following:

- Checkout your local <code>main</code> branch;
- Synchronize your local <code>main</code> branch with the <code>upstream/main</code> so you have all the latest changes from the project;
- Rebase the latest project code into your <code>feature_x</code> branch so it is up-to-date with the upstream code.

```
$ git checkout main
$ git fetch upstream
$ git rebase upstream/main
$ git checkout feature_x
$ git rebase main
```

<blockquote>Now your <code>feature_x</code> branch is up-to-date with all the
code in <code>upstream/main</code>.</blockquote>

### Make a GitHub pull request to contribute your changes

<p>When you are happy with your changes and you are ready to contribute them,
you will create a Pull Request on GitHub to do so.
This is done by pushing your local changes to your forked repository (default remote name is <code>origin</code>) and then initiating a pull request on GitHub.</p>

<p>Please include JIRA ID or GitHub ID, detailed information about the
bug/feature, what all tests are executed, how the reviewer can test this
feature etc. In case of UI PRs, a screenshot is preferred.</p>

<blockquote><b>IMPORTANT:</b>Make sure you have rebased your
<code>feature_x</code> branch to include the latest code from
<code>upstream/main</code> <b>before</b>
you do this.</blockquote>

```
$ git push origin main
$ git push origin feature_x
```

<p>Now that the <code>feature_x</code> branch has been pushed to your GitHub
repository, you can initiate the pull request.</p>

<p>To initiate the pull request, do the following:</p>

- In your browser, navigate to your forked repository: <b>https://github.com/YOUR_ACCOUNT/cloudstack</b>;
- Click the new button called '<b>Compare & pull request</b>' that showed up just above the main area in your forked repository;
- Validate the pull request will be into the upstream <code>main</code> and will be from your <code>feature_x</code> branch;
- Enter a detailed description of the work you have done and then click '<b>Send pull request</b>'.

<p>If you are requested to make modifications to your proposed changes, make the
changes locally on your <code>feature_x</code> branch, re-push
the <code>feature_x</code> branch to your fork. The existing pull request should
automatically pick up the change and update accordingly.</p>

#### Cleaning up after a successful pull request

<p>Once the <code>feature_x</code> branch has been committed into the
<code>upstream/main</code> branch, your local <code>feature_x</code> branch
and the <code>origin/feature_x</code> branch are no longer needed. If you want
to make additional changes, restart the process with a new branch.</p>

<blockquote><b>IMPORTANT:</b>Make sure that your changes are in
<code>upstream/main</code>before you delete your <code>feature_x</code>
and <code>origin/feature_x</code> branches!</blockquote>

<p>You can delete these deprecated branches with the following:</p>

```
$ git checkout main
$ git branch -D feature_x
$ git push origin :feature_x
```

### Further Reading

<p>You might want to peruse the <a
href="http://www.apache.org/foundation/getinvolved.html" target="_blank">Get
Involved</a> page on Apache.org. 
Please, respect the original style of the CloudStack code, and ensure that
you're using spaces rather than tabs, and your code have Unix line 
endings (LF) rather than Windows-type line endings (CRLF).</p>

## Resources

- [Public repository (on github)](https://github.com/apache/cloudstack/)
- [Contribution Guidelines](https://github.com/apache/cloudstack/blob/main/CONTRIBUTING.md)
- [ASF Jenkins](https://builds.apache.org/view/A-D/view/Cloudstack/)
- [CloudStack Jenkins](http://jenkins.buildacloud.org/)
- [CloudStack Development 101](https://cwiki.apache.org/confluence/display/CLOUDSTACK/Development+101)
- [Setting up a Dev Environment](https://cwiki.apache.org/confluence/display/CLOUDSTACK/Setting+up+CloudStack+Development+Environment)
- [Code Conventions](https://cwiki.apache.org/confluence/display/CLOUDSTACK/Coding+conventions)
- [Testing CloudStack](https://cwiki.apache.org/confluence/display/CLOUDSTACK/Testing)
- [Obsolete Jira issue tracker](https://issues.apache.org/jira/browse/CLOUDSTACK)
- [Hackerbook - opensource CloudStack Developer training course](https://github.com/shapeblue/hackerbook)
- [mbx - build and run appliance based CloudStack env for development and QA](https://github.com/shapeblue/mbx)

### CloudStack Git Repositories

The git repositories are hosted on Apache infrastructure, and can be found here:

- https://github.com/apache/cloudstack
- https://github.com/apache/cloudstack-cloudmonkey
- https://github.com/apache/cloudstack-go
- https://github.com/apache/cloudstack-terraform-provider
- https://github.com/apache/cloudstack-kubernetes-provider
- https://github.com/apache/cloudstack-ec2stack
- https://github.com/apache/cloudstack-documentation
- https://github.com/apache/cloudstack-www

To get the most recent source for Apache CloudStack, use:

```
git clone https://github.com/apache/cloudstack.git
```

Similarly, clone the cloudstack-cloudmonkey repository or the other repositories
to get access to the most recent source of all CloudStack subprojects.

For projects related to Apache CloudStack but not under ASF governance, see the <a href="https://github.com/cloudstack-extras" target="_blank">CloudStack-extras repositories on GitHub</a>.
