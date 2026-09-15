---
title: What Terminal-Bench evaluates
description: Scope, task quality, executable contract, and internal contribution route.
---

# Terminal-Bench: Scope and contribution route

Terminal-Bench evaluates realistic, economically valuable work completed through a terminal. It can cover software, operations, security, machine learning, data processing, hardware, media, finance, healthcare operations, and other computer-mediated work when success is objectively verifiable.

## Internal route

1. Define the user, starting state, valuable outcome, output, evaluator, and authentic difficulty.
2. Obtain internal idea approval.
3. Branch from `reviewed` inside `Deaimer/terminal-bench-dataset`.
4. Initialize using the current private template.
5. Build instruction, environment, Oracle, verifier, and metadata as one contract.
6. Pass static, build, Oracle, NOP, negative, reproducibility, security, and agent-trial gates.
7. Open one task PR into `reviewed`.
8. Reviewers merge accepted work to `reviewed`; only the owner promotes it to `main`.

## Quality target

Difficulty must come from long-horizon exploration, interacting constraints, domain reasoning, implementation, debugging, or iteration—not ambiguity, unavailable inputs, arbitrary timeouts, disabled internet, or a broken dependency.

The required task shape is `README.md`, `instruction.md`, `task.toml`, `environment/`, `solution/`, and `tests/`. Separate verifier mode is mandatory. Only declared artifacts cross from agent execution to verification.
