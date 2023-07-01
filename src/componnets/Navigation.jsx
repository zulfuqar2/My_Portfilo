import React from 'react'
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/subemail">SubEmail</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navigation