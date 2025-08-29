# Buy Me a Coffee – Hero Clone (Vite + React + SCSS Modules)

Dự án ReactJS (Vite) sử dụng **JavaScript + JSX**, **SCSS Module** và **classnames/bind (cx)**.
Cấu trúc được tách Header / Hero / Badge theo tiêu chuẩn component.

## Chạy dự án

```bash
npm install
npm run dev
```

Yêu cầu Node.js **>= 20.19** (để tương thích Vite 5).

## Cấu trúc thư mục

```text
src/
├─ components/
│  ├─ Header/
│  │  ├─ Header.jsx
│  │  └─ Header.module.scss
│  ├─ Badge/
│  │  ├─ Badge.jsx
│  │  └─ Badge.module.scss
│  └─ Icons/
│     └─ index.jsx
├─ sections/
│  └─ Hero/
│     ├─ Hero.jsx
│     └─ Hero.module.scss
├─ styles/
│  ├─ _variables.scss
│  └─ globals.scss
├─ App.jsx
└─ main.jsx
```

## Ghi chú

- Màu sắc, kích thước và bố cục bám sát design ảnh mẫu; bạn có thể tinh chỉnh thêm trong `styles/_variables.scss` và các `.module.scss`.
- Không dùng Tailwind. Tất cả style đều qua **SCSS Modules** + `cx`.
- Các thẻ testimonial (Badge) là vị trí tuyệt đối trong Hero để mô phỏng layout trôi nổi của trang gốc.
- Font sử dụng hệ thống (system UI) để giảm phụ thuộc; nếu muốn giống hơn bạn có thể thêm Google Fonts vào `index.html`.
# inbu
