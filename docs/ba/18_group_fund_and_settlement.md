# Group Fund Management & Settlement

## Confirmed user direction
- Group typically contributes to a shared fund before trip.
- Only Organizer manages the fund.
- Common expenses are split equally by default.
- Real payment integration is desired in a future phase.

## Roles
Organizer: creates fund, defines eligible members/obligations, records contributions/expenses, reviews settlement.
Member: views own obligation/status, contributes, views shared balances and settlement.
Admin: operational support only with scoped permission and audit; not routine fund manager.

## Core flows
1. Organizer creates one active fund per trip, sets currency, target amount/contribution rule and due date.
2. System creates member obligations for explicit eligible members.
3. Contributions are recorded manually in MVP; status remains pending until verified.
4. Organizer records shared expense with payer, category, date and participants.
5. System calculates equal/custom shares and member net balances.
6. Organizer reviews fund summary and settlement report.
7. Closing/settlement follows PO-approved surplus/deficit policy.

## Calculation model
- Fund cash balance = confirmed contributions − confirmed fund expenses − confirmed refunds/withdrawals + confirmed adjustments.
- Member net balance = member's confirmed payments − member's allocated share of confirmed shared expenses (plus/minus approved adjustments).
- A positive member net balance means paid more than allocated share; negative means owes. UI wording must be clear and consistent.
- Equal split: amount divided among selected participants; rounding remainder allocated deterministically (policy TBD).

## Stories
- Organizer creates fund and assigns member obligations.
- Organizer records full/partial contribution and evidence/reference.
- Member sees due/paid/partial/pending status.
- Organizer records shared expense and selects participants.
- System splits evenly or by custom shares.
- Member sees personal balance and settlement summary.
- Organizer closes fund after resolving outstanding entries.

## Acceptance criteria
- Only Organizer can create/update/close fund in baseline.
- Member can view permitted fund information, not edit ledger.
- Pending contribution excluded from confirmed balance.
- Expense share total equals expense amount exactly.
- Every correction creates reversal/adjustment and audit log.
- Settlement report reconciles total contributions, expenses, remaining cash and member net balances.
- Closing blocked or warning shown when unresolved pending transactions exist.

## Decisions still open (PO must decide)
Organizer must contribute? Member joins/leaves after fund creation? Child/partial participation? Change contribution after payment? Extra collection? Surplus returned equally or proportional to contribution? Deficit handling? Who holds cash and how is cash custody evidenced? Can fund be reopened? Multi-currency?