---
title: Contract coherence
description: Trace instruction requirements through environment, Oracle, artifacts, and verifier.
---

<div className="source-line"><strong>Blocking rule:</strong> all four task components must describe the same observable job</div>

Create a traceability matrix before reading implementation details:

| Requirement | Public input | Expected output | Oracle behavior | Verifier check | Status |
|---|---|---|---|---|---|
| R1 | `/app/input/x.csv` | all IDs once | emits complete ID set | set equality + duplicate rejection | covered |

## Four mismatch types

1. **Unspecified test:** verifier requires behavior not stated in instruction.
2. **Untested promise:** instruction requires behavior the verifier never observes.
3. **Privileged Oracle:** solution relies on data or assumptions unavailable to the agent.
4. **Untransferable result:** instruction/solution path does not match declared artifacts or verifier mount.

Each is potentially blocking because it changes what the benchmark score means.

## Ambiguity test

Construct two reasonable interpretations of any vague phrase. If both satisfy the words but receive different verdicts, the contract needs clarification. Examples include “accurate,” “optimized,” “valid,” “best,” “clean,” and “standard format” without a metric or referenced convention.

## Overconstraint test

Generate or reason about an alternative valid solution. If the verifier rejects it because of row order, formatting, library choice, intermediate values, or algorithmic path not required by the prompt, it is coupled to the Oracle rather than the contract.

## Review outcome

Coherence review should produce a numbered list of contract rows, not only prose impressions. This makes follow-up changes auditable when the author edits the instruction or tests.
