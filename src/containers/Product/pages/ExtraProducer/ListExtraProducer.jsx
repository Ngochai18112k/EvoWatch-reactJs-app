import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../features/Contexts/CartProvider';
import { ModalContext } from '../../../../features/Contexts/ModalProvider';

ListExtraProducer.propTypes = {
    sanPham: PropTypes.array,
};

function ListExtraProducer(props) {
    const { sanPham } = props;

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

    return (
        <div className="row product">
            {
                sanPham.map((e, i) => {
                    return (
                        <div className="col-xl-4 product__card" key={i}>
                            <Link to="#" className="product__link" onClick={() => nextPage(e.id)}></Link>
                            <span className={`product-sale ${e.sale !== "" ? "sale" : ""}`}>{e.sale}%</span>
                            <div className="product__img">
                                <div className="product__img-before">
                                    <img src={`../images/product/${e.imageafter}`} alt="" />
                                </div>
                                <div className="product__img-after">
                                    <img src={`../images/product/${e.imagebefore}`} alt="" />
                                </div>
                            </div>
                            <span className="product__desc">{e.material}</span>
                            <span className="product__name">{e.name}</span>
                            <div className="product__price">
                                <span className="product__price-new">{e.pricenew}₫</span>
                                <span className={`product__price-old ${e.priceold === "" ? "disable" : ""}`}>{e.priceold}₫</span>
                            </div>
                            <div onClick={handleOpenModal}>
                                <div className="product__add" title="Thêm vào giỏ hàng" onClick={() => addCart(e)}>Thêm vào giỏ hàng</div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ListExtraProducer;