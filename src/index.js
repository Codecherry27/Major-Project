import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Deposit from './Deposit/Deposit';
import Transfer from './Transfer/Transfer';
import Withdraw from './Withdraw/Withdraw';
import BankingAppFrontPage from "./Frontpage/frontpage";
import Login from './Login/Login';
import Signup from './Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>

<Routes>
<Route path='/dashboard' element={<Dashboard/>}></Route>
<Route path='/deposit' element={<Deposit/>}></Route>
<Route path='/transfer' element={<Transfer/>}></Route>
<Route path='/withdraw' element={<Withdraw/>}></Route>
<Route path='/' element={<BankingAppFrontPage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>

</Routes>
</BrowserRouter>
</>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

