import React, {useState, useEffect} from "react";

function NavBar() {



    const [on, setOn] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false)


    const checkSize = () => {
        setOn(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener('resize' , checkSize)
    })


const changeElement = () =>{
    console.log("hello")
}    


  return (
    <>
      <nav className="navBar center">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a>Recipe is life</a>
          </li>
        </ul>
        <div 
        className={on > 992 ? "hamburgerNV" : "hamburgerV"} 
        onClick={() => {setShowMenu(!showMenu)}}
         >
          <div className="bar1" ></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

      </nav>
        {showMenu ? <div className={on < 992 ? "sideBarVisible" : "sideBarNotVisible" }>sdfa</div> : console.log("not true")}


      {/* <div className="sideBarNotVisible">sdfa</div> */}
    </>
  );
}

export default NavBar;
