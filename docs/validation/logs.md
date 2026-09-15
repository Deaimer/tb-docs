---
title: Read logs and results
description: Locate Harbor job evidence and separate valid verdicts from infrastructure failures.
---

# Terminal-Bench: Read logs and results

A reward alone is insufficient. Every validation claim must identify its job and underlying test result.

```bash
find PATH_PRINTED_BY_HARBOR -maxdepth 5 -type f -print | sort
du -sh PATH_PRINTED_BY_HARBOR
grep -RInE 'error|exception|traceback|failed|reward' PATH_PRINTED_BY_HARBOR
```

Read configuration, image builds, service health, agent execution, artifact collection, verifier entry point, `/logs/verifier/ctrf.json`, reward calculation, and cleanup—in that order.

- **Valid pass:** verifier completed and semantic checks passed.
- **Valid fail:** verifier deliberately rejected output and emitted zero.
- **Infrastructure failure:** build, runtime, transfer, verifier, or reward machinery failed.
- **Flake:** equivalent clean runs disagree.

Only valid passes and valid fails count as evidence. Confirm CTRF contains the expected test count and named cases rather than trusting a bare reward. Record date, task commit, Harbor version, full command, job identifier, reward, runtime, and notes. Do not publish secrets or private model reasoning from logs.
