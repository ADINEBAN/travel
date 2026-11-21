# TravelGo – BA Documentation

Bộ tài liệu BA baseline cho dự án TravelGo. Đây là tài liệu làm việc để PO, BA, UX/UI, Developers và QA refinement; không thay thế quyết định chính thức của PO.

## Trạng thái và nguyên tắc
- **Confirmed by user:** lựa chọn định hướng gồm đặt phòng cả chuyển nhà cung cấp và đặt trong app; thanh toán theo lộ trình thủ công/QR/cổng trực tuyến; Admin Web đầy đủ; AI trợ lý toàn diện; bổ sung vote, split bill, offline, journal, notification, location sharing và image search.
- **Assumption / cần PO xác nhận:** business model, nhà cung cấp dữ liệu, đối tác booking/payment, phí, chính sách hủy/hoàn, phạm vi MVP cuối, quyền admin, retention, SLA, ngân sách API và pháp lý.
- Không mô tả dữ liệu giả định như dữ liệu đã được xác minh. Giá, phòng trống, giờ mở cửa, review và kết quả AI phải có nguồn/trạng thái cập nhật.
- Stack Flutter + Supabase là giả định từ baseline trước, cần Tech Lead xác nhận. Không khóa kiến trúc vào một provider cụ thể.

## Tài liệu
1. Product scope/problem – `01_product_scope_and_problem.md`
2. Stakeholders/roles – `02_stakeholders_and_roles.md`
3. Business requirements – `03_business_requirements.md`
4. Functional requirements – `04_functional_requirements.md`
5. Use cases/flows – `05_use_cases_and_flows.md`
6. Business rules – `06_business_rules.md`
7. Acceptance criteria – `07_acceptance_criteria.md`
8. Non-functional requirements – `08_non_functional_requirements.md`
9. Data requirements/ERD – `09_data_requirements_and_erd.md`
10. API/integration – `10_api_and_integration_requirements.md`
11. Product backlog/roadmap – `11_product_backlog_sprint1.md`
12. Traceability – `12_traceability_matrix.md`
13. Interview research plan – `13_interview_research_plan.md`
14. Glossary/open questions – `14_glossary_and_open_questions.md`
15. Discovery & social places – `15_discovery_and_places.md`
16. Accommodation & booking – `16_accommodation_booking.md`
17. Payment & transaction – `17_payment_and_transactions.md`
18. Group fund & settlement – `18_group_fund_and_settlement.md`
19. Admin Web – `19_admin_web_requirements.md`
20. AI & smart assistance – `20_ai_travel_assistant.md`
21. Collaboration & trip experience – `21_collaboration_and_trip_experience.md`
22. Delivery phases & release gates – `22_delivery_roadmap.md`

## Cách dùng
- PO xác nhận scope, business rules, ưu tiên và release gates.
- BA làm rõ open questions, cập nhật traceability và acceptance criteria.
- Tech Lead xác nhận kiến trúc, API, provider, data model, security và chi phí.
- UX/UI kiểm tra luồng và prototype với người dùng.
- QA chuyển acceptance criteria thành test cases.
- Mỗi story chỉ vào Sprint khi có owner, dependency, estimate, AC và Definition of Ready.

## Phase overview
- **MVP:** account, trip, itinerary, discovery cơ bản, nhóm/collaboration cơ bản, ngân sách/quỹ thủ công, split bill cơ bản, notification cơ bản, AI itinerary draft có kiểm soát.
- **Phase 2:** booking affiliate + booking in-app qua provider đủ điều kiện, QR/đối soát, Admin Web đầy đủ, vote nâng cao, offline, journal, location sharing có consent, image search.
- **Phase 3:** payment gateway đa nhà cung cấp, settlement/refund tự động, AI assistant nâng cao, tối ưu route/budget, mở rộng đối tác và analytics.

Xem `22_delivery_roadmap.md` để biết điều kiện chuyển phase.