import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './News.scss';
import Pagination from '../Product/pages/Pagination';
import { useHistory } from 'react-router';
import { CartContext } from '../../features/Contexts/CartProvider';
import { Link } from 'react-router-dom';

News.propTypes = {

};

function News(props) {
    const context = useContext(CartContext);
    var news = context.news;
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const [activePage, setActivePage] = useState(1);

    const indexLast = currentPage * postPerPage;
    const indexFirst = indexLast - postPerPage;
    const currentPost = news.slice(indexFirst, indexLast);
    const countPage = Math.ceil(news.length / postPerPage);

    let history = useHistory();
    function nextPage(p) {
        history.push(`/detailnews/${p}`);
    }

    function paginate(value) {
        setCurrentPage(value);
        setActivePage(value);
    }

    function pageNext() {
        if (currentPage == Math.ceil(news.length / postPerPage)) {
            setActivePage(1);
            setCurrentPage(1);
        }
        else {
            setActivePage(currentPage + 1);
            setCurrentPage(currentPage + 1);
        }
    }

    function pagePrev() {
        if (currentPage <= 1) {
            setActivePage(Math.ceil(news.length / postPerPage));
            setCurrentPage(Math.ceil(news.length / postPerPage));
        }
        else {
            setActivePage(currentPage - 1);
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div id="content">
            <div class="banner">
                <img src="./images/evo-blog-banner.jpg" alt="" />
                <div class="container">
                    <div class="row">
                        <div className="col-xl-2"></div>
                        <div class="col-xl-8">
                            <div class="banner__text" style={{ textAlign: 'center' }}>
                                <span class="banner__heading">TẤT CẢ TIN TỨC</span>
                                <span class="banner__desc">Kiến thức về đồng hồ, thông tin khuyến mãi, tin tức & sự kiện, hình ảnh, video clip về đồng hồ đeo tay mới nhất hiện nay, cập nhật liên tục nhanh và đầy đủ...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    {
                        news.map((e, i) => {
                            return (
                                <div class="col-xl-4 news__card">
                                    <Link class="news__link" title={e.tittle} onClick={() => nextPage(e.idNews)}>
                                        <div class="news__img">
                                            <img src={`./images/news/${e.image}`} alt="" />
                                        </div>
                                        <p class="news__tittle">{e.tittle}</p>
                                        <p class="news__desc hide-on-mobile">{e.description}</p>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
                <Pagination countPage={countPage} paginate={paginate} activePage={activePage} currentPage={currentPage} pageNext={pageNext} pagePrev={pagePrev}></Pagination>
            </div>
        </div>
    );
}

export default News;