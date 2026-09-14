---
title: Track differences
description: Side-by-side comparison of Terminal-Bench and Terminal-Bench-Science authoring contracts.
---

<div className="source-line"><strong>Authority:</strong> both upstream contribution guides · <strong>Verified:</strong> 2026-09-13</div>

Choose based on the substance of the work, not which submission route seems easier.

| Decision | Terminal-Bench | Terminal-Bench-Science |
|---|---|---|
| Core subject | Economically valuable computer work in many domains | Authentic scientific research workflow |
| Proposal route | Maintainer pitch via Discord/email/conversation | Mandatory structured Airtable proposal, mirrored to Discussions |
| Human expertise | Domain expertise strongly expected; README includes relevant experience | Scientific domain expert authorship and detailed background/evidence review |
| Root path | `tasks/<slug>/` | `tasks/<domain>/<field>/<slug>/` |
| Template | `docs/task-template.toml` | repository-root `task-template.toml` |
| Task namespace | Follow current regular template | `terminal-bench-science/<task-folder-name>` |
| Network stance | Open internet; do not create difficulty by disabling it | Follow current per-phase task policy; verifier remains isolated |
| Reviewer documentation | Required root README sections | Scientific README plus optional authoring provenance/evidence |
| Hints | Track current repository behavior | `authoring/hint.md` with numbered reviewer-selectable hints |
| Review emphasis | Realism, difficulty, contract, verifier, security | Same plus scientific validity, data provenance, thresholds, author expertise |
| Current deadline | No deadline stated in pinned guide | 0.2 PR deadline stated as 5 October 2026 |

## A decision test

Choose **TB-Science** only when a scientist in the stated field would recognize the workflow, inputs, assumptions, evaluation, and interpretation as genuine research work. Using scientific software does not by itself make a task scientific.

Choose **Terminal-Bench** when the dominant work is engineering, operations, security, business process, data production, or another paid computer workflow—even if the data comes from healthcare or a laboratory.

### Example boundary

- Fitting a pharmacokinetic model with domain-valid identifiability checks and uncertainty analysis: likely TB-Science.
- Repairing deployment scripts for a pharmacology web service: regular Terminal-Bench.
- Producing a regulatory clinical summary from defined documents: depends on whether the core challenge is scientific inference or document/business workflow; seek maintainer feedback.

## Never duplicate-submit

Do not submit the same task to both repositories. If maintainers redirect the task, close or clearly supersede the earlier proposal and adapt the task to the new track’s actual contract.
