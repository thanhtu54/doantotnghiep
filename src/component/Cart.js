import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { FiDelete } from 'react-icons/fi';
function Cart(props) {
    return (
        <>
            <section id="cart_items">
                <div className="wrap">
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">ẢNH</td>
                                    <td className="description">TÊN SẢN PHẨM</td>
                                    <td className="price">ĐƠN GIÁ</td>
                                    <td className="quantity">SỐ LƯỢNG</td>
                                    <td className="text-total">THÀNH TIỀN</td>
                                    <td />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart_product">
                                        <Link to="/detail"><img src={require("../assets/noibat/dt1.png")} ></img></Link>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Xiaomi Redmi Note 10 Pro</a></h4>
                                    </td>
                                    <td className="cart_price">
                                        <p>7,520,000</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">7,520,000</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i><FiDelete /></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <Link to="/detail"><img src={require("../assets/noibat/dt1.png")} ></img></Link>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Xiaomi Redmi Note 10 Pro</a></h4>
                                    </td>
                                    <td className="cart_price">
                                        <p>7,520,000</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">7,520,000</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i><FiDelete /></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <Link to="/detail"><img src={require("../assets/noibat/dt1.png")} ></img></Link>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Xiaomi Redmi Note 10 Pro</a></h4>
                                    </td>
                                    <td className="cart_price">
                                        <p>7,520,000</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">7,520,000</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i><FiDelete /></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Link to="/payment">
                                            <button className="buying">ĐẶT HÀNG VÀ THANH TOÁN</button>
                                        </Link>
                                    </td>
                                    <td className="total">22,560,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> {/*/#cart_items*/}
        </>
    )
}
export default Cart;