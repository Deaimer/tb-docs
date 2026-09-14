---
title: Build the environment
description: Reproducible containers, inputs, services, permissions, networking, and resource constraints.
---

<div className="source-line"><strong>Authority:</strong> Harbor task format and target repository checks</div>

The environment should expose everything needed to do the work and nothing that reveals how to pass.

## Dockerfile discipline

Pin the base image and material dependencies. Combine package-index refresh with installation, delete package metadata, and use noninteractive installs. Do not depend on files outside the task’s Docker build context.

```dockerfile
FROM python:3.12-slim@sha256:REPLACE_WITH_VERIFIED_DIGEST

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

## Permissions

Run agent work without unnecessary root privileges. Ensure only required output directories are writable. Test behavior under the same UID, mounts, and shell used by Harbor. A task that works only in an interactive root shell is not ready.

## Build reproducibility

Test with a cold cache and, where feasible, on the target architecture. Record image size and build duration. Rebuild periodically: tags move, package repositories retire artifacts, and external URLs disappear.
