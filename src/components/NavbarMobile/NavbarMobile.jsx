import React, { useEffect, useState } from 'react';
import './NavbarMobile.scss';
import MenuLink from '../MenuLink/MenuLink';
import { Link } from 'react-router-dom';

function NavbarMobile({ toogleNav, handleToogleNav }) {
    const [nsx, setNsx] = useState([]);
    const [extra, setExtra] = useState([]);
    const [toogleDrop, setToogleDrop] = useState(0);
    const onToogleDrop = (index) => {
        setToogleDrop(index);
    }

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
        <div className={`navmobile ${toogleNav ? "active" : ""}`}>
            <div className="navmobile__overlay" onClick={handleToogleNav}></div>
            <div className={`navmobile__body ${toogleNav ? "active" : ""}`}>
                <ul className="navmobile__list">
                    <li className="navmobile__item">
                        <div className="navmobile__link" onClick={handleToogleNav}>
                            <MenuLink to="/" activeOnlyWhenExact={true} label="Trang Chủ" />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink to="/intro" activeOnlyWhenExact={true} label="Giới Thiệu" />
                            <i className="fal fa-chevron-down navmobile__icon" onClick={() => onToogleDrop(1)}></i>
                        </div>
                        <ul className={`navmobile__drop ${toogleDrop === 1 ? "active" : ""}`}>
                            <li className="navmobile__drop-item" onClick={handleToogleNav}>
                                <Link to="/intro-replace" className="navmobile__drop-link">Chính sách đổi hàng</Link>
                            </li>
                            <li className="navmobile__drop-item" onClick={handleToogleNav}>
                                <Link to="/intro-faq" className="navmobile__drop-link">FAQ</Link>
                            </li>
                            <li className="navmobile__drop-item" onClick={handleToogleNav}>
                                <Link to="/intro-pay" className="navmobile__drop-link">Hướng dẫn thanh toán</Link>
                            </li>
                            <li className="navmobile__drop-item" onClick={handleToogleNav}>
                                <Link to="/intro-ship" className="navmobile__drop-link">Chính sách vận chuyển</Link>
                            </li>
                            <li className="navmobile__drop-item" onClick={handleToogleNav}>
                                <Link to="/intro-shop" className="navmobile__drop-link">Hệ thống cửa hàng</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink to="/productmen" activeOnlyWhenExact={true} label="Nam" />
                            <i className="fal fa-chevron-down navmobile__icon" onClick={() => onToogleDrop(2)}></i>
                        </div>
                        <ul className={`navmobile__drop ${toogleDrop === 2 ? "active" : ""}`}>
                            {
                                nsx.map((e, i) => {
                                    return (
                                        <li className="navmobile__drop-item" key={i} onClick={handleToogleNav}>
                                            <Link to={`/productproducer/${e.nameNsx}`} className="navmobile__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink to="/productwomen" activeOnlyWhenExact={true} label="Nữ" />
                            <i className="fal fa-chevron-down navmobile__icon" onClick={() => onToogleDrop(3)}></i>
                        </div>
                        <ul className={`navmobile__drop ${toogleDrop === 3 ? "active" : ""}`}>
                            {
                                nsx.map((e, i) => {
                                    return (
                                        <li className="navmobile__drop-item" key={i} onClick={handleToogleNav}>
                                            <Link to={`/productproducer/${e.nameNsx}`} className="navmobile__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink to="/productextra" activeOnlyWhenExact={true} label="Phụ Kiện" />
                            <i className="fal fa-chevron-down navmobile__icon" onClick={() => onToogleDrop(4)}></i>
                        </div>
                        <ul className={`navmobile__drop ${toogleDrop === 4 ? "active" : ""}`}>
                            {
                                extra.map((e, i) => {
                                    return (
                                        <li className="navmobile__drop-item" key={i} onClick={handleToogleNav}>
                                            <Link to={`/extraproducer/${e.nameextra}`} className="navmobile__drop-link">{e.nameextra}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink to="/product" activeOnlyWhenExact={true} label="Sản Phẩm" />
                            <i className="fal fa-chevron-down navmobile__icon" onClick={() => onToogleDrop(5)}></i>
                        </div>
                        <ul className={`navmobile__drop ${toogleDrop === 5 ? "active" : ""}`}>
                            <li className="navmobile__drop-item">
                                <MenuLink to="/productmen" activeOnlyWhenExact={true} label="Nam" />
                                <i className="fal fa-chevron-down navmobile__icon"></i>
                            </li>
                            <ul className={`navmobile__drop ${toogleDrop === 5 ? "active" : ""}`}>
                                {
                                    nsx.map((e, i) => {
                                        return (
                                            <li className="navmobile__drop-item" key={i} onClick={handleToogleNav}>
                                                <Link to={`/productproducer/${e.nameNsx}`} className="navmobile__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <li className="navmobile__drop-item">
                                <MenuLink to="/productwomen" activeOnlyWhenExact={true} label="Nữ" />
                                <i className="fal fa-chevron-down navmobile__icon"></i>
                            </li>
                            <ul className={`navmobile__drop ${toogleDrop === 5 ? "active" : ""}`}>
                                {
                                    nsx.map((e, i) => {
                                        return (
                                            <li className="navmobile__drop-item" key={i} onClick={handleToogleNav}>
                                                <Link to={`/productproducer/${e.nameNsx}`} className="navmobile__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <li className="navmobile__drop-item">
                                <MenuLink to="/productextra" activeOnlyWhenExact={true} label="Phụ Kiện" />
                                <i className="fal fa-chevron-down navmobile__icon"></i>
                            </li>
                            <ul className={`navmobile__drop ${toogleDrop === 5 ? "active" : ""}`}>
                                {
                                    extra.map((e, i) => {
                                        return (
                                            <li className="navmobile__drop-item" key={i} onClick={handleToogleNav}>
                                                <Link to={`/extraproducer/${e.nameextra}`} className="navmobile__drop-link">{e.nameextra}</Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </ul>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link" onClick={handleToogleNav}>
                            <MenuLink to="/news" activeOnlyWhenExact={true} label="Tin Tức" />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link" onClick={handleToogleNav}>
                            <MenuLink to="/contact" activeOnlyWhenExact={true} label="Liên Hệ" />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link" onClick={handleToogleNav}>
                            <MenuLink to="/login" activeOnlyWhenExact={true} label="Đăng Nhập" />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link" onClick={handleToogleNav}>
                            <MenuLink to="/signin" activeOnlyWhenExact={true} label="Đăng Ký" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavbarMobile;