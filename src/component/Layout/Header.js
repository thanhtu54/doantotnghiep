import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaMobileAlt, FaApple, FaRegNewspaper, FaSave, FaSearch, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { SiXiaomi, SiHuawei, SiAndroid, SiSalesforce } from "react-icons/si";
import { MdMobileFriendly } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import { GiBurningEye, GiTakeMyMoney } from "react-icons/gi";
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
function Header(props) {
    return (
        <>
            <div className="header">
                <div className="sidetop">
                    <div className="wrapper">
                        <Link to="/"> <img src={logo}></img></Link>
                        <div className="search">
                            <input placeholder="Nhập tên điện thoại, thương hiệu cần tìm..."></input>
                            <button>
                                <i><FaSearch /></i>
                            </button>
                        </div>
                        <div className="login-cart">
                            <ul>
                                <li>
                                    <i><BsFilePersonFill /></i>
                                    <Link to="/login">Đăng Nhập</Link>
                                </li>
                                <Link to="/cart">
                                    <li>
                                        <i><FaShoppingCart /></i>
                                        <a href="#">Giỏ hàng</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="container">
                        <ul>
                            <Link to="/">
                                <li>
                                    <i><FaMobileAlt /></i>
                                    <span>Điện thoại</span>
                                </li>
                            </Link>
                            <Link to="/product/samsung/list">
                                <li>
                                    <i><SiAndroid /></i>
                                    <span>Samsung</span>
                                </li>
                            </Link>
                            <li>
                                <i><FaApple /></i>
                                <span>Apple</span>
                            </li>
                            <li>
                                <i><SiXiaomi /></i>
                                <span>Xiaomi</span>
                            </li>
                            <li>
                                <i><SiHuawei /></i>
                                <span>Huawei</span>
                            </li>
                            <li>
                                <i><FaSave /></i>
                                <span>Oppo</span>
                            </li>
                            <Link to="/news">
                                <li>
                                    <i>< FaRegNewspaper /></i>
                                    <span>Tin tức</span>
                                </li>
                            </Link>
                            <Link to="/love">
                                <li>
                                    <i><MdMobileFriendly /></i>
                                    <span>Yêu thích</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;