---
title: Ground-truth protection review
description: Inspect images, files, services, paths, history, and scoring design for answer leakage.
---

<div className="source-line"><strong>Threat model:</strong> agent fully inspects accessible container and network state</div>

## Inventory first

List image files, package contents, environment variables, mounted volumes, running services, open ports, repository metadata, caches, logs, and shell histories. Inspect the built image, because multi-stage copies and package artifacts can differ from the Dockerfile’s apparent intent.

## Search classes

- Expected outputs and distinctive numeric values.
- Names like `gold`, `answer`, `expected`, `hidden`, `oracle`, and `solution`.
- Verifier modules or compiled artifacts that expose test logic.
- Seeds plus generators sufficient to reconstruct held-out data.
- Credentials and private endpoints.
- Git objects or deleted files retained in build context.

## Indirect leakage

Filenames, row order, data partition keys, missingness patterns, image dimensions, timestamps, and compression size may correlate with labels. Run simple shortcut baselines against metadata-only features. If they score near the pass threshold, redesign the data or metric.

## Network review

Map which services each container can reach. The agent should not access verifier or database internals. Terminal-Bench is explicitly open internet, but that does not make credentials or task-specific answers acceptable.

## Acceptance evidence

Record commands and results of the inventory and searches, plus attacks attempted. “I did not notice a leak” is not sufficient.
