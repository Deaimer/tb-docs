---
title: End-to-end quick start
description: From private repository clone to clean Oracle/NOP evidence and a reviewed-branch PR.
---

# Terminal-Bench: End-to-end quick start

## 1. Clone and branch

```bash
gh auth login
gh repo clone Deaimer/terminal-bench-dataset
cd terminal-bench-dataset
git fetch origin --prune
git switch reviewed
git pull --ff-only origin reviewed
git switch -c author/YOUR_GITHUB_USERNAME/example-task
```

## 2. Initialize

```bash
docker version
harbor --version
harbor tasks init example-task \
  --include-canary-strings \
  --metadata-template docs/task-template.toml \
  -p tasks/
find tasks/example-task -maxdepth 3 -type f -print | sort
```

## 3. Complete every component

- `instruction.md`: public contract, absolute paths, schemas, constraints, exact timeout suffix.
- `task.toml`: artifacts, metadata, timeouts, compute, internet, separate verifier.
- `environment/`: reproducible agent tools, public inputs, required services.
- `solution/solve.sh`: executable reference procedure.
- `tests/Dockerfile`: isolated verifier with dependencies and hidden fixtures.
- `tests/test.sh`: controlled test/result entry point.
- `README.md`: difficulty, solution, verification, and relevant experience.

## 4. Validate

```bash
for check in scripts/checks/check-*.sh; do
  bash "$check" tasks/example-task || exit 1
done
harbor run -p tasks/example-task -a oracle
harbor run -p tasks/example-task -a nop
```

Required: Oracle `1.0`, NOP `0.0`, no infrastructure errors. Repeat both. Then run alternate-valid, malformed, partial, boundary, plausible-wrong, oversized, and filesystem-attack artifacts against the verifier.

## 5. Push only when complete

```bash
git status --short
git diff --check
git add tasks/example-task
git commit -m "Add example-task"
git push -u origin author/YOUR_GITHUB_USERNAME/example-task
gh pr create --base reviewed --head author/YOUR_GITHUB_USERNAME/example-task
```

Never target `main`. Oracle and NOP alone do not make the task complete.
