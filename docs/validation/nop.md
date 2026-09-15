---
title: Run and interpret NOP
description: Exact no-operation baseline command, required failure, and shortcut diagnosis.
---

# Terminal-Bench: Run the NOP

NOP is a no-operation agent. It performs no task work and tests whether untouched state, stale output, or weak verification can earn credit.

```bash
harbor run -p tasks/example-task -a nop
```

Run NOP in a new Harbor job, never inside an Oracle-modified container.

## Required outcome

NOP must reach the verifier normally and receive reward `0.0`. A build crash, missing reward, artifact-transfer failure, or verifier exception is not a valid NOP failure.

## If NOP receives 1.0

Submission is blocked. Look for a correct output baked into the environment, stale local output copied into the image, file-existence-only tests, skipped assertions, default application behavior, inverted scoring, persistent sidecar state, or tests that never executed.

## Limits

NOP only proves that doing nothing fails. It does not prove partial, malformed, duplicated, subtly wrong, or adversarial outputs fail. Run the complete verifier fixture matrix afterward.

Repeat NOP from another clean job. Both runs must produce intentional reward `0.0`.
