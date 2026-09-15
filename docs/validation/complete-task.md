---
title: Definition of a complete task
description: Exact author exit gate before pushing a Terminal-Bench task for review.
---

# Terminal-Bench: Definition of a complete task

A task is complete only when every item is true. Oracle `1.0` and NOP `0.0` are necessary but not sufficient.

## Contract and package

- Instruction defines all paths, schemas, units, constraints, alternatives, and timeout.
- Every enforced rule is public; every material public rule is tested.
- Current template, taxonomy, metadata, and canaries are used.
- Artifacts match across instruction, TOML, Oracle, and verifier.
- README truthfully explains difficulty, solution, verification, and experience.

## Execution

- Agent and verifier images build without cache.
- Downloads are stable and checksummed.
- Randomness, services, permissions, and resources are controlled.
- Oracle returns `1.0` twice from clean jobs.
- NOP returns intentional `0.0` twice from clean jobs.

## Verifier and security

- An alternate valid solution passes.
- Malformed, partial, boundary, plausible-wrong, oversized, and filesystem-attack artifacts fail safely.
- Controlled failures still emit valid results.
- Agent cannot access solution, tests, ground truth, credentials, or privileged services.
- Repeated verdicts agree.

## Submission

- Branch is `author/<user>/<slug>`.
- Diff contains one task and no secrets, caches, job outputs, or unrelated changes.
- Evidence matches the current commit.
- PR base is `reviewed`, never `main`.

If any result is unknown, the task is not complete.
