---
title: Terminal-Bench-Science
sidebar_position: 1
description: Independent Terminal-Bench-Science proposal, authoring, and review manual.
---

# Terminal-Bench-Science

Terminal-Bench-Science evaluates authentic computational research workflows. Scientific vocabulary is not sufficient: the task must represent work that researchers actually perform, require scientific judgment, and produce results that can be assessed objectively.

## Acceptance model

A science task must establish:

1. a real scientific question or research operation;
2. a credible domain owner who can defend the workflow;
3. lawful, reproducible data provenance;
4. a computational procedure with nontrivial scientific decisions;
5. scientific ground truth or invariants independent of the Oracle;
6. programmatic verification with justified tolerances;
7. enough evidence for a second domain expert to reproduce the conclusion.

A medical degree supports medicine-domain credibility only when the clinician materially designs and validates a workflow within their competence. Credentials must never be borrowed merely to decorate a proposal.

## Directory model

```text
tasks/<domain>/<field>/<task-slug>/
├── README.md
├── instruction.md
├── task.toml
├── environment/
├── solution/
├── tests/
└── authoring/
    ├── provenance/
    ├── evidence/
    └── hint.md
```

The `authoring/` evidence is reviewer-facing and must not be mounted into agent, Oracle, or verifier containers.

## Workflow

Proposal dossier → domain review → data/provenance freeze → task implementation → scientific validation → verifier validation → agent trials → internal pull request → owner approval.
