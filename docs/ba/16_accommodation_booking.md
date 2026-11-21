# Accommodation & Booking Requirements

## User-selected direction
Support **both** external-provider booking journeys and in-app booking where a provider API/contract actually supports it. This is a product direction, not confirmation that any OTA has granted access.

## Search requirements
Search by destination, check-in/out, guest/room count, budget, property type, amenities and supported rating filters. Validate check-out after check-in and guest constraints. Results show property, room/offer, total price, currency, taxes/fees where supplied, cancellation terms, provider and fetched_at/expiry.

## Two booking paths
### Path A – affiliate/deep link
1. User selects offer.
2. TravelGo shows provider, price timestamp and key terms.
3. User proceeds to provider website/app.
4. TravelGo records referral/click only if permitted.
5. Booking confirmation is not assumed unless provider callback/attribution confirms it.

### Path B – in-app booking
1. User selects a provider-supported offer.
2. Backend revalidates availability/price.
3. User enters guest details and reviews total/cancellation policy.
4. User explicitly confirms booking.
5. Backend creates provider booking using idempotency key.
6. Store provider reference and status; handle payment according to provider model.
7. Query/reconcile status on timeout or webhook.
8. Show confirmed only after authoritative provider confirmation.

## Stories
- As traveler, I can search accommodation for dates and guest count.
- As traveler, I can compare offers and cancellation conditions.
- As traveler, I can continue to external provider to complete booking.
- As traveler, I can complete an in-app booking when supported by the provider.
- As Organizer, I can attach confirmed booking details to the trip.
- As traveler, I can view booking reference, status and cancellation terms.

## Acceptance criteria
- Date/guest validation before search.
- Every offer includes provider and freshness metadata.
- Total price and cancellation terms shown when returned; unknown items explicitly labeled.
- Click-out is labeled external; no false booking confirmation.
- In-app booking requires provider capability and server-side confirmation.
- Timeout/unknown status is reconciled before retry; duplicate bookings prevented.
- Cancellation/refund status follows provider response and is auditable.

## Business rules / exclusions
- Inventory, rates and availability are not guaranteed until provider confirmation.
- TravelGo must not invent offers or represent cached offer as live.
- Cancellation windows, fees, taxes and guest policies are provider-specific.
- No manual admin editing of confirmed provider booking state; use reconciliation/support workflow.
- Booking provider, affiliate terms, commission, coverage, support and legal obligations require PO/legal/Tech Lead decision.

## Open questions
Which provider(s)? Which market/property coverage? Is payment collected by OTA or TravelGo merchant account? Who handles customer support, cancellation, refund, invoice/tax and disputes?