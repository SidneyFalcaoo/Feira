import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Cadastro from './pages/cadastro';
import Home from './pages/Home';
import Login from './pages/login/App';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

