import { BsCheckCircle } from 'react-icons/bs';
import { Link } from "react-router-dom";
function Payment(props) {
    return (
        <>
            <div className='header-payment'>
                <i><BsCheckCircle /></i>
                <p>Vui lòng kiểm tra lại thông tin đặt hàng dưới đây</p>
            </div>
            <div className='information-customer'>
                <p>1. Thông tin người đặt hàng:</p>
                <ul>
                    <li>Họ và tên: Phan Thanh Tú</li>
                    <li>Phương thức thanh toán: thanh toán khi nhận hàng</li>
                    <li>Địa chỉ: Phú Lộc, Thừa Thiên Huế</li>
                    <li>Số điện thoại: 0899081701</li>
                    <li>Email: thanhtuphan54@gmail.com</li>
                    <li>Phí vận chuyển: miễn phí</li>
                </ul>
            </div>
            <div className='information-payment'>
                <p>Danh sách sản phẩm đặt hàng</p>
                <table>
                    <tr className='tieude'>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Màu sắc</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Redmi Note 11 Pro</td>
                        <td>Trắng</td>
                        <td>1</td>
                        <td>7,480,000</td>
                        <td className='tongtien'>7,480,000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Redmi Note 10 Pro</td>
                        <td>Đen</td>
                        <td>2</td>
                        <td>7,480,000</td>
                        <td className='tongtien'>14,960,000</td>
                    </tr>
                </table>
                <div className='tinhtien'>
                    <span>Tổng tiền thanh toán:</span>
                    <span id='giatien'> 25,250,000</span>
                </div>
                <div id='xacnhan'>

                    <Link to="/order">
                        <button>XÁC NHẬN ĐẶT HÀNG</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Payment;