---
title: Initialize a new task
description: Exact Terminal-Bench naming, branch, Harbor initializer, and skeleton inspection.
---

# Terminal-Bench: Initialize a new task

## 1. Choose a slug

Use lowercase kebab-case with **no more than three hyphen-separated tokens**, such as `repair-postgres-replication`. Avoid spaces, capitals, generic labels, answer-revealing terms, and existing task names. CI rejects longer slugs.

## 2. Start from reviewed

```bash
cd ~/work/terminal-bench-dataset
git status --short
git fetch origin --prune
git switch reviewed
git pull --ff-only origin reviewed
git switch -c author/YOUR_GITHUB_USERNAME/example-task
```

The initial status must be clean. One branch contains one task.

## 3. Inspect and run the initializer

```bash
harbor --version
harbor tasks init --help
test -f docs/task-template.toml
harbor tasks init example-task \
  --include-canary-strings \
  --metadata-template docs/task-template.toml \
  -p tasks/
```

The generated directory is `tasks/example-task/`. The metadata template from the private repository is authoritative.

If `docs/task-template.toml` or `scripts/checks/` is absent, the private dataset repository has not been bootstrapped. Do not initialize from memory or copy a task from an older release. Ask the owner to synchronize the current template and checks first.

## 4. Verify the skeleton

```bash
find tasks/example-task -maxdepth 3 -type f -print | sort
sed -n '1,240p' tasks/example-task/task.toml
sed -n '1,240p' tasks/example-task/instruction.md
git status --short
```

Required files are `README.md`, `instruction.md`, `task.toml`, `environment/Dockerfile`, `solution/solve.sh`, `tests/Dockerfile`, and `tests/test.sh`. Preserve the exact initializer canary in every checked text file. Replace all placeholders before requesting review.

The generated `task.toml` must include `schema_version = "2.0"`, `[task].name = "terminal-bench/example-task"`, metadata, top-level artifacts, separate-verifier configuration, and resource limits. Never hand-add fields that are absent from the current Harbor schema.
