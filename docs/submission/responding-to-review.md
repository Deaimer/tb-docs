---
title: Respond to reviewer feedback
description: Resolve findings with focused changes, evidence, and clean review communication.
---

<div className="source-line"><strong>Goal:</strong> make every finding’s status and evidence unambiguous</div>

For each blocker or major finding, respond with one of:

- **Fixed:** link the commit, explain the changed contract/behavior, and provide the reproduction result.
- **Clarified:** quote the new instruction or documentation and show the verifier already matches it.
- **Rebutted with evidence:** provide a minimal counterexample, test, primary source, or traceability argument.
- **Accepted limitation:** only when the reviewer/maintainer explicitly agrees it does not block.

Do not answer a soundness concern only by showing the Oracle passes. Run the reviewer’s counterexample and add it as a regression test.

## Re-review packet

After a material change, provide:

1. concise change summary;
2. contract rows affected;
3. exact commands/results rerun;
4. whether difficulty or previous agent trials are invalidated;
5. new risks introduced.

Changing data, thresholds, instruction requirements, artifacts, or resource limits generally invalidates prior evaluation evidence. Treat it as a new task revision.

## Communication standard

Be direct and technical. Review comments are about benchmark validity, not personal competence. Resolve threads only when the stated acceptance condition is met or a maintainer closes the issue.
