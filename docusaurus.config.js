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
      'docusaurus-plugin-sass',
      {},
    ],[
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: "/website-guide",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: 'https://github.com/apache/cloudstack-www/tree/main/',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Apache CloudStack Blog',
          showReadingTime: false,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,
          editUrl: 'https://github.com/apache/cloudstack-www/tree/main/',
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
        title: '',
        logo: {
          alt: 'apache-cloudstack',
          src: 'img/navlogo.png',
        },
        items: [
          {
            label: 'About',
            position: 'right',
            items: [
              {
                label: 'About',
                href: '/about'
              },
              {
                label: 'History',
                href: '/history'
              },
              {
                label: 'Features',
                href: '/features'
              },
              {
                label: 'Who We Are',
                href: '/who'
              },
              {
                label: 'Community Bylaws',
                href: '/bylaws'
              },
              {
                label: 'Trademark Guidelines',
                href: '/trademark-guidelines'
              },
              {
                label: 'Security',
                href: '/security'
              }
            ]
          },
          //{type: 'doc', docId: 'getting-started', position: 'right', label: 'Docs'},
          //{type: 'doc', docId: 'community', position: 'right', label: 'Community', docsPluginId: 'community'},
          {
            label: 'Community',
            position: 'right',
            items: [
              {
                label: 'Get Involved',
                href: '/contribute'
              },
              {
                label: 'Developer Resources',
                href: '/developers'
              },
              {
                label: 'Join Mailing Lists',
                href: '/mailing-lists'
              },
              {
                label: 'Issues Tracker',
                href: 'https://github.com/apache/cloudstack/issues'
              },
              {
                label: 'Community Slack',
                href: 'https://join.slack.com/t/apachecloudstack/shared_invite/zt-1u8qwbivp-u16HRI~LWioLmF1G2D3Iyg',
              },
              {
                label: 'Events and Meetups',
                href: '/events'
              },
              {
                label: 'Collab Conference',
                href: 'https://www.cloudstackcollab.org/'
              },
            ]
          },
          {
            label: 'Use Cases',
            position: 'right',
            items: [
              {
                label: 'Cloud Builders',
                href: '/cloud-builders'
              },
              {
                label: 'Kubernetes',
                href: '/kubernetes'
              },
              {
                label: 'Integrations',
                href: '/integrations'
              }
            ]
          },
          {
            label: 'Users',
            position: 'right',
            items: [
              {
                label: 'Known Users',
                href: '/users'
              },
              {
                label: 'Case Studies',
                href: 'blog/tags/case-studies'
              },
              {
                label: 'Take Survey',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLScPHIRetdt-pxPT62IesXMoQUmhQ8ATGKcYZa507mB9uwzn-Q/viewform'
              }
            ]
          },
          {
            label: 'Documentation',
            position: 'right',
            items: [
              {
                label: 'CloudStack Documentation',
                href: 'https://docs.cloudstack.apache.org'
              },
              {
                label: 'Project Wiki',
                href: 'https://cwiki.apache.org/confluence/display/CLOUDSTACK/Home'
              },
              {
                label: 'CloudStack Books',
                href: 'https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Books'
              },
              {
                label: 'API Documentation',
                href: '/api/'
              }
            ]
          },
          {
            label: 'Download',
            position: 'right',
            href: '/downloads'
          },
          {
            label: 'Blog',
            position: 'right',
            href: '/blog'
          },
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
      footer: {
        style: 'dark',
        logo: {
            alt: 'Apache CloudStack logo',
            src: 'img/ACS_logo_slogan.svg',
            href: 'https://cloudstack.apache.org/'
        },
        copyright: `
            <div class="social">
                <a href="mailto:dev-subscribe@cloudstack.apache.org">
		  <img src="/img/mail_mini_icon.svg" alt=""/>
		</a>
                <a href="https://join.slack.com/t/apachecloudstack/shared_invite/zt-2aegc22z7-tPCxpptfcebTBtd59qcZSQ">
		  <img src="/img/slack_mini_icon.svg" alt=""/>
		</a>
                <a href="https://github.com/apache/cloudstack">
		  <img src="/img/git_mini_icon.svg" alt=""/>
		</a>
                <a href="https://twitter.com/CloudStack">
		  <img src="/img/twitter_X_mini_icon.svg" alt=""/>
		</a>
                <a href="https://www.youtube.com/@ApacheCloudStack">
		  <img src="/img/youtube_mini_icon.svg" alt=""/>
		</a>
                <a href="https://www.linkedin.com/company/apachecloudstack/posts/">
		  <img src="/img/linkedin_icon.svg" alt=""/>
		</a>
            </div>
            <div class="footer-bottom">Copyright © 2012  - ${new Date().getFullYear()} The Apache
Software Foundation, Licensed under the Apache License, Version 2.0.
“Apache”, “CloudStack”, “Apache CloudStack”, the Apache CloudStack logo,
 the Apache CloudStack Cloud Monkey logo and the Apache feather logos
are registered trademarks or trademarks of The Apache Software
Foundation.
            <p class="footer-blue"><a href="/trademark-guidelines">Apache CloudStack Trademark Usage</a> - <a href="/bylaws">Apache CloudStack Community ByLaws</a> - <a href="https://github.com/apache/cloudstack-www">Website Source Code</a></p></div>
            </div>
          <br/>
          `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['properties'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
    }),

    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexDocs: false,
          indexPages: true,
          language: ["en"],
        }
      ],
    ],

    scripts: [
        {
            src: 'scripts/bootstrap.bundle.min.js',
            async: true,
        },
    ],
};

module.exports = config;
