import React from "react";

import "./Header.css";

import Navbar from "../Navbar/Navbar";
import Resume from "../Resume/Resume";
import Logo from "../Logo/Logo";
// import Burger from './Burger';

function Header() {
  return (
    <header className="head">
      <Logo />
      <Navbar />
      {/* <div className='burger__block'> */}
      {/* <Burger/> */}
      <Resume />
      {/* </div> */}
    </header>
  );
}

export default Header;
