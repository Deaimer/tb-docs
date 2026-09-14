---
title: Prerequisites
description: Accounts, local tooling, hardware, and access needed before task development.
---

<div className="source-line"><strong>Authority:</strong> upstream contribution guides and Harbor docs · <strong>Verified:</strong> 2026-09-13</div>

## Accounts and access

- A GitHub account able to fork the selected upstream repository and open pull requests.
- Discord access for early feedback and project announcements. Discord discussion is useful, but the proposal form or PR remains the durable review record.
- For TB-Science, a real named author with a reachable email, GitHub identity, professional profile, academic profile where available, and disclosed affiliation or conflicts.
- Access to any dataset used by the task, with license terms that permit benchmark redistribution or deterministic retrieval.

Do not invent publications, affiliations, reviewer relationships, or experience. An independent contributor may say **Independent Researcher**. A medical doctor can be relevant for a medicine task when the workflow genuinely falls within their training or practice; the named task author must understand, validate, and remain accountable for the task.

## Local tools

```bash
# Harbor CLI
uv tool install harbor
harbor --version

# Container runtime
docker version
docker ps

# Source control
git --version
```

Use a current Harbor version that produces the schema expected by the target repository. The TB-Science guide notes that Harbor 0.21 emits schema `1.4`; the repository’s current template is the authority for metadata fields.

## Hardware planning

Start from the smallest setup that runs reliably. Measure peak memory, disk, build time, Oracle time, verifier time, and total agent time. Avoid requiring a GPU unless GPU behavior is intrinsic to the task. Current regular Terminal-Bench guidance permits at most one H100 for GPU tasks; re-check before committing to that architecture.

Record large downloads and container layers. Review infrastructure may have different caching, architecture, or bandwidth than your workstation.

## Read before implementation

For the selected track, read the complete current:

1. `CONTRIBUTING.md`
2. proposal rubric
3. implementation/review rubric
4. task template
5. relevant CI checks
6. two or three recently merged tasks with similar mechanics

The nearby examples teach packaging. They do not prove your task idea is unique, difficult, or scientifically valid.
