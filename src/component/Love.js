import { Link } from "react-router-dom";
import { FaMobileAlt, FaApple, FaRegNewspaper, FaSave, FaSearch, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import img from "../assets/noibat/dt1.png";
import Pagination from 'react-bootstrap/Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
function Love(props) {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
            <br />

            <Pagination size="lg">{items}</Pagination>
            <br />

            <Pagination size="sm">{items}</Pagination>
        </div>
    );
    return (
        <>
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
        </>
    )
}
export default Love;