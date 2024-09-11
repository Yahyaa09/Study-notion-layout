import React from 'react'
import signupImage from '../assets/signup.png'
import Template from './Template';

const Signuppage = ({SetLoggedIn}) => {
  let title2 = "Join the millions learning to code with StudyNotion for free";
  let desc2_1 = "Build skills for today, tomorrow, and beyond.";
  let desc2_2 = "Education to future-proof your career.";
  let formtype2 = "signup";
  return (
    <div className='w-screen h-screen bg-richblack-900 overflow-x-hidden'>
      <Template title={title2} desc1={desc2_1} desc2={desc2_2} image={signupImage} SetLoggedIn={SetLoggedIn} formtype={formtype2} />
    </div>
  )
}

export default Signuppage