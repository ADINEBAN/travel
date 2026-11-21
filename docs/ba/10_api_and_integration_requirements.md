# API & Integration Requirements

## Nguyên tắc
CRUD đơn giản có thể dùng Supabase SDK/PostgREST. Edge Functions cho logic cần bảo vệ secret, webhook hoặc tích hợp. NestJS không bắt buộc nếu chưa có nhu cầu riêng.

## Business operations
| Operation | Input | Output | Permission |
|---|---|---|---|
| Create trip | title, destination, dates, budget? | trip id/detail | Auth |
| List trips | user context | owned/joined trips | Auth |
| Update trip | trip id + fields | updated trip | Owner/editor |
| Add itinerary item | day id, title, place?, time?, note? | item | Owner/editor |
| Create fund | trip id, contribution amount, due date | fund | Organizer |
| Record contribution | fund member, amount, method, reference | status | Organizer |
| Add expense | fund id, title, amount, category, date | expense | Organizer |
| Settle fund | fund id, confirmation | report | Organizer |
| Generate itinerary | destination, dates, budget, preferences | draft | Auth + quota |

## Integrations
| Provider | Purpose | Risk/dependency | Status |
|---|---|---|---|
| Maps/Places | Search/place/routes | Cost, quota, terms | TBD |
| AI | Itinerary draft | Cost, hallucination, latency, privacy | TBD |
| Weather | Forecast | Provider/location/time | Deferred |
| Booking affiliate/API | Booking referral | Contract, API, attribution | Deferred |
| Payment | Contributions online | Provider, legal, fund flow, webhook, reconciliation, refund | Future |
| Email | Invite/OTP | Quota/deliverability | TBD |

## Security
- Secret chỉ ở server/Edge Function.
- Flutter dùng public/anon key với RLS, không dùng service role.
- Timeout, retry, rate limit, error handling.
- Log không chứa token/mật khẩu/dữ liệu nhạy cảm.
- Fallback thủ công khi provider lỗi.
