import React from 'react'
import { GrClose } from 'react-icons/gr'

import './logIn.css'
import { NavLink } from 'react-router-dom'

const LogIn = () => {
  return (
    <div className="container login__container">
      <form action="">
        <h3>Log In</h3>
        <input type="text" placeholder='Email' required />
        <input type="password" required placeholder='Password' />
        <div className='forget'>
          <small>forget password?</small>
        </div>
        <button className='btn'>Log In</button>

        <div className='dont'>
            <span>Don't have account? <NavLink to="/signup">Create One</NavLink></span>
        </div>

        <NavLink to="/" className="close__btn-container">
          <GrClose className='close__btn' />
        </NavLink>
      </form>
    </div>
  )
}

export default LogIn