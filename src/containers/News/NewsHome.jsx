import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../../features/Contexts/CartProvider';
import './News.scss';

NewsHome.propTypes = {};

function NewsHome(props) {
    const context = useContext(CartContext);
    var news = context.news;

    let history = useHistory();
    function nextPage(p) {
        history.push(`/detailnews/${p}`);
    }

    return (
        <div className="news">
            <div className="container">
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link to="/news" className="tittle__heading-link">
                            TIN TỨC
                            <strong>EVO WATCH</strong>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {
                        news.map((e, i) => {
                            return (
                                <div className={`col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 news__card ${e.idNews > 4 ? "disable" : ""}`} key={i}>
                                    <Link to="#" className="news__link-home" title={e.tittle}>
                                        <div className="news__img-home">
                                            <img src={`./images/news/${e.image}`} alt="" />
                                        </div>
                                        <p className="news__tittle">{e.tittle}</p>
                                        <p className="news__desc hide-on-mobile">{e.description}</p>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default NewsHome;