import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';


const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
  {/* <App/> */}
  <Router>
    <Routes path="/"element={App} />
  </Router>,
    </div>

)