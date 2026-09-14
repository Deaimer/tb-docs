---
title: Commands for reviewers
sidebar_position: 3
---

# Commands for reviewers

## Review an author branch locally

```bash
git fetch origin
git switch authors
git pull --ff-only origin authors
git switch -c review/<your-name>/<topic>
git diff --stat origin/authors...origin/author/<author-name>/<topic>
git diff origin/authors...origin/author/<author-name>/<topic>
```

To test the author's exact branch:

```bash
git switch --detach origin/author/<author-name>/<topic>
npm ci
npm run typecheck
npm run build
```

Return to the review branch before editing:

```bash
git switch review/<your-name>/<topic>
```

## Prepare a reviewed change

After the author PR is accepted into `authors`, update from that branch:

```bash
git fetch origin
git switch review/<your-name>/<topic>
git rebase origin/authors
# Add review corrections or clarifications
npm run typecheck
npm run build
git add docs/
git commit -m "review(<benchmark>): approve <topic>"
git push -u origin review/<your-name>/<topic>
```

Open a pull request with base branch `reviewers`. Record accuracy findings, broken-link/build status, benchmark separation, and unresolved questions. Reviewers must not merge into `main`.
