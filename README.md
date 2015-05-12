Source of Apache CloudStack Web site
====================================

This is built using [middleman](https://middlemanapp.com)

    $ gem install middleman
    $ bundle install

All sources are in the `/source` directory

Build the site with:

    $ middleman build

To serve it locally:

    $ middleman server

IMPORTANT: To publish your changes, commit the build into the asf-site directory

GOTCHA, *TODO*, the `build` directory needs to be renamed `content` in the asf-site branch for the site to be served properly.

*TODO* check the `build.sh` script and make it better, simple build that stages all changes to `/content`

Use GitHub PR to make changes.

*TODO* Add gitHUB PR contribution instructions and better build instructions for committers

