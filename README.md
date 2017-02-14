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
	
#Building
To build the HTML files, you just need to execute the `build.sh`. The script will automatically generate the HTML files and then move them to the `content` folder.

# Commiting 
Use GitHub PR to make changes. **No one should commit directly to Apache remote repositories without opening a PR and waiting for proper review**.
If you got the feedback and have amended the changes (if needed), it is time to **commit** the changes to **Apache Software Foundation (AFS) remote repository**. The ASF remote repository for this project is: `https://git-wip-us.apache.org/repos/asf/cloudstack-www.git`

**IMPORTANT:** To publish your changes, you should commit into the **asf-site** branch (pay attention, this is the name of the branch in the remote repository). **Do not forget**, you also have to commit the same changes to the master; so, **master** and **asf-site** branches are synchronized.

The **asf-site** branch is synchronized with a web server that delivers the Apache CloudStack web pages.

GOTCHA, the `build` directory needs to be renamed to `content` in the asf-site branch for the site to be served properly; If you use the `build.sh` script, this step is already taken care of.

## Step by step
* Fork the repo to your own Github: `<your_github_user>`. To do that, you can access `https://github.com/apache/cloudstack-www` and click on `fork` on the right upper corner of the page.
* Then, you can clone to you local git repo using: `git clone`; e.g. `git clone https://github.com/apache/cloudstack-www.git` or `git clone https://github.com/<your_github_user>/cloudstack-www.git`
* `cd cloudstack-www`
* __This step is only required for committers:__ (add the ASF remote repo) `git remote add upstream https://git-wip-us.apache.org/repos/asf/cloudstack-www.git`
* if you have cloned  directly from Apache namespace on Github, then you need to add your namespace on Github as well, `git remote add <your_github_user> https://github.com/<your_github_user>/cloudstack-www.git`
* (get the master branch): `git checkout -b master origin/master` or `git checkout -b master <your_github_user>/master`
* Now, it is your turn to make the changes you want
* `middleman build` will build/"compile" the HTML files from the sources
* ` middleman server [-p <portnumber>]`. This will serve/deliver your HTML files over HTTP. You just gotta access them using a browser; e.g. `http://localhost:[port_configured]`. **Check your changes!!**
* Execute `./build.sh`
* `git add -A`
* `git commit -am "your commit message"`
* `git push `<your_github_user>` master`
* Check if the changes appear properly on your Github project, and then create a PR against the Apache `cloudstack-www` repo.
* Get feedback on the PR and proceed once PR review is accepted
* If you are not a committer, your job finishes here. Congratulations you have made the Apache CloudStack website better  :thumbsup:
* Continuing, for committers. Clone or add the repo of our contributor on Github using `git remote add <friend_contributor> https://github.com/<friend_contributor>/cloudstack-www.git`
* `git checkout asf-site`
* `git merge <repo_where_the_changes_are>/master`; e.g. `git merge <friend_contributor>/master` or `git merge <your_github_user>/master`
* `git log -p`. Check if the changes were properly merged.
* `git push upstream asf-site`
* `git push upstream master`
* The site will automatically be published live. This should not take long; if the changes are not showing up, check your browser cache. If changes do not show up and you have no idea why, call someone on `devs` mailing list.
* Verify the changes on the live site. After this, your job is done, thank you very much for helping to improve the Apache CloudStack website :thumbsup: