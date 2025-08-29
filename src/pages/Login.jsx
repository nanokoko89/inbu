// File: src/pages/Login.jsx
import React from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function CupIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 5h9a1 1 0 0 1 1 1v2h2.5a2.5 2.5 0 0 1 0 5H16.8a6.8 6.8 0 0 1-13.6 0H2V8a3 3 0 0 1 3-3h1Z"
        fill="#FFD400"
      />
      <path
        d="M16 8V6a2 2 0 0 0-2-2H5a3 3 0 0 0-3 3v7h1.2a5.8 5.8 0 0 0 11.6 0H18.5a3.5 3.5 0 1 0 0-7H16Zm2.5 5A1.5 1.5 0 1 1 19 10h-3v3h2.5Z"
        fill="#111"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.5 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.2 5.1 29.4 3 24 3 12.3 3 3 12.3 3 24s9.3 21 21 21c10.5 0 20-7.6 20-21 0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.2 5.1 29.4 3 24 3 16 3 9 7.4 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 45c5.2 0 10-1.8 13.7-4.8l-6.3-5.2C29.3 36 26.9 37 24 37c-5.3 0-9.7-3.5-11.3-8.2l-6.6 5.1C9 40.5 15.9 45 24 45z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.5-4.7 6-8.7 6-5.3 0-9.7-3.5-11.3-8.2l-6.6 5.1C9 40.5 15.9 45 24 45c10.5 0 20-7.6 20-21 0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 1-2 2V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z"
      />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#111"
        d="M16.4 13.3c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2.1-3.8-2.1-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.8-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.3 2 2.7 3.4 2.6 1.4-.1 1.9-.8 3.6-.8s2.1.8 3.5.8 2.3-1.3 3.2-2.6c1.1-1.6 1.6-3.1 1.6-3.2-.1-.1-3-1.1-3-3.6zM13.8 5.2C14.5 4.3 15 3.1 14.9 2c-1 .1-2.2.7-2.9 1.5-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.6 2.8-1.2z"
      />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#111"
        d="M13.4 10.2 20.7 2h-1.7l-6.3 7.4L8.5 2H2l7.7 11.2L2 22h1.7l6.6-7.7L15.5 22H22l-8.6-11.8Zm-2.3 2.6-.8-1.2L4 3.3h3.1l4.9 7.1.8 1.2 6.7 9.7h-3.1l-5.3-7.5Z"
      />
    </svg>
  );
}

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(
    "Không có tài khoản với địa chỉ email này"
  ); // hiển thị sẵn để giống ảnh

  function onSubmit(e) {
    e.preventDefault();
    // Giữ nguyên hành vi để mô phỏng UI; bạn có thể thay bằng API thật.
    if (!email) setError("Không có tài khoản với địa chỉ email này");
    else setError("Không có tài khoản với địa chỉ email này");
  }

  return (
    <div className={cx("page")}>
      <header className={cx("topbar")}>
        <div className={cx("brand")}>
          <CupIcon />
        </div>
        <div className={cx("authLink")}>
          <span>Chưa có tài khoản?</span>
          <a href="#" className={cx("signup")}>
            Đăng ký
          </a>
        </div>
      </header>

      <main className={cx("main")}>
        <h1 className={cx("title")}>Chào mừng trở lại</h1>

        <form className={cx("form")} onSubmit={onSubmit} noValidate>
          <label className={cx("label")}>Địa chỉ email</label>
          <input
            type="email"
            className={cx("input", { error: !!error })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
              placeholder="ban@vidu.com"
          />
          {error && (
            <div className={cx("error")} role="alert">
              {error}
            </div>
          )}

            <label className={cx("label")} style={{ marginTop: 10 }}>
            Mật khẩu
          </label>
          <input
            type="password"
            className={cx("input")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

            <button type="submit" className={cx("primary")}>
              Tiếp tục với email
            </button>
        </form>

          <div className={cx("divider")}>
            <span>hoặc đăng nhập bằng</span>
          </div>

        <div className={cx("socials")}>
          <button className={cx("socialBtn")}>
            {<GoogleIcon />}
            <span>Tiếp tục với Google</span>
          </button>
          <button className={cx("socialBtn")}>
            {<FacebookIcon />}
            <span>Tiếp tục với Facebook</span>
          </button>
          <button className={cx("socialBtn")}>
            {<AppleIcon />}
            <span>Tiếp tục với Apple</span>
          </button>
          <button className={cx("socialBtn")}>
            {<TwitterIcon />}
            <span>Tiếp tục với Twitter</span>
          </button>
        </div>
      </main>
    </div>
  );
}
