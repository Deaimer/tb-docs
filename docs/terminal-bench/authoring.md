---
title: Terminal-Bench — Authoring
sidebar_position: 2
---

# Terminal-Bench — Authoring

## 1. Define the contract before the container

Write four lists before implementation:

- inputs already present when the agent starts;
- operations the agent is expected to perform;
- exact output paths, formats, and externally visible behavior;
- conditions that make a solution wrong.

A requirement belongs in `instruction.md` only if the verifier can test it or it is an explicit execution constraint. Avoid subjective language such as “clean,” “professional,” or “optimized” unless you define measurable criteria.

## 2. Initialize the task

```bash
harbor tasks init <task-name> \
  --include-canary-strings \
  --metadata-template docs/task-template.toml \
  -p tasks/
```

Use a lowercase, hyphenated slug. Keep one task per directory and one task per pull request.

## 3. Write instruction.md

The instruction must stand alone. Specify absolute paths, schemas, encodings, units, tolerances, command behavior, expected side effects, and permitted assumptions. If output is JSON, define required keys and types. If output is a service, define ports, endpoints, status codes, and persistence behavior. If modifying an existing project, state which behaviors must remain unchanged.

Do not describe the oracle algorithm. Do not mention hidden fixture names. Do not require the agent to infer a filename that the verifier expects.

End with the exact timeout sentence required by the task template, and make the integer match `[agent].timeout_sec`.

## 4. Configure task.toml

```toml
artifacts = ["/app/result.json"]

[metadata]
author_name = "Full Name"
author_email = "name@example.com"
author_organization = "Deaimer"
category = "Software"
subcategory = "data-processing"
tags = ["python", "validation"]
expert_time_estimate_hours = 8

[verifier]
timeout_sec = 180.0
environment_mode = "separate"

[agent]
timeout_sec = 7200.0

[environment]
build_timeout_sec = 900.0
cpus = 2
memory_mb = 4096
storage_mb = 10240
gpus = 0
allow_internet = true
```

Treat the live template in the working repository as the schema authority. Do not invent keys. Measure cold build time, peak memory, disk use, and verifier time before choosing limits.

## 5. Build the environment

The environment image contains only what the agent may inspect. Pin language-level packages where reproducibility requires it. Keep operating-system package installation resilient: update package indexes, install without recommendations, and remove cache data in the same layer.

Never copy `solution/`, `tests/`, expected outputs, scoring thresholds, or hidden fixtures into the agent image. Use neutral input filenames. Remove pre-existing output files before the agent starts. Avoid environment variables or shell history containing credentials.

## 6. Implement the Oracle

`solution/solve.sh` must produce a fully correct result from the same initial state available to the agent. It should not patch the verifier, read hidden data, rely on undeclared host files, or bypass the intended work.

Make the Oracle diagnostic: fail fast, print phase names, use strict shell options, and verify expected output paths before exiting.

```bash
#!/usr/bin/env bash
set -euo pipefail
python /solution/solve.py
test -s /app/result.json
```

## 7. Implement the verifier

The verifier runs in a separate container. Its image owns its dependencies and tests. It may inspect only declared artifacts, verifier-baked data, and explicitly persistent services.

Each documented behavior should have an isolated test. Check structure before semantics, semantics before quality thresholds, and boundary cases explicitly. Use exact equality for discrete results and justified tolerances for numerical results. Emit valid grading output even when a candidate file is missing or malformed.
