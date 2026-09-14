---
title: Terminal-Bench-Science — Authoring
sidebar_position: 3
---

# Terminal-Bench-Science — Authoring

## Freeze the scientific contract

Write a protocol that defines the scientific question, admissible methods, input assumptions, required outputs, units, coordinate systems, reference frames, tolerances, and failure states. Have the domain expert approve this protocol before writing tests.

## Initialize in the correct taxonomy

```bash
harbor tasks init <task-name> \
  --include-canary-strings \
  --metadata-template task-template.toml \
  -p tasks/<domain>/<field>/
```

Use the repository's current domain and field vocabulary. The directory, task namespace, and metadata taxonomy must agree.

## Data and provenance

Place only agent-visible inputs in `environment/`. Put generators, checksums, acquisition manifests, license notes, independent calculations, and threshold studies in `authoring/`. Record cryptographic hashes for frozen datasets and derived fixtures.

For a synthetic dataset, separate generation from solution. The generator must not encode the target answer in filenames, ordering, metadata, or unused columns.

## Scientific instruction

State what the agent must infer or produce without dictating the reference algorithm. Include units, conventions, valid missing values, output schema, precision requirements, and acceptable scientific alternatives. Define whether stochastic methods are permitted and how reproducibility is measured.

## Oracle

The Oracle demonstrates one defensible workflow. It is not scientific truth by itself. Compare it with an independent implementation, known analytical limit, published invariant, conserved quantity, held-out simulation, or expert-validated reference.

## Verifier

Layer checks:

1. file/schema validity;
2. physical or biological plausibility;
3. conservation laws and invariants;
4. numerical agreement within justified tolerances;
5. cross-output consistency;
6. robustness on hidden cases;
7. rejection of scientifically invalid but well-formatted results.

Tolerance must be derived from numerical error, measurement resolution, stochastic variance, or a threshold study—not chosen merely so the Oracle passes.
