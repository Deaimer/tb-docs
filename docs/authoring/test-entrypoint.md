---
title: Build tests/test.sh and CTRF
description: Trusted verifier entry point, binary reward, CTRF reporting, and untrusted-code isolation.
---

# Terminal-Bench: `tests/test.sh`

`tests/test.sh` is the trusted verifier entry point. The separate verifier image already contains the tests, fixtures, pytest, and CTRF plugin. It receives declared artifacts after the agent container has been destroyed.

## Parse-only verifier pattern

When tests only parse or recompute from agent-produced data and never import or execute agent code, a minimal pattern is:

```bash
#!/usr/bin/env bash
set -u

mkdir -p /logs/verifier
chmod 700 /logs/verifier

set +e
python -m pytest \
  --ctrf /logs/verifier/ctrf.json \
  /tests/test_outputs.py -rA
status=$?
set -e

if [ "$status" -eq 0 ]; then
  printf '1\n' > /logs/verifier/reward.txt
else
  printf '0\n' > /logs/verifier/reward.txt
fi
```

Do not install anything here. All verifier dependencies belong in `tests/Dockerfile` with supported version pins.

## When tests execute agent code

Importing a submitted Python module, starting a submitted binary, or invoking a submitted CLI is untrusted execution. Before it runs:

1. Root creates `/logs/verifier` and makes it mode `700`.
2. The child drops supplementary groups, UID/GID, privileges, and capabilities.
3. Root captures output into bounded temporary files rather than an indefinitely open pipe.
4. Root applies time/process/memory limits and kills the child's process group afterward.
5. The unprivileged process writes CTRF to a writable temporary path.
6. Root copies the completed CTRF report to `/logs/verifier/ctrf.json`.
7. Root alone translates the trusted exit status into reward `0` or `1`.

Running pytest as root while it imports an agent module is unsafe: import-time code can terminate or monkey-patch the verifier and background processes can race the reward writer.

## Failure classes

| Event | Treatment |
|---|---|
| Agent artifact is wrong or malformed | Controlled reward `0`, with diagnostic test result |
| All required tests pass | Reward `1` |
| Artifact collection failed or required evidence never arrived | Infrastructure/verifier error; do not disguise as a normal zero |
| Test harness crashes before reaching a trustworthy verdict | Infrastructure/verifier error |

The reward is always binary. Similarity scores, pass ratios, speedups, or sub-scores may be emitted to CTRF/stdout, but must be thresholded before the final reward is written.

## CTRF integrity

After a run, verify `/logs/verifier/ctrf.json` exists, parses, contains every expected named test, and reports statuses consistent with the process exit code. A task must not pass because pytest collected zero tests or because a partial report omitted a critical case.
