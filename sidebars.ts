import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {type: 'category', label: 'Getting started', collapsed: false, items: [
      'getting-started/how-to-use',
      'getting-started/prerequisites',
      'getting-started/repository-setup',
      'getting-started/quick-start',
      'getting-started/task-lifecycle',
    ]},
    {type: 'category', label: 'Understand tasks', items: [
      'tracks/terminal-bench',
      'concepts/quality-bar',
      'concepts/task-anatomy',
      'concepts/difficulty',
      'concepts/determinism',
      'concepts/artifact-boundary',
      'concepts/security-model',
    ]},
    {type: 'category', label: 'Build the task', items: [
      'authoring/initialize-task',
      'authoring/instruction',
      'authoring/task-toml',
      'authoring/environment',
      'authoring/data-provenance',
      'authoring/solution',
      'authoring/verifier',
    ]},
    {type: 'category', label: 'Test and validate', items: [
      'validation/local-validation',
      'validation/oracle',
      'validation/nop',
      'validation/verifier-tests',
      'validation/negative-tests',
      'validation/agent-trials',
      'validation/logs',
      'validation/reproducibility',
      'validation/ci-preflight',
      'validation/complete-task',
    ]},
    {type: 'category', label: 'Submit to private dataset', items: [
      'submission/branch-workflow',
      'submission/pull-requests',
      'submission/responding-to-review',
      'submission/maintenance',
    ]},
    {type: 'category', label: 'Reviewer desk', items: [
      'reviewing/reviewer-workflow',
      'reviewing/contract-coherence',
      'reviewing/verifier-soundness',
      'reviewing/ground-truth-protection',
      'reviewing/finding-severity',
      'reviewing/review-checklist',
    ]},
    {type: 'category', label: 'Reference', items: [
      'reference/commands',
      'reference/file-tree',
      'reference/troubleshooting',
      'reference/faq',
      'reference/changelog',
    ]},
  ],
};

export default sidebars;
