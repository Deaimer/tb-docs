---
title: Reviewer workflow
description: An evidence-first review sequence for proposals and full task implementations.
---

<div className="source-line"><strong>Audience:</strong> Deaimer reviewers · <strong>Authority:</strong> upstream rubrics plus internal review gate</div>

Review in an order that prevents downstream evidence from biasing the contract judgment.

## Proposal review

1. Confirm correct benchmark track and taxonomy.
2. Verify authentic workflow, author relationship to the domain, dataset availability/rights, and concrete deliverable.
3. Test whether evaluation could distinguish correct from plausible wrong results.
4. Decompose expert work and challenge the difficulty claim.
5. Identify overlap, searchable solutions, conflicts, safety concerns, and feasibility risks.
6. Return a decision with blockers and the minimum evidence needed next.

## Implementation review

### Pass 1 — contract only

Read `instruction.md` and public environment inputs without viewing the Oracle. Write your own expected behaviors and ambiguous points.

### Pass 2 — environment and threat model

Build cleanly, inventory files/layers/services, inspect permissions and networks, and search for ground-truth leakage.

### Pass 3 — Oracle

Run it, reproduce outputs, check resource bounds, and compare its assumptions to the contract. For science, inspect independent evidence and threshold justification.

### Pass 4 — verifier

Trace every requirement to an isolated observation. Run alternate-positive, NOP, malformed, plausible-wrong, mutation, boundary, and shortcut cases.

### Pass 5 — difficulty

Review agent trajectories only after soundness. Determine whether failures measure the intended capability and whether timeout or ambiguity dominates.

### Pass 6 — report

Report findings by severity with file/behavior, reproduction, impact, and acceptance condition. Separate upstream violations, correctness blockers, and optional improvements.

## Reviewer independence

Disclose close relationships, financial interests, shared employment, or substantive co-development. Do not accept a proposed reviewer solely because the author knows them. The project assigns reviewers; recommendations are optional.
