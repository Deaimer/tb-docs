---
title: Engineer the verifier
description: Build a secure, complete, implementation-neutral decision procedure.
---

<div className="source-line"><strong>Authority:</strong> separate verifier contract and implementation rubrics · <strong>Highest-risk component</strong></div>

A verifier must reject wrong solutions, not only accept the reference solution.

## Layer the checks

1. **Input safety:** artifact exists, is a regular file, stays within size limits, and parses under bounded resources.
2. **Schema:** required fields, types, shapes, IDs, units, and cardinality.
3. **Domain invariants:** conservation, constraints, monotonicity, consistency, or other necessary properties.
4. **Core correctness:** compare against hidden cases, recompute results independently, or measure a justified objective.
5. **Performance/quality:** only after correctness; use documented thresholds and stable timing methodology.
6. **Reward emission:** always write the expected result/reward files, including controlled failures.

## Separate environment

Bake verifier code, private fixtures, and ground truth into `tests/Dockerfile`. Transfer only declared artifacts. Avoid reaching back into the agent container. Disable verifier networking unless the current platform contract explicitly requires it.

## Test semantics, not syntax

Accept all outputs allowed by the instruction. Normalize harmless differences such as row order only when order is unspecified. Reject semantic errors even if the file superficially resembles the Oracle’s output.

## Defensive parsing

Before computing metrics, reject duplicate identifiers, unknown identifiers, missing rows, NaN/Inf, unexpected dimensions, truncated data, unsafe archives, and unreasonably large strings or arrays. Put explicit time/memory bounds around parsers and subprocesses.

## Test isolation

Give each named requirement at least one discriminating test. An end-to-end metric can supplement but not replace isolated checks. Test every tolerance boundary on both sides.

## Required evidence set

- Oracle output passes.
- At least one alternate valid implementation passes.
- NOP, empty, malformed, and partial outputs fail.
- Plausible wrong methods fail.
- Gaming artifacts and symlinks fail safely.
- Repeat runs produce the same verdict.
- Removing or mutating each critical solution behavior causes failure.

If an incorrect solution passes, that is a blocking verifier defect even when every tested frontier agent currently fails the task.
