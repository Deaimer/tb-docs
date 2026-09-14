---
title: Maintain a merged task
description: Reproduce reports, patch regressions, preserve task meaning, and keep authorship obligations.
---

<div className="source-line"><strong>Authority:</strong> upstream maintenance routes · <strong>TB-Science:</strong> authors remain reachable through release</div>

## Reproduce first

Pin the reported task commit, Harbor version, agent, environment, and job evidence. Determine whether the report is a platform regression, dependency/data failure, verifier defect, ambiguous contract, or genuine agent behavior.

TB-Science currently provides a structured task-fix issue route for any merged 0.1 task; follow the live repository template and include Harbor Hub or local run evidence.

## Patch principles

- Preserve the intended capability and difficulty when possible.
- Add a regression test that fails before the fix and passes after.
- Re-run Oracle, NOP, negative controls, leakage scan, and affected agent trials.
- Update task and handbook changelogs when behavior changes.
- Disclose if a “fix” materially changes the benchmark item; it may require a new version rather than an in-place patch.

## Dependency health

Schedule periodic cold builds and link/data checks. Pin immutable artifacts, but also monitor security advisories and removed package indexes. A digest is reproducible, not automatically safe forever.

## Author availability

Maintain current contact information. If the original domain expert can no longer support the task, arrange a documented handoff to a qualified maintainer rather than leaving scientific assumptions unowned.
