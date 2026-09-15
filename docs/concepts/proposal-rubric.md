---
title: Proposal and idea approval
description: The six official proposal criteria and the internal idea-approval package.
---

# Terminal-Bench: Proposal and idea approval

Do not spend days implementing an unreviewed idea. First write a short proposal and obtain internal approval. The official proposal rubric evaluates six independent properties.

| Criterion | Approval question | Blocking failure |
|---|---|---|
| Verifiable | Can a deterministic program reliably separate correct from incorrect outcomes? | Subjective or flaky grading |
| Well-specified | Could two reasonable verifier authors implement equivalent acceptance rules from the instruction? | Hidden requirements or guesswork |
| Solvable | Is there a credible solution that a prepared expert could implement within a few hours? | Unsolved research or impossible bounds |
| Difficult | Does the work require genuine professional/domain reasoning? | Undergraduate exercise, trivia, or artificial tedium |
| Interesting | Does it represent useful work for which someone could be paid? | Gimmick or contrived puzzle |
| Outcome-verified | Does grading measure the final result instead of forcing one procedure? | Tests demand a specific tool or implementation without necessity |

## Internal proposal template

Submit one proposal containing:

1. **Problem and professional setting:** who performs this work and why the result matters.
2. **Starting environment:** code, services, data, defects, and tools present when the agent begins.
3. **Required outcome:** concrete files, service behavior, performance result, or repaired system state.
4. **Verification design:** how correct outcomes pass and at least five plausible wrong outcomes fail.
5. **Expert solution sketch:** why the task is solvable without revealing the final answer to agents.
6. **Difficulty crux:** the reasoning, exploration, debugging, or integration that defeats shallow approaches.
7. **Novelty search:** similar accepted tasks and online solutions checked.
8. **Resources:** CPU, memory, disk, GPU, network, build time, agent time, and verifier time.
9. **Data rights:** origin, license, redistribution permission, size, checksum, and update policy.
10. **Author expertise:** truthful relationship to the workflow.

## Reject weak difficulty

Do not create difficulty by disabling the internet, starving the timeout, adding formatting traps, requiring dozens of clerical fields, hiding essential facts, choosing broken dependencies, or producing many variants and selecting whichever happens to defeat one model. Terminal-Bench is open internet. Difficulty should come from authentic multi-step computer work.

## Decision language

Internal reviewers use `Strong Reject`, `Reject`, `Uncertain`, `Accept`, or `Strong Accept` for each criterion and overall. Approval means the idea is worth implementing if executed well; it does not guarantee acceptance of the finished task.

Source: [official task-proposal rubric](https://github.com/harbor-framework/terminal-bench/blob/main/docs/prompts/task-proposal.md).
