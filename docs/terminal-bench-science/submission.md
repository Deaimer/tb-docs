---
title: Terminal-Bench-Science — Review and submission
sidebar_position: 5
---

# Terminal-Bench-Science — Review and submission

A science task cannot pass solely because the software runs. It needs two approvals: computational integrity and scientific validity.

## Author checklist

Confirm proposal identity, affiliation, contribution, dataset rights, and conflicts are accurate. Include the approved protocol, evidence package, provenance manifest, complete task directory, validation logs, and limitations.

## Reviewer checklist

Perform an independent scientific read before inspecting the Oracle. Reconstruct the intended workflow from the instruction and inputs. Then inspect implementation, verifier independence, controls, thresholds, and possible shortcuts.

Classify findings:

- **Scientific major:** invalid method, unsupported assumption, wrong units, wrong reference frame, inadequate ground truth, or misleading interpretation.
- **Computational major:** leakage, flaky build, unverifiable behavior, unsound artifact boundary, or incorrect container lifecycle.
- **Minor:** localized documentation or maintainability defect with no effect on acceptance.
- **Pass:** both scientific and computational contracts are defensible.

## Internal promotion

The author opens a PR to `authors`. A qualified science reviewer records a structured review. Accepted changes move to `reviewers`. Only the owner merges the final promotion PR to `main` and decides whether/when to submit externally.
