# Functional Requirements

> Baseline mở rộng theo lựa chọn định hướng của user. Priority là đề xuất; PO xác nhận trước Sprint.

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| FR-AUTH-01 | Đăng ký/đăng nhập/đăng xuất | MVP | Must |
| FR-AUTH-02 | Quản lý hồ sơ và consent | MVP | Must |
| FR-TRIP-01 | Tạo/sửa/xem/lưu trữ chuyến | MVP | Must |
| FR-TRIP-02 | Quản lý thành viên và role | MVP | Must |
| FR-ITN-01 | Tạo lịch theo ngày; thêm/sửa/xóa/sắp xếp hoạt động | MVP | Must |
| FR-PLC-01 | Tìm địa điểm, quán ăn, cà phê, vui chơi theo từ khóa/khu vực | MVP | Must |
| FR-PLC-02 | Lọc theo danh mục, giá, rating, khoảng cách khi provider hỗ trợ | MVP | Should |
| FR-PLC-03 | Xem chi tiết, nguồn, thời điểm cập nhật và trạng thái dữ liệu | MVP | Must |
| FR-PLC-04 | Lưu yêu thích và thêm địa điểm vào lịch | MVP | Should |
| FR-MAP-01 | Hiển thị địa điểm/lịch trình trên bản đồ | MVP | Should |
| FR-VOTE-01 | Tạo poll cho lựa chọn địa điểm/lịch trình; đóng và xem kết quả | MVP | Should |
| FR-BUD-01 | Đặt ngân sách dự kiến theo chuyến/danh mục | MVP | Must |
| FR-FUND-01 | Organizer tạo quỹ, đặt nghĩa vụ góp và hạn góp | MVP | Should |
| FR-FUND-02 | Organizer ghi nhận góp/chi thủ công và lịch sử | MVP | Should |
| FR-SPLIT-01 | Chia đều hoặc chia theo người tham gia; tính công nợ | MVP | Should |
| FR-AI-01 | Sinh lịch trình nháp từ điểm đến/ngày/ngân sách/sở thích | MVP | Should |
| FR-AI-02 | Người dùng xem, sửa, xác nhận trước khi lưu | MVP | Must |
| FR-NOTI-01 | Notification in-app cho lời mời, vote, lịch và quỹ | MVP | Should |
| FR-ACC-01 | Tìm khách sạn theo điểm đến/ngày/số khách/tiêu chí | Phase 2 | Should |
| FR-BOOK-01 | Hiển thị offer/giá/điều kiện từ provider với thời điểm cập nhật | Phase 2 | Must |
| FR-BOOK-02 | Chuyển nhà cung cấp qua affiliate/deep link và lưu click/ref | Phase 2 | Should |
| FR-BOOK-03 | Đặt trong app qua API provider nếu được cấp quyền; lưu booking reference/status | Phase 2 | Should |
| FR-PAY-01 | Hướng dẫn ghi nhận chuyển khoản thủ công | MVP | Should |
| FR-PAY-02 | Tạo QR/payment instruction và đối soát theo provider hỗ trợ | Phase 2 | Should |
| FR-PAY-03 | Tích hợp payment gateway, webhook, refund/reconciliation | Phase 3 | Could |
| FR-ADMIN-01 | Admin dashboard, quản lý user/roles/permissions | Phase 2 | Must |
| FR-ADMIN-02 | Quản lý taxonomy, place content, moderation, reports | Phase 2 | Must |
| FR-ADMIN-03 | Quản lý provider integrations, sync jobs, audit logs, feature flags | Phase 2 | Should |
| FR-ADMIN-04 | Quản lý booking/payment records ở mức vận hành, không sửa ledger tùy tiện | Phase 2 | Must |
| FR-OFF-01 | Cache itinerary, saved places, booking references để xem offline | Phase 2 | Should |
| FR-JRN-01 | Tạo nhật ký, ảnh và ghi chú theo ngày/chuyến | Phase 2 | Could |
| FR-LOC-01 | Chia sẻ vị trí tạm thời với consent, thời hạn và nút dừng | Phase 2 | Should |
| FR-IMG-01 | Tìm địa điểm bằng ảnh; hiển thị confidence/source và cho user xác nhận | Phase 2 | Could |
| FR-TRANS-01 | Tìm/lưu thông tin vé xe/tàu/máy bay | Phase 3 | Could |
| FR-AI-03 | Hỏi đáp trợ lý, tối ưu route/budget, phương án thay thế | Phase 3 | Could |
| FR-REV-01 | Đánh giá sau chuyến và moderation | Phase 3 | Could |

## Admin Web functional areas
Dashboard; user/role management; trip/content moderation; place/category management; provider catalog and sync health; booking/payment operational views; reports; audit logs; configuration/feature flags. Admin permissions must be least-privilege and actions audited.

## Notes
- “Đặt trong app” phụ thuộc provider API, contract, inventory, payment and cancellation support. Nếu không đủ điều kiện, chỉ bật click-out.
- Ratings, prices, opening hours, availability must show source/freshness and must not be fabricated.
- Offline is read-first in Phase 2; conflict-safe offline editing requires separate design.
- Location sharing is opt-in and time-bounded.