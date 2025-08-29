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
          phát tiển kinh doanh <br /> của bạn
        </h1>

        <p className={cx("sub")}>
          Accept support. Start a membership. Setup a shop. It’s easier than you
          think.
        </p>

        <div className={cx("ctaWrap")}>
          <a href="#" className={cx("cta")}>
            Start my page
          </a>
        </div>

        <p className={cx("ctaNote")}>It’s free and takes less than a minute!</p>
      </div>

      {/* Floating badges */}
      <div className={cx("canvas")}>
        <div className={cx("field")}>
          <Badge
            className={cx("b1")}
            title="Cara is building a new platform for artists"
            supporters="8,780"
          />
          <Badge
            className={cx("b2")}
            title="Kaleigh Cohen is creating indoor cycling and strength workouts on YouTube!"
            supporters="4,488"
          />
          <Badge
            className={cx("b3")}
            title="Teacher Stefano is creating YouTube videos and Podcast"
            supporters="641"
          />
          <Badge
            className={cx("b4")}
            title="The Thrill Of The Thrift is creating thrifting videos"
            supporters="112"
          />
          <Badge
            className={cx("b5")}
            title="Beach Talk Radio is a Dinky Little Podcast"
            supporters="1,805"
          />
          <Badge
            className={cx("b6")}
            title="Simple Politics is helping people have better conversations about politics"
            supporters="—"
          />
        </div>
      </div>
    </section>
  );
}
