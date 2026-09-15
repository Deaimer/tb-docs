---
title: CI preflight
description: Turn upstream checks into a local release gate and diagnose failures by layer.
---

<div className="source-line"><strong>Authority:</strong> target repository workflows and check scripts · <strong>Rule:</strong> run the live commands</div>

Repository checks evolve. Inspect `.github/workflows/`, `scripts/checks/`, and contribution docs at your branch’s upstream base. Do not rely on a copied command months later.

## Preflight order

```bash
git fetch upstream
git diff --check upstream/main...HEAD
git status --short
```

Then run the repository’s current task checks against only your task, followed by the relevant full validation suite. Check canary coverage, metadata/schema, instruction suffix, Dockerfile safety, artifact declarations, README sections, naming/taxonomy, and generated task index behavior.

## Failure classification

| CI failure | First action |
|---|---|
| Schema/metadata | Compare with live template; remove unknown fields |
| Canary | Re-initialize/copy the current canary pattern; never invent a token |
| Docker build | Rebuild cold using the same context and architecture |
| Oracle | Inspect environment → solution → artifact transfer → verifier in order |
| NOP | Search for baked/stale output and weak tests |
| Rubric review | Map every finding to evidence or a concrete patch |
| Unrelated tasks | Rebase and verify your branch changed only intended paths |

## Evidence in the PR

Report exact commands, commit, result, and relevant job link. “Works locally” is not reproducible evidence. If a check is flaky, preserve logs from both outcomes and diagnose before requesting review.
