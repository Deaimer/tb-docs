---
title: Terminal-Bench-Science — Validation
sidebar_position: 4
---

# Terminal-Bench-Science — Scientific validation

## Evidence package

The reviewer should receive:

- dataset manifest and checksums;
- license and provenance notes;
- independent implementation or analytical check;
- sensitivity analysis for thresholds and tolerances;
- seeded reproducibility results;
- Oracle/NOP outputs;
- scientifically plausible negative controls;
- runtime and resource measurements;
- explanation of remaining uncertainty.

## Scientific controls

Use controls appropriate to the field. Examples include shuffled labels, null models, known standards, conserved mass/energy, synthetic recovery cases, dimensional analysis, permutation tests, calibration curves, or boundary-condition cases.

Test at least one wrong result that preserves superficial structure. A verifier must reject, for example, a correctly shaped matrix with incorrect orientation, a plausible curve with wrong units, or a statistically significant output generated from leaked labels.

## Repeatability

Run deterministic workflows at least twice from clean state. For stochastic workflows, fix and record seeds where appropriate, then also evaluate multiple seeds to show that the acceptance criterion is stable. Report distributions rather than a single favorable run.

## Domain review questions

- Is the workflow used or defensible in real research?
- Are assumptions scientifically explicit?
- Could a technically correct computation still yield an invalid interpretation?
- Are preprocessing choices and exclusions justified?
- Do tolerances correspond to scientific or numerical uncertainty?
- Is the verifier independent enough from the Oracle?
- Can a second expert reproduce the evidence?
