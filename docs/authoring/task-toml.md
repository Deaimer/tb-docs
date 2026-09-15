---
title: Configure task.toml
description: Current Terminal-Bench package identity, metadata, artifacts, timeouts, resources, and verifier mode.
---

<div className="source-line"><strong>Authority:</strong> target repository template, then Harbor schema · <strong>Rule:</strong> never invent fields</div>

Initialize from the target repository’s current metadata template. Similar-looking TOML from another benchmark version is not interchangeable.

## Current Terminal-Bench shape

Start from initializer output. A representative completed file is:

```toml
schema_version = "2.0"
artifacts = ["/app/output.json"]

[task]
name = "terminal-bench/example-task"
description = ""
authors = [{ name = "Full Name", email = "name@example.com" }]

[metadata]
author_name = "Full Name"
author_email = "name@example.com"
author_organization = "Organization"
category = "Software"
subcategory = "Systems"
tags = ["debugging"]
expert_time_estimate_hours = 6

[verifier]
timeout_sec = 120.0
environment_mode = "separate"

[agent]
timeout_sec = 7200.0

[environment]
build_timeout_sec = 600.0
cpus = 2
memory_mb = 4096
storage_mb = 10240
gpus = 0
network_mode = "public"
```

This is explanatory, not a paste-ready substitute for the current initializer and `docs/task-template.toml`. Older examples may show `allow_internet`; current static checks reject explicit legacy true/false settings. Use the current template's `network_mode = "public"` form when present.

## Artifact placement

`artifacts` belongs at the TOML root, before the first section. Each path is what Harbor transfers from the finished agent environment into the separate verifier. Use an absolute string path for a simple file/directory or a table only when source/destination/exclusion/service collection is genuinely necessary.

The verifier can read only declared artifacts, content baked into `tests/Dockerfile`, and persistent sidecar state explicitly collected or exposed. A misplaced `artifacts` key under `[verifier]` is silently scoped incorrectly and fails the separate-verifier checks.

## Resource sizing

Measure, then request. Set agent timeout for the actual expected horizon, verifier timeout for worst-case safe scoring, build timeout for a cold build, and memory/storage above measured peaks with a modest margin. Excessive resources reduce portability; insufficient resources create flaky false failures.

## Consistency checks

- Artifact paths exactly match instruction and produced outputs.
- Instruction timeout sentence matches agent timeout where required.
- `[task].name` is exactly `terminal-bench/<folder-name>`.
- `schema_version` matches current initializer output.
- Category is one of the seven exact values and subcategory is nonempty.
- GPU count and type match actual Docker/runtime requirements.
- The task does not disable internet; internet restriction is not a valid difficulty mechanism.
- Author identity, organization, and disclosure are truthful and consistent with proposal.
- No unknown convenience fields are added; use README or `authoring/` for narrative evidence.
