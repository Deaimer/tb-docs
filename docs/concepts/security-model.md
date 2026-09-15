---
title: Security and anti-shortcut model
description: Threat model for untrusted agent output, ground-truth protection, and networked environments.
---

<div className="source-line"><strong>Applies to:</strong> every Terminal-Bench task · <strong>Deaimer standard:</strong> adversarial review</div>

Assume the agent can inspect everything in its container, read process-visible configuration, search available networks, create unusual filesystem objects, and craft malicious artifacts. The verifier must treat its input as untrusted.

## Assets to protect

- Exact answers, hidden labels, seeds that reconstruct answers, and scoring fixtures.
- Verifier source when its logic reveals an easier proxy than the intended work.
- Tokens, credentials, private URLs, and cloud metadata.
- Host or sibling service access beyond the task contract.

## Typical shortcut classes

1. **Precomputed answer:** an output or cache is baked into the environment.
2. **Ground-truth leak:** labels or expected values are accessible through files, layers, packages, logs, or services.
3. **Verifier proxy:** tests check file presence, a magic string, or Oracle-specific implementation detail instead of semantics.
4. **Path escape:** symlinks or traversal cause the verifier to read privileged content.
5. **Resource attack:** a crafted payload exhausts memory/time or changes the scoring path.
6. **Network answer lookup:** task-specific solutions or endpoints expose the result.

## Review procedure

Inspect the final image, not only the Dockerfile. Search for solution filenames, expected values, credentials, test data, and shell history. The required canary is expected and is not an answer leak. Enumerate mounted paths and service networks. Run the verifier against hand-built adversarial artifacts. Terminal-Bench is open internet; never disable access merely to create difficulty, and never expose credentials or task-specific answers.

:::danger Never place secrets in Git history
Removing a secret in a later commit does not remove it from prior objects. Rotate the credential immediately and follow the organization’s history-remediation procedure.
:::
