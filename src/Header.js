import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <Link to="./login">
        <img
          className="logo"
          src="https://www.sahirkarani.com/images/amazon.png"
          alt="amazon logo"
        />

        {/* Search bar box */}
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>
      {/* 3 Navigation links */}
      <div className="header-nav">
        <Link to="./login" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Hello</span>
            <span className="header-optionLineTwo">Guest</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* Basket icon  */}
      <Link to="./checkout" className="basket-link">
        {/* basket */}
        <div className="basket">
          <ShoppingBasket />
          <span className="basket-count">4</span>
        </div>
        {/* Number of items in the basket */}
      </Link>
    </div>
  );
}
export default Header;
