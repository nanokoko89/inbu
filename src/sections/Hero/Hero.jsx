import React from "react";
import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
import { Star } from "../../components/Icons";
import Badge from "../../components/Badge/Badge";

const cx = classNames.bind(styles);

export default function Hero() {
  return (
    <section className={cx("wrap")}>
      <div className={cx("content", "container")}>
        <div className={cx("stars")}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} style={{ width: 24, height: 24 }} />
          ))}
          <span className={cx("starsText")}>
            Được yêu thích bởi 10,000+ thương hiệu và 50,000+ người dùng
          </span>
        </div>

        <h1 className={cx("h1")}>
          Tìm kiếm danh bạ
          <br />
          nơi bạn có thể tin tưởng
        </h1>

        <p className={cx("sub")}>
          Nhận ủng hộ. Bắt đầu hội viên. Mở cửa hàng. Dễ hơn bạn nghĩ.
        </p>

        <div className={cx("ctaWrap")}>
          <a href="#" className={cx("cta")}>
            Bắt đầu trang của tôi
          </a>
        </div>

        <p className={cx("ctaNote")}>Miễn phí & chưa đầy 1 phút!</p>
      </div>

      {/* Floating badges */}
      <div className={cx("canvas")}>
        <div className={cx("field")}>
          <Badge
            className={cx("b1")}
            title="Cho Thuê Xe Ôtô Tự Lái Hùng Đạt"
            supporters="8,780"
          />
          <Badge
            className={cx("b2")}
            title="Cà Phê Đen Phố Cổ"
            supporters="4,488"
          />
          <Badge
            className={cx("b3")}
            title="Sửa Chữa Laptop 24h"
            supporters="641"
          />
          <Badge
            className={cx("b4")}
            title="Makeup Hoàng Linh"
            supporters="112"
          />
          <Badge
            className={cx("b5")}
            title="Homestay Nature Hòa Bình"
            supporters="1,805"
          />
          <Badge
            className={cx("b6")}
            title="Hùng Lắp Internet & Truyền Hình"
            supporters="—"
          />
        </div>
      </div>
    </section>
  );
}
