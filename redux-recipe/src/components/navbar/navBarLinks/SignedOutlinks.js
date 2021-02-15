import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {

    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down SignedInnavBarLinks">
       <li>
          <NavLink to = "/signin">Sign In</NavLink>
        </li>
        <li>
          <p>Recipe is life</p>
        </li>
      </ul>
    )
}
export default SignedInLinks