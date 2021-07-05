import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, facebook, google } from '../firebase/firebase';
import '../styles/Auth.scss';

Login.propTypes = {};

function Login(props) {
    const [data, setData] = useState({ Email: '', Password: '' });
    let history = useHistory();

    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const trySignIn = async () => {
        history.push('/');
        auth.signInWithEmailAndPassword(data.Email, data.Password).catch((err) => {
            setData("");
            switch (err.code) {
                default:
                    alert("Đăng nhập thất bại");
            }
        });
        alert('Đăng nhập thành công');
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
                            <span className="direct__text">Đăng nhập tài khoản</span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-8">
                        <div className="login__tittle">ĐĂNG NHẬP TÀI KHOẢN</div>
                        <div className="login__social">
                            <div className="login__social-link" onClick={trySignInWithFacebook}>
                                <img src="./images/login-signup/fb-btn.svg" alt="" />
                            </div>
                            <div className="login__social-link" onClick={trySignInWithGoogle}>
                                <img src="./images/login-signup/gp-btn.svg" alt="" />
                            </div>
                        </div>
                        <div className="login__form">
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input type="email" className="login__form-in" name="Email" value={data.Email} placeholder="Nhập Địa chỉ Email" onChange={onChange} />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input type="password" className="login__form-in" name="Password" value={data.Password} placeholder="Nhập Mật khẩu" onChange={onChange} />
                            </div>
                            <div className="button">
                                <div className="btns btn__darkwhite login__btn" title="" onClick={trySignIn}>ĐĂNG NHẬP</div>
                            </div>
                            <Link to="/forget" className="login__form-forget">Quên mật khẩu?</Link>
                            <p className="login__form-end">
                                BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ
                                <Link to="/signup">TẠI ĐÂY.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;