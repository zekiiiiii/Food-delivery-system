import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const NavBar = ({ setShowLogin }) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 750 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className={`navbar ${setSticky ? "navbar-change" : ""}`}>
      <Link to='/'>
        <div className="navbar-left">
          <img className="logo-img" src={assets.logo} alt="" />
        </div>
      </Link>

      <div className="navbar-center">
        <ul className="navbar-center-menu">

          <Link to='/'
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >Home</Link>
          
          <a
            href="#explore"
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            Menu
          </a>
          <a
            href="#mobile-app"
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => setMenu("mobile-app")}
          >
            Mobile App
          </a>
          <a
            href="#contact-us"
            className={menu === "contact-us" ? "active" : ""}
            onClick={() => setMenu("contact-us")}
          >
            Contact Us
          </a>
        </ul>
      </div>

      <div className="navbar-right">
        <img className="search-img" src={assets.search} alt="search" />
        <Link to='cart'>
        <div className="cart">
          <img className="cart-img" src={assets.cart} alt="" />
          <div className={getTotalCartAmount() ===0 ? "": "dot" } ></div>
        </div>
        </Link>
        <div className="account">
          <button className={`btn ${sticky ? "btn-change" : ""}`} onClick={()=>setShowLogin(true)}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
