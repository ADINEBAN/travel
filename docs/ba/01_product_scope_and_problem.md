# Product Scope & Problem Definition

## Product concept
TravelGo hỗ trợ người dùng khám phá, lập kế hoạch, phối hợp nhóm, đặt dịch vụ và quản lý tài chính cho chuyến du lịch. Trọng tâm khác biệt đề xuất: kết nối lịch trình – thành viên – ngân sách/quỹ trong một hành trình thống nhất.

## Problem statement – giả thuyết
Người tổ chức chuyến đi phải tổng hợp địa điểm, lưu trú, di chuyển, lịch trình, ý kiến thành viên và tiền bạc từ nhiều nguồn/công cụ. Điều này làm tăng công sức điều phối, khó kiểm soát ngân sách và khó cập nhật khi kế hoạch thay đổi.
**Trạng thái:** giả thuyết từ secondary research; cần phỏng vấn/kiểm thử primary research.

## Product vision – đề xuất
Giúp nhóm bạn và gia đình khám phá, thống nhất và thực hiện chuyến đi phù hợp sở thích/ngân sách, giảm việc chuyển qua lại giữa nhiều công cụ.

## Personas/JTBD
Proto-persona và JTBD trong các tài liệu Discovery trước đây là giả định, không phải persona đã xác thực. Cần kiểm tra với người tổ chức chuyến đi, thành viên, gia đình và người đặt dịch vụ.

## Scope theo phase
### MVP – đề xuất
- Account/profile; tạo chuyến và mời thành viên.
- Discovery địa điểm/nhà hàng/vui chơi từ provider được duyệt; tìm kiếm, lọc, xem chi tiết, lưu yêu thích.
- Lịch trình theo ngày, thêm địa điểm vào lịch; bản đồ cơ bản nếu provider/cost cho phép.
- Ngân sách dự kiến, quỹ nhóm và ghi nhận góp/chi thủ công.
- Chia hóa đơn cơ bản và tính số dư/công nợ.
- Vote đơn giản cho địa điểm/lịch trình.
- Notification trong app cơ bản.
- AI tạo bản nháp lịch trình; người dùng phải review trước khi lưu.

### Phase 2 – đề xuất
- Tìm khách sạn và luồng booking affiliate/deep-link.
- Đặt trong app qua booking provider/API/contract đủ điều kiện; không tự giả định có inventory.
- QR chuyển khoản và đối soát phù hợp năng lực provider.
- Admin Web quản trị hệ thống đầy đủ.
- Offline trip, travel journal, location sharing opt-in, image search.
- Notification nâng cao, booking status sync.

### Phase 3 – đề xuất
- Mở rộng payment gateway, refund/reconciliation tự động.
- AI travel assistant toàn diện, tối ưu tuyến đường/ngân sách và đề xuất thay thế.
- Booking/transportation integrations mở rộng, analytics nâng cao, community/reviews có kiểm duyệt.

## Out of scope cho tới khi có quyết định
- TravelGo tự nắm giữ tiền/vận hành ví điện tử.
- Cam kết phòng trống/giá thực nếu không có API/contract.
- Tự xác minh review khi không có nguồn đáng tin.
- Chia sẻ vị trí nền liên tục mặc định.
- AI tự đặt dịch vụ hoặc tự thanh toán mà không có xác nhận rõ ràng.

## Success metrics – cần PO đặt target
- Activation: tỷ lệ user tạo trip và lưu itinerary đầu tiên.
- Collaboration: tỷ lệ trip có ít nhất 2 thành viên hoạt động.
- Planning: thời gian từ tạo trip đến lưu lịch trình.
- Finance: tỷ lệ khoản chi có người trả và phân bổ rõ.
- Discovery: tỷ lệ place detail → add to itinerary.
- Booking: click-out/conversion hoặc booking success theo provider.
- Quality: crash-free sessions, lỗi sync, AI draft acceptance/edit rate.
Không đặt target số khi chưa có baseline.

## Product decisions
Định hướng tính năng đã được user chọn trong hội thoại; chi tiết business model, provider, payment/legal, MVP capacity và target vẫn cần PO/Tech Lead xác nhận.