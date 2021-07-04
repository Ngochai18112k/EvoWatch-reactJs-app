import React, { useEffect, useState } from 'react';
import ListProductNew from './ListProductNew';

ProductNew.propTypes = {};

function ProductNew(props) {
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
        <ListProductNew sanPham={sanPham}></ListProductNew>
    );
}

export default ProductNew;