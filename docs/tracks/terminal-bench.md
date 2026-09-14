---
title: Terminal-Bench track
description: Current proposal, implementation, metadata, and submission path for general Terminal-Bench tasks.
---

<div className="source-line"><strong>Upstream:</strong> <a href="https://github.com/harbor-framework/terminal-bench/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> at <code>83c7a61</code> · <strong>Verified:</strong> 2026-09-13</div>

Terminal-Bench targets economically valuable work completed through a terminal. Software engineering is only one domain: operations, security, media, hardware, finance, healthcare operations, and other computer-mediated work can fit if the result is programmatically verifiable.

## Current contribution route

1. Read the [proposal rubric](https://github.com/harbor-framework/terminal-bench/blob/main/docs/prompts/task-proposal.md), taxonomy, and recent merged tasks.
2. Pitch the idea in `#tb-task-spam` on the upstream Discord, over email, or directly to maintainers.
3. Wait for enough confidence in the idea before full implementation.
4. Fork, branch, initialize with `docs/task-template.toml`, build, and validate.
5. Open a pull request to the upstream repository and iterate through automated/manual review.

There is currently no public structured proposal form equivalent to TB-Science’s Airtable form in the upstream regular contribution guide. A Discord pitch is not the final implementation submission; the pull request is.

## Quality target

The task should be real paid computer work, clear, verifiable, robust across time, and well beyond reliable frontier-agent ability because of meaningful work—not arbitrary complication. The benchmark is open internet, so disabling network access is not an accepted way to manufacture difficulty.

Strong patterns include long-horizon work, rich systems, dynamic services, cross-domain reasoning, and iterative diagnosis. A task whose solution is easily searchable online is weak even if the local mechanics are complex.

## Required task shape

```text
tasks/<task-slug>/
├── README.md
├── instruction.md
├── task.toml
├── environment/
│   └── Dockerfile
├── solution/
│   └── solve.sh
└── tests/
    └── test.sh
```

The current guide requires separate verifier mode and declares output artifacts at the TOML top level. README reviewer explanations include difficulty, solution, verification, and relevant experience; upstream explicitly says those short sections must be human-written.

## Track-specific defaults

| Topic | Current regular track |
|---|---|
| Proposal | Informal maintainer validation before implementation |
| Task path | `tasks/<slug>/` |
| Internet | Allowed; open-internet benchmark |
| Verifier | Separate environment required |
| GPU | Current guidance: at most one H100 |
| Metadata taxonomy | Category/subcategory in `docs/TAXONOMY.md` |
| Reviewer narrative | Root `README.md` |

:::info Internal portal status
This page describes upstream public contribution behavior. Deaimer’s private review gates are stricter internal checks, not additional upstream requirements.
:::
