# Discovery & Places Requirements

## Scope
Discover tourist attractions, restaurants, cafes, food venues, entertainment venues and activities.

## Functional flow
1. User selects category, destination/area or enters keyword.
2. Search provider returns candidates with provider ID and source metadata.
3. User filters by supported criteria (category, price range, rating, distance, open status).
4. Detail page shows available name, description, address, map, photos, hours, price, rating, contact and source/fetched time.
5. User saves favorite, shares place, or adds it to a trip/day.
6. User may submit a correction/report; moderation rules apply.

## Stories
- As a traveler, I want to discover popular places by destination/category so I can find trip ideas.
- As a traveler, I want to filter restaurants by cuisine and budget so I can choose suitable meals.
- As a traveler, I want to see entertainment options by type/age/price where available.
- As a traveler, I want to inspect data source and freshness so I can judge reliability.
- As an Organizer, I want to add a discovered place to a day in the itinerary.
- As an Admin, I want to curate categories and internal editorial collections.

## Acceptance criteria
- Search supports empty/loading/success/no-result/error states.
- Results only show fields returned by provider or curated internally.
- Missing rating, price or opening hours are not fabricated.
- Stale data is labeled; provider IDs are retained for refresh/deduplication.
- Add-to-trip requires membership permission and valid trip date.
- Admin edits are audited and do not overwrite provider-owned source facts without provenance.

## Business rules
- Category taxonomy and "trending" ranking are PO decisions.
- "Popular/hot" must have a defined metric (views, saves, provider popularity or editorial curation); do not imply live trend without data.
- Reviews are provider-sourced or user-generated and must be labeled separately.
- Image/media licensing and attribution must be honored.
- Location permission is optional; manual destination search remains available.

## Admin curation fields
Category, destination, editorial title, place reference, display rank, publish window, status, language, creator, updated_at, source and audit history.

## Dependencies/open questions
Provider selection, data license, API quota/cost, geographic coverage, rating policy, moderation, editorial workflow and search ranking.