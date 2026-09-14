---
title: Terminal-Bench
sidebar_position: 1
description: Independent Terminal-Bench authoring and review manual.
---

# Terminal-Bench

Terminal-Bench evaluates whether an agent can complete realistic, valuable work through a terminal. A strong task is not merely a coding puzzle. It requires exploration, tool use, state changes, implementation, diagnosis, and verification across a meaningful work horizon.

## Acceptance model

A candidate must satisfy all of these gates:

1. **Authenticity:** a person could plausibly be paid to complete the work.
2. **Terminal suitability:** the complete workflow can be performed using terminal-accessible tools.
3. **Meaningful difficulty:** difficulty comes from the domain and workflow, not hidden trivia, broken dependencies, tiny timeouts, or withheld internet.
4. **Objective verification:** every mandatory behavior has a programmatic, discriminating check.
5. **Reproducibility:** clean builds and repeated runs behave consistently.
6. **Security:** the agent cannot inspect the oracle, verifier secrets, protected fixtures, or expected answers.
7. **Maintainability:** a reviewer can understand the contract and diagnose a failure without reverse-engineering the package.

## Required package

```text
tasks/<task-slug>/
├── README.md
├── instruction.md
├── task.toml
├── environment/
│   ├── Dockerfile
│   └── data/
├── solution/
│   └── solve.sh
└── tests/
    ├── Dockerfile
    ├── test.sh
    └── test_outputs.py
```

Optional files are allowed when the workflow needs them, but the environment must never contain the reference solution or protected verifier ground truth.

## Recommended work order

1. Write a one-page task contract.
2. Define measurable outputs and failure cases.
3. Build the environment from a clean Docker cache.
4. implement the reference solution.
5. Build the verifier around isolated requirements.
6. Run Oracle and NOP from independent clean states.
7. create adversarial wrong outputs and prove they fail.
8. run agent trials only after correctness is established.
9. prepare reviewer evidence and open an internal pull request.

Continue with **Authoring** for file-by-file construction.
