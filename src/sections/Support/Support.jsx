import React from 'react';
import classNames from 'classnames/bind';
import styles from './Support.module.scss';
import { Coffee } from '../../components/Icons';

const cx = classNames.bind(styles);

export default function Support() {
  return (
    <section className={cx('wrap')}>
      <div className={cx('container','inner')}>
        <div className={cx('text')}>
          <p className={cx('eyebrow')}>SUPPORT</p>
          <h2 className={cx('title')}>Give your audience an easy way to say thanks.</h2>
          <p className={cx('desc')}>Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message.</p>
        </div>
        <div className={cx('graphic')}>
          <div className={cx('card')}>
            <div className={cx('cardHead')}>
              <Coffee style={{width:40,height:40}}/>
              <span>Buy Juliet a coffee</span>
            </div>
            <input className={cx('input')} placeholder="Say something nice…" />
            <button className={cx('btn')}>Support $3</button>
          </div>
          <div className={cx('bubble','b1')}>Ana bought 10 coffees</div>
          <div className={cx('bubble','b2')}>Cathy C bought 6 coffees<br/>Thanks Cathy!</div>
          <div className={cx('bubble','b3')}>Alex bought 30 coffees</div>
          <div className={cx('bubble','b4')}>Tony Steel bought 3 coffees<br/>"Absolutely the best show I already waiting for next one. I’m really looking forward what you’re doing."<br/>Thanks Tony!</div>
        </div>
      </div>
    </section>
  )
}
