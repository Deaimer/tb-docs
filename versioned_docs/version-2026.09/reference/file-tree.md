---
title: File-tree reference
description: Track-specific task directories and the trust boundary of each location.
---

<div className="source-line"><strong>Authority:</strong> current repository templates · <strong>Verify before copying</strong></div>

## Regular Terminal-Bench

```text
tasks/<slug>/
├── README.md             reviewer narrative
├── instruction.md        agent-visible contract
├── task.toml             artifacts, metadata, runtime
├── environment/
│   ├── Dockerfile        agent image
│   └── ...               public inputs and services
├── solution/
│   ├── solve.sh          Oracle entry point
│   └── ...               reference implementation
└── tests/
    ├── test.sh           verifier entry point
    └── ...               tests/fixtures per current template
```

## TB-Science

```text
tasks/<domain>/<field>/<slug>/
├── README.md
├── instruction.md
├── task.toml
├── environment/
├── solution/
├── tests/
│   ├── Dockerfile        separate verifier image
│   └── test.sh
└── authoring/            never mounted into a trial
    ├── hint.md           optional reviewer-selected hints
    ├── provenance/       generators, manifests, checksums
    └── evidence/         independent checks, threshold studies
```

## Placement test

Ask who executes or reads the file:

| Consumer | Location |
|---|---|
| Agent | instruction or environment |
| Oracle agent | solution |
| Separate verifier | tests |
| Human author/reviewer only | README or science `authoring/` |

If a file contains ground truth and the answer is “agent,” placement is wrong. If a data generator runs in none of the trial containers, do not hide it inside `environment/`, `solution/`, or `tests/`; in TB-Science it belongs under `authoring/provenance/`.
