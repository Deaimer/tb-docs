---
title: Build the Oracle solution
description: A reference solution that proves solvability without constraining all valid approaches.
---

<div className="source-line"><strong>Authority:</strong> Harbor Oracle behavior and upstream implementation rubrics</div>

The Oracle is a constructive proof that the shipped task can be solved. It is not the specification and it is not sufficient evidence that the verifier is sound.

## Requirements

- Start from the same accessible inputs and environment as the agent.
- Produce only the documented artifacts at the documented paths.
- Complete within declared resources from clean state.
- Fail loudly on unmet assumptions rather than fabricating outputs.
- Avoid embedding expected answers when the intended work is to derive them.
- Leave no privileged intermediate in the agent image.

`solution/solve.sh` should be a robust entry point:

```bash
#!/usr/bin/env bash
set -euo pipefail

mkdir -p /app/output
python /solution/solve.py \
  --input /app/input/observations.parquet \
  --output /app/output/result.json
```

Quote variables, use absolute paths, and propagate nonzero exit status. If the solution launches background work, wait for it and verify completion.

## Independent corroboration

For numerical tasks, compare the Oracle to an independent implementation, analytic special cases, conserved quantities, or trusted reference results. Independence matters: two scripts importing the same buggy function are not corroboration.

## Avoid verifier coupling

The verifier should check task semantics, not Oracle fingerprints. It should not require the Oracle’s column order when the instruction permits any order, exact floating-point bytes when tolerance is appropriate, or a particular algorithm unless that algorithm is explicitly the task.

## Oracle failure triage

Classify failures before editing:

| Symptom | Likely layer |
|---|---|
| Build fails | environment/dependency |
| Output absent | solution path or crash |
| Artifact transfer misses file | `task.toml` path mismatch |
| Tests reject plausible result | contract/verifier mismatch |
| Intermittent score | nondeterminism or race |
