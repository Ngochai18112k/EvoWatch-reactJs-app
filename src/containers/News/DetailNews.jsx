import React from 'react';
import PropTypes from 'prop-types';
import './News.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../features/Contexts/CartProvider';

DetailNews.propTypes = {

};

function DetailNews(props) {
    const context = useContext(CartContext);
    var news = context.news.find(e => e.idNews === props.match.params.slug);

    return (
        <div id="content">
            <div className="container">
                {/* Direct */}
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <Link to="/" className="direct__link">Trang chủ</Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <Link to="/product" className="direct__link">Tin tức</Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <span className="direct__text">{news.tittle}</span>
                        </li>
                    </ul>
                </div>

                {/* Content */}
                <div className="news__detail">
                    <div className="news__detail-heading">
                        <span>{news.tittle}</span>
                        <p>ĐĂNG BỞI EVO THEMES VÀO LÚC {news.time}</p>
                    </div>
                    <div className="news__detail-desc">
                        <i><span>Thương hiệu đồng hồ Thụy Sỹ L’Duchen đã mở rộng bộ sưu tập Art Collection của mình với mẫu đồng hồ mặt rắn – L’Duchen Silver snake mã hiệu D 161.11.23 dây da cao cấp phiên bản giới hạn.</span></i>
                        <br></br><br></br>
                        <span>L’Duchen Silver Snake – tuyên ngôn của vị thế và sức mạnh</span>
                        <br></br><br></br>
                        <p>Nói đến loài vật mang ý nghĩa biểu trưng đa dạng không thể không nhắc tới loại rắn. Ứng với mỗi nền văn hóa ở mỗi quốc gia – vùng lãnh thổ, hình tượng rắn mang một ý nghĩa đặc trưng khác nhau. Tuy nhiên có một điểm chung phổ biến của loài rắn đó là biểu tượng của sức mạnh, trí tuệ minh mẫn và sức sống bất tử. Đây cũng là lý do Tổ chức Y tế thế giới WHO chọn rắn là hình rắn làm biểu tượng.</p>
                        <img src="../images/news/shop-dong-ho-seiko-chinh-hang-2.jpg" alt="" />
                        <br></br><br></br>
                        <i>Hơn 300 trăm năm qua, nhà L’Duchen chưa bao giờ khiến tín đồ thất vọng và sự ra đời của L’Duchen Silver Snake như tuyên ngôn về đẳng cấp hãng</i>
                        <br></br><br></br>
                        <p>Đối với hãng thương hiệu đồng hồ Thụy Sỹ hơn 300 năm tuổi – L’duchen, biểu tượng của loài rắn được truyền cảm hứng sáng tạo cho đội ngũ thiết kế, nghệ nhân chế tác, để tạo mẫu đồng hồ L’Duchen Silver Snake mã hiệu D 161.11.23 như một biểu tượng cho đẳng cấp sang trọng, sự quyền quý. Đồng thời khẳng định vị thế, sức mạnh của chủ nhân.</p>
                        <span>L’Duchen Silver Snake : Xứng tầm đẳng cấp</span>
                        <br></br><br></br>
                        <p>Bộ máy trong đồng hồ, từng chi tiết nhỏ nhất trên mặt số hình rắn được lắp ráp và vẽ hoàn toàn thủ công bằng tay bởi nhóm thợ đồng hồ có kinh nghiệm, thực hiện tất cả các giai đoạn lắp ráp từ đầu đến cuối. Sự hoàn thiện đồng hồ vô cùng nổi bật với các viên đá quý được đặt khéo léo, các chi tiết uốn lượn trên mình rắn chính xác tuyệt đối, được đánh bóng cầu kỳ, phối màu độc đáo. Có thể nói rằng, L’Duchen Silver snake mã hiệu D 161.11.23 mang vẻ đẹp, mạnh mẽ, quyền quý của trang sức hình rắn đã ‘thôi miên’ không ít doanh nhân giàu có, thành đạt khắp 5 Châu.</p>
                        <img src="../images/news/lduchen-d-161.11.23-silver-snake-1.jpg" alt="" />
                        <br></br><br></br>
                        <i>Đồng hồ L’Duchen Silver Snake ngoài chất lượng cao còn mang tính biểu tượng cho trí tuệ, đẳng cấp</i>
                        <br></br><br></br>
                        <p>Tất cả những tính năng phức tạp  ẩn chứa trong bộ máy Quartz được đặt vỏn vẹn trong bộ vỏ có đường kính 41mm, dày khoảng 11mm. Một  kích thước trên giấy tờ vô cùng tuyệt vời với cổ tay nam giới Châu Á nói chung và Việt Nam nói riêng. Và cũng xin được nói thêm rằng, các thiết kế của hãng L’duchen chưa bao giờ thôi nổi tiếng với thiết kế thanh mảnh và lịch lãm, tất nhiên với mẫu đồng hồ này cũng tương tự.</p>
                        <p>Đúng với ý tưởng hình rắn độc đáo, thiết kế đồng hồ cũng rất chắc chắn và mạnh mẽ, uy quyền. Càng nối dây cũng được thiết kế vát, hơi cong theo dáng cổ tay. Đi kèm với chiếc đồng hồ là bộ dây da cá sấu đen và khóa bướm chế tác bằng thép không gỉ cao cấp, cùng chất liệu với bộ vỏ. Nhiều người đánh giá cao chất liệu chế tác quý hiếm dùng trong chế tác bộ vỏ, dây đeo, núm vặn mặc dù được hoàn thiện tỉ mỉ, nhưng thứ làm nên sự cuốn hút của chiếc đồng hồ này chính là mặt số quá độc đáo, thật xự xuất sắc cùng những chức năng phức tạp được hiển thị bên trong.</p>
                        <img src="../images/news/lduchen-d-161.11.23-silver-snake-2.jpg" alt="" />
                        <br></br><br></br>
                        <i>Có thể bạn không biết, L’Duchen Silver Snake được các doanh nhân thành đạt yêu thích</i>
                        <br></br><br></br>
                        <p>Do mặt số độc đáo, nổi bật thầm nhuần tinh thần sáng tạo và sở hữu phong cách tối giản: Chỉ phô bày 3 cây kim thiết kế nhọn hình cung tên giúp người dùng có thể dễ dàng quan sát chi tiết hình rắn. Toàn bộ kim chỉ giờ, chỉ phút và chỉ giây, đinh ốc và toàn bộ chi tiết trên mặt số đều được hoàn thiện với phương pháp thủ công. Nhờ đó, cho ra một màu khối màu hài hòa vừa cổ điển vừa hiện đại, thực sự bắt mắt.</p>
                    </div>
                    <div className="news__detail-act">
                        <div className="like">
                            <img src="../images/news/Like.png" alt="" />
                        </div>
                        <div className="share1">
                            <img src="../images/news/Share1.png" alt="" />
                        </div>
                        <div className="share2">
                            <img src="../images/news/Share2.png" alt="" />
                        </div>
                    </div>
                    <div className="news__detail-view">
                        <div className="tittle">
                            <span>Bạn đang xem: </span>
                            {news.tittle}
                        </div>
                        <div className="act">
                            <div className="act-prev">
                                <i class="fas fa-chevron-left"></i>
                                <span>Bài trước</span>
                            </div>
                            <div className="separator">|</div>
                            <div className="act-next">
                                <span>Bài sau</span>
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="news__detail-comment">
                        <div className="comment">
                            <div className="comment__tittle">Bình luận (2 bình luận)</div>
                            <div className="comment__list">
                                <img src="../images/news/avatar.png" alt="" />
                                <div className="comment__body">
                                    <div className="name">Evo Themes</div>
                                    <div className="time">18/05/2019</div>
                                    <p>Việc sưu tầm và sở hữu những chiếc đồng hồ hàng hiệu xa xỉ luôn là một niềm đam mê của nhiều quý ông hiện đại ngày nay. Khi quyết định sở hữu một món đồ đắt giá, dù là đồng hồ hay bất kì thứ gì khác, việc đưa ra những lý do thích đáng để quyết định đầu tư là một việc vô cùng quan trọng.</p>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <div className="form__tittle">
                                <span>VIẾT BÌNH LUẬN CỦA BẠN</span>
                                <p>Địa chỉ email của bạn sẽ được bảo mật. Các trường bắt buộc được đánh dấu <i>*</i></p>
                            </div>
                            <div className="form__group">
                                <div className="content">
                                    <p>Nội dung<i>*</i></p>
                                    <textarea placeholder="Nội dung"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 form__input">
                                        <p>Họ tên<i>*</i></p>
                                        <input type="text" placeholder="Họ tên" />
                                    </div>
                                    <div className="col-xl-6 form__input">
                                        <p>Email<i>*</i></p>
                                        <input type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="button" style={{ float: 'right' }}>
                                    <div className="btn btn__darkwhite" title="">GỬI BÌNH LUẬN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailNews;