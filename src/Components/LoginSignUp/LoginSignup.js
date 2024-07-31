import React, { useState } from 'react'
import './LoginSignup.css'
// import {useState} from 'react'

import mail from '../Assets/mail.jpg'
import Password from '../Assets/Password.png'
import Person from '../Assets/Person.png'


const LoginSignup = () => {

  const[action, setAction] = useState("Login");


  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      
      <div className="inputs">
      {action === "Login" ? <div></div> : <div className="input">
          <img src={Person} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
        

        <div className="input">
          <img src={mail} alt="" />
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
          <img src={Password} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action === "Sign Up" ? <></> :<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" :"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" :"submit "} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
