---
title: Prepare and submit a proposal
description: Track-specific routes and field-by-field TB-Science proposal guidance.
---

<div className="source-line"><strong>Authority:</strong> current upstream contribution guides and TB-Science form · <strong>Verified:</strong> 2026-09-13</div>

## Regular Terminal-Bench

The current guide asks authors to share ideas with maintainers in `#tb-task-spam`, by email, or in conversation before implementation. Prepare a concise pitch containing role/workflow, inputs, outputs, why it matters, expert steps/time, evaluation plan, and why frontier agents will fail meaningfully. There is no equivalent public structured form referenced by the pinned guide.

## TB-Science form

Use the [official proposal form](https://airtable.com/appzZC5gEHrXSfNNw/pagjgS95lAQ5FVJxt/form). Proposals are mirrored to the [GitHub proposal board](https://github.com/harbor-framework/terminal-bench-science/discussions/categories/task-proposals) for automated and human feedback.

### About the author

| Field | What to provide |
|---|---|
| Name/email/GitHub | Real reachable task author; keep identities consistent |
| Affiliation/role | Current truthful relationship; “Independent Researcher” if applicable |
| Professional profile | Public page confirming identity/work where possible |
| Academic profile | ORCID, Scholar, Semantic Scholar, institutional page, or honestly state none if the form permits |
| Relevant experience | Specific methods, datasets, workflows, and responsibilities relevant to this task |
| Publications | Work actually authored; never borrow another person’s publications |
| Discord | Exact handle for notifications, optional where marked |

A sibling or colleague may become a co-author only if they knowingly make a substantive contribution and accept ongoing responsibility. Their medical degree helps only for tasks within their real competence.

### About the task

**Scientific problem:** define the scientific inference/decision, why it matters, who runs it, and how it arises in practice.

**Workflow details:** list inputs, preprocessing, algorithms/choices, diagnostics, iterative steps, and exact outputs. Show where expert judgment occurs.

**Requirements:** name versions of software/tools, CPU/GPU, memory, storage, expected build time, Oracle time, verifier time, and agent budget. Explain why specialized hardware is intrinsic.

**Dataset:** source, size, format, license/access, download URL, preprocessing, split/leakage strategy, or synthetic generator and validation.

**Evaluation:** define objective checks, hidden data, metrics, tolerances, invariants, alternate-valid outputs, plausible wrong outputs, and protection from gaming.

**Complexity:** decompose expert time and conceptual steps; predict frontier-agent failure modes. Avoid vague claims such as “requires advanced reasoning.”

**References/files:** link the primary method papers, protocols, software documentation, dataset record, and compact evidence supporting feasibility.

### Additional information and disclosures

Reviewer recommendations are optional. Suggest real domain experts only when appropriate; do not claim endorsement. Disclose employment, contractor/vendor roles, financial interests, close reviewer relationships, and organizational submission context. If none, write **None**.

## Proposal readiness gate

Do not submit until the evaluation section explains how a plausible wrong method fails. This is the strongest early indicator that the idea can become a benchmark task rather than a research prompt with subjective grading.
