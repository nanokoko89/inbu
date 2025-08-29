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
              <h3 className={cx('name')}>Design E-book</h3>
              <p className={cx('price')}>$200</p>
              <div className={cx('rating')}>
                {[...Array(5)].map((_,i)=>(<Star key={i} style={{width:16,height:16}}/>))}
                <span>Liked it? Give rating</span>
              </div>
              <button className={cx('buy')}>Buy</button>
            </div>
            <div className={cx('meta')}>
              <div><strong>One-tap checkout</strong></div>
              <div><strong>753</strong> sales</div>
              <div className={cx('earnings')}><strong>$244</strong> earnings</div>
            </div>
          </div>
        </div>
        <div className={cx('text')}>
          <p className={cx('eyebrow')}>SHOP</p>
          <h2 className={cx('title')}>Introducing Shop, the creative way to sell.</h2>
          <p className={cx('desc')}>The things you'd like to sell probably do not belong in a Shopify store. Shop is designed from the ground up with creators in mind. Whether it's a 1-1 Zoom call, art commissions, or an ebook, Shop is for you.</p>
        </div>
      </div>
    </section>
  )
}
