import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Heart, Search, ChevronDown, Coffee } from "../Icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <div className="container">
        <div className={cx("wrap")}>
          <div className={cx("brand")}>
            <Coffee
              style={{ width: 24, height: 24, color: "var(--brand-yellow)" }}
            />
            <div className={cx("brandTitle")}>Bao La</div>
            <sup>Tìm thương hiệu uy tín</sup>
          </div>
          {/* <nav className={cx("left")}>
            <Link to="/" className={cx("link")}>
              Trang chủ
            </Link>
            <Link to="/explore" className={cx("link")}>
              Danh bạ
            </Link>
            <Link to="/" className={cx("link")}>
              Yêu thích
            </Link>
          </nav> */}
          <div className={cx("search")}>
            <Search
              style={{ width: 24, height: 24, color: "rgba(0,0,0,.6)" }}
            />
            <input placeholder="Tìm chuyên gia, dịch vụ hoặc địa điểm" />
          </div>
          <div className={cx("controls")}>
            <Link to="/login" className={cx("login")}>
              Đăng nhập
            </Link>
            <Link to="/dashboard" className={cx("signup")}>
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
