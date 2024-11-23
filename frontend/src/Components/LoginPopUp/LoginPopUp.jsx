import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login")
  return (
    <div className='Login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={ ()=> setShowLogin(false)} src={assets.cross} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==='Login'? <></>
                :
                <input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='password'required />
            </div>
            <button>{currentState==='Sign Up' ? 'create account':'Login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the  terms and privacy policy.</p>
            </div>
            {
             currentState ==='Login'?
            <p>Create a new account?<span onClick={()=>setCurrentState('Sign Up')}>Sign up</span></p>
            :
            <p>Alreay have an account? <span onClick={()=>setCurrentState('Login')}>Login</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopUp