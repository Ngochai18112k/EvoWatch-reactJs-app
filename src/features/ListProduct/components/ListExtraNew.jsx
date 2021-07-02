import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Swiper, Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../../Contexts/CartProvider';

ListExtraNew.propTypes = {};

function ListExtraNew(props) {
    const context = useContext(CartContext);
    function addCart(el) {
        context.addCart(el);
    }

    let history = useHistory();
    function nextPage(p) {
        history.push(`/detailproduct/${p}`);
    }

    SwiperCore.use([Navigation, Pagination]);
    useEffect(() => {
        const swiper = new Swiper('.product', {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 20,
            breakpoints: {
                450: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },

                1365: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                }
            },
            loop: false,
            loopFillGroupWithBlank: false,
        })
    });

    return (
        <div className="swiper-container product">
            <div className="swiper-wrapper">
                {
                    props.sanPham.map((e, i) => {
                        return (
                            <div className="swiper-slide" key={i}>
                                <div className="product__card">
                                    <Link to="#" className="product__link" onClick={() => nextPage(e.id)}></Link>
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
                                        <span className={`product__price-old ${e.priceold === "" ? "disable" : ""}`}>{e.priceold}₫</span>
                                    </div>
                                    <div className="product__add" title="Thêm vào giỏ hàng" onClick={() => addCart(e)}>Thêm vào giỏ hàng</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ListExtraNew;