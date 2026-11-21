# Acceptance Criteria

## US-TRIP-01 Create Trip
- Given đã đăng nhập và dữ liệu hợp lệ, When lưu, Then chuyến được tạo và hiển thị.
- Given thiếu trường bắt buộc, When lưu, Then chỉ rõ lỗi.
- Given ngày kết thúc trước ngày bắt đầu, When lưu, Then từ chối.
- Given lỗi mạng, When lưu, Then báo thất bại, không báo thành công giả.

## US-ITN-01 Add Itinerary Item
- Given user có quyền, When thêm hoạt động hợp lệ vào ngày của chuyến, Then hiển thị đúng ngày.
- Given user không có quyền, When gửi yêu cầu, Then từ chối.
- Given dữ liệu sai, When lưu, Then báo lỗi, không tạo bản ghi sai.

## US-FUND-01 Create Fund
- Given Owner có chuyến với >=2 thành viên, When nhập mức góp hợp lệ và xác nhận, Then quỹ tạo và gắn Organizer.
- Given đã có quỹ active, When tạo quỹ khác, Then từ chối/yêu cầu xử lý quỹ hiện tại.
- Given mức góp <=0, When lưu, Then báo lỗi.

## US-CON-01 Record Contribution
- Given thành viên còn nghĩa vụ 2.000.000 VND, When Organizer ghi nhận đã nhận 1.000.000 VND, Then đã góp=1.000.000, còn thiếu=1.000.000, trạng thái=partial.
- Lưu người ghi nhận, thời điểm, số tiền, phương thức, ghi chú/mã tham chiếu.
- Pending không được coi là đã góp.

## US-EXP-01 Add Expense
- Given tên hợp lệ và số tiền >0, When Organizer lưu, Then khoản chi được ghi nhận.
- Given chi chung 1.200.000 VND áp dụng cho 4 người, Then mỗi phần=300.000 VND.
- Tổng phần phân bổ phải khớp khoản chi sau quy tắc làm tròn.

## US-SET-01 Settle Fund
- Given tổng góp xác nhận 8.000.000 và chi 6.000.000, When quyết toán, Then số dư=2.000.000.
- Given còn giao dịch pending/khoản chi chưa xử lý, When quyết toán, Then cảnh báo và yêu cầu xử lý.
- Sau settled, không thêm chi trừ khi mở lại theo policy.

## US-PAY-01 Online Payment – future
- Chỉ backend xác thực mới cập nhật góp.
- Webhook lặp không tạo cộng tiền lặp.
- Lỗi/hủy/pending không tăng số dư.
- Không nhận trạng thái thành công chỉ từ client.

## Definition of Ready
Có mô tả giá trị; Acceptance Criteria kiểm thử được; dependency rõ; design/flow khi cần; Developers ước lượng được.

## Definition of Done – đề xuất
Code review/merge; test phù hợp; không còn bug nghiêm trọng đã biết; kiểm tra quyền backend/database; tài liệu cập nhật; demo được; PO xác nhận Acceptance Criteria.
