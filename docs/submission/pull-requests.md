---
title: Submit the pull request
description: Branch hygiene, PR evidence, upstream targeting, and review-ready packaging.
---

<div className="source-line"><strong>Authority:</strong> target repository contribution guide and PR template</div>

## Before opening the internal dataset PR

```bash
git fetch origin --prune
git rebase origin/reviewed
git status --short
git diff --check origin/reviewed...HEAD
git diff --stat origin/reviewed...HEAD
```

Run the live repository checks after rebasing. Re-run Oracle/NOP if the rebase changes Harbor config, templates, CI, or shared code.

## Scope

Prefer one task per PR. Do not include local jobs, caches, dataset downloads, generated output, credentials, or unrelated formatting. Large required assets must use the repository’s approved storage mechanism.

## PR body

Include:

- summary of the internal idea approval and any maintainer feedback;
- task summary and intended capability;
- taxonomy and author identity;
- exact validation commands and results;
- Oracle/NOP job evidence;
- alternate-positive and negative-control summary;
- resource/runtime measurements;
- dataset/provenance/license notes;
- known limitations or open questions.

The author must answer the PR template personally. For a new task, state whether maintainers were consulted, confirm `instruction.md` was human-written, name the strong model tested, and explain why it failed for the intended reason. For a task fix, describe exactly what changed and why.

## Commit quality

Keep commits reviewable: skeleton/data, environment, Oracle, verifier, evidence/documentation, and fixes are reasonable boundaries. Never rewrite public history after reviewers begin without explaining what changed and preserving traceability.

## Internal versus official submission

Authors submit to the private dataset's `reviewed` branch. They do not independently open an official Terminal-Bench PR. After internal approval, the owner decides whether and when a task is proposed or submitted upstream. If that happens, the official route is fork → task branch → PR to the official repository's current default branch, using the official human-written PR template.
