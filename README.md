# Terminal-Bench Authoring Manual

`tb-docs` is Deaimer's detailed, Terminal-Bench-only handbook for authors,
reviewers, and repository maintainers. It covers task initialization, the task
contract, environment construction, Oracle and NOP runs, verifier design,
submission, review, and controlled merging into the private dataset repository.

## Local development

```bash
npm ci
npm run start
```

Open `http://localhost:3000/tb-docs/`.

## Validate a documentation change

```bash
npm run typecheck
npm run build
```

## Publishing

Changes are submitted through a pull request. Only the repository owner merges
to `main`. A successful merge triggers the GitHub Pages deployment workflow.
