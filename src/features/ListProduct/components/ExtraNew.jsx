import React, { useEffect, useState } from 'react';
import ListExtraNew from './ListExtraNew';

ExtraNew.propTypes = {};

function ExtraNew(props) {
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
        <ListExtraNew sanPham={sanPham}></ListExtraNew>
    );
}

export default ExtraNew;