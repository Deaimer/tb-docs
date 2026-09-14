---
title: Terminal-Bench — Submission
sidebar_position: 4
---

# Terminal-Bench — Submission

## Internal package checklist

- Task directory contains only required source, fixtures, documentation, and verifier assets.
- Instruction, TOML, Dockerfiles, Oracle, and tests agree on paths and timeouts.
- Oracle reaches full reward from a clean state.
- NOP and at least three plausible wrong solutions receive zero reward.
- Alternate valid implementations are accepted.
- No solution or hidden ground truth is visible to the agent.
- Resource measurements and runtime evidence are recorded.
- The README explains difficulty, solution approach, verification strategy, and author relevance.
- Generated outputs, caches, job directories, credentials, and local editor files are absent.

## Commit and PR

```bash
git status --short
git diff --check
git add tasks/<task-name>
git commit -m "Add Terminal-Bench task: <task-name>"
git push -u origin author/<your-name>/<task-name>
```

Open the pull request against the internal `authors` branch. After author review, the reviewer promotes the accepted change through `reviewers`. Only the owner merges the final `reviewers` to `main` pull request.

The owner handles any external benchmark submission. Authors and reviewers should not independently submit internal material elsewhere.
