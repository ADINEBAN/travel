# Delivery Roadmap & Phase Gates

> Roadmap is a proposal for planning, not a commitment to deliver every capability in one academic project. PO must select MVP scope against team capacity.

## MVP – validate core value
- Account/profile, trip CRUD, membership/invite.
- Discovery of places, restaurants, cafes and entertainment with provider metadata.
- Itinerary, map baseline and favorites.
- Vote basic.
- Budget, manual group fund, manual contribution verification, expense entry and split bill.
- In-app notifications.
- AI itinerary draft with human review.
- Admin minimum operational access may be needed internally, but full Admin Web is Phase 2.

**MVP exit gate:** end-to-end demo of create trip → discover/add places → collaborate/vote → itinerary → record contribution/expense → view balances; permission/security tests pass; provider source/freshness visible; no unresolved critical defects.

## Phase 2 – commerce and trip companion
- Accommodation search and compare.
- Affiliate click-out and in-app booking where provider contract/API supports it.
- QR payment instructions and reconciliation.
- Full Admin Web.
- Offline read-first, journal, opt-in location sharing, image search.
- Push/email notifications and booking status sync.

**Phase 2 gate:** provider contract and sandbox tested; cancellation/refund/support ownership documented; payment reconciliation and idempotency tested; admin RBAC/audit passed; privacy/retention approved.

## Phase 3 – advanced intelligence and scale
- Payment gateway and refund automation across supported providers.
- Full conversational AI assistant, route/budget optimization and alternatives.
- Transport integrations, advanced personalization/analytics, community/reviews.

**Phase 3 gate:** unit economics/provider cost validated; AI evaluation and safety thresholds met; operational monitoring/support staffed; legal and security review passed.

## Dependency and risk notes
- Booking in-app depends on OTA/provider API access, inventory, guest data, payment/cancellation support and commercial contract.
- QR/payment depends on bank/payment provider reconciliation, merchant onboarding and legal model.
- Admin full scope needs RBAC, audit, support policy and data governance.
- Offline editing requires conflict strategy; read-first is lower risk.
- Location sharing and image search require explicit consent, retention and access control.
- AI assistant requires grounded data, cost controls, privacy review and evaluation.

## Release planning
PO owns MVP scope and backlog ordering. Developers estimate and select work per Sprint. BA maintains traceability and open decisions. No story is committed to a Sprint until dependencies and acceptance criteria are clear.