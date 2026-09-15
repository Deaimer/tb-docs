---
title: Complete task lifecycle
description: Gates from idea through proposal, implementation, review, merge, and maintenance.
---

<div className="source-line"><strong>Applies to:</strong> Terminal-Bench · <strong>Deaimer private-dataset workflow</strong></div>

## 1. Frame the paid work

Write one paragraph describing who performs the work, what input arrives, what decision or artifact they produce, and why the result matters. If the only motivation is “agents find it hard,” the task is not ready.

## 2. Design evaluation before the prompt

Define observables, tolerances, invariants, forbidden shortcuts, and at least three plausible incorrect outputs. If success cannot be checked reliably, narrow the deliverable or redesign the data. Do not wait until after the task is built to discover that correctness is subjective.

## 3. Obtain idea approval

Use Deaimer’s internal planning route. Do not invest in full implementation until the outcome, verifier strategy, data rights, and authentic difficulty have been accepted.

## 4. Implement the contract

Create the task from the repository template. Build environment, instruction, solution, and verifier together. Any change to one side triggers a coherence check of the other three.

## 5. Validate locally

- Static repository checks pass.
- Container builds from a clean cache.
- Oracle passes from a clean task state.
- NOP fails from a clean task state.
- Each named rule has an isolated passing and failing case.
- Repeated executions produce the same verdict.
- No privileged answer is readable by the agent.

## 6. Run agent trials

Collect trajectories and categorize failures: comprehension, exploration, domain reasoning, implementation, debugging, time management, or verifier gaming. A 0% pass rate is not automatically evidence of a good task; it may indicate ambiguity or brokenness. Use hints or controlled diagnosis to distinguish those cases.

## 7. Submit a focused PR

Submit one task per personal branch into `reviewed`. Include reproducible commands and results. Avoid unrelated repository formatting or dependency changes.

## 8. Respond with evidence

For every reviewer finding, either change the task and show the result or rebut with a concrete test, source, or contract argument. “The Oracle passes” does not answer a verifier-soundness finding.

## 9. Maintain after merge

Remain reachable. Pin or vendor fragile inputs, update broken dependencies, reproduce task-fix reports, and preserve the intended meaning of the task when changing thresholds or data.
