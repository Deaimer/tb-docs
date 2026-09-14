---
title: Owner-only main controls
sidebar_position: 4
---

# Owner-only main controls

The repository owner configures GitHub rulesets. These controls cannot be enforced by documentation or branch creation alone.

## main ruleset

Target `main` and enable:

- restrict updates;
- require a pull request;
- require at least one approval;
- dismiss stale approvals;
- require conversation resolution;
- require status checks: documentation build and GitHub Pages build;
- block force pushes;
- block deletions;
- allow bypass only for the repository owner.

Do not give author or reviewer teams bypass permission.

## reviewers ruleset

Require pull requests, one approval, resolved conversations, and the documentation build. Permit designated reviewers to merge. Block force pushes and deletions.

## authors ruleset

Require pull requests and the documentation build. Authors push only personal `author/*` branches. Permit designated maintainers to merge author PRs after review.

## Owner promotion commands

```bash
git fetch origin
git switch main
git pull --ff-only origin main
git switch -c owner/promote-reviewed-docs
git merge --no-ff origin/reviewers
npm ci
npm run typecheck
npm run build
git push -u origin owner/promote-reviewed-docs
```

Open the final pull request from `owner/promote-reviewed-docs` to `main`, inspect the complete diff, wait for required checks, and merge using the owner account.
