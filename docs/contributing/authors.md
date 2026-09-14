---
title: Commands for authors
sidebar_position: 2
---

# Commands for authors

## First-time setup

```bash
git clone https://github.com/Deaimer/benches.git
cd benches
git remote -v
git fetch origin
```

## Start work

```bash
git switch authors
git pull --ff-only origin authors
git switch -c author/<your-name>/<short-topic>
```

Edit only the relevant benchmark directory. Do not mix Terminal-Bench, Terminal-Bench-Science, and SWE-bench changes in one pull request.

## Validate documentation

```bash
npm ci
npm run typecheck
npm run build
git diff --check
git status --short
```

## Commit and push

```bash
git add docs/
git commit -m "docs(<benchmark>): describe <topic>"
git push -u origin author/<your-name>/<short-topic>
```

Open a pull request with base branch `authors`. Include the benchmark, changed rules, validation commands, source verification date, and any uncertainty. Do not target `main`.
