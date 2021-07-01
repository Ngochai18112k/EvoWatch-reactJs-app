import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { useContext, useState } from 'react';
import { CartContext } from '../../features/Contexts/CartProvider';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

Modal.propTypes = {};

function Modal(props) {
    const [toogle, setToogle] = useState(false);
    const context = useContext(CartContext);
    let history = useHistory();

    var indexProduct = context.cart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.quality;
    }, 0);

    function onToogle() {
        toogle ? setToogle(false) : setToogle(true);
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
        }, 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }

    return (
        <div id="modal" className={`${indexProduct > 0 ? "active" : ""} ${toogle ? "disable" : ""}`}>
            <div className="modal__overlay" onClick={onToogle}></div>
            <div className="modal__body">
                <div className="modal__body-tittle">
                    <p>BẠN ĐÃ THÊM
                        <Link to="/">CRUX</Link>
                        VÀO GIỎ HÀNG
                    </p>
                </div>
                <div className="modal__body-noti">
                    <div >GIỎ HÀNG CỦA BẠN CÓ {indexProduct} SẢN PHẨM</div>
                </div>
                <div className="modal__body-product">
                    <div className="body__product-text">
                        <div className="body__product-text50">Sản phẩm</div>
                        <div className="body__product-text15">Đơn giá</div>
                        <div className="body__product-text15">Số lượng</div>
                        <div className="body__product-text15">Thành tiền</div>
                    </div>
                    {
                        context.cart.map((e) => {
                            return (
                                <div className="body__product-price">
                                    <div className="body__product-55">
                                        <div className="body__product-img" onClick={() => nextPage(e.id)}>
                                            <img src={`./images/product/${e.imageafter}`} alt="" />
                                        </div>
                                        <div className="body__product-info">
                                            <p className="body__product-name">{e.name}</p>
                                            <p className="body__product-close" onClick={() => deleteCart(e)}>
                                                <i className="fas fa-times"></i>
                                                Bỏ sản phẩm
                                            </p>
                                            <p className="body__product-add">
                                                <i className="fa fa-check"></i>
                                                Sản phẩm vừa thêm!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="body__product-15">{e.pricenew}₫</div>
                                    <div className="body__product-15">
                                        <div className="body__quality">
                                            <button className="body__product-quality math" onClick={() => minusQualities(e)}>-</button>
                                            <input type="text" className="body__product-quality num" value={e.quality} />
                                            <button className="body__product-quality math" onClick={() => addQualities(e)}>+</button>
                                        </div>
                                    </div>
                                    <div className="body__product-15">{(e.quality * e.pricenew).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="modal__body-foot">
                    <Link to="/">
                        <i className="fas fa-caret-left"></i>
                        Tiếp tục mua hàng
                    </Link>
                    <p>
                        Thành tiền:
                        <span>{totalPrice()}</span>
                    </p>
                </div>
                {/* Btn */}
                <div className="button">
                    <div className="modal__body-btn">THANH TOÁN ĐƠN HÀNG</div>
                </div>
                <div className={`modal__close`} onClick={onToogle}>
                    <i className="fa fa-times"></i>
                </div>
            </div>
        </div>
    );
}

export default Modal;