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
    const firstName = document.getElementById('firstName');
    const displayName = document.getElementById('displayName');
    const phone = document.getElementById('phone');
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

    function isPhone(phone) {
        return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone);
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const trySignUp = async () => {
        var flagFirstName = false, flagDisplayName = false, flagPhone = false, flagEmail = false, flagPassword = false;
        var firstNameValue = firstName.value.trim();
        var displayNameValue = displayName.value.trim();
        var phoneValue = phone.value.trim();
        var emailValue = email.value.trim();
        var passwordValue = password.value.trim();

        if (!firstNameValue) {
            setErrorFor(firstName, 'Họ không được để trống');
        } else {
            setSuccessFor(firstName);
            flagFirstName = true;
        }

        if (!displayNameValue) {
            setErrorFor(displayName, 'Tên không được để trống');
        } else {
            setSuccessFor(displayName);
            flagDisplayName = true;
        }

        if (!phoneValue) {
            setErrorFor(phone, 'Số điện thoại không được để trống');
        } else if (!isPhone(phoneValue)) {
            setErrorFor(phone, 'Số điện thoại không hợp lệ. Vui lòng nhập lại');
        } else {
            setSuccessFor(phone);
            flagPhone = true;
        }

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

        if (flagFirstName === true && flagDisplayName === true && flagPhone === true && flagEmail === true && flagPassword === true) {
            auth.createUserWithEmailAndPassword(data.Email, data.Password).catch((err) => {
                setData("");
                switch (err.code) {
                    case "auth/email-already-in-use":
                        alert(err.message);
                        break;
                    default:
                        alert("Đăng ký thất bại");
                }
                history.push('/login');
                alert('Đăng ký thành công');
            });
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
                                <input type="text" className="login__form-in" id="firstName" name="FirstName" value={data.FirstName} onChange={onChange} placeholder="Nhập Họ" />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    TÊN
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" id="displayName" name="DisplayName" value={data.DisplayName} onChange={onChange} placeholder="Nhập Tên" />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    SỐ ĐIỆN THOẠI
                                    <span>*</span>
                                </p>
                                <input type="text" className="login__form-in" id="phone" name="Phone" value={data.Phone} onChange={onChange} placeholder="Nhập Số điện thoại" />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input type="email" className="login__form-in" id="email" name="Email" value={data.Email} onChange={onChange} placeholder="Nhập Địa chỉ Email" />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input type="password" className="login__form-in" id="password" name="Password" value={data.Password} onChange={onChange} placeholder="Nhập Mật khẩu" />
                                <p className="message-error"></p>
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