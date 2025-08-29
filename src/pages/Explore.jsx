import React, { useState } from "react";
import Header from "../components/Header/Header";
import styles from "./Explore.module.scss";

const tabs = {
  "Thời trang": [
    {
      name: "Shop Thời Trang Minh Anh",
      rating: 4.8,
      reviews: 21,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/08/adult-1868873_1280.jpg",
      details: ["Đang trực tuyến", "Phục vụ Hà Nội, VN"],
      rate: null,
      callToAction: "Liên hệ để biết giá",
    },
  ],
  "Quán cà phê": [
    {
      name: "Cà Phê Phố Cổ",
      rating: 4.7,
      reviews: 16,
      image:
        "https://cdn.pixabay.com/photo/2014/09/26/20/12/coffee-462828_1280.jpg",
      details: ["Đang mở cửa", "Phục vụ Hà Nội, VN"],
      rate: "$2/cup",
      callToAction: null,
    },
  ],
  "Sửa chữa laptop": [
    {
      name: "Cửa hàng sửa laptop 24h",
      rating: 4.9,
      reviews: 47,
      image:
        "https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg",
      details: [
        "Đang trực tuyến",
        "Phục vụ Los Angeles, CA",
        "Phản hồi khoảng 44 phút",
      ],
      rate: "$69/hour",
      callToAction: null,
    },
  ],
  "Trang điểm": [
    {
      name: "Lan Anh Makeup",
      rating: 5.0,
      reviews: 55,
      image:
        "https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg",
      details: ["Đang trực tuyến", "Phục vụ Los Angeles, CA"],
      rate: null,
      callToAction: "Liên hệ để biết giá",
    },
  ],
  "Bể bơi": [
    {
      name: "Bể Bơi Long Biên",
      rating: 4.5,
      reviews: 12,
      image:
        "https://cdn.pixabay.com/photo/2017/08/07/23/59/pool-2605813_1280.jpg",
      details: ["Đang mở cửa", "Phục vụ Hà Nội, VN"],
      rate: "$5/entry",
      callToAction: null,
    },
  ],
  "Huấn luyện viên thể hình": [
    {
      name: "HLV Thể Hình NamPro",
      rating: 5.0,
      reviews: 42,
      image:
        "https://cdn.pixabay.com/photo/2017/03/17/11/12/fitness-2151244_1280.jpg",
      details: ["Chuyên gia hàng đầu", "Phục vụ Hồ Chí Minh, VN"],
      rate: "$30/hour",
      callToAction: null,
    },
  ],
};

const categories = Object.keys(tabs);

export default function Explore() {
  const [active, setActive] = useState(categories[0]);

  return (
    <div>
      <Header />
      <div className={`container ${styles.directory}`}>
        {/* <h1>Khám phá</h1>
        <p>
          Danh bạ kinh doanh của các thương hiệu cá nhân, tổ chức, địa điểm,
          dịch vụ bạn cần.
        </p> */}

        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`${styles.category} ${
                active === cat ? styles.active : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.list}>
          {tabs[active].map((item) => (
            <div key={item.name} className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.avatar} />
              <div className={styles.content}>
                <h3>{item.name}</h3>
                <div className={styles.rating}>
                  <span className={styles.score}>{item.rating.toFixed(1)}</span>
                  <span className={styles.stars}>
                    {"\u2605\u2605\u2605\u2605\u2605"}
                  </span>
                  <span className={styles.reviews}>({item.reviews})</span>
                </div>
                <ul className={styles.meta}>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className={styles.price}>
                  {item.rate && (
                    <span className={styles.rate}>{item.rate}</span>
                  )}
                  {item.callToAction && (
                    <span className={styles.cta}>{item.callToAction}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
