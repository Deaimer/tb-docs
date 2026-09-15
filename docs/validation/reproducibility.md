---
title: Reproducibility protocol
description: Verify clean builds, stable outputs, robust scoring, and portable resource behavior.
---

<div className="source-line"><strong>Deaimer standard:</strong> reproducibility report attached to internal review</div>

## Minimum matrix

Run at least three clean Oracle executions, three verifier evaluations of key controls, and one cold container build. Where the task is hardware-sensitive, include each supported class.

Record:

| Dimension | Evidence |
|---|---|
| Source | task commit and dirty-tree status |
| Runtime | Harbor, Docker, OS/architecture |
| Images | base digest and built image identifier |
| Data | checksums and generation seed |
| Resources | CPU/GPU, memory peak, storage, wall time |
| Outputs | schema, metrics, hashes when expected stable |
| Verdict | reward and per-test results |

## Diagnose variability

Separate harmless byte differences from semantic drift. Compare sorted structured records and metrics, then trace variability to seeds, concurrency, library kernels, unordered iteration, current time, or external state.

## Cold-build test

Ensure dependencies can be reconstructed from declared inputs. A warm local cache can hide deleted package versions, unpinned Git branches, and missing copied files. Keep a reproducible fallback for external data consistent with licensing.

## Runtime margin

Set timeouts above measured upper-tail runtime, not equal to your fastest run. Do not inflate them indefinitely; a verifier should reject malicious or accidental runaway work within a controlled bound.
