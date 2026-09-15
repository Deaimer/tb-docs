---
title: Build the environment
description: Reproducible containers, inputs, services, permissions, networking, and resource constraints.
---

<div className="source-line"><strong>Authority:</strong> Harbor task format and target repository checks</div>

The environment should expose everything needed to do the work and nothing that reveals how to pass.

## Dockerfile discipline

Pin application/library dependencies where the ecosystem supports historical versions. Do **not** pin apt package versions: ordinary apt mirrors discard old point versions and CI rejects apt pins. Combine package-index refresh with installation, delete apt metadata, and do not depend on files outside the task’s Docker build context. Do not add `FROM --platform=...`; choose architecture-specific assets using `TARGETARCH` or `uname -m` when necessary.

```dockerfile
FROM python:3.12-slim

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
      git jq \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt
COPY input/ /app/input/
RUN mkdir -p /app/output && chown -R 1000:1000 /app/output
```

Use the exact numeric ownership form required by current cloud builders when `COPY --chown` is used. Validate on the benchmark’s CI, not only local Docker.

## Inputs

Use neutral filenames and paths. `hidden_answer.csv`, `gold_labels`, or a dataset folder named after the expected method leaks intent. Validate checksums for downloaded assets. Prefer distributing compact, licensed, immutable inputs in the build context when allowed.

## Multi-container tasks

Use services when the capability requires an authentic API, database, simulator, or isolation boundary. Give the agent only the documented interface. Seed service state deterministically. Add health checks. Ensure startup ordering does not depend on a fixed sleep. Keep databases and privileged service files off the agent filesystem.

## Agent privilege and threat model

Assume the agent runs as root inside its container. It can inspect the complete agent image, replace commands, alter `/app`, start background processes, and attempt to poison outputs. File permissions inside the agent image are not sufficient to hide ground truth. Keep solutions, tests, expected outputs, private fixtures, and privileged credentials out of the agent image entirely.

The separate verifier is the trust boundary. When it executes agent-produced code, that code must be dropped to an unprivileged user while the reward directory remains root-only.

## Build reproducibility

Test with a cold cache and, where feasible, on the target architecture. Record image size and build duration. Rebuild periodically: tags move, package repositories retire artifacts, and external URLs disappear. Never use bare `nproc` to size parallel work because it can expose the host count instead of the configured container CPU limit.
