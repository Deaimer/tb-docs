---
title: Terminal-Bench — Verification
sidebar_position: 3
---

# Terminal-Bench — Verification and review

## Required validation matrix

| Run | Expected result | What it proves |
|---|---|---|
| Oracle | Full reward | The task is solvable and the contract matches the reference implementation |
| NOP | Zero reward | Doing nothing cannot pass |
| Empty artifact | Zero reward without verifier crash | Missing work is rejected safely |
| Malformed artifact | Zero reward without verifier crash | Parsing is defensive |
| Plausible wrong result | Zero reward | The verifier distinguishes correctness from formatting |
| Alternate correct result | Full reward | The verifier does not overfit Oracle bytes |
| Repeated clean Oracle | Same result | Build and evaluation are deterministic |

Typical commands:

```bash
harbor run -p tasks/<task-name> -a oracle
harbor run -p tasks/<task-name> -a nop
harbor tasks start-env -p tasks/<task-name> -e docker -a -i
```

## Contract review

Create a requirement-to-test table. Every “must,” output field, invariant, threshold, and side effect needs a named test. Conversely, every test-enforced constraint must be disclosed in the instruction unless it is a benchmark-integrity measure.

Review paths, units, sorting, precision, timestamp assumptions, locale, random seeds, and lifecycle behavior. Test both a fresh run and a run where stale output already exists.

## Shortcut review

Inspect the image and filesystem as the agent would. Search for oracle strings, answer hashes, expected outputs, fixture names, backups, package caches, Docker layers, build arguments, and writable verifier surfaces. Confirm symlinks cannot escape the artifact boundary.

A verifier is too loose if it only checks that a file exists, parses, has the correct number of rows, or matches one aggregate statistic when the instruction requires richer behavior.

## Reliability review

Rebuild without cache. Run with declared CPU, memory, disk, and timeout limits. Eliminate live dependencies when a stable fixture can represent the workflow. If network activity is intrinsic, validate failure handling and avoid relying on a mutable response for ground truth.

## Reviewer verdict

- **Pass:** contract, environment, Oracle, verifier, and evidence are coherent.
- **Minor:** localized issue that does not permit an incorrect solution or reject a correct one.
- **Major:** material ambiguity, missing test, leakage, unsound verifier, irreproducibility, or invalid difficulty.
- **Block:** unsafe content, unavailable data, licensing problem, fabricated evidence, or task cannot be independently reproduced.
