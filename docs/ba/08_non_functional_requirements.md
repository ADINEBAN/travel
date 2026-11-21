# Non-Functional Requirements

Mục tiêu định lượng cần team xác nhận sau baseline.

| ID | Nhóm | Yêu cầu | Kiểm chứng |
|---|---|---|---|
| NFR-SEC-01 | Security | Chuyến riêng tư truy cập theo quyền thành viên | RLS/API tests |
| NFR-SEC-02 | Security | Không commit secret | Secret scan |
| NFR-SEC-03 | Security | Validate ở server và client | Negative tests |
| NFR-PRIV-01 | Privacy | Chỉ thu thập dữ liệu cần thiết | Data inventory |
| NFR-PERF-01 | Performance | Màn hình chính trong ngưỡng team thống nhất | Đo thiết bị mục tiêu |
| NFR-REL-01 | Reliability | Loading/empty/error/retry | UI/API tests |
| NFR-UX-01 | Usability | Người mới tạo chuyến không cần hướng dẫn | Usability test |
| NFR-ACC-01 | Accessibility | Label, tương phản, kích thước chạm | Accessibility review |
| NFR-COMP-01 | Compatibility | Test trên Android/iOS cam kết | Device matrix |
| NFR-MAINT-01 | Maintainability | Module, convention, setup docs | Code review |
| NFR-AI-01 | AI quality | Output theo schema và có thể sửa | Contract tests |
| NFR-COST-01 | Cost | Quota/chi phí cho AI/maps | Usage monitor |

Cần chốt: OS tối thiểu, thiết bị test, ngưỡng tải, ngân sách API, data retention và offline mode.
