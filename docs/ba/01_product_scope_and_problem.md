# Product Scope & Problem Definition

## Bối cảnh
TravelGo định hướng hỗ trợ tổ chức chuyến du lịch nội địa Việt Nam. Thông tin điểm đến, lưu trú, ăn uống, lịch trình và chi phí có thể nằm rải rác ở nhiều công cụ.

## Problem statement – đề xuất
Người tổ chức chuyến đi nhóm cần một cách tập trung để xây dựng, điều chỉnh và chia sẻ lịch trình cùng ngân sách, vì hiện họ có thể phải tổng hợp thông tin từ nhiều nguồn, phối hợp ý kiến và theo dõi chi phí thủ công.
**Trạng thái:** Assumption dựa trên nghiên cứu thứ cấp; cần xác thực qua phỏng vấn.

## Nhóm người dùng ưu tiên – giả thuyết
- Người 22–34 tuổi ở đô thị, thường tổ chức chuyến đi nội địa cùng bạn bè/cặp đôi.
- Có vai trò lập kế hoạch/tổng hợp thông tin.
- Chuyến 2–4 ngày là giả thuyết cần xác thực.
- Early adopter: người đang dùng nhiều công cụ rời rạc để lập lịch.

## JTBD – giả thuyết
Khi nhóm đã quyết định đi du lịch, người tổ chức muốn tạo lịch trình và ngân sách nháp có thể cùng chỉnh sửa, để giảm công sức tổng hợp và giúp cả nhóm thống nhất.

## Product Goal – đề xuất
Giúp người tổ chức tạo và chia sẻ kế hoạch chuyến đi nội địa có lịch trình theo ngày và ngân sách dự kiến.

## North Star Metric – đề xuất
Số chuyến đi có lịch trình được hoàn thiện và có ít nhất hai thành viên cùng tham gia trong kỳ đo lường.
Chỉ số phụ: tỷ lệ chuyến lưu lịch trình đầu tiên; thời gian trung vị từ tạo chuyến tới lưu lịch; tỷ lệ chuyến có thành viên được mời; tỷ lệ mục lịch trình được thêm/sửa/hoàn thành.
Target cần PO xác nhận sau baseline.

## MVP đề xuất
### In scope
1. Đăng ký/đăng nhập cơ bản.
2. Tạo, xem, sửa chuyến đi.
3. Điểm đến, ngày đi/về, ngân sách dự kiến.
4. Lịch trình theo ngày.
5. Thêm/sửa/xóa/sắp xếp hoạt động.
6. Chọn địa điểm từ nguồn dữ liệu đã thống nhất.
7. Chia sẻ/mời thành viên theo mô hình quyền được duyệt.
8. Ghi nhận chi phí cơ bản nếu đủ capacity.
9. AI tạo bản nháp lịch trình nếu có API, ngân sách và kiểm soát chất lượng.

### Deferred / out of scope
- Bán vé/thu tiền đặt phòng trực tiếp.
- Cam kết giá/phòng trống thời gian thực khi chưa có API/đối tác.
- Xử lý hủy/hoàn phòng và khiếu nại.
- Review xác thực nếu chưa có cơ chế xác minh.
- Community feed đầy đủ.

## Tiêu chí thành công sơ bộ
- Người mới tạo được chuyến và lịch trình không cần trợ giúp.
- Hiểu ngân sách dự kiến và chi phí đã nhập.
- Thành viên chỉ truy cập theo quyền.
- Không truy cập chéo chuyến riêng tư.
- Target số cần chốt sau usability test.
