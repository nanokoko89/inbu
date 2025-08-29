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
          <nav className={cx("left")}>
            <Link to="/" className={cx("link")}>
              Home
            </Link>
            <Link to="/explore" className={cx("link")}>
              Khám phá
              {/* <Heart style={{ width: 16, height: 16 }} /> */}
            </Link>
            <a href="#" className={cx("link")}>
              Thêm&nbsp;
              <ChevronDown style={{ width: 16, height: 16 }} />
            </a>
          </nav>

          <div className={cx("brand")}>
            <Coffee
              style={{ width: 24, height: 24, color: "var(--brand-yellow)" }}
            />
            <div className={cx("brandTitle")}>Bao La</div>
            <sup>®</sup>
          </div>

          <div className={cx("controls")}>
            <div className={cx("search")}>
              <Search
                style={{ width: 16, height: 16, color: "rgba(0,0,0,.6)" }}
              />
              <input placeholder="Tìm danh bạ thương hiệu" />
            </div>
            <a href="#" className={cx("login")}>
              Đăng nhập
            </a>
            <a href="#" className={cx("signup")}>
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
