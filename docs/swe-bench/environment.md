---
title: SWE-bench — Environment and evaluation
sidebar_position: 4
---

# SWE-bench — Environment and evaluation

## Environment construction

Build from a deterministic base image appropriate to the repository. Install the system toolchain first, project dependencies second, and the project itself last to maximize cache clarity. Record architecture, operating system, language runtime, package manager, dependency sources, and environment variables.

Do not bake the gold patch into the image. Do not allow the candidate to modify the harness, log parser, test patch, or result collector. Network should be disabled during evaluation when dependencies are already available and the benchmark protocol permits it.

## Evaluation sequence

1. Create a clean container for the base commit.
2. Install dependencies and project.
3. Apply the candidate patch.
4. Apply the protected test patch in the required order.
5. Run the specified test command with a bounded timeout.
6. capture raw output and exit status.
7. parse complete test identifiers.
8. grade FAIL_TO_PASS and PASS_TO_PASS.
9. retain logs and structured result metadata.

## Failure classification

Distinguish patch-application failure, environment build failure, dependency failure, test collection failure, timeout, harness failure, and genuine test failure. Infrastructure errors must not be silently reported as an unresolved issue.

Protect against spoofed output: grading should rely on controlled files/processes and parser evidence, not arbitrary strings printed by candidate code.

## Reproducibility checks

Build twice without reusing the project workspace. Evaluate base and gold at least twice. Confirm locale, timezone, random seed, CPU architecture, and test ordering do not change the verdict. When flaky upstream tests exist, exclude them only with recorded evidence and a consistent policy.
