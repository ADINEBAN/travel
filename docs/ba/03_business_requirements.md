# Business Requirements (BRD)

## Mục tiêu nghiệp vụ
- BR-01: Tạo và quản lý kế hoạch chuyến du lịch nội địa.
- BR-02: Tập trung lịch trình theo ngày và thông tin chuyến.
- BR-03: Chia sẻ kế hoạch với thành viên được mời.
- BR-04: Theo dõi ngân sách dự kiến và chi phí đã ghi nhận.
- BR-05: Hỗ trợ tạo bản nháp lịch trình nhanh hơn nếu AI khả thi.

## Nhu cầu và cơ hội
| ID | Nhu cầu giả định | Cơ hội | Bằng chứng | Trạng thái |
|---|---|---|---|---|
| BN-01 | Gom lịch trình/ngân sách | Trip planner | Nghiên cứu thứ cấp; cần phỏng vấn | Assumption |
| BN-02 | Cùng nhóm xem/chỉnh kế hoạch | Collaboration | Chưa phỏng vấn TravelGo | Assumption |
| BN-03 | Tìm địa điểm | Place discovery | Cần chọn provider | Assumption |
| BN-04 | Theo dõi chi phí | Expense tracking | Cần hỏi quy trình thực tế | Assumption |
| BN-05 | Tạo bản nháp nhanh | AI itinerary | Cần kiểm chứng/test | Assumption |

## Business requirements
| ID | Yêu cầu | Ưu tiên | Đầu ra |
|---|---|---|---|
| BR-01 | Tạo chuyến | Must | Lưu chuyến hợp lệ |
| BR-02 | Lập lịch theo ngày | Must | CRUD/sắp xếp mục |
| BR-03 | Chia sẻ kế hoạch | Should | Thành viên có quyền xem |
| BR-04 | Quản lý ngân sách | Should | Tổng dự kiến/chi đã nhập |
| BR-05 | Tìm địa điểm | Should | Chọn từ nguồn đã xác định |
| BR-06 | AI tạo lịch nháp | Could | Bản nháp có thể chỉnh sửa |
| BR-07 | Booking/thanh toán trực tiếp | Deferred | Chỉ xét khi có đối tác/API/quy trình |

## Ràng buộc
Dữ liệu địa điểm phụ thuộc provider; maps/places có thể tốn phí; AI có thể sai; RLS phải bảo vệ dữ liệu; phạm vi tùy capacity và PO.
