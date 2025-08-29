import React from "react";
import Header from "../components/Header/Header";
import styles from "./Explore.module.scss";

const directory = [
  {
    name: "Lan Anh Makeup",
    rating: 5.0,
    reviews: 55,
    image:
      "https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg",
    details: ["Online Now", "Serves Los Angeles, CA"],
    rate: null,
    callToAction: "Contact for price",
  },
  {
    name: "Chuyển nhà Tận Tâm",
    rating: 4.9,
    reviews: 33,
    image:
      "https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg",
    details: [
      "Online Now",
      "Responds in about 9 min",
      "Serves Los Angeles, CA",
    ],
    rate: "$80/hour",
    callToAction: "Contact for price",
  },
  {
    name: "Cửa hàng sửa laptop 24h",
    rating: 4.9,
    reviews: 47,
    image:
      "https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg",
    details: [
      "Online Now",
      "Serves Los Angeles, CA",
      "Responds in about 44 min",
    ],
    rate: "$69/hour",
    callToAction: null,
  },
  {
    name: "Giặt là 132  Discovery Complex Cầu Giấy",
    rating: 4.9,
    reviews: 20,
    image:
      "https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg",
    details: ["Great value", "Top Pro", "Serves Los Angeles, CA"],
    rate: null,
    callToAction: "Contact for price",
  },
];

export default function Explore() {
  return (
    <div>
      <Header />
      <div className={`container ${styles.directory}`}>
        <h1>Brand Directory</h1>
        <p>Discover individuals and businesses on our platform.</p>
        <div className={styles.list}>
          {directory.map((item) => (
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
