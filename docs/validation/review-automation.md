---
title: CI review automation
description: Automatic checks, maintainer commands, agent trials, cheat trials, and analysis results.
---

# Terminal-Bench: Review automation

An internal task PR should reproduce the official pipeline. Static checks, rubric review, Docker validation, Oracle, and NOP run automatically whenever task files change. Agent and adversarial trials are maintainer-triggered.

| Command/event | Purpose | Who triggers |
|---|---|---|
| PR open or push | Overview, static checks, rubric review, build, Oracle, NOP | Automatic |
| `/overview` | Regenerate file tree, metadata, and instruction summary | Any participant |
| `/review` | Rerun implementation-rubric review | Any participant |
| `/validate` | Rerun build, Oracle, and NOP | Any participant |
| `/run` | Run configured frontier-agent trials and analysis | Maintainer |
| `/cheat` | Run adversarial reward-hacking trials | Maintainer |
| `/fortify` | Run the iterative hacker–fixer hardening loop | Maintainer |

Useful supported forms include:

```text
/validate env=docker
/run trials=5
/run agents=claude-code:anthropic/MODEL
/run analyze_model=sonnet
/cheat analyze=true
/fortify
```

## Reading the results

- A green Oracle means the shipped solution passed; it does not prove verifier soundness.
- A green NOP means untouched state failed correctly; it does not cover plausible wrong work.
- A model error, timeout, rate limit, or container crash is not evidence of task difficulty.
- Trial analysis must check task specification, reward hacking, difficulty crux, refusals, and low timeout.
- A successful adversarial hack blocks acceptance even if ordinary agents fail the task.

Authors fix failures on their personal branch and push again. They do not ask reviewers to ignore red checks, rerun until a flaky result happens to pass, or edit CI files inside a task PR.

Source: [official automation guide](https://github.com/harbor-framework/terminal-bench/blob/main/docs/TASK_REVIEW_AUTOMATION.md).
