---
title: Oracle and NOP gates
description: Establish solvability and reject the empty baseline without confusing either result for full validation.
---

<div className="source-line"><strong>Gate:</strong> Oracle passes · NOP fails · both from clean independent runs</div>

## Oracle gate

The Oracle demonstrates that one implementation can satisfy the shipped contract under declared constraints. Inspect whether it uses only permitted inputs and whether its success is robust across repeated clean runs.

An Oracle pass does **not** prove:

- all instruction requirements are tested;
- alternative valid solutions pass;
- plausible incorrect solutions fail;
- ground truth is protected;
- the task is difficult for the intended reason.

## NOP gate

The NOP agent does nothing. It must fail. If it passes, look for baked outputs, permissive “file exists” checks, stale mounted state, default application behavior, or missing reward propagation.

NOP failure is necessary but weak. A verifier can reject emptiness while accepting many sophisticated wrong answers.

## Debug matrix

| Oracle | NOP | Interpretation |
|---|---|---|
| Pass | Fail | Continue to negative and alternate-positive tests |
| Pass | Pass | Blocking verifier/environment shortcut |
| Fail | Fail | Task may be broken; inspect earliest Oracle failure |
| Fail | Pass | Severe state or scoring inversion defect |

Run each in an independent job. Never reuse an Oracle-modified container for the NOP baseline.
