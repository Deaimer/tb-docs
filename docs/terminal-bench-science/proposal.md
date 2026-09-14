---
title: Terminal-Bench-Science — Proposal
sidebar_position: 2
---

# Terminal-Bench-Science — Proposal dossier

Prepare these fields before building the task.

## Identity fields

Use the actual submitting author: name, email, affiliation, role, GitHub name, professional profile, academic profile, relevant domain experience, academic work, and optional Discord name.

If no institution applies, use “Independent Researcher.” If Deaimer sponsors or coordinates the work, disclose that relationship. A contributing doctor or scientist should be named only if they helped design, validate, and defend the scientific workflow.

## Scientific problem

State the scientific object, decision, and consequence. Explain why the computation matters and who performs it in practice. Avoid broad claims such as “this helps medicine.” Describe the operational setting: for example, quality-controlling a sequencing run, fitting a pharmacokinetic model, or estimating uncertainty in an imaging-derived measurement.

## Workflow details

Describe inputs, preprocessing, algorithms, intermediate representations, convergence or quality checks, and final outputs. Identify which decisions require expertise. Distinguish mandatory steps from one acceptable reference approach.

## Requirements

List exact software families and versions, CPU/GPU requirements, memory, storage, expected cold-build time, expected expert runtime, expected Oracle runtime, and verifier runtime. Explain why any GPU or unusually large dataset is necessary.

## Dataset

Record origin, version/date, license, checksum, size, inclusion/exclusion rules, preprocessing, missing-data handling, and whether data are public, synthetic, derived, or sensitive. Synthetic data require a generator, seed policy, parameter ranges, and evidence that the generated cases represent the intended phenomenon.

Never use identifiable patient data. Public clinical data still require license and privacy review.

## Evaluation strategy

Define observable outputs, scientific invariants, numerical tolerances, negative controls, and how correctness will be separated from superficial format compliance. Explain where independent ground truth comes from. If multiple scientific answers are valid, define property-based or range-based acceptance instead of an Oracle-byte comparison.

## Complexity

Estimate focused expert time and explain the source of difficulty: experimental design, model selection, multi-stage inference, numerical stability, domain-specific interpretation, or competing constraints. Do not manufacture difficulty through undocumented conventions, dependency failures, or insufficient compute.

## Conflicts

Disclose employment, contracting, vendor relationships, financial interests, close reviewer relationships, and dataset ownership. Write “None” only when that is accurate.
