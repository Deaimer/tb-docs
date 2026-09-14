---
title: Artifact and verifier boundary
description: Declare outputs explicitly and keep verifier-only knowledge out of the agent environment.
---

<div className="source-line"><strong>Authority:</strong> Harbor separate verifier model and current benchmark templates</div>

The artifact list is the task’s data-plane contract. It determines what leaves the agent container and reaches the verifier.

```toml
artifacts = [
  "/root/results/predictions.parquet",
  "/root/results/report.json",
]
```

Use absolute paths. Declare every required output and no irrelevant workspace state. Keep the declaration before TOML tables when the template requires it.

## Boundary rules

- The instruction names the exact output path and schema.
- The agent can write the parent directory without elevated privileges.
- The verifier treats artifacts as hostile input: validate type, size, shape, encoding, and values before expensive work.
- Ground truth, hidden fixtures, and scoring code are baked only into the verifier image.
- The verifier does not depend on source files, logs, or undeclared state remaining in the agent container.
- Missing, malformed, oversized, NaN/Inf, duplicate, and extra-record cases fail cleanly.

## Symlink and path attacks

Do not accept an artifact merely because a path exists. Reject inappropriate file types and symlink tricks, canonicalize paths where necessary, and avoid following attacker-controlled links into verifier data. Run tests as an unprivileged user when the repository requires or supports it.

## Lifecycle tests

Test these cases explicitly:

| State | Expected behavior |
|---|---|
| Artifact absent | Deterministic failure with useful diagnostic |
| Empty artifact | Failure unless empty is a valid documented answer |
| Correct artifact | Pass |
| Stale correct file before run | Agent must recreate/own result; environment should not ship it |
| Directory/symlink at artifact path | Safe rejection |
| Huge or deeply nested payload | Resource-bounded rejection |
