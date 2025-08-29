import React from 'react';
import classNames from 'classnames/bind';
import styles from './Benefits.module.scss';
import { Handshake, Globe, Mail, Smile, Lock, Clock } from '../../components/Icons';

const cx = classNames.bind(styles);

const items = [
  {
    icon: <Handshake style={{width:32,height:32}}/>,
    title: 'Không chỉ là đăng ký thành viên',
    text: 'Những nhà sáng tạo trước đây chỉ dùng Patreon đã nhận thấy thu nhập tăng mạnh sau khi nhận các khoản thanh toán một lần.'
  },
  {
    icon: <Globe style={{width:32,height:32}}/>,
    title: '6 ngôn ngữ mới',
    text: 'Chúng tôi giờ hỗ trợ tiếng Tây Ban Nha, Pháp, Ý, Đức và Ukraina—giúp khán giả toàn cầu dễ dàng ủng hộ bạn.'
  },
  {
    icon: <Mail style={{width:32,height:32}}/>,
    title: 'Tiếp thị email',
    text: 'Thay vì trả phí riêng cho các công cụ tiếp thị email như Mailchimp, hãy gửi email quảng bá cho người hâm mộ miễn phí.'
  },
  {
    icon: <Smile style={{width:32,height:32}}/>,
    title: 'Thân thiện giúp chuyển đổi',
    text: 'ICYMI, chúng tôi làm cho người ủng hộ cảm thấy đơn giản và thú vị. Dù không thể đo bằng con số, điều đó giúp tăng chuyển đổi.'
  },
  {
    icon: <Lock style={{width:32,height:32}}/>,
    title: 'Quyền riêng tư của bạn là ưu tiên',
    text: 'Nhận ủng hộ mà không cần tiết lộ danh tính hay tài khoản ngân hàng. Chúng tôi sẽ xử lý phần khó.'
  },
  {
    icon: <Clock style={{width:32,height:32}}/>,
    title: 'Bắt đầu trong vài phút',
    text: 'Tạo trang của bạn và bắt đầu nhận ủng hộ chỉ với vài cú nhấp. Dễ đến vậy.'
  }
];

export default function Benefits() {
  return (
    <section className={cx('wrap')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Kiếm nhiều hơn 20% so với các nền tảng khác.</h2>
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
