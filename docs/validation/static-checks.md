---
title: Run every static check
description: Exact current Terminal-Bench static checks, their intent, and local command.
---

# Terminal-Bench: Static checks

Run every checked-in script against only your task before Oracle or NOP:

```bash
for check in scripts/checks/check-*.sh; do
  echo "==> $check"
  bash "$check" "tasks/example-task" || exit 1
done
```

The scripts on your target branch are authoritative. As of the verified upstream revision, review these gates:

| Check family | What it rejects |
|---|---|
| Canary | Missing or uncommented canonical anti-contamination marker |
| Dockerfile references | Copying solution or test files into the agent image |
| Dockerfile sanity/platform | Pinned apt versions, bad apt hygiene, explicit `FROM --platform=...` |
| Absolute paths | Relative file references in `instruction.md` |
| Test-file references | Outputs jointly used by solution/tests but absent from the public contract |
| `test.sh` sanity | Incorrect Python isolation or trial-time verifier setup |
| Task fields | Missing author, category, subcategory, tags, expert estimate, or required README sections |
| Timeout | Agent or verifier timeout above 28,800 seconds |
| Instruction suffix | Missing, malformed, or mismatched final timeout/anti-cheat sentence |
| GPU types | Noncanonical `gpu_types` value |
| Slug | More than three hyphen-separated tokens |
| Package name | `[task].name` differs from `terminal-bench/<folder>` |
| Internet | Explicitly disabling internet or redundantly using legacy `allow_internet = true` |
| Separate verifier | Missing mode, tests image, `/tests` copy, top-level artifacts, or artifact parent directories |
| Trial-time fetch | `curl`, `wget`, clone, or installer fetch from `tests/test.sh` |
| Verifier tooling | Installing pytest/CTRF in `test.sh` instead of the verifier image |
| Python pins | Unpinned pip/uv packages or noncanonical pytest versions |
| CPU detection | Bare `nproc`, which sees host CPUs rather than the container allocation |
| Compose volumes | Host bind mounts instead of named volumes |

Current canonical verifier pins are `pytest==9.1.1` and `pytest-json-ctrf==0.5.2`. Fetch and install them in `tests/Dockerfile`, then execute without network installation in `test.sh`.

Do not silence a check. Fix the task or document a maintainer-approved exception in the PR.

Source: [official review automation](https://github.com/harbor-framework/terminal-bench/blob/main/docs/TASK_REVIEW_AUTOMATION.md).
