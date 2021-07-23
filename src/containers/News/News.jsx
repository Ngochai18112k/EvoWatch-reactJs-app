import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../../features/Contexts/CartProvider';
import Pagination from '../Product/pages/Pagination';
import './News.scss';

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
        if (currentPage === Math.ceil(news.length / postPerPage)) {
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
            <div className="banner">
                <img src="./images/evo-blog-banner.jpg" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8">
                            <div className="banner__text" style={{ textAlign: 'center' }}>
                                <span className="banner__heading">TẤT CẢ TIN TỨC</span>
                                <span className="banner__desc">Kiến thức về đồng hồ, thông tin khuyến mãi, tin tức & sự kiện, hình ảnh, video clip về đồng hồ đeo tay mới nhất hiện nay, cập nhật liên tục nhanh và đầy đủ...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        news.map((e, i) => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 news__card" key={i}>
                                    <Link to="#" className="news__link" title={e.tittle} onClick={() => nextPage(e.idNews)}>
                                        <div className="news__img">
                                            <img src={`./images/news/${e.image}`} alt="" />
                                        </div>
                                        <p className="news__tittle">{e.tittle}</p>
                                        <p className="news__desc">{e.description}</p>
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