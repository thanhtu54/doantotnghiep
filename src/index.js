import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from './component/Index';
import Login from './component/Login';
import {
  BrowserRouter as Router,
  useHistory,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Layout/Header';
import Register from './component/Register';
import Detail from '../src/component/Product/Detail';
import List from './component/Product/Samsung/ListSamsung';
import News from './component/News';
import Cart from './component/Cart';
import Payment from './component/Payment';
import Order from './component/Order';
import Love from './component/Love';
import NewsDetail from './component/NewsDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/product/samsung/list' element={<List />} />
          <Route path='/news' element={<News />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/order' element={<Order />} />
          <Route path='/love' element={<Love />} />
          <Route path='/news/detail' element={<NewsDetail />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
