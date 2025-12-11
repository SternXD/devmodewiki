// SPDX-FileCopyrightText: 2025 SternXD
// SPDX-License-Identifier: AGPL-3.0

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import { lazy } from 'react';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dev Mode Wiki',
  tagline: 'Complete Xbox Developer Mode Setup & Emulation Guides',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.sternserv.xyz/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SternXD',
  projectName: 'devmodewiki',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    metadata: {
      description: 'Comprehensive Xbox Developer Mode setup guides, emulation tutorials, and homebrew development resources. Learn to compile emulators and set up Xbox for development.',
      keywords: 'Xbox, Developer Mode, emulation, homebrew, XBSX2, Dolphin, PPSSPP, RetroArch, compilation, setup guide',
      author: 'SternXD',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1.0',
      og: {
        type: 'website',
        url: 'https://wiki.sternserv.xyz/',
        title: 'Dev Mode Wiki - Xbox Developer Mode & Emulation Guides',
        description: 'Complete Xbox Developer Mode setup guides, emulation tutorials, and homebrew development resources.',
        image: 'https://wiki.sternserv.xyz/img/logo.png',
      },
      twitter: {
        card: 'summary_large_image',
        url: 'https://wiki.sternserv.xyz/',
        title: 'Dev Mode Wiki - Xbox Developer Mode & Emulation Guides',
        description: 'Complete Xbox Developer Mode setup guides, emulation tutorials, and homebrew development resources.',
        image: 'https://wiki.sternserv.xyz/img/logo.png',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/SternXD/devmodewiki/edit/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
          routeBasePath: '/docs',
        },
        blog: false, // Disable blog we don't need it
        pages: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
        gtag: {
          trackingID: 'G-BZYS4Z3DR5',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    function metadataPlugin(context, options) {
      return {
        name: 'metadata-plugin',
        injectHtmlTags() {
          const { customFields } = context.siteConfig;
          const metadata = customFields?.metadata;

          if (!metadata) return {};

          const headTags = [];

          // Basic metadata
          if (metadata.description) {
            headTags.push({
              tagName: 'meta',
              attributes: { name: 'description', content: metadata.description }
            });
          }
          if (metadata.keywords) {
            headTags.push({
              tagName: 'meta',
              attributes: { name: 'keywords', content: metadata.keywords }
            });
          }
          if (metadata.author) {
            headTags.push({
              tagName: 'meta',
              attributes: { name: 'author', content: metadata.author }
            });
          }
          if (metadata.robots) {
            headTags.push({
              tagName: 'meta',
              attributes: { name: 'robots', content: metadata.robots }
            });
          }
          if (metadata.viewport) {
            headTags.push({
              tagName: 'meta',
              attributes: { name: 'viewport', content: metadata.viewport }
            });
          }

          if (metadata.og) {
            const og = metadata.og;
            if (og.type) headTags.push({ tagName: 'meta', attributes: { property: 'og:type', content: og.type } });
            if (og.url) headTags.push({ tagName: 'meta', attributes: { property: 'og:url', content: og.url } });
            if (og.title) headTags.push({ tagName: 'meta', attributes: { property: 'og:title', content: og.title } });
            if (og.description) headTags.push({ tagName: 'meta', attributes: { property: 'og:description', content: og.description } });
            if (og.image) headTags.push({ tagName: 'meta', attributes: { property: 'og:image', content: og.image } });
          }

          if (metadata.twitter) {
            const twitter = metadata.twitter;
            if (twitter.card) headTags.push({ tagName: 'meta', attributes: { name: 'twitter:card', content: twitter.card } });
            if (twitter.url) headTags.push({ tagName: 'meta', attributes: { name: 'twitter:url', content: twitter.url } });
            if (twitter.title) headTags.push({ tagName: 'meta', attributes: { name: 'twitter:title', content: twitter.title } });
            if (twitter.description) headTags.push({ tagName: 'meta', attributes: { name: 'twitter:description', content: twitter.description } });
            if (twitter.image) headTags.push({ tagName: 'meta', attributes: { name: 'twitter:image', content: twitter.image } });
          }

          // Add gtag fix script
          headTags.push({
            tagName: 'script',
            innerHTML: `
              // Fix for gtag loading issue
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;

              // Load Google Analytics script
              (function() {
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BZYS4Z3DR5';
                document.head.appendChild(script);

                gtag('js', new Date());
                gtag('config', 'G-BZYS4Z3DR5', { anonymize_ip: true });
              })();
            `,
          });

          return { headTags };
        },
      };
    },
    [
      'docusaurus-lunr-search',
      {
        languages: ['en'],
        maxHits: 15,
        indexBatchSize: 100,
        excludeRoutes: [
          'docs/tags/**',
          '404.html'
        ],
        indexBaseUrl: true,
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dev Mode Wiki',
        logo: {
          alt: 'Dev Mode Wiki Logo',
          src: 'img/logo.png',
          style: {borderRadius: '10px'},
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'dropdown',
            label: 'Emulation',
            position: 'left',
            items: [
              {
                label: 'XBSX2 (PS2)',
                to: '/docs/emulation/xbsx2-guide',
              },
              {
                label: 'Dolphin (GC/Wii)',
                to: '/docs/emulation/dolphin-guide',
              },
              {
                label: 'PPSSPP (PSP)',
                to: '/docs/emulation/ppsspp-guide',
              },
              {
                label: 'RetroArch',
                to: '/docs/emulation/retroarch-guide',
              },
              {
                label: 'All Emulators',
                to: '/docs/emulation/',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Development',
            position: 'left',
            items: [
              {
                label: 'Xbox Developer Mode Setup',
                to: '/docs/xbox-setup/xbox-developer-mode-setup',
              },
              {
                label: 'Compiling Emulators',
                to: '/docs/development/',
              },
              {
                label: 'UWP Development',
                to: '/docs/helpful-links/xbox-uwp-development',
              },
            ],
          },
          {
            href: 'https://github.com/SternXD/devmodewiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Xbox Developer Mode',
                to: '/docs/xbox-setup/xbox-developer-mode-setup',
              },
              {
                label: 'Emulation Guides',
                to: '/docs/emulation',
              },
              {
                label: 'Development Tools',
                to: '/docs/development',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Xbox Emulation Hub',
                href: 'https://discord.gg/WCmxvvxHqu',
              },
              {
                label: 'Revives Community',
                href: 'https://discord.gg/28SbncgDy5',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/SternXD/devmodewiki/discussions',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
              {
                label: 'Helpful Links',
                to: '/docs/helpful-links/',
              },
              {
                label: 'Report Issues',
                href: 'https://github.com/SternXD/devmodewiki/issues',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SternXD',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com/Stern_XD',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/SternXD',
              },
            ],
          },
        ],
        logo: {
          alt: 'Logo',
          src: 'img/SternXD.png',
          width: 32,
          height: 32,
        },
        copyright: `Copyright © ${new Date().getFullYear()} SternXD. Built with ❤️ using Docusaurus.`,
      },

      algolia: {
        appId: 'MO0700OKUL',
        apiKey: '57ff699f1d819017cf3ef59e14c72b91',
        indexName: 'devmodewiki',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
        searchParameters: {},
      },

      announcementBar: (() => {
        const enabled = false;
        return enabled ? {
          id: 'announcement-bar',
          content:
            '⭐ New: Comprehensive guides for compiling emulators and setting up Xbox Developer Mode!',
          backgroundColor: '#2563eb',
          textColor: '#ffffff',
          isCloseable: true,
        } : undefined;
      })(),

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'bash', 'json', 'diff', 'ini', 'log'],
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      scrollToTop: true,

      stylesheets: [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      ],

      cssVariables: {
        '--ifm-color-primary': '#2563eb',
        '--ifm-color-primary-dark': '#1d4ed8',
        '--ifm-color-primary-darker': '#1e40af',
        '--ifm-color-primary-darkest': '#1e3a8a',
        '--ifm-color-primary-light': '#3b82f6',
        '--ifm-color-primary-lighter': '#60a5fa',
        '--ifm-color-primary-lightest': '#93c5fd',
        '--ifm-font-family-base': 'Inter, system-ui, sans-serif',
        '--ifm-heading-font-weight': '600',
        '--ifm-code-font-size': '95%',
        '--ifm-navbar-height': '64px',
      },
    }),
};

export default config;
