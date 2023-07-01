import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './componnets/navigation/about/About';
import Navigation from './componnets/Navigation';
import Contact from './componnets/navigation/contact/Contact';
import Proj from './componnets/navigation/projects/Proj';

const App = () => {
  return (
    <div>
    <Navigation/>
    <Router>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Projects' element={<Proj/>}/>
        <Route path='/SubMsg'  element={<Proj/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
