import { BsCheckCircle } from 'react-icons/bs';
function Order(props) {
    return (
        <>
            <div className='header-payment'>
                <i><BsCheckCircle /></i>
                <p>ĐẶT HÀNG THÀNH CÔNG</p>
                <div className='success'>
                    <span>MÃ ĐƠN HÀNG:</span>
                    <span> 360348TSXWK</span>
                </div>
                <img src={require("../assets/order-ok.png")} ></img>
            </div></>
    )
}
export default Order;