import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Benches',
  tagline: 'Independent authoring and review manuals',
  favicon: 'img/deaimer-mark.svg',
  future: {v4: true},
  url: 'https://deaimer.github.io',
  baseUrl: '/benches/',
  organizationName: 'Deaimer',
  projectName: 'benches',
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
    metadata: [{name: 'description', content: 'Deaimer manuals for Terminal-Bench, Terminal-Bench-Science, and SWE-bench authors and reviewers.'}],
    announcementBar: {
      id: 'separated_benches_2026_09',
      content: '<strong>Choose one benchmark track.</strong> Formats and review rules are not interchangeable.',
      backgroundColor: '#fff3df',
      textColor: '#8a4615',
      isCloseable: true,
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Benches',
      logo: {alt: 'Deaimer', src: 'img/deaimer-mark.svg'},
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/terminal-bench/', label: 'Terminal-Bench', position: 'left'},
        {to: '/terminal-bench-science/', label: 'Terminal-Bench-Science', position: 'left'},
        {to: '/swe-bench/', label: 'SWE-bench', position: 'left'},
        {to: '/contributing/', label: 'Contributing', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Manuals', items: [
          {label: 'Terminal-Bench', to: '/terminal-bench/'},
          {label: 'Terminal-Bench-Science', to: '/terminal-bench-science/'},
          {label: 'SWE-bench', to: '/swe-bench/'},
        ]},
        {title: 'Workflow', items: [
          {label: 'Authors', to: '/contributing/authors'},
          {label: 'Reviewers', to: '/contributing/reviewers'},
          {label: 'Owner controls', to: '/contributing/owner-controls'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} Deaimer. Internal benchmark documentation portal.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'docker', 'toml', 'python', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
