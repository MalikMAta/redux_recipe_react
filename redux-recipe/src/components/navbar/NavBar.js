import React, { useState, useEffect } from "react";
import SignedInLinks from "./authLinks/SignedInLinks";
import Sidebarsignedin from './SideBar/SideBarSignedInLinks'

function NavBar() {
  const [on, setOn] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const checkSize = () => {
    setOn(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });

  const changeElement = () => {
    console.log("hello");
  };

  return (
    <>
      <nav className="navBar center">
      <div><SignedInLinks />  </div>
      
        <div
          className={on > 992 ? "hamburgerNV" : "hamburgerV"}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
      {showMenu ? (
        <div
          className={on < 992 ? "sideBarVisible" : "sideBarNotVisible"}
        > <Sidebarsignedin /> </div>
      ) : (
        console.log("not true")
      )}

      {/* <div className="sideBarNotVisible">sdfa</div> */}
    </>
  );
}

export default NavBar;
