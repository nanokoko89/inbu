import React from 'react';
import classNames from 'classnames/bind';
import styles from './Benefits.module.scss';
import { Handshake, Globe, Mail, Smile, Lock, Clock } from '../../components/Icons';

const cx = classNames.bind(styles);

const items = [
  {
    icon: <Handshake style={{width:32,height:32}}/>,
    title: 'Not just a membership',
    text: 'Creators who previously only used Patreon noticed a massive increase in earnings after accepting one-off payments.'
  },
  {
    icon: <Globe style={{width:32,height:32}}/>,
    title: '6 new languages',
    text: 'We now support Spanish, French, Italian, German and Ukrainian—making it easier for your global audience to support you.'
  },
  {
    icon: <Mail style={{width:32,height:32}}/>,
    title: 'Email marketing',
    text: 'Instead of paying separately for email marketing tools like Mailchimp, send marketing emails to your fans for free.'
  },
  {
    icon: <Smile style={{width:32,height:32}}/>,
    title: 'Being friendly converts',
    text: 'ICYMI, we make it simple and fun for your supporters. While you cannot put a number on feelings, it helps with conversions.'
  },
  {
    icon: <Lock style={{width:32,height:32}}/>,
    title: 'Your privacy comes first',
    text: 'Receive fan support without disclosing your identity or bank account. We\'ll do the heavy-lifting.'
  },
  {
    icon: <Clock style={{width:32,height:32}}/>,
    title: 'Get started in minutes',
    text: 'Create your page and start accepting support in just a few clicks. It\'s that easy.'
  }
];

export default function Benefits() {
  return (
    <section className={cx('wrap')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Make 20% or more, compared to other platforms.</h2>
        <div className={cx('grid')}>
          {items.map((item,i) => (
            <div key={i} className={cx('item')}>
              <div className={cx('icon')}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
