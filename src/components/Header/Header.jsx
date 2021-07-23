import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../../features/Contexts/CartProvider';
import Navbar from '../Navbar/Navbar';
import useUser from '../../features/Auth/firebase/useUser';
import { auth } from '../../features/Auth/firebase/firebase';
import './Header.scss';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

Header.propTypes = {};

function Header(props) {
    let history = useHistory();
    const { isLoggedIn, userState, loaded } = useUser();
    const [toogle, setToogle] = useState(false);
    const [toogleNav, setToogleNav] = useState(false);
    const [search, setSearch] = useState("");
    const context = useContext(CartContext);
    var indexProduct = context.cart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.quality;
    }, 0);

    const onLogout = () => {
        auth.signOut();
    }

    function onToogleSearch() {
        toogle ? setToogle(false) : setToogle(true);
    }

    function handleToogleNav() {
        toogleNav ? setToogleNav(false) : setToogleNav(true);
    }

    function nextPage(p) {
        history.push(`/detailproduct/${p}`)
    }

    function addQualities(params) {
        context.addQuality(params);
    }

    function minusQualities(params) {
        context.minusQuality(params);
    }

    function deleteCart(params) {
        context.deleteCart(params);
    }

    function totalPrice() {
        return context.cart.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.quality * currentValue.pricenew;
        }, 0).toLocaleString("it-IT", { style: 'currency', currency: 'VND' });
    }

    function apiSearch() {
        context.apiSearch(search);
        history.push("/search");
    }

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div id="header">
            <div className="container">
                {/* Header__top */}
                <div className="row header__top">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-4 header__home hide-on-mobile-tablet">
                        <span>HOTLINE ĐẶT HÀNG:</span>
                        <Link to="tel:0123456789">0123 456 789</Link>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-4 header__menu show-on-mobile-tablet">
                        <Link to="#" className="header__menu-link">
                            <i className="far fa-bars header__menu-icon" onClick={handleToogleNav}></i>
                        </Link>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 header__logo">
                        <Link to="/">
                            <img src="./images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-4">
                        <div className="header__acc">
                            <div className="account hide-on-mobile-tablet">
                                <Link to="/login">TÀI KHOẢN</Link>
                                {
                                    !loaded ? null : isLoggedIn() ? (
                                        <ul className="account__list">
                                            <li className="account__item">
                                                <Link to="/account">{`XIN CHÀO, ${userState.displayName}`}</Link>
                                            </li>
                                            <li className="account__item">
                                                <Link to="/" onClick={onLogout}>ĐĂNG XUẤT</Link>
                                            </li>
                                        </ul>) : (
                                        <ul className="account__list">
                                            <li className="account__item">
                                                <Link to="/login">ĐĂNG NHẬP</Link>
                                            </li>
                                            <li className="account__item">
                                                <Link to="/signup">ĐĂNG KÍ</Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </div>
                            <div className="header__cart">
                                <Link to="/cart">
                                    <span className="hide-on-mobile-tablet">GIỎ HÀNG</span>
                                    <i className="fas fa-cart-arrow-down header__cart-icon">
                                        <span>{indexProduct}</span>
                                    </i>
                                </Link>
                                <div className={`header__cart-box hide-on-mobile-tablet ${indexProduct !== 0 ? "active" : ""}`}>
                                    <div className="header__cart-box-list">
                                        {
                                            context.cart.map((e, i) => {
                                                return (
                                                    <div className="header__cart-box-item" key={i}>
                                                        <img src={`./images/product/${e.imageafter}`} alt="" onClick={() => nextPage(e.id)} />
                                                        <div className="header__cart-box-info">
                                                            <p className="header__cart-box-name">{e.name}</p>
                                                            <p className="header__cart-box-price">{e.pricenew}₫</p>
                                                            <div className="header__cart-box-quality">
                                                                <button onClick={() => addQualities(e)}>+</button>
                                                                <input type="text" value={e.quality} defaultValue id="quantity1" name="quantity1" />
                                                                <button onClick={() => minusQualities(e)}>-</button>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-box-close">
                                                            <i className="fa fa-times" onClick={() => deleteCart(e)}></i>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className="header__cart-box-total">
                                        <span>Tổng cộng:</span>
                                        <span className="header__cart-box-price">{totalPrice()}</span>
                                    </div>
                                    <div className="header__cart-box-btn">
                                        <Link className="link" to="">THANH TOÁN</Link>
                                        <Link className="link" to="/cart">GIỎ HÀNG</Link>
                                    </div>
                                </div>
                                <div className={`header__cart-box-no hide-on-mobile-tablet ${indexProduct === 0 ? "active" : ""}`}>
                                    <p>Không có sản phẩm trong giỏ hàng.</p>
                                </div>
                            </div>
                            <div className="search">
                                <div onClick={onToogleSearch}>
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar */}
                <Navbar></Navbar>
            </div>
            {/* Navbar-mobile */}
            <NavbarMobile toogleNav={toogleNav} handleToogleNav={handleToogleNav}></NavbarMobile>
            {/* Search-box */}
            <div id="search" className={`${toogle ? "active" : ""}`}>
                <div className="search__overlay" onClick={onToogleSearch}></div>
                <div className="search__box">
                    <div className="search__box-in">
                        <input type="text" name="search" onChange={onChangeSearch} placeholder="Bạn cần tìm gì hôm nay?" />
                        <i className="fas fa-search" onClick={apiSearch}></i>
                    </div>
                    <div className="search__box-close" onClick={onToogleSearch}>
                        <i className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;