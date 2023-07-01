import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./componnets/NavBAr/About/About";
import Contact from "./componnets/NavBAr/Contact/Contact";
import Projects from "./componnets/NavBAr/Projects/Projects";
import SubText from "./componnets/NavBAr/SubMsg/SubText";
import Navigation from "./componnets/NavBAr/Navigation";
import Name from "./componnets/Name";

const App = () => {
  return (
    <div>
      
<Navigation/>

      {/* <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/SubText" element={<SubText />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
