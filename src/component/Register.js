import img from "../assets/login.png";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
function Register(props) {
    return (
        <>
            <div className="function">
                <img id="i1" src={img}></img>
                <div className="register">
                    <h3>Đăng ký tài khoản</h3>
                    <form>
                        <div>
                            <label>Tên đăng nhập:</label>
                            <input type="text" placeholder="Nhập tên đăng nhập" name="user" />
                        </div>
                        <div>
                            <label>Mật khẩu:</label>
                            <input type="text" placeholder="Nhập mật khẩu" name="password" />
                        </div>
                        <div>
                            <label>Nhập lại mật khẩu:</label>
                            <input type="text" placeholder="Nhập lại mật khẩu" name="repassword" />
                        </div>
                        <div>
                            <label>Họ và tên:</label>
                            <input type="text" placeholder="Nhập họ và tên" name="name" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" placeholder="Nhập Email" name="email" />
                        </div>
                        <div>
                            <label>Số điện thoại:</label>
                            <input type="text" placeholder="Nhập số điện thoại" name="phone" />
                        </div>
                        <div>
                            <label>Địa chỉ:</label>
                            <input type="text" placeholder="Nhập địa chỉ" name="address" />
                        </div>
                        <div>
                            <label>Avatar:</label>
                            <input type="file" name="avatar" />
                        </div>
                        <Link to="/login">
                            <button type="submit" className="button-res">Đăng ký</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;