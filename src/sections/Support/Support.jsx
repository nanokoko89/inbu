import React from "react";
import classNames from "classnames/bind";
import styles from "./Support.module.scss";
import { Coffee } from "../../components/Icons";

const cx = classNames.bind(styles);

export default function Support() {
  return (
    <section className={cx("wrap")}>
      <div className={cx("container", "inner")}>
        <div className={cx("text")}>
          <p className={cx("eyebrow")}>Thương hiệu</p>
          <h2 className={cx("title")}>
            Giúp thương hiệu và khách hàng hiểu nhau hơn.
          </h2>
          <p className={cx("desc")}>
            Bao La giúp việc ủng hộ trở nên vui và dễ dàng. Chỉ vài chạm, người
            hâm mộ có thể thanh toán (mua bạn một ly cà phê) và để lại lời nhắn.
          </p>
        </div>
        <div className={cx("graphic")}>
          <div className={cx("card")}>
            <div className={cx("cardHead")}>
              <Coffee style={{ width: 40, height: 40 }} />
              <span>Mua cho Juliet một ly cà phê</span>
            </div>
            <input
              className={cx("input")}
              placeholder="Nói điều gì đó dễ thương…"
            />
            <button className={cx("btn")}>Ủng hộ $3</button>
          </div>
          <div className={cx("bubble", "b1")}>Ana đã mua 10 ly cà phê</div>
          <div className={cx("bubble", "b2")}>
            Cathy C đã mua 6 ly cà phê
            <br />
            Cảm ơn Cathy!
          </div>
          <div className={cx("bubble", "b3")}>Alex đã mua 30 ly cà phê</div>
          <div className={cx("bubble", "b4")}>
            Tony Steel đã mua 3 ly cà phê
            <br />
            "Tuyệt đối là chương trình hay nhất, tôi đã chờ tập tiếp theo. Tôi
            thật sự mong đợi những gì bạn đang làm."
            <br />
            Cảm ơn Tony!
          </div>
        </div>
      </div>
    </section>
  );
}
