# Business Rules

> Baseline đề xuất; rules marked TBD require PO/legal/provider confirmation.

## Trip & collaboration
- BR-TRIP-01: End date >= start date.
- BR-TRIP-02: Each trip has one owner/Organizer at a time.
- BR-TRIP-03: Private trip data is visible only to authorized members.
- BR-TRIP-04: Permission checks run server-side; UI hiding is not authorization.
- BR-COL-01: Invite token is random, expiring, revocable and single-use or explicitly reusable by policy.
- BR-VOTE-01: Only active trip members can vote.
- BR-VOTE-02: Vote eligibility, single/multi-select and close time are stored with poll.
- BR-VOTE-03: Poll result is advisory; Organizer records final decision.

## Discovery & content
- BR-PLC-01: Provider-owned facts retain provider ID/source and fetched_at.
- BR-PLC-02: Price, opening hours, rating and availability show freshness where known.
- BR-PLC-03: Do not present provider data as verified by TravelGo unless verification process exists.
- BR-PLC-04: User-submitted content is moderated under a published policy.
- BR-IMG-01: Image match is a suggestion, not definitive identification; user confirms result.

## Booking
- BR-BOOK-01: Booking options are shown only when provider returns them.
- BR-BOOK-02: Price/availability may change until provider confirms booking.
- BR-BOOK-03: In-app booking requires approved provider API/contract and supported cancellation/refund flow.
- BR-BOOK-04: Booking state is based on provider response/status lookup, not client assertion.
- BR-BOOK-05: Store provider booking reference and terms snapshot where contract permits.
- BR-BOOK-06: Affiliate click-out is not a confirmed booking.
- BR-BOOK-07: Timeout/unknown response requires status reconciliation before retry.

## Fund, expenses & split
- BR-FUND-01: At most one active fund per trip unless PO approves multiple funds.
- BR-FUND-02: Only Organizer manages fund in baseline.
- BR-FUND-03: Equal contribution is default; eligible member set and exceptions must be explicit.
- BR-FUND-04: Organizer contribution obligation remains TBD.
- BR-FUND-05: Contribution statuses: due, partial, paid, pending_verification, failed, refunded, void.
- BR-FUND-06: Only confirmed contributions increase confirmed fund balance.
- BR-FUND-07: Shared expense is allocated only to selected participants.
- BR-FUND-08: Split shares must sum exactly to expense total after rounding adjustment.
- BR-FUND-09: Personal expense is excluded from group fund unless explicitly shared.
- BR-FUND-10: Balance = confirmed contributions − confirmed fund expenses − confirmed refunds/adjustments as ledger entries.
- BR-FUND-11: Confirmed financial entries are immutable; corrections use reversal/adjustment with audit.
- BR-FUND-12: End-of-trip surplus/deficit policy is TBD; do not auto-refund or collect extra without approval.
- BR-FUND-13: Every financial mutation has actor, timestamp, reason and audit record.

## Payment
- BR-PAY-01: Client never marks online payment successful by itself.
- BR-PAY-02: Backend verifies provider callback/signature and queries status when required.
- BR-PAY-03: Webhook/event processing is idempotent.
- BR-PAY-04: Pending/failed/cancelled transactions do not increase confirmed balance.
- BR-PAY-05: Refund references original transaction and has independent status.
- BR-PAY-06: Do not store raw card credentials or provider secrets in client.
- BR-PAY-07: TravelGo does not assume it may hold customer funds or operate a wallet; legal/provider model requires review.
- BR-PAY-08: QR transfer is not automatically confirmed unless provider/bank reconciliation supports it.

## Admin & privacy
- BR-ADM-01: Admin roles follow least privilege and separation of duties.
- BR-ADM-02: Sensitive admin actions require audit logs; high-risk actions may require re-auth/approval.
- BR-ADM-03: Admin access to private user data is purpose-limited and audited.
- BR-LOC-01: Location sharing is opt-in, audience-scoped, time-limited and stoppable.
- BR-LOC-02: Do not expose precise location to non-authorized members or admins by default.
- BR-OFF-01: Cached data is labeled with last sync time; server remains source of truth.
- BR-OFF-02: Offline edits must resolve conflicts; financial/payment actions are online-only.
- BR-AI-01: AI output is advisory and must be user-reviewed before persistence/action.
- BR-AI-02: AI must not invent live price, availability, hours or booking confirmation.
- BR-AI-03: Respect safety constraints and user preferences; expose uncertainty.

## Open decisions
Organizer contribution; member join/leave; children/exemptions; surplus/deficit; change contribution after payment; currencies/rounding; booking provider/cancellation; payment provider/legal model; admin role taxonomy; location retention; image retention; offline conflict policy; AI provider/cost/data retention.