---
title: Apache CloudStack Downloads
---

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h1 id="indicators">Apache CloudStack: Downloads</h1>

</div>

</div>

</div>

<div class="bs-example">

<div class="row">

<div class="col-lg-6">

<h2>Latest CloudStack Release</h2>

<h4>Source Release</h4>

<p>Apache CloudStack's most current release is 4.4.2.
</p>

<p>
<a href="http://www.apache.org/dyn/closer.cgi/cloudstack/releases/4.4.2/apache-cloudstack-4.4.2-src.tar.bz2"><button type="button" class="btn btn-primary btn-lg">Get the 4.4.2 Source!</button></a>

<a href="http://www.apache.org/dist/cloudstack/KEYS"><button type="button" class="btn btn-info btn-xs">KEYS</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/4.4.2/apache-cloudstack-4.4.2-src.tar.bz2.asc"><button type="button" class="btn btn-info btn-xs">PGP</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/4.4.2/apache-cloudstack-4.4.2-src.tar.bz2.md5"><button type="button" class="btn btn-info btn-xs">MD5</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/4.4.2/apache-cloudstack-4.4.2-src.tar.bz2.sha"><button type="button" class="btn btn-info btn-xs">SHA</button></a>

</p>

<p>
<a href="http://www.apache.org/dyn/closer.cgi/cloudstack/releases/4.3.2/apache-cloudstack-4.3.2-src.tar.bz2"><button type="button" class="btn btn-primary btn-lg">Get the 4.3.2 Source!</button></a>

<a href="http://www.apache.org/dist/cloudstack/KEYS"><button type="button" class="btn btn-info btn-xs">KEYS</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/4.3.2/apache-cloudstack-4.3.2-src.tar.bz2.asc"><button type="button" class="btn btn-info btn-xs">PGP</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/4.3.2/apache-cloudstack-4.3.2-src.tar.bz2.md5"><button type="button" class="btn btn-info btn-xs">MD5</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/4.3.2/apache-cloudstack-4.3.2-src.tar.bz2.sha"><button type="button" class="btn btn-info btn-xs">SHA</button></a>

</p>

<h4>Packages</h4>

<p>For easier installation or upgrades, the official source code release has been supplemented by community members who have chosen to provide package repositories.</p>

<ul>
<li>DEB package repository: <a href="http://cloudstack.apt-get.eu/ubuntu">http://cloudstack.apt-get.eu/ubuntu</a></li>
<li>RPM package repository: <a href="http://cloudstack.apt-get.eu/rhel/">http://cloudstack.apt-get.eu/rhel/</a></li>
<li>CloudStack packages by ShapeBlue: <a href="http://shapeblue.com/packages/">http://shapeblue.com/packages</a></li>
</ul>

<p>Instructions for using these community provided repositories can be found in the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-installation/en/4.4/installation.html#configure-package-repository">Configure Package Repository</a> section of the Installation Guide.</p>


<h4>Release Notes for CloudStack 4.4.2</h4>

<p>Full release notes can be found in the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-release-notes/en/4.4.2/">Version 4.4.2 Release Notes</a> document.</p>

<p>Instructions for building from source and installing Apache CloudStack can be found in the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-installation/en/4.4/">Installation Guide</a>.</p>

<p>Instructions for building from source and upgrading from a previous version of CloudStack to Apache CloudStack 4.4.2 can be found in the upgrade section of the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-release-notes/en/4.4.2/">Release Notes</a>.</p>


<h4>Release Notes for CloudStack 4.3.2</h4>

<p>Full release notes can be found in the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-release-notes/en/4.3.2/">Version 4.3.2 Release Notes</a> document.</p>

<p>Instructions for building from source and installing Apache CloudStack can be found in the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-installation/en/4.3/">Installation Guide</a>.</p>

<p>Instructions for building from source and upgrading from a previous version of CloudStack to Apache CloudStack 4.3.2 can be found in the upgrade section of the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-release-notes/en/4.3.2/">Release Notes</a>.</p>


</div>

<div class="col-lg-6">

<div class="panel panel-default">

<div class="panel-heading">

<h3 class="panel-title">Verifying Downloads</h3>

</div>
              
<div class="panel-body">

<p>
It's essential that you verify the integrity of the downloaded files using the PGP or MD5 signatures.
The PGP signatures can be verified using PGP or GPG. First download the
<a href="https://dist.apache.org/repos/dist/release/cloudstack/KEYS">KEYS</a> as well as the asc
signature file for the relevant distribution. Make sure you get these files from the
main distribution directory, rather than from a mirror. Then verify the signatures using:
</p>
<pre>
    % pgpk -a KEYS
    % pgpv apache-cloudstack-X.X.X-src.tar.bz2.asc
</pre>
<p>or</p>
<pre>
    % pgp -ka KEYS
    % pgp apache-cloudstack-X.X.X-src.tar.bz2.asc
</pre>
<p>or</p>
<pre>
    % gpg --import KEYS
    % gpg --verify apache-cloudstack-X.X.X-src.tar.bz2.asc
</pre>
<p>
Additionally, you can verify the MD5 or SHA512 signatures on the files.
</p>

</div>

</div>

</div>

</div>

</div>
                



<a name="cloudmonkey"></a>

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h2 id="indicators">Latest CloudMonkey Release</h2>

</div>

</div>

</div>

Apache CloudStack's CloudMonkey tool is a CLI and shell environment designed for interacting with CloudStack-based clouds.

#### Source Release

CloudMonkey's most current release is 5.3.1.

<p>
<a href="http://www.apache.org/dyn/closer.cgi/cloudstack/releases/cloudmonkey-5.3.1/apache-cloudstack-cloudmonkey-5.3.1-src.tar.bz2"><button type="button" class="btn btn-primary btn-lg">Get the 5.3.1 Source!</button></a>

<a href="http://www.apache.org/dist/cloudstack/KEYS"><button type="button" class="btn btn-info btn-xs">KEYS</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.1/apache-cloudstack-cloudmonkey-5.3.1-src.tar.bz2.asc"><button type="button" class="btn btn-info btn-xs">PGP</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.1/apache-cloudstack-cloudmonkey-5.3.1-src.tar.bz2.md5"><button type="button" class="btn btn-info btn-xs">MD5</button></a>
<a href="http://www.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.1/apache-cloudstack-cloudmonkey-5.3.1-src.tar.bz2.sha"><button type="button" class="btn btn-info btn-xs">SHA</button></a>

</p>

Instructions for building and installing from source can be found in the included [README.md](https://git-wip-us.apache.org/repos/asf?p=cloudstack-cloudmonkey.git;a=blob_plain;f=README.md) file.

#### PyPi Package

For easier installation or upgrades, the official source code release has been supplemented by community members who have pushed the python package to the [Python Package Index](https://pypi.python.org/pypi/cloudmonkey/).

For installing the package from pypi, use:

    $ pip install cloudmonkey

To upgrade:

    $ pip install --upgrade cloudmonkey

Though a clean upgrade is recommended:

    $ pip uninstall cloudmonkey
    $ pip install cloudmonkey


<a name="archives"></a>

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h2 id="indicators">Archived Releases</h2>

You can find links to older releases of Apache CloudStack on the <a href="archives.html">archives page</a>.
