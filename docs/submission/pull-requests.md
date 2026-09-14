---
title: Submit the pull request
description: Branch hygiene, PR evidence, upstream targeting, and review-ready packaging.
---

<div className="source-line"><strong>Authority:</strong> target repository contribution guide and PR template</div>

## Before opening

```bash
git fetch upstream
git rebase upstream/main
git status --short
git diff --check upstream/main...HEAD
git diff --stat upstream/main...HEAD
```

Run the live repository checks after rebasing. Re-run Oracle/NOP if the rebase changes Harbor config, templates, CI, or shared code.

## Scope

Prefer one task per PR. Do not include local jobs, caches, dataset downloads, generated output, credentials, or unrelated formatting. Large required assets must use the repository’s approved storage mechanism.

## PR body

Include:

- approved proposal/discussion link where applicable;
- task summary and intended capability;
- taxonomy and author identity;
- exact validation commands and results;
- Oracle/NOP job evidence;
- alternate-positive and negative-control summary;
- resource/runtime measurements;
- dataset/provenance/license notes;
- known limitations or open questions.

Use the repository’s current template as authoritative. Do not delete prompts simply because they repeat README content.

## Commit quality

Keep commits reviewable: skeleton/data, environment, Oracle, verifier, evidence/documentation, and fixes are reasonable boundaries. Never rewrite public history after reviewers begin without explaining what changed and preserving traceability.

## Fork synchronization

Target the correct upstream base branch. Ensure CI has permission to run safely on fork code. Do not place secrets into workflows triggered from untrusted forks.
