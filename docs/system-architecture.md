# Kiến trúc hệ thống

- `frontend-admin`: SPA React/TypeScript, Vite, React Router và Axios; cổng mặc định 5173.
- `backend`: REST API Spring Boot; cổng mặc định 8081; Spring Security bảo vệ API quản trị bằng vai trò ADMIN.
- PostgreSQL là nguồn dữ liệu dùng chung dự kiến. Cấu hình kết nối có sẵn qua biến môi trường nhưng chưa có entity, migration hay schema.
- CORS giới hạn theo origin cấu hình `ADMIN_CORS_ORIGINS`.
- `GET /api/health` là endpoint công khai; các endpoint khác yêu cầu ADMIN.
