---
title: How to use this handbook
description: Authority, labels, navigation, and the safest way to apply this internal guide.
---

<div className="source-line"><strong>Applies to:</strong> both tracks · <strong>Handbook verified:</strong> 2026-09-13</div>

Use this site as a workflow, not as a substitute for judgment. Begin with the track page because the regular and science repositories look similar while enforcing different metadata and submission paths.

## Resolve conflicts in this order

1. A maintainer’s explicit instruction on your proposal or pull request.
2. Current CI and machine-readable rubric in the target repository.
3. Current `CONTRIBUTING.md`, templates, and Harbor task-format documentation.
4. This handbook’s summary of upstream requirements.
5. Deaimer recommendations.

If two upstream sources disagree, record the conflict in the PR and ask a maintainer. Do not silently choose the easier interpretation.

## Work from gates

Each phase has an exit condition:

| Phase | Exit condition |
|---|---|
| Idea | Real, valuable workflow; correct track; named output; plausible objective evaluation. |
| Proposal | Maintainer confidence that scope, expertise, data, evaluation, and difficulty fit. |
| Contract | Instruction, environment, solution, and verifier describe the same behavior. |
| Local validation | Oracle passes, NOP fails, negative controls fail, repeated runs are stable. |
| Agent trials | Frontier attempts expose meaningful capability failures rather than broken setup. |
| Review | No blocking findings; evidence supports thresholds and claims. |
| Maintenance | Author remains reachable and fixes regressions or ambiguity. |

## Keep an evidence log

For every non-obvious threshold or design choice, store the claim, evidence, reproduction command, and expected result. TB-Science provides `authoring/provenance/` and `authoring/evidence/` specifically for this material. For regular Terminal-Bench, keep equivalent reviewer-facing evidence without placing privileged material where the agent can access it.

:::tip Fast navigation
Press **Ctrl+K** or **⌘K** to search commands, fields, check names, or error text. Every page also has previous/next navigation and an upstream edit link.
:::
