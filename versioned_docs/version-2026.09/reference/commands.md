---
title: Command reference
description: Copyable Git, Harbor, Docker, and documentation commands with scope notes.
---

<div className="source-line"><strong>Verified:</strong> 2026-09-13 · <strong>Always check live flags:</strong> <code>harbor COMMAND --help</code></div>

## Install and inspect

```bash
uv tool install harbor
harbor --version
harbor --help
docker version
docker ps
```

## Clone and branch

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/terminal-bench.git
cd terminal-bench
git remote add upstream https://github.com/harbor-framework/terminal-bench.git
git checkout -b task/my-task
```

For science, substitute `terminal-bench-science` in both URLs.

## Initialize regular Terminal-Bench

```bash
harbor tasks init my-task \
  --include-canary-strings \
  --metadata-template docs/task-template.toml \
  -p tasks/
```

## Initialize TB-Science

```bash
harbor tasks init my-task \
  --include-canary-strings \
  --metadata-template task-template.toml \
  -p tasks/life-sciences/medicine/
```

## Baseline runs

```bash
harbor run -p tasks/my-task -a oracle
harbor run -p tasks/my-task -a nop
```

Science paths include domain and field. Exact CLI syntax may change; `harbor run --help` and the target repository’s current contribution guide win.

## Git preflight

```bash
git fetch upstream
git rebase upstream/main
git diff --check upstream/main...HEAD
git diff --stat upstream/main...HEAD
git status --short
```

## Container diagnostics

```bash
docker build --no-cache -t task-check ./tasks/my-task/environment
docker history --no-trunc task-check
docker run --rm --entrypoint /bin/sh task-check -lc 'id; find /app -maxdepth 3 -type f -print'
```

Do not run diagnostic commands that print secrets or private dataset contents into CI logs.

## Handbook

```bash
npm ci
npm run start
npm run build
npm run serve
```
