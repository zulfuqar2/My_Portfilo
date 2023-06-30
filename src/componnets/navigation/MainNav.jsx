import React from "react";

import About from "./about/About";
import Contact from "./contact/Contact";
import Proj from "./projects/Proj";
import Sub from "./sub_email/Sub";

function MainNav() {
  return (
    <>
      <div>
        <ul>
          <li>
            {" "}
            <About />
          </li>
          <li>
            {" "}
            <Contact />
          </li>
          <li>
            {" "}
            <Proj />
          </li>
          <li>
            <Sub />
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainNav;
