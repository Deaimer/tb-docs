---
title: Full review checklist
description: Release checklist for proposal, implementation, difficulty, evidence, and maintenance.
---

<div className="source-line"><strong>Use:</strong> copy into the internal review issue and attach evidence links</div>

## Proposal

- [ ] Correct Terminal-Bench scope and taxonomy.
- [ ] Authentic paid/research workflow and concrete stakeholder value.
- [ ] Truthful named author, affiliation, expertise, and disclosures.
- [ ] Dataset exists, fits licensing/privacy constraints, and is obtainable.
- [ ] Output and objective evaluation are feasible.
- [ ] Expert-time estimate is decomposed.
- [ ] Difficulty is meaningful, not manufactured.
- [ ] No obvious duplicate or searchable task-specific answer.

## Contract and environment

- [ ] Every requirement is explicit and testable.
- [ ] All inputs, units, formats, paths, edge cases, and outputs are specified.
- [ ] Clean build succeeds under declared resources.
- [ ] Agent has required tools/permissions and no privileged truth.
- [ ] Public-network and service boundaries match current Terminal-Bench policy.
- [ ] Artifact declarations exactly match contract and output.

## Solution and verifier

- [ ] Oracle passes repeatedly from clean state.
- [ ] Independent or alternate valid result passes.
- [ ] NOP and pre-existing-output controls fail.
- [ ] Every named rule has an isolated discriminating test.
- [ ] Plausible wrong methods, partial results, and mutations fail.
- [ ] Tolerances are justified and boundary-tested.
- [ ] Parser is bounded and adversarial artifacts fail safely.
- [ ] Verifier has no agent-container or network dependency.
- [ ] Reward files are correct on success and failure paths.

## Science and difficulty

- [ ] Scientific assumptions, uncertainty, validity range, and limitations are explicit.
- [ ] Provenance and evidence can reproduce inputs and thresholds.
- [ ] Agent trials use a fixed revision and complete metadata.
- [ ] Failures arise from intended capability gaps, not setup or ambiguity.
- [ ] Timeout/resource limits allow a qualified expert/reference solution.

## Submission

- [ ] Live upstream checks pass.
- [ ] Branch contains only intended changes and no secrets/large debris.
- [ ] PR includes exact reproduction commands and results.
- [ ] All blocker/major findings are resolved or explicitly accepted by maintainers.
- [ ] Named author accepts post-merge maintenance responsibility.
