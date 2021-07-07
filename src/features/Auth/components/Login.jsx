import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, facebook, google } from '../firebase/firebase';
import '../styles/Auth.scss';

Login.propTypes = {};

function Login(props) {
    const [data, setData] = useState({ Email: '', Password: '' });
    let history = useHistory();
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const messageErr = formControl.querySelector('.message-error');
        formControl.className = 'login__form-input error';
        messageErr.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'login__form-input success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const trySignIn = async () => {
        var flagEmail = false, flagPassword = false;
        var emailValue = email.value.trim();
        var passwordValue = password.value.trim();

        if (!emailValue) {
            setErrorFor(email, 'Email không được để trống');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email không hợp lê. Vui lòng nhập lại');
        } else {
            setSuccessFor(email);
            flagEmail = true;
        }

        if (!passwordValue) {
            setErrorFor(password, 'Mật khẩu không được để trống');
        } else if (passwordValue.length < 6) {
            setErrorFor(password, 'Mật khẩu phải có ít nhất 6 ký tự');
        } else {
            setSuccessFor(password);
            flagPassword = true;
        }

        if (flagEmail === true && flagPassword === true) {
            auth.signInWithEmailAndPassword(data.Email, data.Password).catch((err) => {
                setData("");
                switch (err.code) {
                    default:
                        alert("Đăng nhập thất bại");
                }
            });
            history.push('/');
            alert('Đăng nhập thành công');
        }

    };

    const trySignInWithGoogle = async () => {
        auth.signInWithPopup(google).catch((err) => {
            switch (err.code) {
                default:
                    alert("Đăng nhập thất bại");
            }
        });
        history.push('/');
        alert('Đăng nhập thành công');
    };

    const trySignInWithFacebook = async () => {
        auth.signInWithPopup(facebook).catch((err) => {
            switch (err.code) {
                default:
                    alert("Đăng nhập thất bại");
            }
        });
        history.push('/');
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
                                <input type="email" className="login__form-in" id="email" name="Email" defaultValue={data.Email} placeholder="Nhập Địa chỉ Email" onChange={onChange} />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input type="password" className="login__form-in" id="password" name="Password" defaultValue={data.Password} placeholder="Nhập Mật khẩu" onChange={onChange} />
                                <p className="message-error"></p>
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