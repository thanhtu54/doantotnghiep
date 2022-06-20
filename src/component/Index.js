import logo from "../assets/logo.png";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMobileAlt, FaApple, FaRegNewspaper, FaSave, FaSearch, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { SiXiaomi, SiHuawei, SiAndroid, SiSalesforce } from "react-icons/si";
import { MdMobileFriendly } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import { GiBurningEye, GiTakeMyMoney } from "react-icons/gi";
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import title from "../assets/quangcao.jpg";
import qc1 from "../assets/quangcao/qc1.png";
import qc2 from "../assets/quangcao/qc2.jpg";
import qc3 from "../assets/quangcao/qc3.png";
import qc4 from "../assets/quangcao/qc4.jpg";
import img from "../assets/noibat/dt1.png";
import slide1 from "../assets/slide/slide1.jpg";
import slide2 from "../assets/slide/slide2.png";
import slide3 from "../assets/slide/slide3.png";
import slide4 from "../assets/slide/slide4.jpg";
import slide5 from "../assets/slide/slide5.jpg";
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
function Index(props) {
    let a = 2;
    var b = a;
    console.log(b)
    return (
        <>
            <div id="slide">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../assets/slide/slide1.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../assets/slide/slide2.png")}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../assets/slide/slide3.png")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../assets/slide/slide4.jpg")}
                            alt="Fouth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../assets/slide/slide5.jpg")}
                            alt="Fouth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="ads">
                <div className="title">
                    <i><GiBurningEye /></i>
                    <h1 id="h1">Khuyến mãi cực sốc</h1>
                </div>
                <ul>
                    <li><img src={qc1}></img></li>
                    <li><img src={qc2}></img></li>
                    <li><img src={qc3}></img></li>
                    <li><img src={qc4}></img></li>
                </ul>
            </div>
            <div className="title">
                <i><GiTakeMyMoney /></i>
                <h1>Sản phẩm bán chạy</h1>
            </div>
            <div className="list-moblie">
                <ul>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <Link to="/detail">
                                <img src={img}></img>
                            </Link>
                            <Link to="/detail">
                                <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            </Link>
                            <span className="purcher">12.200.000</span>
                            <Link to="/cart">
                                <button className="cart">Mua ngay</button>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                    <li>
                        <div className="detail-title">
                            <i><FaRegHeart /></i>
                            <img src={img}></img>
                            <p className="name">Xiaomi Redmi Note 10 Pro</p>
                            <span className="purcher">12.200.000</span>
                            <button className="cart">Mua ngay</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="paginationBasic">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
            <img id="quangcao" src={title}></img>
        </>
    )
}
export default Index;