---
title: Complete command reference
description: Copyable setup, initialization, validation, debugging, Git, and PR commands.
---

# Terminal-Bench: Complete command reference

## Tools

```bash
uv tool install harbor
harbor --version
harbor tasks init --help
harbor run --help
docker version
```

Install GitHub CLI and `jq` as local support tools. API keys are needed only for the model providers actually used by rubric review, agent trials, or analysis:

```bash
export ANTHROPIC_API_KEY='...'
export OPENAI_API_KEY='...'
export GEMINI_API_KEY='...'
```

Never place these exports in a committed file.

## Repository and branch

```bash
gh repo clone Deaimer/terminal-bench-dataset
cd terminal-bench-dataset
git fetch origin --prune
git switch reviewed
git pull --ff-only origin reviewed
git switch -c author/YOUR_GITHUB_USERNAME/example-task
```

## Initialize

```bash
harbor tasks init example-task \
  --include-canary-strings \
  --metadata-template docs/task-template.toml \
  -p tasks/
```

## Static validation

```bash
for check in scripts/checks/check-*.sh; do
  bash "$check" tasks/example-task || exit 1
done
bash -n tasks/example-task/solution/solve.sh
bash -n tasks/example-task/tests/test.sh
```

## Confirm package metadata

```bash
grep -nE '^(schema_version|artifacts|name|category|subcategory|expert_time_estimate_hours|environment_mode|network_mode)' \
  tasks/example-task/task.toml
tail -n 3 tasks/example-task/instruction.md
```

## Clean images

```bash
docker build --no-cache -t tb-example:agent tasks/example-task/environment
docker build --no-cache -t tb-example:verifier tasks/example-task/tests
```

## Oracle, NOP, and interactive debugging

```bash
harbor run -p tasks/example-task -a oracle
harbor run -p tasks/example-task -a nop
harbor tasks start-env -p tasks/example-task -e docker -a -i
```

## Quality and agent trials

```bash
harbor check tasks/example-task -r docs/prompts/task-implementation.toml
harbor run -p tasks/example-task --agent AGENT_NAME -m PROVIDER/MODEL
harbor analyze PATH_TO_JOB \
  -m sonnet \
  -r docs/prompts/trial-analysis.toml \
  --job-prompt docs/prompts/trial-analysis-job.txt
```

## Pull-request automation commands

These are PR comments, not shell commands:

```text
/overview
/review
/validate
/validate env=docker
/run trials=5
/cheat
/fortify
```

## Commit and submit

```bash
git status --short
git diff --check
git add tasks/example-task
git commit -m "Add example-task"
git push -u origin author/YOUR_GITHUB_USERNAME/example-task
gh pr create --base reviewed --head author/YOUR_GITHUB_USERNAME/example-task
```

No author command targets `main`.
