import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MenuIcon from "@material-ui/icons/Menu";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div>
      <div className="header">
        {/* logo */}
        <Link to="/">
          <img
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        {/* search bar */}
        <div className="header-search">
          <input className="header-searchInput" type="text" />
          <SearchIcon className="header-searchIcon" />
          {/* Logo */}
        </div>
        <div className="header-nav">
          {/* sign in */}
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header-option">
              <span className="header-optionLineOne">
                Hello {user ? user.email : "Guest"}
              </span>
              <span className="header-optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          {/* returns and orders */}
          <Link to="/Orders">
            <div className="header-option">
              <span className="header-optionLineOne">Returns</span>
              <span className="header-optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* prime */}
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>

          {/* basket */}
          <Link to="/checkout">
            <div className="header-optionBasket">
              <ShoppingCartIcon />
              <span className="header-optionLineTwo header-basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subHeader">
        <div className="hamburger">
          <MenuIcon />
        </div>
        <p>All</p>
        <p>Gift Cards</p>
        <p>Best Sellars</p>
        <p>Prime</p>
        <p>Customer Service</p>
        <p>New Releases</p>
        <p>Find a Gift</p>
        <p>Whole Foods</p>
        <p>AmazonBasics</p>
        <p>Sell</p>
        <p>Coupons</p>
        <p>Today's Deals</p>
        <p>Free Shipping</p>
        <p>#FoundItOnAmazon</p>
        <h4>FREE delivery by Dec 24 with Prime</h4>
      </div>
    </div>
  );
}

export default Header;
