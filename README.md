Source of Apache CloudStack Web site
====================================

This is built using [middleman](https://middlemanapp.com)

    $ gem install middleman
    $ bundle install

All sources are located in the `/source` directory. The build process requires JavaScript engine to be installed. For Ubuntu Linux use:

```bash
sudo apt-get update
sudo apt install nodejs
```

For more details look at: 
https://github.com/sstephenson/execjs/issues/71

Build the site with:

    $ middleman build

To serve it locally:

    $ middleman server

# Important Update Information

A few sections have been updated to be (more) dynamic.  The 'events' listed on the website are pulled from the CSV file in ./data/acs-events.csv .  The CSV that the website uses is the current raw file which is held in the Github master branch. Updates to this file are immediately 'visible' on the website.  There is no need to 'build' the website for the changes to become live. The format of the CSV is self explanatory, there is a heading row, please do not delete it, the processing on the web page assumes that it is there.  The 'latest announcements' section is pulled from the last 3 CloudStack blogs from the Apache Web site.

# Building
To build the HTML files, you just need to execute the `build.sh`. The script will automatically generate the HTML files and then copy them to the `content` folder in preparation for being published via the `asf-site` branch.  Keep reading for detailed instructions.

# Committing
Use Github PRs to make changes to the live site. **No one should commit directly to the repositories without opening a PR and waiting for the proper review**.  
Once the review process has been completed and the appropriate changes have been made to the PR, it is time to **commit** the changes.  Merging the PR into `master` will not publish the changes to the live website, the following steps are required to make the live site reflect the status of the `master` branch.

**IMPORTANT:** In order to publish changes to the live site, you must commit into the `asf-site` branch.  It is very important that the `master` branch stays synchronized with the the `asf-site` branch.

The ASF maintains an integration which automatically publishes the content of the `asf-site` branch to a web server that serves the Apache CloudStack web pages.  It is important that both the `master` and `asf-site` branches track both the source and the resulting compiled content in order to simplify the management process.

NOTE: The content of the `build` directory needs to be copied to the `content` in the `asf-site` branch for the site to be served properly; If you use the `build.sh` script, this step is already taken care of.

## Step by Step
* Fork this repository to your Github account: `<your_github_user>`. To do that, navigate to `https://github.com/apache/cloudstack-www` and click `fork` in the top right corner of the page.
* Then, clone your fork to your local workstation: `git clone git@github.com:<your_github_user>/cloudstack-www.git`
* Cloning this way will make your Github fork the `origin` remote.
* `cd cloudstack-www`
* Add the official repo as the `upstream` remote: `git remote add upstream git@github.com:apache/cloudstack-www.git`


**Sync Local with Upstream**
```bash
git checkout master
git fetch upstream
git pull upstream master
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
* Create a Pull Request against `master` on the `https://github.com/apache/cloudstack-www` repository.

---

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
git pull upstream master
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
# run `middleman server [-p <portnumber>]` again and
# validate the site updated at your `http://localhost:<portnumber>`
git push upstream asf-site
# validate the site updated at: https://cloudstack.apache.org
```
