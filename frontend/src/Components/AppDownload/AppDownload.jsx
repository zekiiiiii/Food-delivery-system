import React from 'react'
import './AppDownload.css'
import Title from '../Title/Title'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='mobile-app'>
      <Title title={'Mobile App'} subtitle={'Download for better experience '}/>
      <div className="app-download-platforms">
        {/* <img src={assets.play-store}  alt="" />
        <img src={assets.app-store} alt="" /> */}
      </div>
      </div>
  )
}

export default AppDownload