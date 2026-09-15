---
title: Official sources and version
description: The Terminal-Bench files that control this manual and how conflicts are resolved.
---

# Terminal-Bench: Official sources and version

This manual is an internal operational rewrite of the official Terminal-Bench rules. It was verified on **15 September 2026** against upstream `main` at commit `e2995b93b0a46edee7bc9942ea5622411a6d5bb9`.

## Authority order

When two copied examples disagree, use this order:

1. CI check scripts and workflow files on the exact base commit targeted by the task PR.
2. The current task initializer output and `docs/task-template.toml`.
3. `CONTRIBUTING.md`, `docs/TASK_REVIEW_AUTOMATION.md`, and `docs/REVIEWING.md`.
4. `docs/prompts/task-implementation.toml` and `docs/prompts/task-proposal.md`.
5. This internal manual.

The higher item wins because executable CI and the checked-in schema determine whether a submission passes. If the internal private repository intentionally changes a branch name or ownership rule, that internal repository policy controls only the route to review; it does not change the Terminal-Bench task format.

## Official source files

- [Contribution guide](https://github.com/harbor-framework/terminal-bench/blob/main/CONTRIBUTING.md)
- [Task metadata template](https://github.com/harbor-framework/terminal-bench/blob/main/docs/task-template.toml)
- [Task taxonomy](https://github.com/harbor-framework/terminal-bench/blob/main/docs/TAXONOMY.md)
- [Task proposal rubric](https://github.com/harbor-framework/terminal-bench/blob/main/docs/prompts/task-proposal.md)
- [Implementation rubric](https://github.com/harbor-framework/terminal-bench/blob/main/docs/prompts/task-implementation.toml)
- [Review automation](https://github.com/harbor-framework/terminal-bench/blob/main/docs/TASK_REVIEW_AUTOMATION.md)
- [Human reviewer guide](https://github.com/harbor-framework/terminal-bench/blob/main/docs/REVIEWING.md)

## Refresh procedure

Before a submission batch, the owner records the upstream commit, compares all seven sources above, copies schema/check changes into the private dataset scaffold, updates this page, and reruns the documentation build. Authors should never guess around a mismatch. Open an internal documentation issue with the conflicting file, line, and upstream commit.
