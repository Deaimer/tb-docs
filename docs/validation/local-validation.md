---
title: Local validation loop
description: A repeatable build-run-inspect cycle before CI or agent trials.
---

<div className="source-line"><strong>Authority:</strong> Harbor CLI and repository checks · <strong>Always confirm:</strong> <code>harbor --help</code></div>

## Work from clean state

```bash
git status --short
docker version
harbor --version
harbor run --help
```

Use the target repository’s documented command or CI wrapper when it differs from the generic Harbor examples below.

## Validation order

1. Run static structure, metadata, canary, Dockerfile, and instruction checks.
2. Build from a cold cache when validating reproducibility.
3. Run Oracle; inspect logs, artifacts, reward, and timing.
4. Run NOP from a separate clean state.
5. Run crafted positive and negative artifacts directly against the verifier harness.
6. Repeat the critical cases.
7. Only then spend compute on frontier-agent trials.

Typical runs:

```bash
harbor run -p tasks/my-task -a oracle
harbor run -p tasks/my-task -a nop
harbor check tasks/my-task -r docs/prompts/task-implementation.toml
```

For interactive debugging:

```bash
harbor tasks start-env -p tasks/my-task -e docker -a -i
```

This starts the agent environment; it does not mount the Oracle or hidden verifier material. Use it to inspect paths, services, permissions, and dependencies, then exit and rerun validation in a new clean job.

## Inspect more than reward

Check the artifact tree, exact output bytes/schema, verifier stdout/stderr, per-test results, resource use, and container lifecycle. A reward of 1 can conceal untested requirements. A reward of 0 can be infrastructure failure rather than correct rejection.

## Clean-run checklist

- No task output exists before agent start.
- No local bind mount exposes the repository or solution unexpectedly.
- Environment image rebuilds without workstation caches or credentials.
- The command succeeds under the intended architecture and UID.
- Test failures still emit a valid result rather than crash the grader.
- Job artifacts are sufficient for another reviewer to diagnose the verdict.
