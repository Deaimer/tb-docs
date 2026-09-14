---
title: SWE-bench
sidebar_position: 1
description: Independent SWE-bench instance authoring and evaluation manual.
---

# SWE-bench

SWE-bench instances ask an agent to resolve a real repository issue at a fixed base commit. The evaluation applies the candidate patch in a reproducible environment and checks whether issue-specific failing tests become passing while established behavior remains intact.

## Unit of evaluation

A complete instance ties together:

- repository identifier;
- immutable base commit;
- issue/problem statement;
- gold patch;
- test patch;
- FAIL_TO_PASS tests;
- PASS_TO_PASS regression tests;
- environment setup and test command;
- version and metadata required by the harness.

The problem statement must describe the issue, not reveal the gold patch. The gold patch is evidence and reference material, not an agent-visible answer.

## Acceptance gates

1. The issue is actionable from the base commit.
2. The gold patch applies cleanly and resolves the issue.
3. At least one issue-specific test fails before and passes after the gold patch.
4. Regression tests pass both before and after.
5. The environment builds reproducibly.
6. Test identifiers are parsed correctly.
7. Candidate patches cannot spoof grader output or modify protected evaluation logic.
8. Licensing and redistribution of repository-derived material are reviewed.

SWE-bench is structurally different from both Terminal-Bench tracks. Do not package a SWE-bench instance as a Harbor task directory.
