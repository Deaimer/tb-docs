---
title: Direct verifier testing
description: Positive, negative, boundary, and adversarial artifacts required for verifier soundness.
---

# Terminal-Bench: Test the verifier directly

Build fixtures that exercise the real verifier without repeatedly running an AI agent.

| Fixture | Expected |
|---|---|
| Oracle output | Pass |
| Independently produced valid output | Pass |
| Missing or empty artifact | Fail safely |
| Invalid syntax/encoding | Fail safely |
| Missing field or row | Fail |
| Duplicate/unknown identifier | Fail |
| NaN, Inf, extreme number | Fail |
| Just inside tolerance | Pass |
| Just outside tolerance | Fail |
| Plausible wrong algorithm | Fail |
| Symlink or special file | Fail safely |
| Oversized payload | Reject before expensive parsing |

Use the repository’s verifier harness so artifact placement matches Harbor. Each named instruction rule needs a case where that rule is the only discriminating difference.

If an alternate valid output fails, remove Oracle-specific overconstraint. If a wrong output passes, add an independent semantic test. Any crash or missing result is a verifier defect, not an acceptable failure.
