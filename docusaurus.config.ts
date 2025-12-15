import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Md Masum Billah - Handbook',
  tagline: 'Fueled by curiosity, briyani, and the occasional Aha! moment.',
  favicon: 'img/mb-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://masum184e.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/handbook',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'masum184e', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'golang',
        path: 'docs/golang',
        routeBasePath: 'docs/golang',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'typescript',
        path: 'docs/typescript',
        routeBasePath: 'docs/typescript',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dsa',
        path: 'docs/dsa',
        routeBasePath: 'docs/dsa',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'roadmap',
        path: 'docs/roadmap',
        routeBasePath: 'docs/roadmap',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'aws',
        path: 'docs/aws',
        routeBasePath: 'docs/aws',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docker',
        path: 'docs/docker',
        routeBasePath: 'docs/docker',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iot',
        path: 'docs/iot',
        routeBasePath: 'docs/iot',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mysql',
        path: 'docs/mysql',
        routeBasePath: 'docs/mysql',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'redis',
        path: 'docs/redis',
        routeBasePath: 'docs/redis',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Md Masum Billah',
      logo: {
        alt: 'Md Masum Billah',
        src: 'img/mb-logo.png',
        href: '/',
        height: 10,
        width: 30,
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: '/', label: 'Handbook', position: 'left', exact: true },
        { to: '/docs/roadmap', label: 'Roadmap', position: 'left' },
        { to: 'https://mdmasumbillah.vercel.app/blogs', label: 'Thoughts', position: 'left' },
        { to: 'https://mdmasumbillah.vercel.app/projects', label: 'Projects', position: 'left' },
        { to: 'https://mdmasumbillah.vercel.app/academy', label: 'Academy', position: 'left' },
        {
          href: 'https://drive.google.com/file/d/1Ca7hBqPzyat2WKleedcHtMZYINEkkeSH/view?usp=drive_link',
          label: 'Resume',
          position: 'right',
        },
        {
          href: 'https://github.com/masum184e',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://mdmasumbillah.vercel.app/',
          label: 'Portfolio',
          position: 'right',
        },

        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: "Z4KTJJ1USA",
      apiKey: "58481185c2ad0281907a866d21045ccd",
      indexName: "handbook",
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Data Structure & Algorithms',
              href: '/docs/dsa',
            },
            {
              label: 'Amazon Web Services',
              href: '/docs/aws',
            },
            {
              label: 'Interview Questions (BD)',
              href: 'https://tamimehsan.github.io/interview-questions-bangladesh/',
            },
          ],
        },
        {
          title: 'Online Judges',
          items: [
            {
              label: 'Codeforces',
              href: 'http://codeforces.com/profile/masum1834e',
            },
            {
              label: 'LeetCode',
              href: 'https://leetcode.com/u/masum1834e/',
            },
            {
              label: 'CodeChef',
              href: 'https://www.codechef.com/users/masum184e',
            },
          ],
        },
        {
          title: 'Join My Network',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/masum1834e/',
            },
            {
              label: 'GitHub',
              href: 'https://www.github.com/masum184e',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/masum184e',
            }
          ],
        },
        {
          title: 'Engage Me',
          items: [
            {
              label: 'Whatsapp',
              href: 'https://wa.me/+8801400095352',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/masum184e',
            },
            {
              label: 'Email',
              href: 'mailto:masum184e@gmail.com',
            },
          ],
        },
      ],
      copyright: `
  Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.
  © ${new Date().getFullYear()}
  <a href="https://mdmasumbillah.vercel.app/" target="_blank" rel="noopener noreferrer">Md Masum Billah</a>.
`,
    }
    ,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
