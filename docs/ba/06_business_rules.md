# Business Rules

> Baseline đề xuất, chờ PO duyệt.

## Trip
- BR-TRIP-01: Ngày kết thúc >= ngày bắt đầu.
- BR-TRIP-02: Mỗi chuyến có một Owner.
- BR-TRIP-03: Người ngoài không đọc được chuyến riêng tư.
- BR-TRIP-04: Chỉ Owner/role được cấp quyền mới được sửa.

## Itinerary
- BR-ITN-01: Mỗi mục thuộc một ngày của một chuyến.
- BR-ITN-02: Ngày thuộc khoảng thời gian chuyến, trừ ngoại lệ được duyệt.
- BR-ITN-03: Chỉ role có quyền mới thêm/sửa/xóa.
- BR-ITN-04: Thứ tự hiển thị ổn định.

## Group fund – theo quyết định định hướng hiện tại
- BR-FUND-01: Mỗi chuyến tối đa một quỹ active.
- BR-FUND-02: Chỉ Organizer quản lý quỹ.
- BR-FUND-03: Mức góp mặc định bằng nhau giữa thành viên thuộc danh sách đóng góp.
- BR-FUND-04: Chưa chốt Organizer có phải góp như Member không.
- BR-FUND-05: Trạng thái góp: unpaid, partial, paid; chỉ cập nhật từ thông tin hợp lệ.
- BR-FUND-06: Tổng góp không vượt nghĩa vụ nếu chưa có policy xử lý đóng dư.
- BR-FUND-07: Khoản chi chung chia đều cho danh sách người chịu chi phí.
- BR-FUND-08: Khoản chi cá nhân không tự động đưa vào quỹ.
- BR-FUND-09: Số dư = tổng góp xác nhận − tổng chi quỹ xác nhận.
- BR-FUND-10: Mọi sửa/hủy giao dịch lưu lịch sử.
- BR-FUND-11: Không xóa giao dịch đã xác nhận; dùng void/reversal có audit.
- BR-FUND-12: Quỹ settled không nhận chi mới nếu chưa mở lại đúng quy trình.

## Payment – giai đoạn sau
- BR-PAY-01: Mỗi giao dịch có mã duy nhất.
- BR-PAY-02: Chỉ backend xác nhận thành công sau khi kiểm tra provider.
- BR-PAY-03: Webhook lặp không cộng tiền hai lần.
- BR-PAY-04: Pending/failed/cancelled không tăng số dư.
- BR-PAY-05: Refund liên kết giao dịch gốc và trạng thái riêng.
- BR-PAY-06: Không lưu dữ liệu thẻ nhạy cảm.
- BR-PAY-07: Không mặc định TravelGo được giữ tiền/vận hành ví; cần rà soát đối tác và pháp lý.

## Open decisions
1. Organizer có phải góp không?
2. Thành viên mới vào quỹ xử lý mức góp thế nào?
3. Thành viên rời nhóm xử lý nghĩa vụ ra sao?
4. Đóng dư xử lý thế nào?
5. Tiền dư cuối chuyến hoàn đều hay theo khoản góp?
6. Quỹ thiếu tiền có được yêu cầu góp thêm?
7. Có được đổi mức góp sau khi đã có giao dịch?
8. Chia đều có ngoại lệ cho trẻ em/người không tham gia không?
