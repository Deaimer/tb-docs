---
title: Troubleshooting
description: Diagnose common build, run, artifact, verifier, CI, and deployment failures.
---

<div className="source-line"><strong>Method:</strong> identify the earliest failing boundary</div>

## Task failures

| Symptom | Check first | Typical fix |
|---|---|---|
| Build works locally, fails CI | cache, architecture, build context, moving tags | cold build; pin; copy required files; use supported syntax |
| Oracle produces file but verifier says missing | instruction path, `artifacts`, actual path | make all three identical absolute paths |
| Oracle and NOP both pass | baked/stale outputs, weak existence test | remove precomputed output; clean lifecycle; assert semantics |
| Valid alternate answer fails | Oracle-coupled ordering/format/tolerance | normalize only ungraded variation; test contract semantics |
| Verifier crashes on bad output | unsafe parsing and uncaught exceptions | validate structure first; return a controlled zero for an ordinary invalid artifact |
| CTRF is missing | pytest lacks `--ctrf`, path is wrong, or unprivileged test cannot write it | write to an allowed temp path and have root copy to `/logs/verifier/ctrf.json` |
| CI rejects task slug | folder contains more than three hyphen tokens | rename folder and `[task].name` together |
| CI rejects internet field | stale `allow_internet` example | regenerate from the current template; use its public network configuration |
| Flaky numeric result | seeds, thread reductions, thresholds | seed/control parallelism; justify tolerance |
| Agent cannot start | UID, shell, path, service readiness | reproduce with harness identity and health checks |
| CI rejects metadata | stale template or invented field | regenerate/compare with target repo template |
| Task proposal feels generic | no real operational workflow or decision | name the practitioner, data, assumptions, method choices, and evidence |

## Handbook failures

```bash
npm ci
npm run build
```

- Broken-link errors: use the local route without `.md`, or correct the upstream URL.
- Duplicate route: remove a page under `src/pages` that conflicts with docs at `/`.
- Search plugin errors: ensure package and Docusaurus major versions are compatible.
- GitHub Pages returns 404: confirm the repository is `tb-docs`, Pages uses GitHub Actions, and the deployment workflow completed on `main`.

## Escalation packet

Include exact command, commit, full error, first failing layer, expected behavior, minimal reproduction, environment versions, and what you already ruled out. Screenshots alone are rarely enough.
