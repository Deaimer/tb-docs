---
title: Reviewer workflow
description: An evidence-first review sequence for proposals and full task implementations.
---

<div className="source-line"><strong>Audience:</strong> Deaimer reviewers · <strong>Authority:</strong> upstream rubrics plus internal review gate</div>

Review in the official evidence order. Automated results are signals, never substitutes for reading the task.

## Proposal review

1. Confirm Terminal-Bench scope and taxonomy.
2. Verify authentic workflow, author relationship to the domain, dataset availability/rights, and concrete deliverable.
3. Test whether evaluation could distinguish correct from plausible wrong results.
4. Decompose expert work and challenge the difficulty claim.
5. Identify overlap, searchable solutions, conflicts, safety concerns, and feasibility risks.
6. Return a decision with blockers and the minimum evidence needed next.

## Implementation review

### Pass 1 — task overview and rubric output

Read the automated overview comment, file tree, metadata, and full instruction. Read the 35-criterion rubric review and static-check result, but record concerns independently.

### Pass 2 — contract only

Read `instruction.md` and public environment inputs without viewing the Oracle. Write your own expected behaviors and ambiguous points.

### Pass 3 — environment and threat model

Build cleanly, inventory files/layers/services, inspect permissions and networks, and search for ground-truth leakage.

### Pass 4 — Oracle and NOP

Confirm automatic build, Oracle `1`, and NOP `0`, then reproduce locally when risk warrants it. Inspect artifact transfer, CTRF, binary reward, and resource bounds. Oracle success cannot excuse untested requirements.

### Pass 5 — verifier

Trace every requirement to an isolated observation. Run alternate-positive, NOP, malformed, plausible-wrong, mutation, boundary, and shortcut cases.

### Pass 6 — agent and adversarial trials

Trigger or inspect `/run` and `/cheat`; use `/fortify` when the threat surface warrants it. Determine whether failures measure the intended capability and whether timeout, refusal, infrastructure, ambiguity, or verifier behavior dominates.

### Pass 7 — report and decision

Report findings by severity with file/behavior, reproduction, impact, and acceptance condition. Submit `Approve` only after all blocking checks and evidence pass; otherwise submit `Request changes` with actionable findings.

## Reviewer independence

Disclose close relationships, financial interests, shared employment, or substantive co-development. Do not accept a proposed reviewer solely because the author knows them. The project assigns reviewers; recommendations are optional.
