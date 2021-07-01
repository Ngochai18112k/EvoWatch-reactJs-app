import React from 'react';
import PropTypes from 'prop-types';
import './Auth.scss';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartProvider';
import MenuLink from '../../components/MenuLink/MenuLink';

Account.propTypes = {};

function Account(props) {
    const context = useContext(CartContext);

    return (
        <div id="login">
            <div className="container">
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <a href="../index.html" className="direct__link">Trang chủ</a>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <span className="direct__text">Trang khách hàng</span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="login__box">
                            <div className="login__heading">TRANG TÀI KHOẢN</div>
                            <div className="login__hello">Xin chào, {context.user.Email} !</div>
                            <ul className="login__list">
                                <li className="login__item">
                                    <MenuLink to="/account" activeOnlyWhenExact={false} label="Thông tin tài khoản"></MenuLink>
                                </li>
                                <li className="login__item">
                                    <MenuLink to="/login" activeOnlyWhenExact={false} label="Đơn hàng của bạn"></MenuLink>
                                </li>
                                <li className="login__item">
                                    <MenuLink to="/login" activeOnlyWhenExact={false} label="Đổi mật khẩu"></MenuLink>
                                </li>
                                <li className="login__item">
                                    <MenuLink to="/login" activeOnlyWhenExact={false} label="Sổ địa chỉ">(0)</MenuLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="login__box">
                            <div className="login__heading">THÔNG TIN TÀI KHOẢN</div>
                            <ul className="login__acc">
                                <li className="login__acc-item">
                                    Họ tên: <span>{context.user.Email}</span>
                                </li>
                                <li className="login__acc-item">
                                    Email: <span>{context.user.Email}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;