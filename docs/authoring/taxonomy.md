---
title: Choose category and subcategory
description: Exact Terminal-Bench taxonomy and classification rules.
---

# Terminal-Bench: Taxonomy

`category` is a closed, case-sensitive list. `subcategory` is required and currently open-ended, but authors should reuse the closest official value. Classify the primary skill being evaluated, not the language or incidental tool.

| Category | Common official subcategories |
|---|---|
| `Science` | Biology, Chemistry, Physics, Earth, Robotics, Math, Linguistics |
| `Software` | Algorithms, Systems, Databases, Data engineering, Frontend, Languages |
| `ML` | Training, Inference, Evaluation, Kernels |
| `Operations` | Finance, Logistics, Supply chain, Claims, Compliance, Marketing |
| `Security` | Cryptography, Reverse engineering, Forensics, AppSec |
| `Hardware` | CAD, RTL |
| `Media` | Music, Design |

A finance workflow written in Python remains `Operations / Finance`; Python and Docker do not make it `Software`. A serving optimization task is normally `ML / Inference`. A compiler repair is `Software / Languages`.

Use concise technical tags such as `postgresql`, `event-time`, `cuda`, or `incident-response`. Tags supplement the taxonomy and must not contradict it.

Adding a new top-level category is exceptional and requires maintainer discussion plus coordinated CI and chart changes. A new subcategory should be broad enough for future reuse.

Source: [official taxonomy](https://github.com/harbor-framework/terminal-bench/blob/main/docs/TAXONOMY.md).
