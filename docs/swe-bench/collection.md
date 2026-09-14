---
title: SWE-bench — Collection and authoring
sidebar_position: 3
---

# SWE-bench — Collection and authoring

## Candidate selection

Choose a resolved issue/PR pair with a clear behavioral requirement and an executable test story. Exclude documentation-only changes, dependency-only updates, changes requiring unavailable private services, and issues whose resolution cannot be isolated.

Confirm the issue predates or corresponds to the resolving patch. Remove comments or metadata that directly reveal implementation details only according to the collection policy; never rewrite the technical requirement to make it artificially harder.

## Reconstruct the base state

Clone the repository, check out the exact base commit, initialize required submodules, and record toolchain versions. Apply the test patch without the gold implementation, then execute the target tests.

```bash
git clone <repository-url> workspace
cd workspace
git checkout --detach <base-commit>
git status --short
git apply --check ../test.patch
git apply ../test.patch
```

Capture the failing test identifiers and failure modes. A setup error, import error caused by missing dependencies, network failure, or timeout is not valid FAIL_TO_PASS evidence.

## Derive patches

Generate the implementation diff relative to the base commit and the test diff separately. Strip unrelated formatting, lockfile churn, generated assets, and maintainer metadata unless they are necessary to reproduce behavior.

```bash
git diff --binary <base-commit>..<resolved-commit> -- <implementation-paths> > gold.patch
git diff --binary <base-commit>..<resolved-commit> -- <test-paths> > test.patch
git apply --check gold.patch
git apply --check test.patch
```

## Curate test sets

FAIL_TO_PASS should be narrow enough to represent the issue and complete enough to reject partial fixes. PASS_TO_PASS should cover nearby functionality most likely to regress. Verify exact test IDs against real harness output; truncated or ambiguous identifiers weaken grading.

## Record evidence

Store base/gold test logs, environment manifest, patch hashes, test-ID derivation, exclusion rationale, runtime, and any parser normalization required by the project.
