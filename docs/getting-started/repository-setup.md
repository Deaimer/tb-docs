---
title: Private repository setup
description: Authenticate, clone, configure, and branch correctly in the Terminal-Bench dataset.
---

# Terminal-Bench: Private repository setup

The documentation website is `Deaimer/tb-docs`. Actual tasks belong only in the private `Deaimer/terminal-bench-dataset` repository.

## Authenticate and clone

```bash
gh auth login
gh auth status
mkdir -p ~/work
cd ~/work
gh repo clone Deaimer/terminal-bench-dataset
cd terminal-bench-dataset
git remote -v
```

Choose GitHub.com, HTTPS, and browser authentication. Never paste a token into a task file, commit, issue, PR, or chat. Both Git remotes must point to the private dataset.

## Configure identity

```bash
git config user.name "YOUR FULL NAME"
git config user.email "YOUR WORK EMAIL"
git config pull.ff only
git config fetch.prune true
```

## Branch meanings

- `main`: released production dataset; only Shahzaib merges here.
- `reviewed`: reviewer-controlled staging; authors target PRs here.
- `author/<github-user>/<task-slug>`: one author, one task.
- `review/<github-user>/<topic>`: reviewer repair or audit branch.

```bash
git fetch origin --prune
git branch -r
```

If `origin/reviewed` is missing, stop and notify the owner. Do not substitute `main`.

## Owner-only first-time bootstrap

The owner performs this once after creating the private repository:

```bash
git switch main
git pull --ff-only origin main
git switch -c reviewed
git push -u origin reviewed
```

Before inviting authors, the owner must also synchronize the official `docs/task-template.toml`, `docs/TAXONOMY.md`, `docs/prompts/`, and `scripts/checks/` scaffold into the private repository. Without those files, the documented initializer and local validation commands cannot work.

Repository rules should block direct pushes to `main` and `reviewed`, require pull requests and required CI checks, require owner/code-owner approval for `main`, prevent authors from approving their own changes, and restrict force pushes and deletion. Contributors receive only the minimum access needed to push personal branches.
