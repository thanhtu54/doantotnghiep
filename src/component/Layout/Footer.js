function Footer(props) {
    return (
        <>
            <div className="footer">
                <div className="wrapper-footer">
                    <ul>
                        <li>
                            <h4>Hỗ Trợ - Dịch Vụ</h4>
                            <p>Mua hàng trả góp</p>
                            <p>Hướng dẫn đặt hàng</p>
                            <p>Chính sách bảo hành</p>
                            <p>Câu hỏi thường gặp</p>
                        </li>
                        <li>
                            <h4>Bán hàng Online</h4>
                            <p>Chăm sóc Khách Hàng</p>
                            <p>Hỗ Trợ Kỹ thuật</p>
                            <p>Hỗ trợ Bảo hành & Sửa chữa</p>
                            <p>Liên hệ khối văn phòng</p>
                        </li>
                        <li>
                            <h4>Tổng đài</h4>
                            <h3>0899081701</h3>
                            <h4>Hỗ trợ kỹ thuật</h4>
                            <h3>0899081701</h3>
                        </li>
                        <li>
                            <h4>Hỗ trợ thanh toán</h4>
                            <ul>
                                <li><img src={require("../../assets/pay/logo-atm.png")}></img></li>
                                <li><img src={require("../../assets/pay/logo-jcb.png")}></img></li>
                                <li><img src={require("../../assets/pay/logo-master.png")}></img></li>
                                <li><img src={require("../../assets/pay/logo-samsungpay.png")}></img></li>
                                <li><img src={require("../../assets/pay/logo-visa.png")}></img></li>
                                <li><img src={require("../../assets/pay/logo-vnpay.png")}></img></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Footer;