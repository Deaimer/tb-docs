---
title: Prerequisites
description: Accounts, software, hardware, access, and knowledge required before Terminal-Bench development.
---

# Terminal-Bench: Prerequisites

## Accounts and permissions

- GitHub account using your real work identity.
- Accepted invitation to `Deaimer/terminal-bench-dataset`.
- Write permission for personal branches.
- Reviewer-team authorization before reviewing or merging into `reviewed`.
- Approved model-provider key only when running automated quality checks or agent trials.

Never commit or print API keys, tokens, passwords, private data, signed URLs, or credentials.

## Local software

- 64-bit Linux; macOS through Docker Desktop; Windows through WSL2.
- Git 2.40 or newer.
- Docker Engine/Desktop with the daemon running.
- Python 3.11 or newer.
- `uv`, Harbor CLI, and preferably GitHub CLI.
- At least 4 CPU cores, 16 GB RAM, and 40 GB free disk for ordinary tasks.

```bash
git --version
docker version
docker info
python3 --version
uv --version
harbor --version
gh --version
```

`docker version` must show Client and Server. Confirm disk and memory:

```bash
docker system df
df -h .
nproc
free -h
```

## Knowledge floor

Authors must understand the task’s professional domain, shell scripts, Dockerfiles, exit codes, permissions, Git branches, and how every verifier test maps to the instruction. Stop if the outcome cannot be checked programmatically, data rights are unclear, inputs require a private service unavailable to evaluation, or the agent can read a shipped answer.
