# Acceptance Criteria – Baseline

Use Given/When/Then; QA should expand into positive, negative, boundary and permission tests.

## Trip & itinerary
- Given authenticated user, when valid trip dates/details are submitted, then trip is created and linked to owner.
- Given end date earlier than start date, when saving, then validation blocks save and explains the issue.
- Given a user without edit permission, when changing itinerary, then server rejects the request.
- Given a place result with source/fetched_at, when detail is shown, then source and freshness are visible where provided.

## Discovery
- Given keyword/category/area, when user searches, then results match supported provider filters.
- Given provider returns no results/error, then empty/error state and retry/fallback are shown.
- Given result lacks rating/price/hours, then UI does not invent or imply those fields.
- Given a user adds a place, then it is linked to the selected trip/day and remains editable.

## Vote
- Given active eligible poll, when member submits allowed vote, then vote is stored once and result count updates.
- Given closed poll or ineligible user, when voting, then action is rejected with reason.
- Given poll result, then it is not treated as final itinerary until Organizer confirms.

## Budget/fund/split
- Given Organizer creates fund with eligible members, then each obligation is generated according to approved rule.
- Given manual contribution is recorded, then status and evidence/reference are stored; pending verification is excluded from confirmed balance.
- Given expense split, then allocated shares equal expense total after rounding.
- Given an expense is edited/voided after confirmation, then system creates reversal/adjustment and audit history rather than deleting ledger history.
- Given trip is settled, then settlement report shows contributions, expenses, balances and unresolved items; surplus/refund behavior follows PO-approved policy.

## Booking
- Given provider offers, when user opens results, then currency, terms, provider and update time are shown where available.
- Given affiliate click-out, then app labels it as external booking and does not show confirmed status.
- Given in-app booking request succeeds at provider, then booking reference/status are persisted server-side.
- Given timeout/unknown provider response, then app shows pending verification and checks status before allowing a retry.
- Given provider does not support in-app booking, then the in-app purchase action is unavailable and click-out may be offered.

## Payment
- Given payment is pending/failed/cancelled, then fund confirmed balance is unchanged.
- Given valid verified payment event, then contribution is confirmed exactly once.
- Given duplicate webhook, then ledger is not incremented twice.
- Given refund, then refund is linked to original payment and reflected only after verified status.

## Admin
- Given non-admin user, when opening admin route/API, then access is denied server-side.
- Given admin performs sensitive mutation, then actor, action, target, timestamp and outcome are audited.
- Given admin role lacks permission, then mutation is rejected.
- Given admin views financial record, then financial ledger is not silently editable.

## Offline/location/journal/image/AI
- Given cached trip offline, then itinerary and saved booking references can be viewed with last-sync timestamp.
- Given offline financial action, then app blocks it and asks user to reconnect.
- Given location sharing is off/expired/stopped, then no new location is visible to recipients.
- Given user uploads image, then validation/consent applies and matches are labeled as suggestions with confidence when available.
- Given AI returns draft, then user can edit/reject; no booking/payment action occurs without explicit confirmation.
- Given AI/provider failure, then user receives clear error/fallback and no duplicate records are created.