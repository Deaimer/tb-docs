---
title: Finding severity
description: Classify review findings consistently and give authors testable acceptance conditions.
---

<div className="source-line"><strong>Deaimer convention:</strong> Blocker · Major · Minor · Note</div>

| Severity | Meaning | Examples |
|---|---|---|
| **Blocker** | Score cannot be trusted, task is unsafe, or upstream contract is violated | wrong solution passes; answer leak; impossible instruction; restricted data; Oracle cannot pass cleanly |
| **Major** | Material validity, reliability, or maintainability risk requiring change | untested required behavior; unjustified science threshold; flaky external dependency; severe ambiguity |
| **Minor** | Localized issue that does not presently invalidate the score | confusing diagnostic; weak documentation; small portability concern |
| **Note** | Optional improvement or question | naming, style, future optimization |

Severity depends on impact, not edit size. A one-character path mismatch can be a blocker; a large refactor suggestion can be a note.

## Finding format

Every blocker or major finding should include:

1. **Claim:** precise behavior that is wrong.
2. **Evidence:** file/command/input and observed result.
3. **Impact:** how benchmark validity, safety, or reliability changes.
4. **Acceptance condition:** observable result that would close it.

Example: “A schema-valid constant prediction passes `test_accuracy` (reproduction attached), so the verifier does not establish model use. Require failure of the constant and practice-copy controls while preserving the alternate valid solution.”

Do not inflate severity to accelerate preferences. Conversely, do not downgrade a scoring defect because current agents did not exploit it.
