// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache CloudStack',
  tagline: 'Open Source Cloud Computing™',
  url: 'https://cloudstack.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'download',
        path: 'download',
        routeBasePath: 'download',
      },
    ],
    ['docusaurus-plugin-sass', {}],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: "/docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/apache/cloudstack-www/tree/main/',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Apache CloudStack Blog',
          showReadingTime: false,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 0,
          editUrl: 'https://github.com/apache/cloudstack-www/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apache CloudStack™',
        logo: {
          alt: 'apache-cloudstack',
          src: 'img/cloudstack.png',
        },
        items: [
          {type: 'doc', docId: 'getting-started', position: 'right', label: 'Docs'},
          {to: '/download', label: 'Download', position: 'right'},
          {type: 'doc', docId: 'community', position: 'right', label: 'Community', docsPluginId: 'community'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/users', label: 'Users', position: 'right'},
          {
            href: 'https://github.com/apache/cloudstack',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {type: 'search', position: 'right'},
          {
            type: 'dropdown',
            label: 'ASF',
            position: 'right',
            items: [
              {label: 'Foundation', to: 'https://www.apache.org/'},
              {label: 'License', to: 'https://www.apache.org/licenses/'},
              {label: 'Events', to: 'https://www.apache.org/events/current-event'},
              {label: 'Security', to: 'https://www.apache.org/security/'},
              {label: 'Sponsorship', to: 'https://www.apache.org/foundation/sponsorship.html'},
              {label: 'Privacy', to: 'https://www.apache.org/foundation/policies/privacy.html'},
              {label: 'Thanks', to: 'https://www.apache.org/foundation/thanks.html'}
            ],
          },
        ],
      },
      announcementBar: {
        id: 'support_us',
        content:
        'Fancy annoucement bar, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started',
              },
              {
                label: 'Supported commands',
                to: '/docs/supported-commands',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/cloudstackcommunity/shared_invite/zt-p5928e3r-OUAK8SUgC8GOceGM6dAz6w',
              },
              {
                label: 'Issue Tracker',
                href: 'https://github.com/apache/cloudstack/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Source Repo',
                href: 'https://github.com/apache/cloudstack',
              },
              {
                label: 'Website Source Repo',
                href: 'https://github.com/apache/cloudstack-www',
              },
            ],
          },
        ],
        logo: {
            alt: 'Apache CloudStack logo',
            src: 'img/banner.svg',
            href: 'https://cloudstack.apache.org/'
        },
        copyright: `<div style="text-align: left;">
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;text-align: center;font-family: Avenir-Medium,serif;font-size: 14px;color: #999;display: flex;align-items: center;">
          <span>
          Copyright © ${new Date().getFullYear()} The Apache Software Foundation, Licensed under the Apache License, Version 2.0.
          "Apache", "CloudStack", "Apache CloudStack", the Apache CloudStack logo, the Apache CloudStack Cloud Monkey logo and the Apache feather logos are registered trademarks or trademarks of The Apache Software Foundation.

          <br/><a href="https://cloudstack.apache.org/trademark-guidelines.html">Apache CloudStack Trademark Usage</a> - <a href="https://cloudstack.apache.org/bylaws.html">Apache CloudStack Community ByLaws</a>
          </span></div></div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['properties'],
      },
    }),

    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexDocs: true,
          indexPages: true,
          language: ["en"],
        }
      ],
    ]
};

module.exports = config;
