---
title: Science-specific authoring
description: Scientific authenticity, assumptions, evidence, uncertainty, and domain-expert accountability.
---

<div className="source-line"><strong>Track:</strong> Terminal-Bench-Science · <strong>Authority:</strong> proposal and implementation rubrics</div>

A science task must preserve the reasoning that makes the workflow scientific. Installing a scientific package or using a biomedical dataset is not sufficient.

## Scientific contract

State the physical/biological/statistical quantity being inferred, valid assumptions, units, coordinate conventions, uncertainty treatment, quality-control rules, and what claims the result supports. Identify non-identifiability, degenerate cases, and invalid regimes.

## Evaluation hierarchy

Prefer multiple independent forms of evidence:

1. Analytic or exactly solvable special cases.
2. Synthetic cases with known ground truth and realistic noise.
3. Independent implementation or trusted reference software.
4. Domain invariants and diagnostics.
5. Held-out real data with a scientifically justified target.

Do not grade only on agreement with one implementation when multiple scientifically valid answers exist.

## Threshold justification

Tie thresholds to measurement resolution, accepted domain criteria, downstream decision sensitivity, or empirical distributions from correct and incorrect methods. Store threshold sweeps or sensitivity analysis in `authoring/evidence/`.

## Author accountability

The named author should be able to defend the workflow, data, assumptions, evaluation, and difficulty. A collaborator’s credentials cannot substitute for participation. If medical doctors contribute, use their actual specialty and role, obtain their review of clinical validity, and list them as authors only with their informed agreement and substantive contribution.

## README questions reviewers need answered

- Why is this a real workflow and who runs it?
- What scientific judgment distinguishes a good result from a plausible wrong one?
- Which assumptions are encoded, and when do they fail?
- How was ground truth or reference evidence established?
- Why are tolerances and metrics scientifically appropriate?
- What should agent failure teach the benchmark community?

:::warning Clinical scope
A benchmark task must not imply that its output is safe for patient care. Keep evaluation in a research or simulated setting, state limitations, and avoid live clinical actions.
:::
