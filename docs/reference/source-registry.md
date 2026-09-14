---
title: Source registry
description: Pinned upstream authorities, precedence, and refresh procedure.
---

<div className="source-line"><strong>Last source audit:</strong> 2026-09-13 UTC</div>

| Source | Pinned commit | Commit date | Used for |
|---|---|---|---|
| [Terminal-Bench](https://github.com/harbor-framework/terminal-bench) | `83c7a6172d629c6575b785ab12c8db787bb2e323` | 2026-09-02 | general task policy, template, taxonomy, review automation |
| [Terminal-Bench-Science](https://github.com/harbor-framework/terminal-bench-science) | `ff55a1b0810a5cc2ebac3ebb007cbe6a26aa2e3b` | 2026-09-12 | proposal route, science taxonomy, schema, evidence, reviewer workflow |
| [Harbor](https://github.com/laude-institute/harbor) | `fd0049126a060f930372f9b0b0aa330caf1f19e5` | 2026-09-12 | task/container format and CLI behavior |

## Primary files

Terminal-Bench: `CONTRIBUTING.md`, `docs/TAXONOMY.md`, `docs/task-template.toml`, `docs/TASK_REVIEW_AUTOMATION.md`, proposal and implementation prompts, review guide, and current CI scripts.

TB-Science: `CONTRIBUTING.md`, `REVIEWING.md`, `task-template.toml`, `task-hint-template.md`, proposal and implementation rubrics, dashboard, and current CI checks.

Harbor: task tutorial/format, networking, resources, multi-step tasks, job execution/results, and CLI help for the installed version.

## Refresh procedure

1. Fetch upstream and record new commit/date.
2. Diff the primary files from the prior pin.
3. Classify changes as policy, schema, command, review, editorial, or example-only.
4. Update affected handbook pages and changelog.
5. Run link/build checks and spot-test copied commands.
6. Open a reviewed handbook PR; never silently move pins.

## Disclaimer

This Deaimer handbook is independent and internal. Terminal-Bench, TB-Science, Harbor, Snorkel, and their marks belong to their respective owners. Links are provided for attribution and verification.
