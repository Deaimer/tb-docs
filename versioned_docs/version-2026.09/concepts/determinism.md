---
title: Determinism and tolerance
description: Make repeated valid runs receive stable verdicts without overfitting to exact bytes.
---

<div className="source-line"><strong>Applies to:</strong> environments, solutions, tests, scientific computation</div>

Determinism means materially equivalent executions receive the same evaluation. It does not require every floating-point byte to be identical.

## Control what can be controlled

- Pin packages, base image digests, and downloadable data.
- Seed pseudo-random generators across all libraries and subprocesses.
- Sort filesystem enumeration and unordered outputs before comparison.
- Avoid current dates, external mutable APIs, locale-dependent parsing, and timing races.
- Bound parallelism when reduction order materially changes numeric results.
- Write outputs atomically and overwrite stale files.

## Choose tolerances scientifically

Use `abs(actual - expected) <= atol + rtol * abs(expected)` when appropriate. Derive `atol` from measurement resolution or irreducible numerical error and `rtol` from scale-dependent variation. Test the tolerance against:

1. repeated correct runs across supported hardware;
2. an independent implementation;
3. plausible near-miss and wrong-method outputs;
4. boundary values immediately inside and outside acceptance.

A tolerance wide enough to accept a scientifically wrong result is not robust. A tolerance narrower than ordinary numerical variation is not rigorous.

## Stochastic workflows

Prefer evaluating stable properties: held-out performance, calibrated uncertainty, constraint satisfaction, or distributions over repeated seeded trials. If one random seed determines the verdict, document why it is representative and prove it does not create a lucky shortcut.

## Repetition gate

Run the Oracle and key negative controls at least three times from clean state. Compare reward, output schema, metrics, runtime, and artifact hashes where byte stability is expected. Investigate any verdict change before agent trials.
