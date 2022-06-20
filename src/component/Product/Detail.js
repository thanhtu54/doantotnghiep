import { FcHome } from 'react-icons/fc';
import { GrFormNext } from 'react-icons/gr';
import { FaMobileAlt, FaShippingFast } from 'react-icons/fa';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdOutlinePhotoCameraFront } from 'react-icons/md';
import { BiChip } from 'react-icons/bi';
import { MdOutlineSdStorage, MdOutlinePin } from 'react-icons/md';
import { RiInformationFill } from 'react-icons/ri';
import { BiCommentDetail } from 'react-icons/bi';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatings from 'react-star-ratings';
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
function Product(props) {
    const [rating, setRating] = useState(0);
    return (
        <>
            <div className='devider'>
                <ul>
                    <li>
                        <div id='home'>
                            <i><FcHome /></i>
                            <span>Trang chủ</span>
                        </div>
                    </li>
                    <li>
                        <i><GrFormNext /></i>
                    </li>
                    <li>
                        <span>Điện thoại nổi bật</span>
                    </li>
                    <li>
                        <i><GrFormNext /></i>
                    </li>
                    <li>
                        <span>Xiaomi Redmi Note 10 Pro</span>
                    </li>
                </ul>
            </div>
            <h3 id='title-pro'>Điện thoại di động Redmi Note 11 - 4GB/128GB- chính hãng</h3>
            <div className='content-detail'>
                <div className='content-left'>
                    <Carousel className='car'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../../assets/list-image-product/note-11pro-1.png")}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../../assets/list-image-product/note-11pro-2.png")}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../../assets/list-image-product/note-11pro-3.png")}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../../assets/list-image-product/note-11pro-4.png")}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../../assets/list-image-product/note-11pro-5.png")}
                                alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../../assets/list-image-product/note-11pro-6.png")}
                                alt="Seventh slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='content-right'>
                    <div className='price-sale'>
                        <b>Giá rẻ nhất tại cửa hàng: </b>
                        <span>7,480,000đ</span>
                    </div>
                    <div id='shipper'>
                        <i><FaShippingFast /></i>
                        <span>Miễn phí vận chuyển toàn quốc</span>
                    </div>
                    <div className='choose-color'>
                        <p>Lựa chọn màu:</p>
                        <ul>
                            <li>
                                <div id='white'>
                                    <input type="radio"></input>
                                    <label>Màu trắng</label>
                                    <p>7,480,000đ</p>
                                </div>
                            </li>
                            <li>
                                <div id='blue'>
                                    <input type="radio"></input>
                                    <label>Màu xanh</label>
                                    <p>7,480,000đ</p>
                                </div>
                            </li>
                            <li>
                                <div id='grey'>
                                    <input type="radio"></input>
                                    <label>Màu xám</label>
                                    <p>7,480,000đ</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='technical'>
                        <p>Thông số kỹ thuật:</p>
                        <ul>
                            <li>
                                <i><FaMobileAlt /></i>
                                <span>Chính: 6.43 inch, Chính: AMOLED, FHD+, 1080 x 2400 Pixels</span>
                            </li>
                            <li>
                                <i><AiOutlineCamera /></i>
                                <span>64.0 MP + 2.0 MP + 2.0 MP</span>
                            </li>
                            <li>
                                <i><MdOutlinePhotoCameraFront /></i>
                                <span>16.0 MP</span>
                            </li>
                            <li>
                                <i><BiChip /></i>
                                <span>Snapdragon 695 5G</span>
                            </li>
                            <li>
                                <i><MdOutlineSdStorage /></i>
                                <span>128 GB</span>
                            </li>
                            <li>
                                <i><MdOutlinePin /></i>
                                <span>4000 mAh</span>
                            </li>
                        </ul>
                    </div>
                    <Link to="/cart">
                        <div className='buy'>
                            <span>MUA NGAY</span>
                            <p>Giao hàng miễn phí hoặc nhận tại shop</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='Infomation'>
                <div className='title-infor'>
                    <i><RiInformationFill /></i>
                    <h3>Thông tin sản phẩm : Điện thoại di động Redmi Note 11 Pro - Chính hãng</h3>
                </div>
                <div className='content-information'>
                    <p>Nếu là tín đồ của Xiaomi thì chắc chắn bạn không nên bỏ qua em điện thoại di động  Redmi Note 11 Pro mới ra mắt này của Xiaomi. Chắc chắn với thiết kế hiện đại cùng nhiều tính năng cực đỉnh, người dùng có thể thoải mái trải nghiệm và sử dụng một cách tối ưu nhất.</p>
                    <div className='img1'>
                        <img src={require("../../assets/detail-image.jpg")} ></img>
                    </div>
                    <p className='border'>Thiết kế hiện đại với khung viền vuông vức cùng hệ thống 4 camera lên đến 108MP cực đỉnh</p>
                    <p>Redmi Note 11 Pro sở hữu thiết kế đẹp mắt với viền vuông vức, cho cảm giác hiện đại giống như dòng máy iPhone 12, iPhone 13 vậy. Với thiết kế này, người dùng sẽ được trải nghiệm cảm giác cầm nắm rất chắc tay, thoải mái khi sử dụng. Đồng thời thiết kế màu sắc bắt mắt, hiện đại cũng giúp chiếc điện thoại này phù hợp với mọi outfit của bạn.</p>
                    <p>Bên cạnh đó, Redmi Note 11 Pro còn sở hữu trọng lượng tương đối gọn nhẹ với kích thước lần lượt là 164.19mm x 76.1mm x 8.12mm với trọng lượng 202g. Đây cũng là đặc điểm của chiếc điện thoại này được người dùng rất ưa chuộng.</p>
                    <p>Nói đến dòng điện thoại thông minh, chúng ta không thể bỏ qua khả năng chụp ảnh, quay video. Phần camera của Redmi Note 11 Pro này, có một sự khác biệt với phiên bản Redmi Note 11 Pro 5G với cụm 4 camera trong đó camera chính 108MP với cảm biến lớn 1/1.52/inch, kèm theo đó là công nghệ điểm ảnh 9 trong 1 và Dual Native ISO mang đến trải nghiệm cực đỉnh khi chụp ảnh.</p>
                    <div className='img1'> <p>3 camera còn lại có thông số lần lượt là cảm biến 8MP - góc cực rộng, 2MP - camera macro, 2MP camera cảm biến độ sâu. Thêm vào đó, camera trước có cảm biến 16MP, cho khả năng selfie sắc nét cùng trải nghiệm call video cho người thân, bạn bè qua Zalo, Facebook Messenger,... một cách dễ dàng. Không ngoa khi nói rằng, Redmi Note 11 Pro là một trong những dòng smartphone có khả năng chụp ảnh đỉnh nhất của nhà Xiaomi tính đến thời điểm hiện tại.</p>
                        <img src={require("../../assets/detail-image2.jpg")} ></img>
                    </div>
                    <p className='border'>Hiệu năng mạnh mẽ với Mediatek Helio G96 cho khả năng chơi game cực đỉnh</p>
                    <p>Khác với dòng Redmi Note 11 Pro 5G, dòng Redmi Note 11 Pro được cung cấp sức mạnh bởi con chip Mediatek Helio G96. Đây là con chip gaming được MediaTek cho ra mắt vào 06/2021 với 8 nhân hiệu xuất có xung nhịp tối đa lên đến 2.05 GHz trong đó bao gồm hai lõi Cortex-A76 tốc độ 2.05 GHz và sáu lõi Cortex-A55 có xung nhịp 2.00 GHz.</p>
                    <p>Nhờ vào con chip này mà người dùng có thể thoải mái trải nghiệm các tựa game thịnh hành hiện nay như Liên Quân Mobile, PUBG,...một cách mượt mà và tiện lợi nhất.</p>
                </div>
            </div>
            <div className='comment'>
                <div className='title-infor'>
                    <i><BiCommentDetail /></i>
                    <h3>Đánh giá và bình luận sản phẩm</h3>
                </div>
                {/* <div>
                    <StarRatings
                        rating={this.state.rating}
                        starHoverColor="yellow"
                        changeRating={this.changeRating}
                        numberOfStars={6}
                        name='rating'
                    />
                </div> */}
                <div className='cmt'>
                    <textarea placeholder='Viết bình luận của bạn...'></textarea>
                    <button>Gửi bình luận</button>
                </div>
                <div className='list-cmt'>
                    <ul className='first-cmt'>
                        <li>
                            <img src={require("../../assets/avatar.png")} ></img>
                        </li>
                        <li>
                            <strong>Phan Thanh Tú</strong>
                            <span>2 giờ trước</span>
                            <p>Sản phẩm dùng có tốt không ạ?</p>
                            <a href='#'>Trả lời</a>
                        </li>
                    </ul>
                    <ul className='second-cmt'>
                        <li>
                            <img src={require("../../assets/avatar.png")} ></img>
                        </li>
                        <li>
                            <strong>Phan Thanh Tú</strong>
                            <span>2 giờ trước</span>
                            <p>Chào Tú, Dạ máy dùng tốt trong tầm giá ạ. Để được tư vấn cụ thể hơn về sản phẩm, chương trình khuyến mãi bạn để lại số điện thoại, Shop xin phép chuyển thông tin sang bộ phận tư vấn hỗ trợ mình nhanh nhất.
                            </p>
                        </li>
                    </ul>
                    <ul className='second-cmt'>
                        <li>
                            <img src={require("../../assets/avatar.png")} ></img>
                        </li>
                        <li>
                            <strong>Phan Thanh Tú</strong>
                            <span>2 giờ trước</span>
                            <p>Chào Tú, Dạ máy dùng tốt trong tầm giá ạ. Để được tư vấn cụ thể hơn về sản phẩm, chương trình khuyến mãi bạn để lại số điện thoại, Shop xin phép chuyển thông tin sang bộ phận tư vấn hỗ trợ mình nhanh nhất.
                            </p>
                        </li>
                    </ul>
                    <ul className='second-cmt'>
                        <li>
                            <img src={require("../../assets/avatar.png")} ></img>
                        </li>
                        <li>
                            <strong>Phan Thanh Tú</strong>
                            <span>2 giờ trước</span>
                            <p>Chào Tú, Dạ máy dùng tốt trong tầm giá ạ. Để được tư vấn cụ thể hơn về sản phẩm, chương trình khuyến mãi bạn để lại số điện thoại, Shop xin phép chuyển thông tin sang bộ phận tư vấn hỗ trợ mình nhanh nhất.
                            </p>
                        </li>
                    </ul>
                    <ul className='first-cmt'>
                        <li>
                            <img src={require("../../assets/avatar.png")} ></img>
                        </li>
                        <li>
                            <strong>Phan Thanh Tú</strong>
                            <span>2 giờ trước</span>
                            <p>Sản phẩm dùng có tốt không ạ?</p>
                            <a href='#'>Trả lời</a>
                        </li>
                    </ul>
                    <ul className='second-cmt'>
                        <li>
                            <img src={require("../../assets/avatar.png")} ></img>
                        </li>
                        <li>
                            <strong>Phan Thanh Tú</strong>
                            <span>2 giờ trước</span>
                            <p>Chào Tú, Dạ máy dùng tốt trong tầm giá ạ. Để được tư vấn cụ thể hơn về sản phẩm, chương trình khuyến mãi bạn để lại số điện thoại, Shop xin phép chuyển thông tin sang bộ phận tư vấn hỗ trợ mình nhanh nhất.
                            </p>
                        </li>
                    </ul>
                    <ul className='second-cmt'>
                        <li>
                            <img src={require("../../assets/avatar.png")} ></img>
                        </li>
                        <li>
                            <strong>Phan Thanh Tú</strong>
                            <span>2 giờ trước</span>
                            <p>Chào Tú, Dạ máy dùng tốt trong tầm giá ạ. Để được tư vấn cụ thể hơn về sản phẩm, chương trình khuyến mãi bạn để lại số điện thoại, Shop xin phép chuyển thông tin sang bộ phận tư vấn hỗ trợ mình nhanh nhất.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Product;