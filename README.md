# Deaimer Terminal-Bench Authoring Handbook

Private, source-traceable Docusaurus portal for Terminal-Bench and Terminal-Bench-Science authors and reviewers.

## Local development

```bash
npm ci
npm run start
```

Production validation:

```bash
npm run typecheck
npm run build
npm run serve
```

Source pins are recorded in `docs/reference/source-registry.md`. This is an internal Deaimer handbook; upstream repositories and maintainer decisions remain authoritative.

Static output is `build/`. Production targets Cloudflare Pages at `terminalbench.deaimer.com`, protected by Cloudflare Access. Required GitHub Actions secrets are `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
