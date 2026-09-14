---
title: Negative and mutation testing
description: Prove that the verifier rejects realistic wrong solutions and depends on every critical behavior.
---

<div className="source-line"><strong>Deaimer release gate:</strong> named negative controls for every critical rule</div>

Build a small corpus of artifacts, not just one empty file.

## Negative control classes

- Correct schema, wrong scientific/operational result.
- Right average metric, catastrophic failure on a protected subgroup or edge case.
- Partial output with missing or duplicated identifiers.
- Output copied from practice data.
- Correct values in wrong units or coordinate system.
- NaN/Inf, extreme values, malformed encodings, and oversized payloads.
- Output produced by a tempting but invalid shortcut.
- Oracle output with one critical property deliberately corrupted.

## Mutation testing

Mutate the Oracle or its output one behavior at a time: skip normalization, reverse ordering, drop validation, use training labels, change a unit conversion, or disable a constraint. Each relevant mutation should cause a specific verifier failure.

If a critical mutation still passes, either the behavior is not truly required or the verifier is incomplete. Fix the instruction or the test; do not preserve a fake requirement.

## Boundary tests

For every numeric threshold, generate cases just inside, exactly at, and just outside the boundary. Define inclusivity explicitly. Use values far enough apart to avoid accidental floating-point representation disputes.

## Store the evidence

Keep test generators and expected verdicts reviewer-side. TB-Science tasks should place independent validation programs and threshold studies under `authoring/evidence/`, not in agent-visible paths.
