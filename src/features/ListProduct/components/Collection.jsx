import React from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import '../styles/Collection.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../../Contexts/CartProvider';

Collection.propTypes = {};

function Collection(props) {
    const [sanPham, setSanPham] = useState([]);
    const context = useContext(CartContext);
    function addCart(el) {
        context.addCart(el);
    }

    let history = useHistory();
    function nextPage(p) {
        history.push(`/detailproduct/${p}`);
    }

    useEffect(() => {
        fetch("https://60cc065271b73400171f6e19.mockapi.io/productcollect")
            .then(res => res.json())
            .then((result) => {
                setSanPham(result);
            },
                (error) => {

                }
            )
    }, []);

    useEffect(() => {
        const swiper = new Swiper('.collection__slide', {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 20,
            breakpoints: {
                450: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },

                1365: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
            },
            loop: true,
            loopFillGroupWithBlank: false,
        })
    });

    return (
        <div className="collection" style={{ backgroundImage: `url('./images/product/ant_product_bg.jpg')` }}>
            <div className="collection__content">
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link to="/product" className="tittle__heading-link" title="Bộ sưu tập Mùa hè">
                            BỘ SƯU TẬP
                            <strong>MÙA HÈ</strong>
                        </Link>
                    </div>
                </div>
                <div className="swiper-container collection__slide container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="collection__img">
                                <img src="./images/collection/index-evo-icon-1.jpg" alt="" />
                                <Link to="/product" className="collection__img-link"></Link>
                                <span className="collection__img-dot"></span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="collection__product">
                                <div className="product">
                                    {
                                        sanPham.map((e, i) => {
                                            return (
                                                <div className="product__card sale">
                                                    <Link className="product__link" onClick={() => nextPage(e.id)}></Link>
                                                    <span className={`product-sale ${e.sale !== "" ? "sale" : ""}`}>{e.sale}%</span>
                                                    <div className="product__img">
                                                        <div className="product__img-before">
                                                            <img src={`./images/product/${e.imageafter}`} alt="" />
                                                        </div>
                                                        <div className="product__img-after">
                                                            <img src={`./images/product/${e.imagebefore}`} alt="" />
                                                        </div>
                                                    </div>
                                                    <span className="product__desc">{e.material}</span>
                                                    <span className="product__name">{e.name}</span>
                                                    <div className="product__price">
                                                        <span className="product__price-new">{e.pricenew}₫</span>
                                                        <span className="product__price-old">{e.priceold}₫</span>
                                                    </div>
                                                    <Link className="product__add" title="Thêm vào giỏ hàng" onClick={() => addCart(e)}>Thêm vào giỏ hàng</Link>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;