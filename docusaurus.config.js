// SPDX-FileCopyrightText: 2025 SternXD
// SPDX-License-Identifier: AGPL-3.0

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

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
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: { name: 'description', content: 'Comprehensive Xbox Developer Mode setup guides, emulation tutorials, and homebrew development resources. Learn to compile emulators and set up Xbox for development.' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'keywords', content: 'Xbox, Developer Mode, emulation, homebrew, XBSX2, Dolphin, PPSSPP, RetroArch, compilation, setup guide' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'author', content: 'SternXD' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'robots', content: 'index, follow' }
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:type', content: 'website' }
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:url', content: 'https://wiki.sternserv.xyz/' }
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:title', content: 'Dev Mode Wiki - Xbox Developer Mode & Emulation Guides' }
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:description', content: 'Complete Xbox Developer Mode setup guides, emulation tutorials, and homebrew development resources.' }
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:image', content: 'https://wiki.sternserv.xyz/img/logo.png' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:card', content: 'summary_large_image' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:url', content: 'https://wiki.sternserv.xyz/' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:title', content: 'Dev Mode Wiki - Xbox Developer Mode & Emulation Guides' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:description', content: 'Complete Xbox Developer Mode setup guides, emulation tutorials, and homebrew development resources.' }
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:image', content: 'https://wiki.sternserv.xyz/img/logo.png' }
    },
  ],

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
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#2563eb',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#2563eb',
          },
        ],
      },
    ],
    'docusaurus-plugin-image-zoom',
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
        additionalLanguages: ['powershell', 'bash', 'json', 'diff', 'ini', 'log', 'csharp', 'cpp'],
      },

      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          margin: 24,
        }
      },

      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
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
