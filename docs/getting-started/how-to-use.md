---
title: How to use this handbook
description: Authority, labels, navigation, and the safest way to apply this internal guide.
---

<div className="source-line"><strong>Applies to:</strong> Terminal-Bench · <strong>Internal operating manual</strong></div>

Use this site as a workflow, not as a substitute for judgment. Follow prerequisites, initialization, authoring, validation, submission, and review in order.

## Resolve conflicts in this order

1. Repository-owner instruction on the task or pull request.
2. Current CI and machine-readable rubric in the private dataset repository.
3. Current templates and the installed Harbor command help.
4. This manual.

If two upstream sources disagree, record the conflict in the PR and ask a maintainer. Do not silently choose the easier interpretation.

## Work from gates

Each phase has an exit condition:

| Phase | Exit condition |
|---|---|
| Idea | Real, valuable Terminal-Bench workflow; named output; plausible objective evaluation. |
| Proposal | Maintainer confidence that scope, expertise, data, evaluation, and difficulty fit. |
| Contract | Instruction, environment, solution, and verifier describe the same behavior. |
| Local validation | Oracle passes, NOP fails, negative controls fail, repeated runs are stable. |
| Agent trials | Frontier attempts expose meaningful capability failures rather than broken setup. |
| Review | No blocking findings; evidence supports thresholds and claims. |
| Maintenance | Author remains reachable and fixes regressions or ambiguity. |

## Keep an evidence log

For every non-obvious threshold or design choice, store the claim, evidence, reproduction command, and expected result in reviewer-facing material without exposing privileged evidence to the agent.

:::tip Fast navigation
Press **Ctrl+K** or **⌘K** to search commands, fields, check names, or error text. Every page also has previous/next navigation.
:::
