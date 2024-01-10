# Contributing to Apache CloudStack Website

Non-technical contributors can refer to the visual guide here:

https://cloudstack.apache.org/website-guide/

or,

https://github.com/apache/cloudstack-www/tree/main/docs/

For adding blog posts, the following template can be copied and renamed in the
format as <date>-blog-name, see examples in the blog directory:

https://github.com/apache/cloudstack-www/tree/main/blog/.blog-template

## Step by Step

* Fork this repository to your GitHub account: `<your_github_user>`. To do that,
navigate to `https://github.com/apache/cloudstack-www` and click `fork` in the
top right corner of the page.
* Then, clone your fork to your local workstation: `git clone
git@github.com:<your_github_user>/cloudstack-www.git`
* Cloning this way will make your GitHub fork the `origin` remote.
* `cd cloudstack-www`
* Add the official repo as the `upstream` remote: `git remote add upstream
git@github.com:apache/cloudstack-www.git`

**Sync Local with Upstream**
```bash
git checkout main
git fetch upstream
git pull upstream main
```

**Commit Locally**

Once you've made local changes and tested locally if you can, you may commit
your changes as follows:

```bash
git add .
git commit -am "your commit message"
git push origin main
```

**Create a PR**
* Confirm the changes appear correctly on your GitHub account.
* Create a Pull Request against `main` on the `https://github.com/apache/cloudstack-www` repository.

**COMMITTER: Validate a PR Locally**
Note: The following instructions assume the `<contributor>` made their changes
on their `main` branch.

```bash
# validate contributor changes
cd /tmp
git clone https://github.com/<contributor>/cloudstack-www.git
cd cloudstack-www
git checkout main
yarn install
yarn build
# visually validate changes at: http://localhost:[3000|port number]
```

**COMMITTER: Merge & Deploy**

Once a PR is merged into `main` branch using GitHub UI, the changes are made live
by a GitHub Actions based automation workflow.
