---
title: Private deployment runbook
description: Cloudflare Pages and Access setup for terminalbench.deaimer.com.
sidebar_class_name: hidden
---

<div className="source-line"><strong>Target:</strong> <code>terminalbench.deaimer.com</code> · <strong>Repository:</strong> private Deaimer organization repo</div>

## Security order

1. Create the private GitHub repository and protect `main`.
2. Create the Cloudflare Pages project without advertising the custom hostname.
3. Add `terminalbench.deaimer.com` to Cloudflare Pages.
4. Create a Cloudflare Zero Trust Access self-hosted application for the exact hostname.
5. Add a deny-by-default policy and explicit allow rules for approved Deaimer identities.
6. Test anonymous, allowed, and denied sessions separately.
7. Only then treat the hostname as production.

Repository privacy does not protect the deployed website. Cloudflare Access is the access-control layer.

## GitHub secrets

Add environment-scoped `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Give the token only the account/project permissions required to deploy Pages. Protect the `production` environment if organizational policy requires review.

## Branch controls

Require pull requests, CI success, resolved conversations, and at least one reviewer for `main`. Disable direct pushes for ordinary contributors. Treat documentation policy changes like code: source pin, diff, review, and changelog.

## Access test

- Anonymous request redirects to Access and never serves content.
- Approved identity receives the portal.
- Unapproved identity is denied.
- Preview deployments are Access-protected or disabled for sensitive branches.
- An alternate Pages hostname cannot bypass the protected custom domain.
