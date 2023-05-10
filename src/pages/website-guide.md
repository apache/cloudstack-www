---
layout: post
title: Lorem Ipsum
tags: [news]
authors: [ivet]
slug: fix-this-slug-for-post-url
---

![](/img/banner.svg "Header Image")

This is a website and blog guide which can be used as a reference which is
written in markdown. Markdown allows to fix html, the above is an example of how
to add an image which may exist within the blog folder directory.

Please co-relate with the source of this page at:

https://github.com/apache/cloudstack-www/blob/main/src/pages/website-guide.md

For basic Markdown syntax reference, please refer:
https://www.markdownguide.org/basic-syntax/

Refer to the following for Docusauras supported markdown features:
https://docusaurus.io/docs/2.3.1/markdown-features

<h2>Images</h2>

We can specify the path related to the `static/` directory paths, all files
in static folder are available from the root of the website such as:

![](/img/banner.svg "Example image title")

Further reference: https://docusaurus.io/docs/2.3.1/markdown-features/assets

## Working with the Website, Pages and Blogs

### Website

Most of the website configuration such as theme, name, logos, menubar, footer
etc are configurable using the `docusaurus.config.js` that you can edit here:

https://github.com/apache/cloudstack-www/blob/main/docusaurus.config.js

### Pages

The various standalone pages are in this directory:

https://github.com/apache/cloudstack-www/tree/main/src/pages

Here you can use them as examples, on how to create MD or MDX file that build
as webpages. You can look at 'learn-more.md' as a reusable page that can be
included in other pages such as the homepage index.tsx, cloud-builders.mdx etc.

### Blog

To create a new blog, create a directory with naming convention
`YYYY-MM-DD-slug-url`. In this directory you can put in an `index.md` and other
assets such as images, pdfs etc. The .blog-template boilerplate can be used from
here:

https://github.com/apache/cloudstack-www/tree/main/blog/.blog-template

Use the provided index.md to specify attribute of your blog such as title, tags
(categories), authors and the slug (the permalink).

Having all your blog content and assets in a blog directory makes it easier to
work with Github's editor and allows you to visually contribute changes.

You may further read https://docusaurus.io/docs/blog for advance changes and
refer to the misc section on this page for various components that you case use.

A common use-case is to have a header file and a way to limit how much of the
post shows up on the blog roll. For this, to add read-more we can add a `<!--
truncate -->` in your blog post (the index.md file):

```
...blog content...
<!-- truncate -->
...blog content...
```

## Contributing Changes using Github

TODO: add images

Once you've the boilerplate changes done, the steps are:

1. Create a Github branch or just edit directly on the `main` branch.

2. Upload a new page (.md or .mdx) or blog folder in the right directories and
commit your changes.

3. If you've created your own branch, raise a pull request and wait for the
automation to build the page for you to check. And merge the PR with other
committer's help (or yourself) once you're satisfied.

## Misc

<h1>Table of Contents</h1>

If you don't want table of contents on right-side of a page, then don't use the
markdown syntax for h2, h3, h4... instead use the html such this section's
header won't show up on the page's table of contents on the right side.

Further reference: https://docusaurus.io/docs/2.3.1/markdown-features/toc

## Buttons

Here are some example for buttons, shapes and sizes which depends on the class
we use in the `<a>` tags. Note: for files within the website/blog source
folders, always use a target `_blank`.

For examples:

<a class="button button--primary button--sm" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>
<br/>
<br/>
<a class="button button--primary" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>
<br/>
<br/>
<a class="button button--primary button--lg" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>
<br/>
<br/>

Buttons can also have colours depending on the class used, such as:

<a class="button button--secondary" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>
<br/>
<a class="button button--info" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>
<br/>
<a class="button button--success" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>
<br/>
<a class="button button--warning" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>
<br/>
<a class="button button--danger" href="https://cloudstack.apache.org/" target="_blank">BUTTON</a>

## Code Blocks

Example of code block:

```
# dnf install cloudstack-management
```

## Using Admonitions

Refer to https://docusaurus.io/docs/2.3.1/markdown-features/admonitions


:::tip

Some **content** with _Markdown_ `syntax`. Check [this `link`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `link`](#).

:::

## Misc Examples

> This is a quote
>
> -By somebody

In this sentence, here is how you **bold**, *italics* or  ~~strike~~.

Here is a horizontal line:

***

Here is a list of things:
- Item1
- Item2
  - Item3
- Item4
  - Item 5
  - Item 5
    - Item 5
