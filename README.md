# AI Travel Planner – Admin Website

Repository độc lập cho hệ thống quản trị AI Travel Planner, gồm Backend Admin (Spring Boot) và Frontend Admin (React + TypeScript + Vite). Repository này không chứa giao diện người dùng cuối.

## Yêu cầu môi trường

- Java 17 trở lên và Maven 3.6.3 trở lên
- Node.js tương thích với Vite (khuyến nghị Node.js 20.19+ hoặc 22.12+), npm
- PostgreSQL chỉ cần khi nhóm đã thống nhất và sẵn sàng cung cấp schema dùng chung

## Cấu hình

Sao chép `.env.example` thành `.env` để tham khảo các biến cấu hình. Spring Boot đọc biến môi trường của tiến trình; nếu chạy trực tiếp bằng terminal, hãy export/thiết lập các biến đó trong shell hoặc IDE. Không commit `.env` hoặc thông tin bí mật.

Backend mặc định chạy cổng `8081`; Frontend chạy cổng `5173`. Database URL, user và password lấy từ `DATABASE_URL`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`. Tài khoản HTTP Basic có vai trò ADMIN được cấu hình qua `ADMIN_USERNAME` và `ADMIN_PASSWORD`; nếu chưa cấu hình, các API ngoài health vẫn bị khóa.

## Chạy Backend

```powershell
cd backend
mvn spring-boot:run
```

Health check công khai: `GET http://localhost:8081/api/health`. Các API quản trị còn lại yêu cầu HTTP Basic với tài khoản ADMIN. Chưa có API nghiệp vụ nào được tạo.

## Chạy Frontend

```powershell
cd frontend-admin
Copy-Item .env.example .env
npm install
npm run dev
```

Mở `http://localhost:5173`. Dashboard là khung giao diện; chỉ hiển thị trạng thái chưa kết nối, không sử dụng dữ liệu giả. Frontend gọi backend qua `VITE_API_BASE_URL`.

## Build

```powershell
# Backend
cd backend
mvn clean package

# Frontend
cd ..\frontend-admin
npm run build
```

## Phạm vi và nguyên tắc dữ liệu

- Spring Security bảo vệ toàn bộ API trừ `GET /api/health`; backend kiểm tra vai trò ADMIN, không dựa vào ẩn giao diện.
- CORS mặc định cho `http://localhost:5173`, có thể đổi bằng `ADMIN_CORS_ORIGINS` (danh sách origin phân tách bằng dấu phẩy).
- JPA schema generation bị tắt (`ddl-auto=none`). Không migration, entity nghiệp vụ hay dữ liệu mẫu nào được tạo trước khi nhóm thống nhất schema.
- Cấu hình kết nối PostgreSQL đã có nhưng ứng dụng chưa truy cập DB trong khung hiện tại.
- Tách cổng và cấu hình với repository User; các hợp đồng API/schema cần được hai nhóm thống nhất trước khi triển khai module.
- HTTP Basic và tài khoản trong bộ nhớ chỉ là cơ chế khởi đầu cho môi trường phát triển; cần thống nhất cơ chế định danh/quản lý tài khoản ADMIN trước khi triển khai thực tế.

## Cấu trúc

- `backend/`: API Admin Spring Boot
- `frontend-admin/`: giao diện Admin React + TypeScript
- `docs/`: tổng quan, kiến trúc, thiết kế dữ liệu và tài liệu API
