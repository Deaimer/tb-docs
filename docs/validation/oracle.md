---
title: Run and interpret Oracle
description: Exact Oracle command, required result, job inspection, and failure diagnosis.
---

# Terminal-Bench: Run the Oracle

Oracle is Harbor’s privileged reference agent. It mounts `solution/` and executes `solution/solve.sh`. It demonstrates that one permitted implementation can solve the shipped task.

## Preflight and run

```bash
git status --short
harbor --version
harbor run --help
bash -n tasks/example-task/solution/solve.sh
harbor run -p tasks/example-task -a oracle
```

Use `--agent oracle` if the installed help shows the long form.

## Required outcome

The completed job must report reward `1.0`. Also verify the environment built, the Oracle exited successfully, every declared artifact transferred, the separate verifier ran, structured test results exist, and runtime fits `task.toml`.

Oracle `1.0` does not prove wrong solutions fail, every requirement is tested, ground truth is hidden, or the task is difficult.

## Inspect the job

Use the directory Harbor prints:

```bash
find PATH_PRINTED_BY_HARBOR -maxdepth 5 -type f -print | sort
grep -RInE 'reward|error|failed|exception|traceback' PATH_PRINTED_BY_HARBOR
```

Read in order: configuration, builds, service startup, Oracle output, artifact transfer, verifier tests, reward. Fix the earliest causal failure.

| Symptom | Inspect first |
|---|---|
| Build failure | Environment Dockerfile and context |
| Missing solve script | Mount, path, executable bit |
| Output exists but export fails | Top-level `artifacts` and verifier parent directories |
| Tests crash | Verifier image, dependencies, defensive parsing |
| Tests reject | Instruction/Oracle/verifier mismatch |
| Reward missing | Result emission |
| Intermittent result | Randomness, races, mutable inputs |

Run Oracle twice in independent jobs. Both must receive `1.0`.
