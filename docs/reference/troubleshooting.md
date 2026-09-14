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
| Verifier crashes on bad output | unsafe parsing and uncaught exceptions | validate structure first; fail closed and emit reward |
| Flaky numeric result | seeds, thread reductions, thresholds | seed/control parallelism; justify tolerance |
| Agent cannot start | UID, shell, path, service readiness | reproduce with harness identity and health checks |
| CI rejects metadata | stale template or invented field | regenerate/compare with target repo template |
| Science proposal feels generic | no real workflow or scientific decision | name practitioner, data, assumptions, method choices, evidence |

## Handbook failures

```bash
npm ci
npm run build
```

- Broken-link errors: use the local route without `.md`, or correct the upstream URL.
- Duplicate route: remove a page under `src/pages` that conflicts with docs at `/`.
- Search plugin errors: ensure package and Docusaurus major versions are compatible.
- Cloudflare 404 on direct route: serve the generated static route files and keep `trailingSlash`/redirect behavior consistent.
- Site is publicly reachable: Pages deployment succeeded but Access policy is missing or bypassed; treat as a security incident and restrict the hostname immediately.

## Escalation packet

Include exact command, commit, full error, first failing layer, expected behavior, minimal reproduction, environment versions, and what you already ruled out. Screenshots alone are rarely enough.
