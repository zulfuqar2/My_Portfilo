import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
ReactDOM.render(
  <Router>
    <Routes path="/"element={App} />
  </Router>,
  document.getElementById('root')
);
