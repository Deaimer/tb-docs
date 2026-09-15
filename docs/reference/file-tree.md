---
title: Complete file-tree reference
description: Terminal-Bench dataset and task layout with consumer and trust level.
---

# Terminal-Bench: Complete file-tree reference

```text
terminal-bench-dataset/
├── .github/                 CI, ownership, PR template
├── docs/                    task template and internal prompts
├── scripts/checks/          static validation
└── tasks/<task-slug>/
    ├── README.md            reviewer-facing explanation
    ├── instruction.md       agent-visible contract
    ├── task.toml            Harbor configuration
    ├── environment/
    │   ├── Dockerfile       agent image
    │   ├── docker-compose.yaml  optional services
    │   └── data/            public inputs only
    ├── solution/
    │   ├── solve.sh         Oracle entry point
    │   └── supporting code
    └── tests/
        ├── Dockerfile       separate verifier image
        ├── test.sh          verifier entry point
        ├── test_*.py
        └── fixtures/        hidden evaluation material
```

The agent sees the instruction and environment. Oracle alone sees `solution/`. The separate verifier sees declared artifacts plus material baked into `tests/`. Human-only evidence belongs in the private PR or approved reviewer location.
