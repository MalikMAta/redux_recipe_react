import React from 'react'
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {


    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down SignedInnavBarLinks">
        <li>
          <NavLink to = "/">Sign Out</NavLink>
        </li>
        <li>
        <NavLink to = "/create">Create</NavLink>
        </li>
        <li>
          <p> Recipe is life</p>
        </li>
      </ul>
    )
}
export default SignedInLinks