import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, facebook, google } from '../firebase/firebase';
import '../styles/Auth.scss';

SignUp.propTypes = {};

function SignUp(props) {
    const [data, setData] = useState({ Email: '', Password: '', FirstName: '', DisplayName: '', Phone: '' });
    let history = useHistory();

    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const trySignUp = async () => {
        history.push('/login');
        auth.createUserWithEmailAndPassword(data.Email, data.Password).catch((err) => {
            switch (err.code) {
                case "auth/email-already-in-use":
                    alert(err.message);
                    break;
                default:
                    alert("Đăng ký thất bại");
            }
        });
        alert("Đăng ký thành công");
    };

    const trySignInWithGoogle = async () => {
        history.push('/');
        auth.signInWithPopup(google).catch((err) => {
            switch (err.code) {
                default:
                    alert("Đăng nhập thất bại");
            }
        });
        alert('Đăng nhập thành công');
    };

    const trySignInWithFacebook = async () => {
        history.push('/');
        auth.signInWithPopup(facebook).catch((err) => {
            switch (err.code) {
                default:
                    alert("Đăng nhập thất bại");
            }
        });
        alert('Đăng nhập thành công');
    };

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
                            <Link to="/" className="login__social-link" onClick={trySignInWithFacebook}>
                                <img src="./images/login-signup/fb-btn.svg" alt="" />
                            </Link>
                            <Link to="/" className="login__social-link" onClick={trySignInWithGoogle}>
                                <img src="./images/login-signup/gp-btn.svg" alt="" />
                            </Link>
                        </div>
                        <div className="login__form">
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    HỌ
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" name="FirstName" value={data.FirstName} onChange={onChange} placeholder="Nhập Họ" />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    TÊN
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" name="DisplayName" value={data.DisplayName} onChange={onChange} placeholder="Nhập Tên" />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    SỐ ĐIỆN THOẠI
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" name="Phone" value={data.Phone} onChange={onChange} placeholder="Nhập Số điện thoại" />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input type="email" className="login__form-in" name="Email" value={data.Email} onChange={onChange} placeholder="Nhập Địa chỉ Email" />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input type="password" className="login__form-in" name="Password" value={data.Password} onChange={onChange} placeholder="Nhập Mật khẩu" />
                            </div>
                            <div className="button">
                                <div className="btns btn__darkwhite login__btn" title="" onClick={trySignUp}>ĐĂNG KÝ</div>
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