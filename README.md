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
	
# Building
To build the HTML files, you just need to execute the `build.sh`. The script will automatically generate the HTML files and then move them to the `content` folder.

# Committing
Use a GitHub PR to make changes to the live site. **No one should commit directly to the repositories without opening a PR and waiting for proper review**.  
Once the PR has incorporated all of the feedback from the review process, it is time to **commit** the changes.  Merging the PR into `master` will not publish the changes to the live website, the following steps are required to make the live site reflect the status of the `master` branch.

**IMPORTANT:** In order to publish changes to the live site, you must commit into the `asf-site` branch.  It is very important that the `master` branch stays synchronized with the the `asf-site` branch.

The ASF maintains and integration which automatically publishes the content of the `asf-site` branch to a web server that delivers the Apache CloudStack web pages.

GOTCHA, the `build` directory needs to be renamed to `content` in the asf-site branch for the site to be served properly; If you use the `build.sh` script, this step is already taken care of.

## Step by Step
* Fork this repo to your Github account: `<your_github_user>`. To do that, navigate to `https://github.com/apache/cloudstack-www` and click `fork` in the top right corner of the page.
* Then, clone your fork to your local workstation: `git clone git@github.com:<your_github_user>/cloudstack-www.git`
* Cloning this way will make your Github fork the `origin` remote.
* `cd cloudstack-www`
* Add the official repo as the `upstream` remote: `git remote add upstream git@github.com:apache/cloudstack-www.git`


**Sync Local with Upstream**  
```bash
git checkout master
git fetch upstream
git rebase master upstream/master
```


**Make Changes**  
```bash
# make source changes, then
./build.sh
middleman server [-p <portnumber>]
# view at: http://localhost:[portnumber]
# rinse and repeat
```


**Commit Locally**  
```bash
git add .
git commit -am "your commit message"
git push origin master
```


**Create a PR**  
* Confirm the changes appear correctly on your Github account.
* Create a Pull Request against the `https://github.com/apache/cloudstack-www` repo.


**COMMITTER: Validate a PR Locally**  
Note: The following instructions assume the `<contributor>` made their changes on their `master` branch.

```bash
# validate contributor changes
cd /tmp
git clone https://github.com/<contributor>/cloudstack-www.git
cd cloudstack-www
git checkout master
./build.sh
middleman server [-p <portnumber>]
# visually validate changes at: http://localhost:[portnumber]
```


**COMMITTER: Merge & Deploy**  
Merge the PR into `master` using the Github UI.

Once the PR has been merged into `master`, do the following to publish the content.
```bash
git fetch upstream
git checkout master
git rebase master upstream/master
./build.sh  # updates the content directory
middleman server [-p <portnumber>]
# visually validate changes at: http://localhost:[portnumber]
git status
# check if `./build.sh` added files
# if there are untracked changes
git add .
git commit -am "updated PR#### to include compiled content"
git push upstream master
# if no untracked files or if you merged them into master
git checkout asf-site
git merge master
git push upstream asf-site
# validate the site updated at: https://cloudstack.apache.org
```
