import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {

  return (
    <div className='header' id='header'>
      <div className="img-container">
      <img src={assets.home_img} srcSet={`${assets.home_img} 500w,
       ${assets.home_img} 1000w, ${assets.home_img} 1500w`} alt="" />   
          </div>
      <div className="header_contents">
        <h1 className="home-h1">Order your favorite food here</h1>
        <p className="home-p">
          Choose by clicking your favorite menu listed below then you will see
          different types with details
        </p>
      </div>
      <button className="view-more">View more</button> 
    </div> 
  )
}

export default Header