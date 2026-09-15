---
title: Complete file-tree reference
description: Terminal-Bench dataset and task layout with consumer and trust level.
---

# Terminal-Bench: Complete file-tree reference

```text
terminal-bench-dataset/
├── .github/                 CI, ownership, PR template
├── docs/                    task template and internal prompts
│   ├── task-template.toml   initializer metadata defaults
│   ├── TAXONOMY.md          category/subcategory authority
│   └── prompts/             proposal, implementation, and analysis rubrics
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

The agent sees the instruction and environment. Oracle alone receives `solution/` mounted at `/solution/`. The agent container is removed before verification. The separate verifier sees only declared artifacts, content baked into its own image, and explicitly collected/persistent sidecar state. `tests/` must be copied into the verifier image because Harbor does not upload it at verification time.

Every checked text file retains the canonical commented canary. Do not commit local jobs, model trajectories, caches, `.env` files, downloaded datasets that exceed repository policy, editor backups, or generated answer artifacts inside the task directory.
