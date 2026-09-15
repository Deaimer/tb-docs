import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Terminal-Bench Authoring Manual',
  tagline: 'Complete internal operating manual for Terminal-Bench task authors and reviewers',
  favicon: 'img/deaimer-mark.svg',
  future: {v4: true},
  url: 'https://deaimer.github.io',
  baseUrl: '/tb-docs/',
  organizationName: 'Deaimer',
  projectName: 'tb-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {format: 'detect'},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [[
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.ts',
        routeBasePath: '/',
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
      blog: false,
      theme: {customCss: './src/css/custom.css'},
      sitemap: {changefreq: 'weekly', priority: 0.5},
    } satisfies Preset.Options,
  ]],
  plugins: [[require.resolve('@easyops-cn/docusaurus-search-local'), {
    hashed: true,
    indexDocs: true,
    indexBlog: false,
    highlightSearchTermsOnTargetPage: true,
    docsRouteBasePath: '/',
  }]],
  themeConfig: {
    image: 'img/deaimer-social-card.svg',
    metadata: [{name: 'description', content: 'Deaimer Terminal-Bench task authoring, validation, review, and submission manual.'}],
    announcementBar: {
      id: 'tb_manual_2026_09',
      content: '<strong>Terminal-Bench only.</strong> Build cleanly, prove Oracle = 1 and NOP = 0, then submit to the private review branch.',
      backgroundColor: '#fff3df',
      textColor: '#8a4615',
      isCloseable: true,
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Terminal-Bench',
      logo: {alt: 'Deaimer', src: 'img/deaimer-mark.svg'},
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/getting-started/quick-start', label: 'Quick start', position: 'left'},
        {to: '/validation/oracle', label: 'Oracle', position: 'left'},
        {to: '/validation/nop', label: 'NOP', position: 'left'},
        {to: '/submission/branch-workflow', label: 'Submit', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Build', items: [
          {label: 'Quick start', to: '/getting-started/quick-start'},
          {label: 'Task anatomy', to: '/concepts/task-anatomy'},
          {label: 'Complete task', to: '/validation/complete-task'},
        ]},
        {title: 'Validate and submit', items: [
          {label: 'Oracle', to: '/validation/oracle'},
          {label: 'NOP', to: '/validation/nop'},
          {label: 'Private dataset workflow', to: '/submission/branch-workflow'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} Deaimer. Internal Terminal-Bench operating manual.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'docker', 'toml', 'python', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
