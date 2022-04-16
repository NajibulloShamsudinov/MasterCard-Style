import React from "react";
import logo from "../../imgs/logo1.png";
import mastercard from "../../imgs/mastercard logo.png";
function NavLink() {
  return (
    <div className="Navbar">
      <div className="header_logo">
        <img src={logo} alt="logoCard" />
        <img src={mastercard} alt="masterCard_logo" />
      </div>
      <div className="menu">
        <a href="#MasterCard" className="Nav">
          <li>Shoping Card</li>
        </a>
        <a href="#Zen" className="Nav">
          <li>ZEN Care</li>
        </a>
        <a href="#cashback" className="Nav">
          <li>Cashback</li>
        </a>
        <a href="#footer" className="Nav">
          <li className="get_up">Get up</li>
        </a>
      </div>
    </div>
  );
}

export default NavLink;
