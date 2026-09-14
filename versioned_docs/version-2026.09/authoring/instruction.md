---
title: Write instruction.md
description: Specify an agent-visible contract that is complete, testable, and implementation-neutral.
---

<div className="source-line"><strong>Authority:</strong> current repository guides and CI · <strong>Audience:</strong> authors and contract reviewers</div>

`instruction.md` defines success. Hidden tests may conceal instances, but may not introduce new requirements.

## Required content

State:

- the goal and relevant operational/scientific context;
- accessible inputs with exact absolute paths, formats, units, coordinate systems, and missing-value conventions;
- required outputs with exact absolute paths and schemas;
- constraints, allowed assumptions, and performance requirements;
- how edge cases should be handled;
- what constitutes completion, without exposing hidden answers.

Use RFC-style words consistently: **must** for graded requirements, **should** for preferences, and **may** for optional behavior. Avoid mixing narrative suggestions with hard requirements.

## Implementation neutrality

Specify observable behavior, not the Oracle’s private implementation. “Fit a valid monotone calibration curve and emit calibrated values” allows equivalent methods; “call `scipy.optimize.curve_fit` with these arguments” only fits if that exact tool use is the capability under evaluation.

## Contract table

Maintain this during authoring:

| ID | Requirement | Output observation | Test case |
|---|---|---|---|
| R1 | Preserve every sample ID exactly once | output ID set and uniqueness | `test_id_coverage` |
| R2 | Respect monotonic calibration | ordered fitted response | `test_monotonicity` |
| R3 | Meet error threshold | hidden-set metric | `test_accuracy` |

Give named domain rules their own discriminating tests. A single end-to-end score can hide whether an individual requirement is enforced.

## Paths and timing

Use absolute paths such as `/app/output.json`. For regular Terminal-Bench, the pinned guide requires the instruction to end with the exact timeout sentence whose integer `N` matches `[agent].timeout_sec`:

```text
You have N seconds to complete this task. Do not cheat by using online solutions or hints specific to this task.
```

Copy the exact current wording from upstream before submission; CI enforces it and it may change.

## Final read

Give only the instruction and a clean environment to a qualified colleague. Record every question they must ask. If the answer affects correctness, add it to the contract. If it merely reveals a solution technique, keep it out.
