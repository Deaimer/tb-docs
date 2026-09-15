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
6. **Reporting:** discrete checks emit CTRF; ordinary wrong answers emit binary reward `0`; correct answers emit `1`; infrastructure/capture failure remains an error rather than being laundered into a score.

## Separate environment

Bake verifier code, private fixtures, ground truth, `pytest==9.1.1`, and `pytest-json-ctrf==0.5.2` into `tests/Dockerfile`. The image must `COPY` the tests into `/tests/` and pre-create the parent of every declared artifact. Transfer only declared artifacts. `test.sh` must not download verifier tooling or fetch external trial-time resources.

```dockerfile
FROM python:3.13-slim-bookworm
RUN pip install --no-cache-dir pytest==9.1.1 pytest-json-ctrf==0.5.2
WORKDIR /tests
COPY . /tests/
RUN mkdir -p /app
```

## Safe reward and CTRF pattern

Before executing any untrusted agent code, root makes `/logs/verifier` mode `700`. Run the untrusted program or pytest process as an unprivileged account, capture its exit code/output in root-controlled logic, terminate its process group, and let the root wrapper write `/logs/verifier/reward.txt`. Every reachable score is exactly `0` or `1`; continuous diagnostics belong in CTRF or stdout.

Pytest suites write per-test evidence to `/logs/verifier/ctrf.json`. If pytest itself runs unprivileged, write CTRF to an accessible temporary path and let the trusted root wrapper copy it into the root-only log directory afterward.

## Test semantics, not syntax

Accept all outputs allowed by the instruction. Normalize harmless differences such as row order only when order is unspecified. Reject semantic errors even if the file superficially resembles the Oracle’s output.

## Defensive parsing

Before computing metrics, reject duplicate identifiers, unknown identifiers, missing rows, NaN/Inf, unexpected dimensions, truncated data, unsafe archives, symlinks/special files where inappropriate, and unreasonably large strings or arrays. Put explicit time/memory bounds around parsers and subprocesses.

When the instruction says a concrete file, table, declaration, service, or history element must remain unchanged, create a checksum, pristine-copy, or semantic check that makes a violating shortcut fail. A written prohibition without enforcement is a verifier defect.

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
