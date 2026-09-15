---
title: Complete implementation rubric
description: Human checklist for all current Terminal-Bench implementation criteria.
---

# Terminal-Bench: Complete implementation rubric

The automated rubric is a first-pass signal. A human reviewer must independently evaluate every criterion below.

## Idea and contract

1. **Verifiable:** deterministic, efficient, reliable programmatic decision.
2. **Solvable:** working Oracle; prepared expert can implement within reasonable time/resources.
3. **Difficult:** requires genuine professional or domain expertise.
4. **Interesting:** authentic, valuable computer work rather than a gimmick.
5. **Outcome verified:** grade the end state, not a mandated procedure.
6. **Essential difficulty:** failures come from reasoning, not formatting or arbitrary precision.
7. **Novel:** cannot be solved by memorizing a textbook or widely copied answer.
8. **Agentic:** requires exploration, tool use, debugging, and multiple terminal interactions.
9. **Instruction concision:** human-written, clear, absolute paths, no solution hints or fluff.
10. **Test–instruction alignment:** every graded behavior is public and every material requirement is tested.

## Implementation and reproducibility

11. **Functional verification:** execute behavior; do not primarily grep source strings.
12. **Deterministic/reproducible:** pin pinnable dependencies and avoid mutable task-relevant services.
13. **Solution quality:** legitimate, understandable, robust, and aligned with the instruction.
14. **Separate verifier configured:** correct mode, artifacts, verifier image, test copy, and directories.
15. **Environment hygiene:** reproducible agent image with no solution/test leakage.
16. **Structured-data schema:** validate types, shapes, IDs, duplicates, NaN/Inf, bounds, and size.
17. **Resource configuration:** measured timeouts/CPU/RAM/disk/GPU; reasoning rather than compute creates difficulty.
18. **Artifact efficiency:** transfer only agent-produced evidence; bake fixed pristine data into the verifier.
19. **No extraneous files:** every file is required or an allowed license/scaffold file.
20. **Valid TOML schema:** no invented or silently ignored fields.

## Security and grading integrity

21. **Anti-cheat robustness:** no answers in agent-visible inputs or image layers; resist wrappers and poisoning.
22. **Task security:** no exfiltration, host escape, destructive behavior, obfuscation, prompt injection, or supply-chain attack.
23. **Verifier execution isolation:** agent-produced code executes unprivileged; root alone controls reward.
24. **CTRF reporting:** discrete tests write `/logs/verifier/ctrf.json`.
25. **Do-not-modify enforcement:** every protected artifact constraint is actually verified.
26. **Binary reward:** every reachable reward write is exactly `0` or `1`.

## Metadata and reviewer clarity

27. **Reviewable:** a non-specialist can trace correctness; specialized expected values are derived and explained.
28. **Typos:** paths, names, units, and prose are internally consistent.
29. **Difficulty explanation quality:** identifies the authentic crux and agrees with trials.
30. **Solution explanation quality:** accurately summarizes the reference approach.
31. **Verification explanation quality:** accurately describes coverage and false-positive resistance.
32. **Category and tags:** represent the primary evaluated skill.
33. **Task name:** concise, descriptive, unique, and within slug rules.
34. **Task README:** useful human context with the required headings.
35. **Expert time estimate:** nonzero, plausible best-case time for a fully prepared expert.

For each failure, cite the exact file or observed behavior, provide a reproduction, explain impact, and state the acceptance condition. Do not approve based only on Oracle/NOP or an automated rubric score.

Source: [official implementation rubric](https://github.com/harbor-framework/terminal-bench/blob/main/docs/prompts/task-implementation.toml).
