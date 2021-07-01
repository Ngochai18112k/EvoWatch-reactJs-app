import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Auth.scss';
import axios from 'axios';
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useState, useContext } from 'react';
import { CartContext } from '../Contexts/CartProvider';
import { useHistory } from 'react-router';
import useLocalStorage from '../../useLocalStorage';
import { Link } from 'react-router-dom';

Login.propTypes = {};

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
}

function Login(props) {
    const context = useContext(CartContext);
    const [data, setData] = useLocalStorage("data", { Email: '', Password: '' });
    const [error, setError] = useState([]);
    const apiUrl = "https://60d56ce2943aa60017768911.mockapi.io/auth";
    let history = useHistory();

    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function Login(e) {
        context.userFunction(data);
        e.preventDefault();
        axios.post(apiUrl, { email: data.Email, password: data.Password })
            .then((result) => {
                if (result.data.email === data.Email && result.data.password === data.Password) {
                    alert(`Chúc mừng ${result.data.userName} đăng nhập thành công`);
                    history.push("/");
                }
            })
            .catch((err) => {
                alert(err);
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
                            <span className="direct__text">Đăng nhập tài khoản</span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-8">
                        <div className="login__tittle">ĐĂNG NHẬP TÀI KHOẢN</div>
                        <div className="login__social">
                            <div className="login__social-link">
                                {/* <img src="./images/login-signup/fb-btn.svg" alt="" /> */}
                                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                            </div>
                            {/* <div className="login__social-link" >
                                <img src="./images/login-signup/gp-btn.svg" alt="" />
                                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                            </div> */}
                        </div>
                        <div className="login__form">
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input type="email" className="login__form-in" name="Email" defaultValue={data.Email} placeholder="Nhập Địa chỉ Email" required onChange={onChange} />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input type="password" className="login__form-in" name="Password" defaultValue={data.Password} placeholder="Nhập Mật khẩu" required onChange={onChange} />
                            </div>
                            <div className="button">
                                <div className="btn btn__darkwhite login__btn" title="" onClick={Login}>ĐĂNG NHẬP</div>
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