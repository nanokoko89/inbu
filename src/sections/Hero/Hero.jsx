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
            Được yêu thích bởi 10,000+ cá nhân/doanh nghiệp
          </span>
        </div>

        <h1 className={cx("h1")}>
          Xây thương hiệu,
          <br />
          phát triển kinh doanh <br /> của bạn
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
            title="Cara đang xây dựng nền tảng mới cho các nghệ sĩ"
            supporters="8,780"
          />
          <Badge
            className={cx("b2")}
            title="Kaleigh Cohen đang tạo bài tập đạp xe trong nhà và luyện sức mạnh trên YouTube!"
            supporters="4,488"
          />
          <Badge
            className={cx("b3")}
            title="Thầy Stefano đang tạo video và podcast trên YouTube"
            supporters="641"
          />
          <Badge
            className={cx("b4")}
            title="The Thrill Of The Thrift đang tạo video săn đồ cũ"
            supporters="112"
          />
          <Badge
            className={cx("b5")}
            title="Beach Talk Radio là một podcast nhỏ xíu"
            supporters="1,805"
          />
          <Badge
            className={cx("b6")}
            title="Simple Politics đang giúp mọi người có những cuộc trò chuyện tốt hơn về chính trị"
            supporters="—"
          />
        </div>
      </div>
    </section>
  );
}
