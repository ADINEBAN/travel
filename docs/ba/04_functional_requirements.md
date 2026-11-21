# Functional Requirements

> Baseline đề xuất, cần PO/Tech Lead xác nhận.

## Account
| ID | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-AUTH-01 | Đăng ký/đăng nhập | Must |
| FR-AUTH-02 | Đăng xuất | Must |
| FR-AUTH-03 | Cập nhật hồ sơ cơ bản | Should |

## Trip management
| ID | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-TRIP-01 | Tạo chuyến: tên, điểm đến, ngày đi/về | Must |
| FR-TRIP-02 | Nhập ngân sách/tiền tệ | Should |
| FR-TRIP-03 | Xem danh sách chuyến tạo/tham gia | Must |
| FR-TRIP-04 | Xem chi tiết chuyến | Must |
| FR-TRIP-05 | Sửa chuyến theo quyền | Must |
| FR-TRIP-06 | Xóa/lưu trữ theo policy | Could |

## Itinerary
| ID | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-ITN-01 | Tạo ngày lịch trình theo thời gian chuyến | Must |
| FR-ITN-02 | Thêm hoạt động vào ngày | Must |
| FR-ITN-03 | Hoạt động có tên; địa điểm/giờ/ghi chú tùy chọn | Must |
| FR-ITN-04 | Sửa/xóa hoạt động | Must |
| FR-ITN-05 | Sắp xếp thứ tự | Should |
| FR-ITN-06 | Hiển thị theo ngày | Must |

## Members
| ID | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-MEM-01 | Owner mời thành viên bằng cơ chế được chọn | Should |
| FR-MEM-02 | Thành viên xem chuyến sau khi cấp quyền | Should |
| FR-MEM-03 | Role quyết định quyền sửa | Should |
| FR-MEM-04 | Owner thu hồi quyền | Could |

## Budget/expenses
| ID | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-BUD-01 | Lưu ngân sách dự kiến | Should |
| FR-BUD-02 | Ghi khoản chi: tên, số tiền, ngày, người trả, danh mục | Should |
| FR-BUD-03 | Hiển thị tổng chi | Should |
| FR-BUD-04 | Hiển thị chênh ngân sách | Should |
| FR-BUD-05 | Chia chi phí theo thành viên | Could – cần discovery |

## Place discovery
| ID | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-PLC-01 | Tìm địa điểm từ provider được chọn | Should |
| FR-PLC-02 | Xem chi tiết từ dữ liệu nguồn | Should |
| FR-PLC-03 | Thêm địa điểm vào lịch | Should |
| FR-PLC-04 | Hiển thị nguồn/thời điểm cập nhật nếu có | Should |

## AI itinerary – nếu PO duyệt
| ID | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-AI-01 | Nhận điểm đến, ngày, ngân sách, sở thích | Could |
| FR-AI-02 | Sinh bản nháp theo ngày | Could |
| FR-AI-03 | Cho sửa trước khi lưu | Must nếu bật AI |
| FR-AI-04 | Cảnh báo dữ liệu chưa xác minh | Must nếu bật AI |
| FR-AI-05 | Retry lỗi, tránh tạo chuyến trùng | Should |

Booking/settlement trực tiếp, community feed, verified reviews chưa nằm trong scope hiện tại.
