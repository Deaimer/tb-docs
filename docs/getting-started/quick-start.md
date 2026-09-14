---
title: Quick start
description: From approved idea to a clean first Oracle and NOP run.
---

<div className="source-line"><strong>Authority:</strong> current upstream contribution guides · <strong>Verified:</strong> 2026-09-13</div>

:::danger Do not build first and pitch later
Get the task idea reviewed before investing in a full implementation. Proposal approval is not implementation approval, but it prevents avoidable scope mismatches.
:::

## Regular Terminal-Bench

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/terminal-bench.git
cd terminal-bench
git checkout -b task/my-task-slug

uv tool install harbor
harbor tasks init my-task-slug \
  --include-canary-strings \
  --metadata-template docs/task-template.toml \
  -p tasks/
```

The generated path is `tasks/my-task-slug/`. Complete `README.md`, `instruction.md`, `task.toml`, `environment/`, `solution/`, and `tests/`.

## Terminal-Bench-Science

Submit and obtain feedback on the [task proposal form](https://airtable.com/appzZC5gEHrXSfNNw/pagjgS95lAQ5FVJxt/form), then:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/terminal-bench-science.git
cd terminal-bench-science
git checkout -b task/my-science-task

uv tool install harbor
harbor tasks init my-science-task \
  --include-canary-strings \
  --metadata-template task-template.toml \
  -p tasks/life-sciences/medicine/
```

Replace the domain and field with the approved taxonomy. The generated path is `tasks/<domain>/<field>/<slug>/`.

## First validation loop

Harbor’s exact flags evolve. Confirm them with `harbor run --help`, then run one reference solution and one no-op baseline from clean task state. In current Harbor usage, the common pattern is:

```bash
harbor run -p tasks/my-task-slug -a oracle
harbor run -p tasks/my-task-slug -a nop
```

Inspect the job directory and reward files. The expected first gate is:

| Run | Expected | If not |
|---|---|---|
| Oracle | Reward indicates full success | Fix the environment, reference solution, artifact transfer, or verifier. |
| NOP | Reward indicates failure | Tighten tests; remove pre-solved outputs; reset state between trials. |

## Before the first commit

```bash
git status --short
git diff --check
```

Confirm there are no credentials, large accidental outputs, raw restricted data, caches, or solution artifacts under `environment/`. Then commit a coherent checkpoint.
