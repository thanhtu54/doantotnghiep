import logo from './logo.svg';
import './App.css';
import Header from "./component/Layout/Header";
import Index from './component/Index';
import Login from './component/Login';
import Register from './component/Register';
import Footer from './component/Layout/Footer';
import Detail from '../src/component/Product/Detail';
import List from './component/Product/Samsung/ListSamsung';
import News from './component/News';
import Cart from './component/Cart';
import Payment from './component/Payment';
import Order from './component/Order';
import Love from './component/Love';
import NewsDetail from './component/NewsDetail';
function App(props) {
  return (
    <>
      <Header />
      <div className="body">
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
