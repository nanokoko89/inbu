import React from "react";
import classNames from "classnames/bind";
import styles from "./PartnerStart.module.scss";

const cx = classNames.bind(styles);

const SERVICES = [
  { key: "house", label: "House Cleaning" },
  { key: "life", label: "Life Coaching" },
  { key: "webdesign", label: "Web Design" },
  { key: "photo", label: "General Photography" },
  { key: "webdev", label: "Web Development" },
  { key: "smm", label: "Social Media Marketing" },
  { key: "graphic", label: "Graphic Design" },
  { key: "book", label: "Bookkeeping Services" },
  { key: "builder", label: "General Builders" },
  { key: "trainer", label: "Personal Trainers" },
  { key: "garden", label: "Gardening" },
  { key: "office", label: "Commercial & Office Cleaning" },
];

function Icon({ name }) {
  // Gói một bộ icon SVG tối giản, nét dày giống ảnh
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "house":
      return (
        <svg {...common}>
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "life":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21a7 7 0 0 1 14 0" />
        </svg>
      );
    case "webdesign":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 14h4" />
        </svg>
      );
    case "photo":
      return (
        <svg {...common}>
          <path d="M5 7h3l2-2h4l2 2h3v10H5z" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "webdev":
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="M9 10l-2 2 2 2M15 10l2 2-2 2" />
        </svg>
      );
    case "smm":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M7 8h10M7 12h6" />
        </svg>
      );
    case "graphic":
      return (
        <svg {...common}>
          <path d="M4 20h16" />
          <rect x="6" y="4" width="12" height="12" rx="2" />
          <path d="M6 14l4-4 2 2 3-3 3 3" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 19a3 3 0 0 1 3-3h13v5H7a3 3 0 0 0-3 3V5a3 3 0 0 1 3-3h13v5H7a3 3 0 0 0-3 3" />
        </svg>
      );
    case "builder":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M8 21V9l4-4 4 4v12" />
          <path d="M8 13h8" />
        </svg>
      );
    case "trainer":
      return (
        <svg {...common}>
          <circle cx="9" cy="7" r="3" />
          <path d="M2 21a7 7 0 0 1 14 0" />
          <rect x="15" y="11" width="7" height="8" rx="2" />
        </svg>
      );
    case "garden":
      return (
        <svg {...common}>
          <path d="M12 22V12" />
          <path d="M6 14s-2-2-2-5 2-5 2-5 2 2 2 5-2 5-2 5z" />
          <path d="M18 14s-2-2-2-5 2-5 2-5 2 2 2 5-2 5-2 5z" />
        </svg>
      );
    case "office":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 11h8M8 15h8" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PartnerStart() {
  return (
    <section className={cx("wrap")}>
      <div className={cx("container")}>
        {/* Left */}
        <div className={cx("left")}>
          <h1 className={cx("title")}>
            Xây thương hiệu <br /> & phát triển việc
            <br />
            kinh doanh của bạn
          </h1>
          <p className={cx("subtitle")}>
            Hàng ngàn khách hàng đang tìm kiếm sản phẩm, dịch vụ của bạn.
          </p>

          <div className={cx("searchBar")}>
            <input
              type="text"
              className={cx("input")}
              placeholder="Bạn kinh doanh gì?"
              aria-label="Bạn kinh doanh gì?"
            />
            <button className={cx("btn")}>Bắt đầu</button>
          </div>

          <div className={cx("popular")}>
            <h3>Popular services</h3>
            <div className={cx("grid")}>
              {SERVICES.map((s) => (
                <a
                  key={s.key}
                  href="#"
                  className={cx("serviceItem")}
                  onClick={(e) => e.preventDefault()}
                >
                  <span className={cx("icon")} aria-hidden>
                    <Icon name={s.key} />
                  </span>
                  <span className={cx("label")}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <aside className={cx("card")}>
          <img
            className={cx("cardImg")}
            // đặt ảnh của bạn tại src/assets/partner-hero.jpg hoặc link trực tiếp
            src="/assets/partner-hero.jpg"
            alt="Happy partner using tablet"
          />
          <div className={cx("badgeTop")}>
            <span>
              Bark is rated <strong>Great</strong>
            </span>
          </div>

          <div className={cx("trustpilot")}>
            <div className={cx("tpLogo")}>★ Trustpilot</div>
            <div className={cx("tpStars")}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={cx("star")} aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <div className={cx("tpText")}>
              TrustScore 4.1 | <u>103,722 reviews</u>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
