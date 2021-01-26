import React from "react";
import "../styles/Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
function Nav() {
  return (
    <nav className="nav">
      <img
        className="nav__image"
        src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204"
        alt=""
      />
      <div className="nav__searchContainer">
        <input className="nav__input" type="text" placeholder="Search"/>
        <SearchIcon />
      </div>
      <div className="nav__iconsContainer">
        <ShoppingCartIcon className="nav__icon" />
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1617235200&v=beta&t=cs4Z_B30SCOBZAsPeS6u7DkLGLbrCUFPE4t2Dcg9NA8"
          className="nav__icon"
        />
      </div>
    </nav>
  );
}

export default Nav;
