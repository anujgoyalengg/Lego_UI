import React from "react";
import "../Styles/HamburgerMenu.css";

export default function HamburgerMenu({toggleSidebar}) {
  return (
    <>
    <div onClick={toggleSidebar}>
    <div id="container" >
      <input id="nav-input" className="navinput" type="checkbox"/>
      <label  className="hamburger" for="nav-input"><span onClick={toggleSidebar}></span></label>
      </div>
    </div>
    </>
  );
}
