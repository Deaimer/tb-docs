---
title: FAQ
description: Short answers to common Terminal-Bench author and reviewer questions.
---

# Terminal-Bench: FAQ

## Where do task files go?

Only in the private `Deaimer/terminal-bench-dataset` repository. This `tb-docs` repository contains documentation.

## Which branch do authors use?

`author/<github-user>/<task-slug>`, created from current `reviewed`.

## Which branch does the PR target?

`reviewed`. Authors never target or push to `main`.

## Is Oracle pass enough?

No. You need repeated Oracle passes, repeated intentional NOP failures, alternate-valid acceptance, negative/mutation rejection, isolation, reproducibility, and agent-failure analysis.

## Must authors write anything themselves?

Yes. The official guide requires the author to write `instruction.md`, the four task-README explanations, and the task PR answers personally.

## What is the required task name?

The folder slug has at most three hyphen-separated tokens and `[task].name` is exactly `terminal-bench/<slug>`.

## Where do pytest dependencies go?

In `tests/Dockerfile`, pinned to the current repository-wide versions. Do not install verifier tooling or fetch external resources from `tests/test.sh`.

## What files reach the verifier?

Only top-level declared artifacts, files baked into the verifier image, and explicitly collected or persistent sidecar state. The verifier does not inherit the agent container.

## Can hidden tests enforce hidden requirements?

No. Hidden values and cases are allowed; hidden behavioral requirements are not.

## Can internet be disabled to increase difficulty?

No. Difficulty must come from the work itself.

## Can one branch contain several tasks?

No, unless the owner explicitly authorizes a batch. Default is one task, one branch, one PR.

## When is a task part of the dataset?

Only after a reviewer merges it into `reviewed` and the owner later promotes it into `main`.
