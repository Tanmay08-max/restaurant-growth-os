# Restaurant Growth OS

Read docs/ before any task. Blueprint = screens S01–S30. Handbook = rules.
UI source of truth: prototype/index.html (match layout, colours, copy;
tokens are the CSS variables in its :root block).

## Stack
Web: Next.js + TypeScript + Tailwind (apps/web). Backend: NestJS + GraphQL
(apps/api). DB: PostgreSQL. Worker: apps/worker. Docker from the start.
Modular monolith. No microservices.

## Non-negotiable rules
- Money = integer paise, never floats. Store currency with amounts.
- Never trust client tenantId/outletId. Derive scope from the signed-in user.
- UI hiding is not security. Enforce RBAC and entitlements on the server.
- Unknown is not zero. Label metrics Measured / Estimated / Incomplete.
- Never claim net profit when costs are missing.
- Idempotency keys for orders, payments, billing, webhooks.
- Platform billing and diner payments are separate domains.
- Never log passwords, tokens, OTPs or card data.
- The prototype has fake data and demo prices. NEVER copy demo values
  into production code or seed data.
- Plan prices, trial length and feature matrix are OPEN (docs/decisions.md).
  Do not invent them. Ask me.

## Workflow per task
1. Inspect the repo, then propose a file plan BEFORE editing.
2. Implement the smallest complete change plus tests.
3. Run lint, typecheck, tests, build and show real command output.
4. Summarize: files changed, migrations, API changes, open questions.