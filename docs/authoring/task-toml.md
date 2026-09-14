---
title: Configure task.toml
description: Metadata, artifacts, timeouts, resources, networking, and track-specific schema.
---

<div className="source-line"><strong>Authority:</strong> target repository template, then Harbor schema · <strong>Rule:</strong> never invent fields</div>

Initialize from the target repository’s current metadata template. Similar-looking TOML from another benchmark version is not interchangeable.

## Regular Terminal-Bench shape

The pinned regular guide shows top-level artifacts and sections for metadata, verifier, agent, and environment:

```toml
artifacts = ["/app/output.json"]

[metadata]
author_name = "Full Name"
author_email = "name@example.com"
author_organization = "Organization"
category = "Software"
subcategory = "..."
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
allow_internet = true
```

This is explanatory, not a paste-ready substitute for `docs/task-template.toml`.

## TB-Science differences

The pinned science guide uses Harbor schema `1.4`, a `[task]` section with a namespaced task name and publication metadata, plus required science metadata including relevant experience. Copy the live root `task-template.toml`. The task name must follow the current `terminal-bench-science/<folder-name>` convention.

## Resource sizing

Measure, then request. Set agent timeout for the actual expected horizon, verifier timeout for worst-case safe scoring, build timeout for a cold build, and memory/storage above measured peaks with a modest margin. Excessive resources reduce portability; insufficient resources create flaky false failures.

## Consistency checks

- Artifact paths exactly match instruction and produced outputs.
- Instruction timeout sentence matches agent timeout where required.
- Category/path/namespace match the chosen track taxonomy.
- GPU count and type match actual Docker/runtime requirements.
- Internet policy matches upstream rules.
- Author identity, organization, and disclosure are truthful and consistent with proposal.
- No unknown convenience fields are added; use README or `authoring/` for narrative evidence.
