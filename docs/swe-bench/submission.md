---
title: SWE-bench — Review and submission
sidebar_position: 5
---

# SWE-bench — Review and submission

## Reviewer evidence table

| Claim | Required evidence |
|---|---|
| Base commit is correct | Commit metadata and clean checkout |
| Problem is reproducible | Base log showing genuine FAIL_TO_PASS failure |
| Gold resolves problem | Gold log showing FAIL_TO_PASS success |
| Regressions are controlled | PASS_TO_PASS succeeds in base and gold states |
| Patches are isolated | Path/stat review and clean apply checks |
| Environment is stable | Two clean builds and repeated evaluations |
| Parser is sound | Complete test-ID mapping and malformed-output tests |

## Adversarial review

Try an empty patch, test deletion, skip/xfail conversion, direct modification of expected outputs, log spoofing, broad exception swallowing, and partial implementation. The harness should reject all cases that do not genuinely resolve the issue.

## Internal submission

Place one instance or one tightly related batch in a pull request. Include structured records, patches, environment changes, raw validation logs or summaries, licensing notes, and a reviewer-readable rationale for each selected test.

Authors target `authors`. Reviewers document the state-transition evidence and promote accepted work to `reviewers`. Only the owner merges to `main` or exports instances into any external submission process.
