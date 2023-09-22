import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Login from '../src/pages/login/App.jsx';
import Cadastro from './pages/cadastro';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

