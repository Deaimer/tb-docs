---
title: Terminal-Bench-Science track
description: Proposal eligibility, taxonomy, implementation, evidence, review, and current deadline.
---

<div className="source-line"><strong>Upstream:</strong> <a href="https://github.com/harbor-framework/terminal-bench-science/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> at <code>ff55a1b</code> · <strong>Verified:</strong> 2026-09-13</div>

TB-Science targets authentic computational research workflows that require scientific judgment and can be evaluated rigorously. A textbook calculation or a synthetic puzzle with scientific vocabulary is not enough.

:::warning Current upstream deadline
The current guide says TB-Science 0.2 pull requests are accepted until **5 October 2026**. This is time-sensitive; verify upstream.
:::

## Three-stage route

1. **Propose.** Complete the [Airtable task proposal form](https://airtable.com/appzZC5gEHrXSfNNw/pagjgS95lAQ5FVJxt/form). The proposal is mirrored to GitHub Discussions and Discord, scored automatically, and reviewed by human domain experts.
2. **Build.** After proposal confidence/approval, implement the task using the current repository template and Harbor task format. The PR is evaluated with the implementation rubric and scientific review.
3. **Review and maintain.** Strong contributors may be invited to review. Merged-task authors must remain reachable through the benchmark release and help investigate agent failures; current contribution terms tie this to co-authorship credit.

The [live task dashboard](https://stevendillmann.github.io/tb-science-task-dashboard/) shows proposals, pull requests, assignments, status, and domain gaps.

## Who can be a task author?

Use the real person who owns the scientific content. A named medical doctor can support a medicine task when the workflow lies within their actual competence and they materially design and validate it. Their degree is relevant evidence, not automatic approval.

Do not list relatives, clinicians, academics, or suggested reviewers merely to make a proposal look credentialed. The form asks for the submitting author’s background and work. If no institutional affiliation applies, state **Independent Researcher**. Disclose employer/vendor relationships and conflicts fully.

## Taxonomy

| Domain | Fields |
|---|---|
| `life-sciences` | biology, ecology, medicine, neuroscience |
| `physical-sciences` | astronomy, chemistry, materials-science, physics |
| `earth-sciences` | atmospheric-sciences, environmental-sciences, geosciences, ocean-sciences |
| `mathematical-sciences` | applied-mathematics, formal-mathematics, operations-research, statistics |
| `engineering-sciences` | chemical-engineering, civil-engineering, electrical-engineering, mechanical-engineering |

Route cross-disciplinary work by its dominant computational content. Explain the choice if two fields are plausible.

## Task-specific evidence

TB-Science supports an optional `authoring/` directory that Harbor never mounts into agent, verifier, or Oracle containers:

- `authoring/provenance/`: generators, manifests, source URLs, checksums, and raw production records.
- `authoring/evidence/`: independent implementations, threshold studies, sensitivity analysis, and contract tests.
- `authoring/hint.md`: graded hints used deliberately by reviewers to distinguish “hard” from “broken.” Canary coverage and formatting rules apply.

## Proposal dossier

Prepare concise, factual answers for scientific problem, workflow, dependencies/hardware/runtime, dataset/rights, evaluation, complexity, references, conflicts, and author background. The detailed field-by-field guide is in [Proposals](../submission/proposals).
