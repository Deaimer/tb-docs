---
title: Task anatomy
description: The four-part task contract and how information moves across containers.
---

<div className="source-line"><strong>Authority:</strong> Harbor task format and benchmark templates · <strong>Verified:</strong> 2026-09-13</div>

## The four components

| Component | Purpose | Must not contain |
|---|---|---|
| `instruction.md` | Public contract presented to the agent | Hidden expectations or references to inaccessible files |
| `environment/` | Reproducible workspace and dependencies | Oracle, answer keys, test secrets, privileged fixtures |
| `solution/` | Reference path used by the Oracle agent | Assumptions not supported by instruction/environment |
| `tests/` | Independent decision procedure | Agent-readable ground truth or implementation-coupled checks |

`task.toml` connects these pieces: metadata, timeouts, compute, networking, artifact paths, and verifier mode. Reviewer-facing documentation explains intent and evidence.

## State transitions

1. Harbor builds the environment.
2. An agent receives the instruction and works inside the agent container.
3. Declared artifacts are exported from exact absolute paths.
4. In separate-verifier mode, a fresh verifier container receives only declared artifacts plus material baked into `tests/Dockerfile`.
5. `tests/test.sh` runs and emits the expected reward/result files.

This boundary is intentional. If tests read arbitrary agent-container state, the verifier may accidentally reward undeclared files or expose secrets.

## Coherence invariant

For every requirement, trace one row:

| Requirement | Agent input | Produced artifact | Verification observation | Oracle action |
|---|---|---|---|---|
| Example: ranked variants | assay CSV | `/root/results/ranking.csv` | IDs complete; order; score tolerance | fits model and writes CSV |

A missing cell exposes a defect: unprovided input, unspecified output, untested rule, or an Oracle behavior the contract never requested.

## Clean-state principle

Treat every build and run as if no prior output exists. Tasks must not pass because an artifact was left in the image, a cache contains the answer, or a previous run modified a mounted directory. Include lifecycle tests for missing output, pre-existing wrong output, rerun overwrite behavior, and permission boundaries.
