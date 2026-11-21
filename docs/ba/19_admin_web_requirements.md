# Admin Web Requirements

## Goal
Provide a secure operations console for TravelGo platform administration. Admin Web is full-scope product direction, but phase and exact role boundaries require PO approval.

## Roles (proposal)
- Super Admin: manage admin roles, platform configuration and high-risk operations.
- Content Admin: categories, destinations, editorial collections and moderation.
- Support Admin: inspect user/trip/booking/payment support context with masked sensitive fields.
- Finance/Ops Admin: reconciliation and transaction investigation; cannot silently rewrite ledger.
- Analyst: read-only aggregate reports.
Role names and separation of duties need PO/security approval.

## Functional modules
1. Dashboard: users, active trips, discovery usage, booking/payment health, incidents.
2. User management: search, status, account support, role/ban workflow with reason/audit.
3. Trip/content moderation: reported content, images, reviews and user submissions.
4. Catalog management: categories, destinations, curated collections, editorial ranking.
5. Provider management: provider enable/disable, credentials reference, sync jobs, quota/health.
6. Booking operations: search provider reference/status, reconcile, support notes; no arbitrary status override.
7. Payment operations: transaction lookup, webhook events, reconciliation, refund request workflow.
8. Reports: usage, funnel, booking conversion, payment reconciliation, moderation and operational KPIs.
9. RBAC: role/permission assignment, least privilege, optional approval for high-risk actions.
10. Audit/configuration: admin action logs, feature flags and controlled configuration.

## Stories
- As Super Admin, I can assign role-scoped admin access.
- As Content Admin, I can curate categories and featured places.
- As Support Admin, I can investigate reported user issue with limited PII.
- As Finance/Ops Admin, I can reconcile provider events against transactions.
- As Analyst, I can view aggregate reports without unnecessary personal data.

## Acceptance criteria
- Admin routes and APIs deny non-admin access server-side.
- Every privileged mutation logs actor, target, action, timestamp, reason and outcome.
- Sensitive fields are masked unless permission and purpose require access.
- High-risk actions require confirmation and optionally re-auth/second approval.
- Admin cannot delete/overwrite immutable payment or fund ledger records.
- Provider secrets are stored in secret manager; UI only shows masked status.
- Reports show data freshness and definitions.

## Open questions
Who can suspend users? Is dual approval required for refunds/role grants? Data retention? Export permissions? Support impersonation prohibited by default; if ever allowed it must be time-bound, consented where appropriate and audited.