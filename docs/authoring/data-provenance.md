---
title: Data, licensing, and provenance
description: Create redistributable, reproducible inputs and defensible held-out evaluation data.
---

<div className="source-line"><strong>Applies to:</strong> all data-backed tasks · <strong>TB-Science:</strong> use <code>authoring/provenance/</code></div>

## Dataset record

Record source URL or persistent identifier, version/retrieval date, license, original and packaged size, checksums, filtering, transformations, train/test partitioning, and known limitations. “Publicly available” does not automatically mean redistributable.

For synthetic data, store the generator, dependency versions, seed strategy, parameter ranges, and validation checks. Explain why the generated distribution represents the target workflow and does not reveal a shortcut.

## Leakage audit

Check whether hidden labels can be reconstructed from filenames, row order, metadata, IDs, public repository history, generator seeds, or correlated fields. Check whether the exact task and answer are searchable. Neutralize accidental hints without stripping authentic information needed for the work.

## Train/test relationship

Any practice data must teach the contract without duplicating held-out answers. Splits should prevent entity, temporal, spatial, family, subject, or batch leakage as the science demands. Random row splits are often scientifically invalid.

## Provenance manifest example

```json
{
  "source": "https://example.org/dataset/v3",
  "license": "CC-BY-4.0",
  "retrieved": "2026-09-10",
  "sha256": "...",
  "generator_commit": "...",
  "seed": 4172,
  "transform": ["filter QC>=0.9", "convert units mol/L to mmol/L"]
}
```

## Sensitive and clinical data

Do not include protected health information or data whose consent/license excludes benchmark distribution. De-identification is a formal risk process, not simply deleting names. Prefer established public or rigorously synthetic datasets, and document residual privacy and representation limitations.
