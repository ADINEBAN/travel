# Payment & Transactions Requirements

## Selected direction
Support a staged model: manual transfer recording, QR/payment instructions and provider reconciliation, then online payment gateway integration. "All" means roadmap coverage, not all methods must launch in MVP.

## Transaction types
- Group fund contribution.
- Booking payment (only if provider/merchant model supports).
- Refund/reversal.
- Adjustment/settlement entry.

## Lifecycle
Created → pending → processing/pending_verification → succeeded OR failed/cancelled; succeeded may later be partially_refunded/refunded according to provider. Status transitions must be explicit and auditable.

## Stories
- As Organizer, I can create a contribution request with amount and due date.
- As Member, I can view payment instructions and submit transfer reference/evidence.
- As Organizer/system, I can verify a manual transfer and mark it confirmed.
- As Member, I can pay through supported QR/provider flow.
- As user, I can see transaction status and receipt/reference.
- As Admin/support, I can inspect transaction events and reconciliation state without silently changing ledger.
- As user, I can see refund status linked to original transaction.

## Acceptance criteria
- Amount/currency/beneficiary and expiry are displayed before payment.
- Manual evidence remains pending until authorized verification.
- QR is generated only through approved provider/bank format; QR creation alone is not proof of payment.
- Provider webhook signature is verified server-side.
- Duplicate event ID/idempotency key does not create duplicate ledger entries.
- Failed/pending/cancelled payment does not increase confirmed fund balance.
- Refund links to original transaction and posts a separate ledger entry after confirmation.
- Payment status can be reconciled with provider/bank source.

## Business rules
- Never store raw card data or secret credentials in mobile app.
- Client cannot mark a transaction succeeded.
- Booking payment and group fund payment are distinct purposes and ledger scopes.
- TravelGo does not hold funds or operate a wallet without legal/provider approval.
- Define dispute, refund, chargeback, reconciliation and retention policy before launch.

## Security/operations
TLS; server-side signature verification; idempotency; replay protection; least privilege; audit logs; alert on unmatched transactions; redact PII; daily reconciliation process where applicable.

## Open questions
Merchant of record; provider and supported methods; fees; settlement timing; QR standard; bank statement/webhook access; refund responsibility; KYC/AML and regulatory review; chargeback/dispute workflow.