# Product Backlog & Delivery Roadmap

> Priorities and phases are proposals. PO owns ordering; Developers estimate and select Sprint scope after refinement/capacity.

## Epics
EPIC-01 Identity & Profile; EPIC-02 Trip; EPIC-03 Itinerary; EPIC-04 Discovery; EPIC-05 Collaboration/Voting; EPIC-06 Budget/Fund/Split; EPIC-07 AI; EPIC-08 Booking; EPIC-09 Payment; EPIC-10 Admin Web; EPIC-11 Notification; EPIC-12 Offline; EPIC-13 Journal; EPIC-14 Location; EPIC-15 Image Search; EPIC-16 Security/Quality.

## MVP candidate backlog
| ID | User Story | Priority | Dependency |
|---|---|---|---|
| US-01 | As a user, I can sign in to manage trips | Must | Auth |
| US-02 | As Organizer, I can create/edit a trip | Must | schema/RLS |
| US-03 | As Organizer, I can invite members and assign baseline roles | Must | membership |
| US-04 | As member, I can view shared trip within permission | Must | RLS |
| US-05 | As user, I can search places/food/entertainment | Must | places provider |
| US-06 | As user, I can inspect source/freshness and save a place | Should | provider |
| US-07 | As Organizer, I can create day-by-day itinerary | Must | trip |
| US-08 | As member, I can vote on proposed places/plan | Should | poll |
| US-09 | As Organizer, I can set trip budget and fund target | Should | fund |
| US-10 | As Organizer, I can record contributions and expenses manually | Should | ledger |
| US-11 | As member, I can see my contribution/expense status | Should | membership |
| US-12 | As Organizer, I can split shared expense and view balances | Should | split rules |
| US-13 | As user, I can generate/edit an AI itinerary draft | Should | AI provider |
| US-14 | As user, I receive in-app trip/fund notifications | Should | notification |
| US-15 | As user, I can view map pins for trip places | Should | maps |

## Phase 2 backlog
US-21 Search accommodation and compare offers; US-22 click out to affiliate provider; US-23 book in-app when provider contract/API permits; US-24 manage booking status/cancellation; US-25 create QR contribution instructions; US-26 reconcile transfer/payment; US-27 Admin Web dashboard and user/role/content/provider operations; US-28 download offline trip; US-29 journal with media; US-30 opt-in time-bounded location sharing; US-31 image-based place search; US-32 push/email notifications.

## Phase 3 backlog
US-41 Multi-provider payment gateway and refund automation; US-42 advanced AI travel assistant; US-43 route and budget optimization; US-44 transport search/booking integrations; US-45 reviews/community with moderation; US-46 advanced analytics and personalization.

## Sprint 1 goal proposal
A signed-in user can create a trip, add itinerary items and persist data with authorization. Do not include booking/payment until core trip flow and security are stable.

## Suggested Sprint sequence
- Sprint 1: auth, trip CRUD, RLS, basic UI.
- Sprint 2: itinerary, discovery integration and map baseline.
- Sprint 3: membership/invites, vote, notification.
- Sprint 4: budget, fund manual entries, split calculation.
- Sprint 5: AI itinerary draft and quality/security.
Sprint length/capacity/estimate must be decided by team; sequence is illustrative, not commitment.

## Definition of Ready
Story has user/value, scope, acceptance criteria, dependencies, data/privacy impact, UX states, error cases and estimate.

## Definition of Done
Code reviewed; tests pass; RLS/permission tests pass; analytics/logging as needed; docs updated; acceptance criteria met; no known critical security issue; demoable increment.