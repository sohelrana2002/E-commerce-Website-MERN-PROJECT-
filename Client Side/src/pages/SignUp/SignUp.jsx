import React from 'react'
import { GrClose } from 'react-icons/gr'

import { NavLink } from 'react-router-dom'
import './signUp.css'

const SignUp = () => {
  return (
    <div className="container login__container">
      <form action="">
        <h3>Sign Up</h3>
        <input type="text" placeholder='Email' required />
        <input type="password" required placeholder='Password' />
        <input type="password" required placeholder='Confirm Password' />
        
        <button className='btn'>Sign Up</button>

        <div className='dont'>
            <span>have account? <NavLink to="/login">Log In</NavLink></span>
        </div>

        <NavLink to="/" className="close__btn-container">
          <GrClose className='close__btn' />
        </NavLink>
      </form>
    </div>
  )
}

export default SignUp