import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ListProductMen from './ListProductMen';

ProductMen.propTypes = {};

function ProductMen(props) {
    const [sanPham, setSanPham] = useState([]);

    useEffect(() => {
        fetch("https://60cc065271b73400171f6e19.mockapi.io/productsnew")
            .then(res => res.json())
            .then((result) => {
                setSanPham(result);
            },
                (error) => {

                }
            )
    }, []);

    return (
        <ListProductMen sanPham={sanPham}></ListProductMen>
    );
}

export default ProductMen;