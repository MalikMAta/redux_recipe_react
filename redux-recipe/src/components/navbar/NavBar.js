import React, { useState, useEffect } from "react";
// Navbar
import SignedInLinks from "./navBarLinks/SignedInLinks";
import SignedOutLinks from "./navBarLinks/SignedOutlinks";

// Side Nav bar
import Sidebarsignedin from "./sideBarLinks/SideBarSignedInLinks";
import SidebarsignedOut from "./sideBarLinks/SideBarSignedoutLinks";

function NavBar() {
  const [on, setOn] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const checkSize = () => {
    setOn(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });

  // const changeElement = () => {
  // };

  return (
    <>
      <nav className="navBar center">
        <div>
          <SignedInLinks />
        </div>
        <div>
          <SignedOutLinks />
        </div>

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
        <div className={on < 992 ? "sideBarVisible" : "sideBarNotVisible"}>
          
          <Sidebarsignedin />
          <SidebarsignedOut />
        </div>
      ) : (
        console.log("not true")
      )}

      {/* <div className="sideBarNotVisible">sdfa</div> */}
    </>
  );
}

export default NavBar;
