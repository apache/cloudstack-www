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

Please co-related with the source at:


For basic Markdown syntax reference, please refer:
https://www.markdownguide.org/basic-syntax/

Refer to the following for Docusauras supported markdown features:
https://docusaurus.io/docs/2.3.1/markdown-features

<h2>Images</h2>

We can specify the path related to the `static/` directory paths, all files
in static folder are available from the root of the website such as:

![](/img/banner.svg "Example image title")

Further reference: https://docusaurus.io/docs/2.3.1/markdown-features/assets

To add read-more we can add a `<!-- truncate -->` in the post, such as after
this sentence.

<!-- truncate -->

## Working with Blogs

Read https://docusaurus.io/docs/blog

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
