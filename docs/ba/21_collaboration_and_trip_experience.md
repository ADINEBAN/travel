# Collaboration & Trip Experience

## Voting
Organizer/Editor creates poll for place, accommodation or schedule; sets options, close time and single/multi-select policy. Eligible members vote; poll result informs but does not automatically change trip.
AC: one eligible vote per poll under configured policy; closed poll rejects changes; Organizer confirms final selection.

## Notifications
In-app MVP for invitations, poll close, itinerary changes, contribution due and reminders. Phase 2 push/email where user consent and provider support exist.
AC: preferences respected; duplicate events deduplicated; notification deep link checks access; no sensitive financial details in lock-screen preview by default.

## Offline trip
Phase 2 read-first cache for itinerary, saved places, essential addresses and booking references. Show last-sync time and stale warning. Financial actions, booking and location updates require network.
AC: offline content opens without network; cache obeys permissions and expiry; sync conflict is surfaced and resolved; logout removes protected local data according to policy.

## Travel journal
Members add text/photo entries by trip/day; visibility is private/group/public only if policy supports. Media upload validates type/size and attribution.
AC: only authorized members can read group journal; owner can delete own entry subject to retention/moderation rules; upload failures can retry safely.

## Location sharing
Opt-in, audience scoped and time limited. User can pause/stop at any time. Show sharing indicator and expiration.
AC: no location sent before explicit consent; recipients are authorized members; expired/stopped share no longer updates; retention policy applied. No always-on background tracking by default.

## Image-based place search
User captures/uploads image; backend analyzes image and returns candidate place matches. Show confidence and why candidate may match; user confirms.
AC: permission, file size/type, malware/content checks; upload secured; low confidence shows no-match/ask location; delete image according to retention policy.

## Stories
- As member, I can vote on trip options.
- As member, I can receive relevant reminders.
- As traveler, I can view trip information offline.
- As member, I can record memories with photos.
- As member, I can share live location temporarily with my group.
- As traveler, I can search for a place using a photo.