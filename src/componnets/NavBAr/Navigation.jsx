import React from 'react';
import { Link } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import SubText from './SubMsg/SubText';
import '../NavBAr/Navigation.css'

function Navigation() {
  return (

    <>
    <nav>
      <ul id='navigation'>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>Submit  email</li>
      </ul>
    </nav>
    <div className='text'>
      <ul id='scroll'>
        <li className='About'>
          <About/>
        </li>
        <li>
         <Contact/>
        </li>
        <li>
          <Projects/>
        </li>
        <li>
          <SubText/>
        </li>
      </ul>
    </div>
    </>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //     <li>
    //       <Link to="/projects">Projects</Link>
    //     </li>
    //     <li>
    //       <Link to="/subemail">SubEmail</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Navigation;
