import React from 'react';
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { Star } from '../../components/Icons';

const cx = classNames.bind(styles);

export default function Shop() {
  return (
    <section className={cx('wrap')}>
      <div className={cx('container','inner')}>
        <div className={cx('graphic')}>
          <div className={cx('product')}>
            <div className={cx('badge')}>PDF</div>
            <div className={cx('thumb')}></div>
            <div className={cx('info')}>
              <h3 className={cx('name')}>E-book Thiết kế</h3>
              <p className={cx('price')}>$200</p>
              <div className={cx('rating')}>
                {[...Array(5)].map((_,i)=>(<Star key={i} style={{width:16,height:16}}/>))}
                <span>Thích chứ? Hãy đánh giá</span>
              </div>
              <button className={cx('buy')}>Mua</button>
            </div>
            <div className={cx('meta')}>
              <div><strong>Thanh toán một chạm</strong></div>
              <div><strong>753</strong> lượt bán</div>
              <div className={cx('earnings')}><strong>$244</strong> doanh thu</div>
            </div>
          </div>
        </div>
        <div className={cx('text')}>
          <p className={cx('eyebrow')}>CỬA HÀNG</p>
          <h2 className={cx('title')}>Giới thiệu Shop, cách bán hàng sáng tạo.</h2>
          <p className={cx('desc')}>Những thứ bạn muốn bán có lẽ không phù hợp với cửa hàng Shopify. Shop được thiết kế từ đầu dành cho người sáng tạo. Dù là cuộc gọi Zoom 1-1, nhận vẽ theo yêu cầu hay một ebook, Shop đều dành cho bạn.</p>
        </div>
      </div>
    </section>
  )
}
