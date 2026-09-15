---
title: Maintain a merged task
description: Reproduce reports, patch regressions, preserve task meaning, and keep authorship obligations.
---

<div className="source-line"><strong>Authority:</strong> internal maintenance policy · <strong>Scope:</strong> accepted Terminal-Bench tasks</div>

## Reproduce first

Pin the reported task commit, Harbor version, agent, environment, and job evidence. Determine whether the report is a platform regression, dependency/data failure, verifier defect, ambiguous contract, or genuine agent behavior.

When an accepted task needs correction, open a narrowly scoped maintenance pull request against the private dataset repository. Include the failing command, the relevant run log, the observed result, the expected result, and an explanation of why the change does not weaken the task contract.

## Patch principles

- Preserve the intended capability and difficulty when possible.
- Add a regression test that fails before the fix and passes after.
- Re-run Oracle, NOP, negative controls, leakage scan, and affected agent trials.
- Update task and handbook changelogs when behavior changes.
- Disclose if a “fix” materially changes the benchmark item; it may require a new version rather than an in-place patch.

## Dependency health

Schedule periodic cold builds and link/data checks. Pin immutable artifacts, but also monitor security advisories and removed package indexes. A digest is reproducible, not automatically safe forever.

## Author availability

Maintain current contact information. If the original domain expert can no longer support the task, arrange a documented handoff to a qualified maintainer rather than leaving domain assumptions unowned.
