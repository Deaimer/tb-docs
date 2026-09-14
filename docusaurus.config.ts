import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Deaimer Terminal-Bench Handbook',
  tagline: 'Build and review rigorous terminal-agent benchmark tasks',
  favicon: 'img/deaimer-mark.svg',
  future: {v4: true},
  url: 'https://terminalbench.deaimer.com',
  baseUrl: '/',
  organizationName: 'Deaimer',
  projectName: 'terminal-bench-handbook',
  deploymentBranch: 'gh-pages',
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
        editUrl: 'https://github.com/Deaimer/terminal-bench-handbook/edit/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
        lastVersion: 'current',
        versions: {
          current: {label: 'Current guidance'},
          '2026.09': {label: '2026.09 snapshot', banner: 'none'},
        },
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
    metadata: [{name: 'description', content: 'Internal, source-traceable handbook for Terminal-Bench and Terminal-Bench-Science task authors and reviewers.'}],
    announcementBar: {
      id: 'source_scope_2026_09',
      content: '<strong>Internal handbook.</strong> Verify policy-sensitive decisions against the linked upstream source before submission.',
      backgroundColor: '#fff3df', textColor: '#8a4615', isCloseable: true,
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Deaimer',
      logo: {alt: 'Deaimer', src: 'img/deaimer-mark.svg'},
      items: [
        {to: '/', label: 'Handbook', position: 'left'},
        {to: '/tracks/terminal-bench', label: 'Terminal-Bench', position: 'left'},
        {to: '/tracks/tb-science', label: 'TB-Science', position: 'left'},
        {to: '/reviewing/reviewer-workflow', label: 'Reviewer desk', position: 'left'},
        {to: '/reference/changelog', label: 'Changelog', position: 'left'},
        {type: 'docsVersionDropdown', position: 'right'},
        {href: 'https://github.com/Deaimer/terminal-bench-handbook', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Build', items: [
          {label: 'Quick start', to: '/getting-started/quick-start'},
          {label: 'Task anatomy', to: '/concepts/task-anatomy'},
          {label: 'Validation', to: '/validation/local-validation'},
        ]},
        {title: 'Review', items: [
          {label: 'Reviewer workflow', to: '/reviewing/reviewer-workflow'},
          {label: 'Verifier soundness', to: '/reviewing/verifier-soundness'},
          {label: 'Finding severity', to: '/reviewing/finding-severity'},
        ]},
        {title: 'Upstream', items: [
          {label: 'Terminal-Bench', href: 'https://github.com/harbor-framework/terminal-bench'},
          {label: 'TB-Science', href: 'https://github.com/harbor-framework/terminal-bench-science'},
          {label: 'Harbor', href: 'https://harborframework.com/docs'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} Deaimer. Internal authoring handbook; not official Terminal-Bench documentation.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['bash', 'docker', 'toml', 'python', 'json']},
  } satisfies Preset.ThemeConfig,
};

export default config;
