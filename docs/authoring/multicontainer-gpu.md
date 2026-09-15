---
title: Multi-container and GPU tasks
description: When to use sidecars or a GPU and how to declare them safely.
---

# Terminal-Bench: Multi-container and GPU tasks

Use extra infrastructure only when it creates an authentic boundary the agent must interact with. Complexity that does not represent real work weakens the task.

## Multi-container design

Place the compose file under `environment/`. Use sidecars for databases, message brokers, APIs, traffic simulators, or protected backends that should not share the agent filesystem. Requirements:

- deterministic seed state and idempotent startup;
- health checks instead of fixed sleeps;
- only necessary ports and credentials exposed;
- named volumes, never host bind mounts;
- no solution or hidden test material in agent-visible services;
- explicit persistent state collection when the verifier needs it;
- fixed images or dependency versions where the ecosystem supports them.

If verifier evidence lives inside a service, use `[[verifier.collect]]` to copy a snapshot after the agent phase. The collector must delete stale output first, write to a temporary path, and atomically move it only after success. Missing collection is an infrastructure error, not a scoreable zero.

## GPU tasks

The current contribution guide limits contributed GPU tasks to one GPU and expects H100 compatibility:

```toml
[environment]
gpus = 1
gpu_types = ["H100"]
```

Canonical GPU strings currently include `T4`, `L4`, `A10`, `L40S`, `A100-40GB`, `A100-80GB`, `H100`, `H200`, `B200`, and `any`, but a valid schema value is not automatically allowed by the release policy. Obtain approval before building around a non-H100 type.

GPU difficulty must come from reasoning, implementation, or optimization—not merely spending more compute. Record cold-build time, peak VRAM, system memory, disk, runtime, and deterministic tolerances.
