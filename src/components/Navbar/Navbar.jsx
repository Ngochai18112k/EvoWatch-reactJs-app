import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuLink from '../MenuLink/MenuLink';
import './Navbar.scss';

Navbar.propTypes = {};

function Navbar(props) {
    const [nsx, setNsx] = useState([]);
    const [extra, setExtra] = useState([]);

    useEffect(() => {
        fetch("https://60d56ce2943aa60017768911.mockapi.io/producers")
            .then(res => res.json())
            .then((result) => {
                setNsx(result.map(e => { return { ...e, tt: false } }));
            },
                (error) => {

                }
            )
        fetch("https://60d1f5d75b017400178f4cb3.mockapi.io/listextra")
            .then(res => res.json())
            .then((result) => {
                setExtra(result.map(e => { return { ...e, tt: false } }));
            },
                (error) => {

                }
            )
    }, []);

    return (
        <div className="row hide-on-mobile">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <ul className="nav">
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/" activeOnlyWhenExact={true} label="TRANG CHỦ" />
                        </div>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/intro" activeOnlyWhenExact={false} label="GIỚI THIỆU" />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink to="/intro-replace" activeOnlyWhenExact={false} label="Chính sách đổi hàng" />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink to="/intro-faq" activeOnlyWhenExact={false} label="FAQ" />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink to="/intro-pay" activeOnlyWhenExact={false} label="Hướng dẫn thanh toán" />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink to="/intro-ship" activeOnlyWhenExact={false} label="Chính sách vận chuyển" />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink to="/intro-shop" activeOnlyWhenExact={false} label="Hệ thống cửa hàng" />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/productmen" activeOnlyWhenExact={false} label="NAM" />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
                            {
                                nsx.map((e, i) => {
                                    return (
                                        <li className="dropdown-item" key={i}>
                                            <div className="dropdown__link">
                                                <Link className="link" to={`/productproducer/${e.nameNsx}`}>{`Đồng hồ ${e.nameNsx}`}</Link>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/productwomen" activeOnlyWhenExact={false} label="NỮ" />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
                            {
                                nsx.map((e, i) => {
                                    return (
                                        <li className="dropdown-item" key={i}>
                                            <div className="dropdown__link">
                                                <Link className="link" to={`/productproducer/${e.nameNsx}`}>{`Đồng hồ ${e.nameNsx}`}</Link>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/productextra" activeOnlyWhenExact={false} label="PHỤ KIỆN" />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
                            {
                                extra.map((e, i) => {
                                    return (
                                        <li className="dropdown-item" key={i}>
                                            <div className="dropdown__link">
                                                <Link className="link" to={`/extraproducer/${e.nameextra}`}>{e.nameextra}</Link>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/product" activeOnlyWhenExact={false} label="SẢN PHẨM" />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <div className="row drop">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <Link to="/productmen" className="drop__tittle">NAM</Link>
                                <ul className="drop__list">
                                    {
                                        nsx.map((e, i) => {
                                            return (
                                                <li className="drop__item" key={i}>
                                                    <div className="drop__link">
                                                        <Link className="link" to={`/productproducer/${e.nameNsx}`}>{`Đồng hồ ${e.nameNsx}`}</Link>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <Link to="/productwomen" className="drop__tittle">NỮ</Link>
                                <ul className="drop__list">
                                    {
                                        nsx.map((e, i) => {
                                            return (
                                                <li className="drop__item" key={i}>
                                                    <div className="drop__link">
                                                        <Link className="link" to={`/productproducer/${e.nameNsx}`}>{`Đồng hồ ${e.nameNsx}`}</Link>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <span className="drop__tittle">PHỤ KIỆN</span>
                                <ul className="drop__list">
                                    {
                                        extra.map((e, i) => {
                                            return (
                                                <li className="drop__item" key={i}>
                                                    <div className="drop__link">
                                                        <Link className="link" to={`/extraproducer/${e.nameextra}`}>{e.nameextra}</Link>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/news" activeOnlyWhenExact={false} label="TIN TỨC" />
                        </div>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink to="/contact" activeOnlyWhenExact={false} label="LIÊN HỆ" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;