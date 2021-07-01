import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {

};

function Banner(props) {
    return (
        <div class="banner">
            <img src="" alt="" />
            <div class="container">
                <div class="row">
                    <div class="col-xl-8">
                        <div class="banner__text">
                            <span class="banner__heading">NAM</span>
                            <span class="banner__desc">Những sản phẩm đang được "săn lùng" gát gao nhất của Evo Watch và có thể sold out bất cứ lúc nào. Hãy nhanh tay tìm lấy sản phẩm bạn yêu thích.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;