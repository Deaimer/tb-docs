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

## Can hidden tests enforce hidden requirements?

No. Hidden values and cases are allowed; hidden behavioral requirements are not.

## Can internet be disabled to increase difficulty?

No. Difficulty must come from the work itself.

## Can one branch contain several tasks?

No, unless the owner explicitly authorizes a batch. Default is one task, one branch, one PR.

## When is a task part of the dataset?

Only after a reviewer merges it into `reviewed` and the owner later promotes it into `main`.
