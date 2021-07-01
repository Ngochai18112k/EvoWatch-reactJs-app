import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/Product/styles/Product.scss';
import { useHistory } from 'react-router';
import { CartContext } from '../Contexts/CartProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

SearchPage.propTypes = {};

function SearchPage(props) {
    const context = useContext(CartContext);
    var sp = context.search;

    let history = useHistory();
    function nextPage(p) {
        history.push(`/detailproduct/${p}`);
    }

    function addCart(el) {
        context.addCart(el);
    }

    return (
        <div id="content">
            <div className="container">
                {/* Direct */}
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <Link href="/" className="direct__link">Trang chủ</Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <Link to="/search" className="direct__link">Kết quả tìm kiếm</Link>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="search__title-heading">
                        CÓ 1 KẾT QUẢ TÌM KIẾM PHÙ HỢP
                    </div>
                </div>
                <div className="row product">
                    <div className="col-xl-3 product__card">
                        <Link className="product__link" onClick={() => nextPage(sp.id)}></Link>
                        <span className="product-sale">{sp.sale}%</span>
                        <div className="product__img">
                            <div className="product__img-before">
                                <img src={`./images/product/${sp.imageafter}`} alt="" />
                            </div>
                            <div className="product__img-after">
                                <img src={`./images/product/${sp.imagebefore}`} alt="" />
                            </div>
                        </div>
                        <span className="product__desc">{sp.material}</span>
                        <span className="product__name">{sp.name}</span>
                        <div className="product__price">
                            <span className="product__price-new">{sp.pricenew}₫</span>
                            <span className="product__price-old">{sp.priceold}₫</span>
                        </div>
                        <div className="product__add" title="Thêm vào giỏ hàng" onClick={() => addCart(sp)}>Thêm vào giỏ hàng</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;