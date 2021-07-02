import React from 'react';
import '../styles/Pagination.scss';

function Pagination({ countPage, paginate, activePage, currentPage, pageNext, pagePrev }) {
    var pageNumber = [];

    for (var i = 1; i <= countPage; i++) {
        pageNumber.push(i);
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                <li className={`pagination__item ${pagePrev === false ? "disable" : ""}`} onClick={pagePrev}>
                    <div className="pagination__link">&laquo;</div>
                </li>
                {
                    pageNumber.map((value, i) => {
                        return (
                            <li className={`pagination__item ${activePage === value ? "active" : ""}`} onClick={() => paginate(value)} key={i}>
                                <div className="pagination__link">{value}</div>
                            </li>
                        );
                    })
                }
                <li className={`pagination__item ${pagePrev === false ? "disable" : ""}`} onClick={pageNext}>
                    <div className="pagination__link">&raquo;</div>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;