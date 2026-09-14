---
title: What makes a strong task
description: Practical acceptance bar for realism, difficulty, clarity, robustness, and evaluation.
---

<div className="source-line"><strong>Authority:</strong> upstream task/proposal rubrics · <strong>Deaimer gate:</strong> all criteria evidenced</div>

A strong task measures a capability that matters. It does not merely cause current agents to fail.

## Five acceptance questions

### 1. Is it authentic?

Identify a real role, input, workflow, and output. Explain who pays for the work and what decision depends on it. For science, connect it to a research practice used by the author’s lab or field.

### 2. Is it self-contained enough to solve?

An independent qualified expert must be able to infer every required behavior from the instruction and accessible environment. Hidden tests may hide cases or values; they may not hide the contract.

### 3. Is the difficulty meaningful?

Hardness should come from planning, exploration, domain reasoning, integration, debugging, scale, or performance—not unclear wording, missing packages, unavailable data, or a deliberately starved timeout.

### 4. Is success objectively observable?

List the output artifacts, invariants, tolerances, and unacceptable failure modes. If evaluation needs judgment, constrain it with a rubric whose dimensions are anchored and whose result is stable. Programmatic checks remain preferred where possible.

### 5. Will it remain valid?

Pin dependencies and inputs where appropriate, eliminate wall-clock sensitivity, control randomness, and test clean reruns. Network services and unversioned downloads turn a benchmark task into a monitoring problem.

## Evidence table

Before proposing, complete this internally:

| Claim | Required evidence |
|---|---|
| Real work | Job/workflow example, protocol, publication, or practitioner account |
| Solvable | Reference implementation or convincing construction path |
| Difficult | Decomposition plus observed frontier-agent failure modes |
| Verifiable | Explicit pass/fail conditions and negative examples |
| Robust | Clean reruns, pinned inputs, justified tolerances |
| Safe | No secrets, unsafe live actions, or exposed ground truth |

## Common rejection patterns

- A coding exercise wrapped in a domain story.
- Many arbitrary subrequirements added only to lower pass rate.
- Output is judged by exact bytes when many equivalent correct outputs exist.
- Tests only prove that a file exists or the Oracle’s exact implementation ran.
- The answer, fixtures, or scoring thresholds are readable in the agent container.
- A proposal claims complexity without estimating expert steps, time, and failure modes.
- The task depends on a public answer or tutorial that agents can retrieve directly.
