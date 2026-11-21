# Use Cases & Business Flows

## Core MVP
### UC-01 Create Trip
Actor: authenticated user. Enter trip name, destination, dates, currency and optional budget; validate; create owner-linked trip.

### UC-02 Build Itinerary
Actor: Owner/Editor. Select trip day; search/select place or add custom activity; set time/note; save and reorder. Reject out-of-trip date or unauthorized edit.

### UC-03 Discover Place
Actor: User. Search category/keyword/area; filter; inspect source/freshness, price/rating/hours where available; save favorite or add to trip.

### UC-04 Invite Member
Actor: Organizer. Create invite via approved channel; recipient authenticates/accepts; membership and role become active. Revocation invalidates access.

### UC-05 Vote on Plan
Actor: Organizer/Editor creates poll; members vote according to poll rule; poll closes; result shown; Organizer records final decision. One vote per eligible member unless multi-select explicitly enabled.

### UC-06 Create Group Fund
Actor: Organizer. Set target contribution, currency, due date and eligible members; system creates obligations. Organizer records manual contributions with evidence/reference and status.

### UC-07 Record Expense & Split
Actor: Organizer. Enter amount, category, payer, date, participants and split method; validate shares sum to total; update balances and audit log.

### UC-08 Settle Trip
Actor: Organizer. Review confirmed contributions/expenses and member balances; generate settlement summary; mark settled only after review. Refund/remaining-fund policy requires PO decision.

### UC-09 Generate AI Itinerary
Actor: User. Enter destination, dates, budget, preferences and constraints; AI returns draft with caveats/source metadata; user edits and confirms save. Failure/timeout must not create duplicate trip/items.

### UC-10 Notifications
System creates in-app notification for invitation, poll, schedule change, contribution due and itinerary reminders; user can manage preferences.

## Phase 2
### UC-11 Search Accommodation
User enters destination, check-in/out, guests and filters; provider returns offers; UI shows source, currency, timestamp and terms.

### UC-12 Book via External Provider
User selects offer; app opens tracked provider deep link; app records referral/click when permitted. Booking confirmation may be unavailable unless provider sends callback.

### UC-13 In-app Booking
User selects provider-supported offer; enters guest details; sees full price/cancellation terms; confirms; backend creates provider booking; persist provider reference/status; handle timeout/idempotency and reconciliation. Never claim confirmed if provider response is uncertain.

### UC-14 QR Contribution
Organizer creates contribution request; system generates provider-compatible QR/instruction; member pays externally; system reconciles webhook/statement or Organizer verifies manually; duplicate events are idempotent.

### UC-15 Offline Trip
User downloads trip package; app shows cached itinerary/places/booking references offline; stale state is labeled; sync on reconnect with conflict handling.

### UC-16 Travel Journal
Member adds notes/photos to trip day; permission and storage limits apply; share visibility follows trip role.

### UC-17 Location Sharing
Member explicitly opts in, chooses audience/duration, shares; can pause/stop; expiration deletes or stops live updates according to retention policy.

### UC-18 Image Place Search
User uploads/captures image; consent/permission and upload constraints checked; system returns possible matches with confidence; user confirms before saving.

### UC-19 Admin Operations
Admin signs in with elevated role; views dashboard; manages users/content/provider configuration; sensitive actions require confirmation and audit log.

## Exceptions / alternate flows
- Provider unavailable, stale data, quota exceeded, network timeout.
- Booking/payment response unknown: query provider status before retry; do not create duplicate.
- Payment pending/failed/cancelled/refunded.
- Poll closed or member not eligible.
- Expense shares do not equal total.
- Offline conflict between local and server changes.
- User revokes location/image permissions.
- Admin lacks permission or attempts prohibited action.

## Permission proposal
| Action | Organizer | Editor | Member | Viewer | Admin |
|---|---|---|---|---|---|
| View shared trip | Yes | Yes | Yes | Yes | Support access only with audit |
| Edit itinerary | Yes | Yes | TBD | No | No routine edit |
| Manage fund | Yes | No by default | No | No | Read/operational support, audited |
| Vote | Yes | Yes | Yes | Policy TBD | No |
| Share own location | Own consent | Own consent | Own consent | Own consent | No silent access |
| Admin console | No | No | No | No | Role-scoped |

Role matrix and member/child access remain PO decisions.