import React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../../features/Banners/Banners';
import Collection from '../../features/ListProduct/components/Collection';
import ExtraNew from '../../features/ListProduct/components/ExtraNew';
import ProducMen from '../../features/ListProduct/components/ProductMen';
import ProductNew from '../../features/ListProduct/components/ProductNew';
import NewsHome from '../News/NewsHome';
import './Home.scss';

Home.propTypes = {};

function Home(props) {
    return (
        <div id="content">
            <div className="banner-home">
                <img src="./images/slider/slider1.jpg" alt="" />
            </div>
            <div className="container">
                {/* Tittle */}
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link to="/product" className="tittle__heading-link" title="Sản phẩm Mới">
                            SẢN PHẨM
                            <strong>MỚI</strong>
                        </Link>
                    </div>
                    <div className="tittle__section hide-on-mobile">
                        <Link to="/productmen" className="tittle__section-link" title="Nam">Nam</Link>
                        <Link to="/productwomen" className="tittle__section-link" title="Nữ">Nữ</Link>
                        <Link to="/productextra" className="tittle__section-link" title="Phụ kiện">Phụ kiện</Link>
                    </div>
                </div>

                {/* Product */}
                <ProductNew></ProductNew>

                {/* Btn */}
                <div className="button">
                    <Link to="/product" className="btns btn__darkwhite" title="Xem tất cả Sản phẩm mới">XEM TẤT CẢ. SẢN PHẨM MỚI</Link>
                </div>

                {/* Banner */}
                <Banners></Banners>

                {/* Tittle */}
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link to="/productmen" className="tittle__heading-link">
                            DÀNH CHO
                            <strong>NAM</strong>
                        </Link>
                    </div>
                    <div className="tittle__section hide-on-mobile">
                        <Link to="/productmen" className="tittle__section-link" title="Nam">Nam</Link>
                        <Link to="/productwomen" className="tittle__section-link" title="Nữ">Nữ</Link>
                        <Link to="/productextra" className="tittle__section-link" title="Phụ kiện">Phụ kiện</Link>
                    </div>
                </div>

                {/* Product */}
                <ProducMen></ProducMen>

                {/* Btn */}
                <div className="button">
                    <Link to="/productmen" className="btns btn__darkwhite" title="Xem tất cả Dành cho nam">XEM TẤT CẢ. DÀNH CHO NAM</Link>
                </div>

                {/* Range */}
                <div className="range"></div>

                {/* Tittle */}
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link to="/productextra" className="tittle__heading-link">
                            <strong>PHỤ KIỆN</strong>
                            MỚI
                        </Link>
                    </div>
                    <div className="tittle__section hide-on-mobile">
                        <Link to="/productmen" className="tittle__section-link" title="Nam">Nam</Link>
                        <Link to="/productwomen" className="tittle__section-link" title="Nữ">Nữ</Link>
                        <Link to="/productextra" className="tittle__section-link" title="Phụ kiện">Phụ kiện</Link>
                    </div>
                </div>

                {/* Product */}
                <ExtraNew></ExtraNew>

                {/* Btn */}
                <div className="button">
                    <Link to="/productextra" className="btns btn__darkwhite" title="Xem tất cả Phụ kiện mới">XEM TẤT CẢ. PHỤ KIỆN MỚI</Link>
                </div>
            </div>

            {/* Collection */}
            <Collection></Collection>

            {/* News */}
            <NewsHome></NewsHome>

            {/* Btn */}
            <div className="button">
                <Link to="/news" className="btns btn__darkwhite" title="Xem tất cả">XEM TẤT CẢ</Link>
            </div>
        </div >
    );
}

export default Home;