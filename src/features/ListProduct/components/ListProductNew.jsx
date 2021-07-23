import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { CartContext } from '../../Contexts/CartProvider';
import { ModalContext } from '../../Contexts/ModalProvider';

ListProductNew.propTypes = {};

function ListProductNew(props) {
    const context = useContext(CartContext);
    const { openModal } = useContext(ModalContext);
    function addCart(el) {
        context.addCart(el);
    }

    const handleOpenModal = () => {
        openModal();
    }

    let history = useHistory();
    function nextPage(p) {
        history.push(`/detailproduct/${p}`);
    }

    SwiperCore.use([Navigation, Pagination]);
    useEffect(() => {
        const swiper = new Swiper('.product', {
            slidesPerView: 2,
            spaceBetween: 0,
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                }
            },
            loop: false,
            loopFillGroupWithBlank: false,
        })
    });

    return (
        <div className="swiper-container product hide-on-tablet">
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
                                    <div onClick={handleOpenModal} className="hide-on-mobile-tablet">
                                        <div className="product__add" title="Thêm vào giỏ hàng" onClick={() => addCart(e)}>Thêm vào giỏ hàng</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ListProductNew;