import React from 'react'
import './CSS/LoginSingup.css'
const LoginSignup = () => {
  return (
    <div className = 'loginsignup'>
      <div className="loginsignup-container">
        <h1> Signup</h1>
        <div className="loginsignup-fields">
          <input type = 'text' placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='Password'></input>

        </div>
        <button>Continue</button>
        <p className="loginsignup-login"> Already Have an account? <span> Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name= "" id = "" ></input>
          <p> By Continuing, I agre to the terms of use & Privacy Policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
