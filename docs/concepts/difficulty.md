---
title: Difficulty without gimmicks
description: Design expert-level challenge and diagnose whether agents fail for the intended reason.
---

<div className="source-line"><strong>Authority:</strong> upstream task guidelines · <strong>Deaimer standard:</strong> causal failure analysis</div>

Difficulty is a measured property of the complete task, not an adjective in the proposal.

## Legitimate sources of difficulty

- **Long-horizon planning:** multiple dependent stages where early decisions affect later work.
- **Environment discovery:** a realistic codebase, dataset, service topology, or filesystem that must be inspected.
- **Domain inference:** selecting models, assumptions, diagnostics, or transformations using expert knowledge.
- **Integration:** coordinating tools, formats, services, and outputs across boundaries.
- **Iteration:** learning from logs, residuals, simulations, or tests and revising the approach.
- **Performance:** meeting a meaningful throughput, memory, numerical, or latency target after correctness.

## Illegitimate difficulty

Typos in paths, missing dependencies, undocumented formats, impossible timeouts, flaky downloads, ambiguous units, hidden domain assumptions, and arbitrary output formatting are defects.

## Estimate expert work

Break the workflow into stages and report best-case focused time for a qualified expert. Include setup and validation. A credible estimate names steps such as data audit, model selection, implementation, convergence checks, sensitivity analysis, and packaging.

## Agent trial diagnosis

For each failed trial, identify the earliest decisive failure:

| Failure | Interpretation |
|---|---|
| Misread an explicit requirement | instruction following difficulty |
| Could not discover relevant state | exploration/tool-use difficulty |
| Selected invalid domain method | domain reasoning difficulty |
| Correct plan, buggy implementation | implementation/debugging difficulty |
| Correct result, verifier rejected it | task defect, not agent difficulty |
| No agent gets past setup | likely environment or instruction defect |

Hints are diagnostic. If one sentence makes most agents pass and that sentence is necessary task context, move it into the instruction. If progressively stronger method hints are needed, the task may be genuinely hard.
