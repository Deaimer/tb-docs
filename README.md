# Benches

Deaimer's documentation portal for three separate benchmark tracks:

- Terminal-Bench
- Terminal-Bench-Science
- SWE-bench

## Local development

```bash
npm ci
npm run start
```

## Validation

```bash
npm run typecheck
npm run build
```

## Branch model

- `authors`: author integration
- `reviewers`: reviewed staging
- `main`: owner-controlled publication

The production site is deployed by GitHub Pages after changes reach `main`.
