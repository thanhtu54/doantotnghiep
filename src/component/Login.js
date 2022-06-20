import img from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
function Login(props) {
    function handleButton() {
        navigate("/register")
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="function">
                <img id="i1" src={img}></img>
                <div className="login">
                    <h3>Đăng Nhập</h3>
                    <div className="google">
                        <ul>
                            <li>
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/240px-Facebook-icon-1.png"></img>
                                    <span>Đăng nhập với Facebook</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"></img>
                                    <span>Đăng nhập với Google</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <span>--------------------Hoặc--------------------</span><br />
                    <div className="form">
                        <form className="form-login">
                            <div className="form-group">
                                <input type="text" placeholder="Tên đăng nhập" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Mật khẩu" />
                            </div>
                            <div id="login">
                                <input name="get-login" type="checkbox" />
                                <label>Ghi nhớ đăng nhập</label><br></br>
                            </div>
                        </form>

                        <div className="register-button">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <button>Đăng nhập</button>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleButton}>Đăng ký</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;