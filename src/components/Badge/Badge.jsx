import React from 'react';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';
import { Heart } from '../Icons';

const cx = classNames.bind(styles);

export default function Badge({ avatar, title, supporters, className, style }) {
  return (
    <div className={cx('card', className)} style={style}>
      <div className={cx('avatar')}>{avatar || '👤'}</div>
      <div>
        <div className={cx('title')}>{title}</div>
        <div className={cx('meta')}>
          <Heart className={cx('icon')} />
          <span>{supporters} supporters</span>
        </div>
      </div>
    </div>
  )
}
