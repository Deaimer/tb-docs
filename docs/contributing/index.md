---
title: Contribution workflow
sidebar_position: 1
---

# Benches contribution workflow

The repository uses three long-lived branches:

- `main`: published, owner-controlled documentation;
- `authors`: integration base for author changes;
- `reviewers`: staging area for reviewed changes.

Contributors create personal branches; they do not work directly on the shared branches.

```text
author/<name>/<topic> → authors → review/<name>/<topic> → reviewers → main
```

Only the repository owner performs the final merge to `main`. Branch protection in GitHub Settings enforces this; the branch names alone do not create permissions.
