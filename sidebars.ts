import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Terminal-Bench',
      collapsed: false,
      items: [
        'terminal-bench/index',
        'terminal-bench/authoring',
        'terminal-bench/verification',
        'terminal-bench/submission',
      ],
    },
    {
      type: 'category',
      label: 'Terminal-Bench-Science',
      collapsed: false,
      items: [
        'terminal-bench-science/index',
        'terminal-bench-science/proposal',
        'terminal-bench-science/authoring',
        'terminal-bench-science/validation',
        'terminal-bench-science/submission',
      ],
    },
    {
      type: 'category',
      label: 'SWE-bench',
      collapsed: false,
      items: [
        'swe-bench/index',
        'swe-bench/schema',
        'swe-bench/collection',
        'swe-bench/environment',
        'swe-bench/submission',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/index',
        'contributing/authors',
        'contributing/reviewers',
        'contributing/owner-controls',
      ],
    },
  ],
};

export default sidebars;
