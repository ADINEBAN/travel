# Product Backlog & Sprint 1 Proposal

> Đề xuất cho PO/Developers refinement; không phải cam kết Sprint trước capacity/estimate.

## Epics
EPIC-01 Account; EPIC-02 Trip; EPIC-03 Itinerary; EPIC-04 Collaboration; EPIC-05 Budget/Fund; EPIC-06 Places; EPIC-07 AI; EPIC-08 Quality/Security.

## Product Backlog
| ID | User Story | Priority | Dependency |
|---|---|---|---|
| US-01 | Là người dùng, tôi muốn đăng nhập để quản lý chuyến | Must | Supabase Auth |
| US-02 | Là Organizer, tôi muốn tạo chuyến | Must | trips schema |
| US-03 | Là Organizer, tôi muốn xem danh sách chuyến | Must | Auth/RLS |
| US-04 | Là Organizer, tôi muốn sửa chuyến | Must | US-02 |
| US-05 | Là Organizer, tôi muốn thêm hoạt động từng ngày | Must | itinerary schema |
| US-06 | Là Organizer, tôi muốn sửa/xóa hoạt động | Must | US-05 |
| US-07 | Là Member, tôi muốn xem chuyến chia sẻ | Should | Membership |
| US-08 | Là Organizer, tôi muốn mời thành viên | Should | Invite flow |
| US-09 | Là Organizer, tôi muốn đặt ngân sách | Should | trips schema |
| US-10 | Là Organizer, tôi muốn tạo quỹ và mức góp | Should | Fund schema |
| US-11 | Là Organizer, tôi muốn ghi nhận tiền góp | Should | Contributions |
| US-12 | Là Organizer, tôi muốn thêm khoản chi và chia đều | Should | Expenses/shares |
| US-13 | Là người dùng, tôi muốn tìm địa điểm để thêm vào lịch | Should | Places provider |
| US-14 | Là người dùng, tôi muốn AI đề xuất lịch trình nháp | Could | AI provider |

## Sprint Goal đề xuất
Người dùng đã đăng nhập có thể tạo chuyến và lập lịch trình cơ bản theo ngày; dữ liệu được lưu và bảo vệ theo quyền.

## Sprint 1 candidate
1. Setup Flutter.
2. Supabase Auth.
3. Schema trips, itinerary_days, itinerary_items.
4. RLS và kiểm thử quyền.
5. Màn hình danh sách chuyến.
6. Form tạo chuyến và validation.
7. Chi tiết chuyến/lịch theo ngày.
8. Thêm/sửa/xóa hoạt động.
9. Test luồng chính.
10. README setup và demo.

## Sprint Planning cần xác nhận
Thời lượng; capacity; estimate Developers; stories PO chọn; DoD; dependencies và risks.
