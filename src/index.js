import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom'
import Login from '@/pages/login'


ReactDOM.render(
  <Routers>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<App />} />
    </Routes>
  </Routers>,
  document.getElementById('root')
);

