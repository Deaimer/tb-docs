---
title: SWE-bench — Instance schema
sidebar_position: 2
---

# SWE-bench — Instance schema

A typical structured record contains the following concepts. Use the exact schema required by the local collection pipeline.

| Field | Meaning | Integrity rule |
|---|---|---|
| `instance_id` | Stable identifier, commonly repository plus issue/PR number | Unique and deterministic |
| `repo` | Source repository | Must match the cloned project |
| `base_commit` | Code state presented to the agent | Immutable full commit SHA |
| `problem_statement` | Issue text given to the agent | No gold-patch leakage |
| `patch` | Gold implementation diff | Applies to base commit |
| `test_patch` | Tests defining issue behavior | Kept separate from candidate patch |
| `FAIL_TO_PASS` | Tests failing at base and passing after fix | Each ID verified independently |
| `PASS_TO_PASS` | Stable regression tests | Pass before and after gold patch |
| `version` | Project/environment version classification | Derived consistently |
| environment metadata | Install and execution details | Rebuildable without hidden workstation state |

## State transitions

For each instance, prove four states:

1. **Base + tests:** FAIL_TO_PASS fails; PASS_TO_PASS passes.
2. **Gold + tests:** both groups pass.
3. **Empty candidate:** does not count as resolved.
4. **Known wrong candidate:** still fails issue-specific tests.

Do not infer success from process exit alone. Parse test outcomes and map them to complete identifiers. Treat skipped, xfailed, errored, timed-out, and missing tests according to an explicit policy.

## Patch hygiene

Normalize patches, reject binary or unrelated changes unless supported, and confirm application from a clean checkout. The gold patch should contain the minimal relevant implementation; the test patch should contain evaluation tests and fixtures. Detect accidental overlap between them.
