import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
const Footer = () => {
  return (
    <div className="cokntact-us" id="contact-us">
        <Title title={"Contact Us"} />
      
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to='/'> 
          <div className="logo">
           
              {" "}
              <img src={assets.logo} alt="" />
            
          </div>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quod molestias expedita quos culpa quasi! Delectus nostrum
            quibusdam, totam culpa dolorum, in quae, quas cum sapiente
            distinctio quaerat velit. Adipisci.
          </p>
          <div className="footer-social-icon">
            <img className="footer-fb" src={assets.fb_icon} alt="" />
            <img className="footer-tw" src={assets.tw_icon} alt="" />
            <img className="footer-ln" src={assets.ld_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <div className="links">
            <h3>home</h3>
            <h3>menu</h3>
            <h3>service</h3>
            <h3>about</h3>
            <h3>contact</h3>
          </div>
        </div>
        <div className="footer-content-right">
          <button className="btn">Contact us</button>
          <p className="phone-number">+251-11-354-2567</p>
          <p className="email">companyfooddel.com</p>
        </div>
      </div>
      <hr />
      copyright 2024@ fooddel.com - All Right Reserved
    </div>
    </div>
  );
};

export default Footer;
