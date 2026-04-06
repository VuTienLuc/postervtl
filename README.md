# Poster Vinh Danh THPT Nguyễn Hữu Cảnh

Ứng dụng web chuyên nghiệp để tạo poster vinh danh học sinh.

## Triển khai (Deployment)

### 1. Triển khai lên Vercel
- Kết nối kho lưu trữ GitHub của bạn với Vercel.
- Vercel sẽ tự động nhận diện cấu hình Vite và triển khai.
- File `vercel.json` đã được cấu hình để hỗ trợ Routing cho Single Page Application (SPA).

### 2. Triển khai lên GitHub Pages
- Đã có sẵn file cấu hình GitHub Action tại `.github/workflows/deploy.yml`.
- Khi bạn push code lên nhánh `main`, ứng dụng sẽ tự động được build và deploy lên GitHub Pages.
- Trong phần Settings của Repo trên GitHub, hãy chọn **Pages** -> **Build and deployment** -> **Source** -> **GitHub Actions**.

## Tính năng PWA (Progressive Web App)
Ứng dụng đã được cấu hình PWA để có thể cài đặt trên điện thoại như một ứng dụng thực thụ:
- Có Manifest định nghĩa tên, màu sắc và icon.
- Có Service Worker để hỗ trợ cache và hoạt động mượt mà.
- **Lưu ý:** Bạn nên thay thế các file icon trong thư mục `public/` (`pwa-192x192.png`, `pwa-512x512.png`, `apple-touch-icon.png`) bằng icon thực tế của trường để có trải nghiệm tốt nhất.
