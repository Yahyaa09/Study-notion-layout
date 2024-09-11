import React from 'react'
import Template from './Template'
import loginImage from '../assets/login.png'

const LoginPage = ({SetLoggedIn}) => { 
  let title1 = "Welcome Back";
  let desc1_1 = "Build skills for today, tomorrow, and beyond.";
  let desc1_2 = "Education to future-proof your career.";
  let formtype1 = "login";
  return (
    <div className='w-screen h-screen bg-richblack-900 overflow-x-hidden'>
      <Template title={title1} desc1={desc1_1} desc2={desc1_2} image={loginImage} SetLoggedIn={SetLoggedIn} formtype={formtype1} />
    </div>
  )
}

export default LoginPage