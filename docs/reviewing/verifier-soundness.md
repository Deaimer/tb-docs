---
title: Verifier soundness
description: Determine whether passing means the requested work was actually completed.
---

<div className="source-line"><strong>Core question:</strong> can a materially wrong solution pass?</div>

Soundness is not established by code review alone. Execute adversarial cases.

## Review each layer

### Parsing

Try missing, empty, truncated, duplicate, huge, NaN/Inf, wrong-type, and malicious path/archive inputs. Fail closed with controlled resource use.

### Coverage

Map every “must” in the instruction to a discriminating assertion. Mixed end-to-end fixtures do not isolate a named rule if other differences can cause the same failure.

### Semantic correctness

Construct the strongest plausible wrong answer: a shortcut method, constant predictor, leaked baseline, wrong unit, incorrect boundary convention, or result optimized only for visible examples. It must fail for the right reason.

### Completeness

Run at least one independently produced valid result. The verifier must not demand Oracle-specific bytes, ordering, metadata, or intermediates absent from the contract.

### Thresholds

Demand evidence that the pass boundary separates acceptable and unacceptable work and remains stable across supported hardware. Check exact boundary semantics.

### Reward path

Ensure exceptions and partial test failures cannot accidentally emit success, reuse an old reward, or skip critical tests. Verify the final reward aggregates components as documented.

## Minimum adversarial corpus

NOP, empty, schema-valid random, partial, duplicate, practice-copy, near-threshold wrong, wrong-method, symlink, oversized, and mutated-Oracle artifacts. Add task-specific attacks discovered during review.
