---
title: Initialize a new task
description: Exact Terminal-Bench naming, branch, Harbor initializer, and skeleton inspection.
---

# Terminal-Bench: Initialize a new task

## 1. Choose a slug

Use lowercase kebab-case describing the work, such as `repair-sharded-postgres-replication`. Avoid spaces, capitals, generic labels, answer-revealing terms, and existing task names.

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

## 4. Verify the skeleton

```bash
find tasks/example-task -maxdepth 3 -type f -print | sort
sed -n '1,240p' tasks/example-task/task.toml
sed -n '1,240p' tasks/example-task/instruction.md
git status --short
```

Required files are `README.md`, `instruction.md`, `task.toml`, `environment/Dockerfile`, `solution/solve.sh`, `tests/Dockerfile`, and `tests/test.sh`. Preserve initializer canaries. Replace all placeholders before requesting review.
