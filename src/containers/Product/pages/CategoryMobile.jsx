import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.scss';

function CategoryMobile({ toogle, onToogler, nsx, extra, changeNsx, toogleCate, onToogleCate }) {
    return (
        <div className={`category-mobile__on ${toogleCate ? "active" : ""}`}>
            <div className="category">
                <p className="category__heading">DANH MỤC</p>
                <ul className="category__list">
                    <li className="category__item">
                        <Link to="/" className="category__link">Trang chủ</Link>
                    </li>
                    <li className="category__item">
                        <Link to="/intro" className="category__link">Giới thiệu</Link>
                        <span className={`category__plus ${toogle === 1 ? "active" : ""}`} onClick={() => onToogler(1)}></span>
                        <ul className="category__drop">
                            <li className="category__drop-item">
                                <Link to="/intro-replace" className="category__drop-link">Chính sách đổi hàng</Link>
                            </li>
                            <li className="category__drop-item">
                                <Link to="/intro-faq" className="category__drop-link">FAQ</Link>
                            </li>
                            <li className="category__drop-item">
                                <Link to="/intro-pay" className="category__drop-link">Hướng dẫn thanh toán</Link>
                            </li>
                            <li className="category__drop-item">
                                <Link to="/intro-ship" className="category__drop-link">Chính sách vận chuyển</Link>
                            </li>
                            <li className="category__drop-item">
                                <Link to="/intro-shop" className="category__drop-link">Hệ thống cửa hàng</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`category__item`}>
                        <Link to="/productmen" className="category__link">Nam</Link>
                        <span className={`category__plus ${toogle === 2 ? "active" : ""}`} onClick={() => onToogler(2)}></span>
                        <ul className="category__drop">
                            {
                                nsx.map((e, i) => {
                                    return (
                                        <li className="category__drop-item" key={i}>
                                            <Link to={`/productproducer/${e.nameNsx}`} className="category__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className="category__item">
                        <Link to="/productwomen" className="category__link">Nữ</Link>
                        <span className={`category__plus ${toogle === 3 ? "active" : ""}`} onClick={() => onToogler(3)}></span>
                        <ul className="category__drop">
                            {
                                nsx.map((e, i) => {
                                    return (
                                        <li className="category__drop-item" key={i}>
                                            <Link to={`/productproducer/${e.nameNsx}`} className="category__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className={`category__item`}>
                        <Link to="/productextra" className="category__link">Phụ kiện</Link>
                        <span className={`category__plus ${toogle === 4 ? "active" : ""}`} onClick={() => onToogler(4)}></span>
                        <ul className="category__drop">
                            {
                                extra.map((e, i) => {
                                    return (
                                        <li className="category__drop-item" key={i}>
                                            <Link to={`/extraproducer/${e.nameextra}`} className="category__drop-link">{e.nameextra}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                    <li className={`category__item`}>
                        <Link to="/product" className="category__link">Sản phẩm</Link>
                        <span className={`category__plus ${toogle === 5 ? "active" : ""}`} onClick={() => onToogler(5)}></span>
                        <ul className="category__list-sub">
                            <li className="category__item">
                                <Link to="/productmen" className="category__link">Nam</Link>
                                <span className={`category__plus ${toogle === 5 ? "active" : ""}`} onClick={() => onToogler(5)}></span>
                                <ul className="category__drop">
                                    {
                                        nsx.map((e, i) => {
                                            return (
                                                <li className="category__drop-item" key={i}>
                                                    <Link to={`/productproducer/${e.nameNsx}`} className="category__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="category__item">
                                <Link to="/productwomen" className="category__link">Nữ</Link>
                                <span className={`category__plus ${toogle === 5 ? "active" : ""}`} onClick={() => onToogler(5)}></span>
                                <ul className="category__drop">
                                    {
                                        nsx.map((e, i) => {
                                            return (
                                                <li className="category__drop-item" key={i}>
                                                    <Link to={`/productproducer/${e.nameNsx}`} className="category__drop-link">{`Đồng hồ ${e.nameNsx}`}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="category__item">
                                <Link to="/productextra" className="category__link">Phụ kiện</Link>
                                <span className={`category__plus ${toogle === 5 ? "active" : ""}`} onClick={() => onToogler(5)}></span>
                                <ul className="category__drop">
                                    {
                                        extra.map((e, i) => {
                                            return (
                                                <li className="category__drop-item" key={i}>
                                                    <Link to={`/extraproducer/${e.nameextra}`} className="category__drop-link">{e.nameextra}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="category__item">
                        <Link to="/news" className="category__link">Tin tức</Link>
                    </li>
                    <li className="category__item">
                        <Link to="/contact" className="category__link">Liên hệ</Link>
                    </li>
                </ul>
            </div>
            <div className="filter">
                <p className="filter__heading">TÌM THEO</p>
                <div className="filter__choose">
                    <div className="filter__choose-text">
                        <span className="filter__choose-text-tittle">Bạn chọn</span>
                        <span className="filter__choose-text-close">
                            Bỏ hết
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </div>
                    <ul className="filter__choose-list">
                        <li className="filter__choose-item">
                            <i className="fas fa-times"></i>
                            <span className="filter__choose-item-text">Kashmir</span>
                        </li>
                    </ul>
                </div>
                <p className="filter__tittle">Thương hiệu</p>
                <ul className="filter__list">
                    {
                        nsx.map((e, i) => {
                            return (
                                <li className="filter__item" key={i}>
                                    <input type="checkbox" className="filter__item-in" id={e.nameNsx} name={e.idNsx} />
                                    <div className="filter__item-text">
                                        <span className={e.tt === true ? "active" : ""} onClick={() => changeNsx(e.idNsx)}>
                                            <i className="fa"></i>
                                            {e.nameNsx}
                                        </span>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                <p className="filter__tittle">Giá sản phẩm</p>
                <ul className="filter__list">
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Giá dưới 100.000đ
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            100.000đ - 200.000đ
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            200.000đ - 300.000đ
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            300.000đ - 500.000đ
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            500.000đ - 1.000.000đ
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Giá trên 1.000.000đ
                        </span>
                    </li>
                </ul>
                <p className="filter__tittle">Loại</p>
                <ul className="filter__list">
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Carbon
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            classNameic
                        </span>
                    </li>
                </ul>
                <p className="filter__tittle">Kích thước</p>
                <ul className="filter__list">
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Lớn
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Nhỏ
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Vừa
                        </span>
                    </li>
                </ul>
                <p className="filter__tittle">Loại dây</p>
                <ul className="filter__list">
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Nilong
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Nhựa
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Da
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CategoryMobile;