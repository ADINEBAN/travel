# API & Integration Requirements

## API principles
- Client authentication + server-side authorization for every protected operation.
- REST/Edge Functions or backend service may be used; stack/provider choice needs Tech Lead confirmation.
- Use pagination, filtering, validation, rate limits, idempotency keys for money/booking.
- Normalize provider errors; never leak provider secrets.
- Webhooks must verify signatures, deduplicate event IDs and reconcile status.

## Domain API inventory (illustrative, not final routes)
| Domain | Operation | Input/output summary | Phase |
|---|---|---|---|
| Auth/Profile | register/login/profile | identity/profile/preferences | MVP |
| Trips | create/list/get/update/archive | trip and membership | MVP |
| Members | invite/accept/revoke/change role | invite and member status | MVP |
| Places | search/detail/favorites | query, filters, source metadata | MVP |
| Itinerary | day/item CRUD/reorder | trip/day/item | MVP |
| Polls | create/options/vote/close/result | poll state and votes | MVP |
| Funds | create/fund members/contribution/expense | fund ledger | MVP |
| Split | calculate/save shares/settlement | participants, shares, balances | MVP |
| AI | generate draft/chat | constraints, structured draft, caveats | MVP/Phase 3 |
| Notifications | list/read/preferences | notification state | MVP |
| Accommodation | search offers/property details | dates, guests, filters | Phase 2 |
| Booking | create/get/cancel/status sync | offer, guest data, provider ref | Phase 2 |
| Payment | create instruction/QR/status/refund | amount, currency, transaction status | Phase 2/3 |
| Admin | dashboard/users/content/providers/audit | role-scoped operations | Phase 2 |
| Offline | download/sync/conflict resolution | version/cursor/delta | Phase 2 |
| Journal | CRUD/media upload | trip/day/journal | Phase 2 |
| Location | start/update/stop/expire share | consent, audience, TTL | Phase 2 |
| Image search | upload/match/confirm | image token and candidates | Phase 2 |

## Example endpoint shapes (subject to architecture)
- POST /trips; GET /trips; GET /trips/{tripId}
- POST /trips/{tripId}/members/invitations
- GET /places?query=&category=&lat=&lng=&radius=
- POST /trips/{tripId}/itinerary/items
- POST /trips/{tripId}/polls; POST /polls/{pollId}/votes
- POST /trips/{tripId}/funds; POST /funds/{fundId}/contributions
- POST /funds/{fundId}/expenses; POST /expenses/{expenseId}/shares
- POST /ai/itinerary-drafts
- GET /accommodations/offers?destination=&checkIn=&checkOut=&guests=
- POST /bookings; GET /bookings/{bookingId}; POST /bookings/{bookingId}/cancel
- POST /payments/instructions; GET /payments/{transactionId}
- POST /webhooks/{provider} (server-to-server only)
- GET /admin/dashboard; CRUD /admin/places, /admin/users, /admin/providers
- POST /trips/{tripId}/offline-package; POST /sync
- POST /location-shares; POST /location-shares/{id}/stop
- POST /image-search-jobs

## Integration candidates (provider selection TBD)
| Integration | Purpose | Key checks |
|---|---|---|
| Maps/Places | maps, geocoding, places, route | licensing, quota, cost, freshness |
| Accommodation/OTA | offers and booking | contract, inventory, cancellation, callbacks, affiliate |
| Payment provider/bank | QR, payment, refunds | merchant onboarding, signature, reconciliation, legal |
| AI provider | itinerary/chat/image understanding | privacy, cost, latency, safety, output schema |
| Push/email | notifications/invites | consent, deliverability, quota |
| Object storage | journal/image/offline media | access control, retention, CDN cost |

## Security and reliability
- Service role/provider secrets only on server.
- RLS and role checks on all records.
- Webhook signature + idempotency + replay protection.
- Booking/payment unknown state reconciled before retry.
- Audit financial/admin changes.
- Observability: request ID, provider latency/error, job status; redact PII.
- Define timeout/retry/backoff and circuit breaker per provider.
- Provider-specific API routes/contracts must be documented after selection.