# Apache CloudStack Official Website

This project keeps all sources used for building up the Apache CloudStack
official website which is served at https://cloudstack.apache.org/.

## Contributing

For contributing changes such as adding/editing blogs, please see the:

[CONTRIBUTING.md](./CONTRIBUTING.md)

## Prerequisite

Apache CloudStack website is powered by [Docusaurus 2](https://docusaurus.io/).
Please install Node.js v16 or later and yarn.

## Local Development

Install dependencies:

```
$ yarn install
```

Start local app server on localhost:3000:

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## <a name="building-and-publishing">Building and Publishing</a>

It can be useful at times to start anew:

```
$ yarn clear
```

To build the website run the following:

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service. We've GitHub Actions based
automation that can publish changes merged to 'main' branch being automatically
published to the 'asf-site'. see the procedure below.


## publishing procedure

- create a change
- test your change according to [the previous chapter](#building-and-publishing)
- create a PR against staging
- merge
- wait for the staged-site to be updated and published
- check the staging site
- next, on your local machine
  - pull the latest staging-site and main branches
  - merge staging-site to main
  - push main
```
git checkout staging-site
git pull
# git clean -d or similar if needed
git checkout main
git pull
git merge --ff-only staging-site
git push
```
- wait for asf-site to be updated and published to the main site
- check again
- go to sleep
