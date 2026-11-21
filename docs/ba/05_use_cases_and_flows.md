# Use Cases & Business Flows

## UC-01 Create Trip
**Actor:** User đã đăng nhập.
**Preconditions:** Đã đăng nhập, có kết nối lưu dữ liệu.
1. Mở Chuyến đi → Tạo chuyến.
2. Nhập tên, điểm đến, ngày bắt đầu/kết thúc.
3. Có thể nhập ngân sách.
4. Chọn Lưu.
5. Hệ thống validate, tạo chuyến và mở chi tiết.
**Exceptions:** thiếu trường; ngày kết thúc trước ngày bắt đầu; lỗi mạng; chưa đăng nhập.
**Postcondition:** chuyến gắn với Owner.

## UC-02 Add Itinerary Item
**Actor:** Owner/Editor.
1. Mở chuyến và chọn ngày.
2. Chọn Thêm hoạt động.
3. Nhập tên; địa điểm, giờ, ghi chú tùy chọn.
4. Lưu và hiển thị đúng ngày.
**Exceptions:** ngày không thuộc chuyến; không đủ quyền; dữ liệu sai.

## UC-03 Invite Member
**Actor:** Owner.
1. Chọn Mời thành viên.
2. Chọn email/link/mã theo cơ chế đã duyệt.
3. Gửi lời mời.
4. Hệ thống tạo invitation.
5. Người nhận xác thực và chấp nhận.
6. Hệ thống thêm thành viên theo role.
**Open decisions:** cách mời, hạn link, role, user chưa có tài khoản.

## UC-04 Record Expense
**Actor:** Người có quyền.
1. Mở Ngân sách → Thêm khoản chi.
2. Nhập tên, số tiền, ngày, người trả, danh mục.
3. Lưu; hệ thống cập nhật tổng.
**Open decisions:** VND/đa tiền tệ, chia đều/tùy chỉnh, hoàn/hủy, ai được sửa.

## UC-05 Generate AI Draft
**Actor:** Owner/người tạo lịch.
1. Nhập điểm đến, ngày, ngân sách, sở thích.
2. Gửi yêu cầu.
3. Backend gọi AI.
4. Nhận bản nháp có cấu trúc.
5. Kiểm tra định dạng/cảnh báo.
6. Người dùng chỉnh sửa và xác nhận lưu.
**Exceptions:** timeout, quota, JSON lỗi, địa điểm không hợp lệ.

## Permission proposal
| Action | Owner | Editor | Viewer |
|---|---|---|---|
| Xem chuyến | Có | Có | Có |
| Sửa chuyến | Có | TBD | Không |
| Sửa lịch | Có | Có | Không |
| Ghi chi | Có | TBD | Không |
| Mời | Có | TBD | Không |
| Xóa chuyến | Có | Không | Không |
