import React from 'react'
import {NavLink} from 'react-router-dom'

const SideBarSignedInLinks = () => {

    return (
        <div className="sideBarSignedInLinks">
        <ul >
        <li>
          <NavLink to = "/">Sign Out</NavLink>
        </li>
        <li>
        <NavLink to = "/create">Create</NavLink>
        </li>
        <li>
          <p>Recipe is life</p>
        </li>
      </ul>
      </div>
    )
}
export default SideBarSignedInLinks