import React from "react";
import {NavLink} from 'react-router-dom'

const SideBarSignedoutLinks = () => {
  return (
    <div className="sideBarSignedInLinks">
      <ul>

        <li>
          <p>Recipe is life</p>
        </li>

        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </div>
  );
};
export default SideBarSignedoutLinks;
