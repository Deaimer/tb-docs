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
- README truthfully explains difficulty, solution, verification, and experience in the human author's own words.
- Slug has no more than three tokens; `[task].name` is `terminal-bench/<slug>`.
- `schema_version`, taxonomy, expert estimate, network mode, and fields match the current template/schema.

## Execution

- Agent and verifier images build without cache.
- Downloads are stable and checksummed.
- Randomness, services, permissions, and resources are controlled.
- Oracle returns `1.0` twice from clean jobs.
- NOP returns intentional `0.0` twice from clean jobs.
- Every repository static check and the implementation-rubric review passes or has an explicit maintainer disposition.

## Verifier and security

- An alternate valid solution passes.
- Malformed, partial, boundary, plausible-wrong, oversized, and filesystem-attack artifacts fail safely.
- Controlled failures still emit valid results.
- Agent cannot access solution, tests, ground truth, credentials, or privileged services.
- Agent-produced code executes unprivileged inside the verifier and cannot reach the root-only reward channel.
- Discrete tests emit `/logs/verifier/ctrf.json`; reward is binary on every scoreable path.
- Every do-not-modify constraint is enforced.
- Maintainer-triggered agent, cheat, and any required fortify trials are reviewed.
- Repeated verdicts agree.

## Submission

- Branch is `author/<user>/<slug>`.
- Diff contains one task and no secrets, caches, job outputs, or unrelated changes.
- Evidence matches the current commit.
- PR base is `reviewed`, never `main`.

If any result is unknown, the task is not complete.
