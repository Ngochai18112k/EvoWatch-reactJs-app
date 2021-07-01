import React from 'react';
import PropTypes from 'prop-types';
import './Auth.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../Contexts/CartProvider';
import { useHistory } from 'react-router';
import useLocalStorage from '../../useLocalStorage';

SignUp.propTypes = {};

function SignUp(props) {
    const [data, setData] = useState({ Email: '', Password: '', FirstName: '', UserName: '', Phone: '' });
    const [error, setError] = useState([]);
    const apiUrl = "https://60d56ce2943aa60017768911.mockapi.io/auth";
    let history = useHistory();

    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function Signup(e) {
        e.preventDefault();
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(data.Email)) {
            alert('Nhập sai Email!');
            return 0;
        }
        axios.post(apiUrl, { email: data.Email, password: data.Password, firstName: data.FirstName, userName: data.UserName, phone: data.Phone })
            .then((result) => {
                setError(result.data.errors);
                if (result.data.successed) {
                    alert('Đăng ký thành công');
                    history.push('/login');
                }
                else {
                    alert(error.map((e) => {
                        return e.description;
                    }));
                }
            })
    }

    return (
        <div id="login">
            <div className="container">
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <Link to="/" className="direct__link">Trang chủ</Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <span className="direct__text">Đăng ký tài khoản</span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6">
                        <div className="login__tittle">ĐĂNG KÝ TÀI KHOẢN</div>
                        <div className="login__desc">Nếu chưa có tài khoản vui lòng đăng ký tại đây</div>
                        <div className="login__social">
                            <Link href="/" className="login__social-link">
                                <img src="./images/login-signup/fb-btn.svg" alt="" />
                            </Link>
                            <Link to="/" className="login__social-link">
                                <img src="./images/login-signup/gp-btn.svg" alt="" />
                            </Link>
                        </div>
                        <div className="login__form">
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    HỌ
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" name="FirstName" defaultValue={data.FirstName} onChange={onChange} placeholder="Nhập Họ" required />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    TÊN
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" name="UserName" defaultValue={data.UserName} onChange={onChange} placeholder="Nhập Tên" required />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    SỐ ĐIỆN THOẠI
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" name="Phone" defaultValue={data.Phone} onChange={onChange} placeholder="Nhập Số điện thoại" required />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input type="email" className="login__form-in" name="Email" defaultValue={data.Email} onChange={onChange} placeholder="Nhập Địa chỉ Email" required />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input type="password" className="login__form-in" name="Password" defaultValue={data.Password} onChange={onChange} placeholder="Nhập Mật khẩu" required />
                            </div>
                            <div className="button">
                                <div className="btn btn__darkwhite login__btn" title="" onClick={Signup}>ĐĂNG KÝ</div>
                            </div>
                            <Link to="/login" className="login__form-forget">ĐĂNG NHẬP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;