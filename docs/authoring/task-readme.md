---
title: Write the task README
description: Human-written explanations required for reviewers and future maintainers.
---

# Terminal-Bench: Write `README.md`

The task `README.md` is reviewer-facing and is not the agent instruction. The current contribution guide requires four human-written sections. Do not use an AI system to draft them.

```markdown
# Task title

## Difficulty explanation
One to three concise sentences explaining the real reasoning crux.

## Solution explanation
One to three concise sentences describing the reference approach and key insight.

## Verification explanation
One to three concise sentences explaining what the tests execute and why they distinguish correctness.

## Relevant experience
One to three truthful sentences about the author's relevant professional or domain experience.
```

## What each section must prove

- **Difficulty explanation:** identify interacting systems, domain decisions, exploration, iteration, or debugging. Do not claim difficulty merely from file count or model failures.
- **Solution explanation:** make the implementation reviewable without pasting the solution or duplicating `instruction.md`.
- **Verification explanation:** name the major behavioral checks, hidden/pristine evidence, and anti-cheat strategy.
- **Relevant experience:** state only what is true. Employment, research, production work, substantial projects, or qualified collaboration may be relevant; a relative's credential is not the author's experience.

Optional material may include design tradeoffs, provenance, visualization tools, maintenance notes, and links needed by reviewers. Do not use the README to add requirements that are absent from the agent-visible instruction.

CI checks exact heading spelling. Preserve the `##` headings and initializer canary comment.
