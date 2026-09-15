---
title: Private dataset branch workflow
description: Exact repository, branches, push destination, reviewer staging, and owner-only production promotion.
---

# Terminal-Bench: Private dataset branch workflow

Tasks are pushed to `Deaimer/terminal-bench-dataset`, not the documentation repository.

| Branch | Purpose | Who merges |
|---|---|---|
| `main` | Released production dataset | Shahzaib only |
| `reviewed` | Reviewer-approved staging | Authorized reviewers |
| `author/<user>/<slug>` | One task submission | Named author pushes |
| `review/<user>/<topic>` | Reviewer repair/audit | Named reviewer pushes |

## Author start

```bash
gh repo clone Deaimer/terminal-bench-dataset
cd terminal-bench-dataset
git fetch origin --prune
git switch reviewed
git pull --ff-only origin reviewed
git switch -c author/YOUR_GITHUB_USERNAME/example-task
```

## Author push

```bash
git status --short
git diff --check
git add tasks/example-task
git commit -m "Add example-task"
git push -u origin author/YOUR_GITHUB_USERNAME/example-task
gh pr create \
  --base reviewed \
  --head author/YOUR_GITHUB_USERNAME/example-task \
  --title "Add example-task" \
  --fill
```

Authors never push to `reviewed` or `main`, and never merge their own task PR.

## Updating an open PR

```bash
git fetch origin --prune
git rebase origin/reviewed
git push --force-with-lease
```

Use `--force-with-lease` only on your personal branch. Reviewers merge accepted tasks into `reviewed`. Only the owner creates and merges final promotion PRs from reviewed work into `main`.
