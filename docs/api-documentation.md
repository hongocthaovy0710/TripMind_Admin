# API Admin

## Health

- `GET /api/health` — công khai, trả trạng thái dịch vụ và thời điểm kiểm tra.

Tất cả đường dẫn API khác yêu cầu xác thực HTTP Basic với tài khoản có vai trò `ADMIN`. Chưa có endpoint nghiệp vụ. Khi bổ sung API, tài liệu request/response và quyền truy cập phải được thống nhất với repository User nếu dùng chung dữ liệu.

Không gửi API key tích hợp hoặc bí mật tới frontend. Chỉ thiết kế endpoint quản lý trạng thái/cấu hình đã loại bỏ thông tin bí mật sau khi nhóm chốt yêu cầu.
