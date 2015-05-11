Source of Apache CloudStack Web site
====================================

This is built using middleman

    $ gem install middleman

All sources are in the `/source` directory

Build the site with:

    $ middleman build

To server it locally:

    $ middleman server

To publish your changes, commit the build into the asf-site directory

GOTCHA, *TODO*, the `build` directory needs to be renamed `content` in the asf-site branch for the site to be served properly.

Use GitHub PR to make changes.

*TODO* Add gitHUB PR contribution instructions and better build instructions for committers

