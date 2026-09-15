---
title: Agent trials and failure analysis
description: Measure intended difficulty and separate capability gaps from task defects.
---

<div className="source-line"><strong>Purpose:</strong> difficulty evidence, not verifier proof</div>

Run trials only after deterministic Oracle, NOP, positive, negative, and leakage checks pass.

## Trial protocol

Record agent/model version, harness version, task commit, runtime settings, network mode, seed or sampling settings, timeout, reward, and trajectory location. Do not pool runs from different task revisions as if they were identical.

```bash
harbor run -p tasks/example-task --agent AGENT_NAME -m PROVIDER/MODEL
harbor analyze PATH_TO_JOB \
  -m sonnet \
  -r docs/prompts/trial-analysis.toml \
  --job-prompt docs/prompts/trial-analysis-job.txt
```

## Analyze trajectories

For each run, mark:

1. Did the agent parse the contract correctly?
2. Did it inspect the right inputs and environment?
3. Was its plan valid for the task's technical domain?
4. Where did implementation diverge?
5. Did it use feedback and recover?
6. Was failure caused by timeout, infrastructure, or verifier behavior?

The official analysis also reports task-specification problems, reward hacking, whether the observed failure matches the stated difficulty crux, refusals, and low-timeout failures. Any of those can invalidate a raw failure as evidence of meaningful difficulty.

Report the earliest causal failure, not merely the final test message.

## Interpreting pass rates

A task that all agents pass may still be valuable at a lower difficulty tier, but it does not meet a stated frontier-hard goal. A task that no agent passes may be excellent or broken. Use reviewer hints, expert replication, and failure clustering to distinguish them.

## Avoid benchmark overfitting

Do not generate dozens of arbitrary variants and submit the one that happens to defeat a model. Design from authentic work first, then measure. Task difficulty should survive model updates because the underlying workflow remains substantial.
