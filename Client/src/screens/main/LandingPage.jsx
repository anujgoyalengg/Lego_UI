import React from 'react'
import LandingPageStyle from '../Styles/LandingPage.module.css'
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={LandingPageStyle.LandingPage}>
        <nav className={LandingPageStyle.navLandingPage}>
          <div className={LandingPageStyle.leftnavLandingPage}>  
            <ul className={LandingPageStyle.leftnavcomponentslandingpage}>
              <li><a className={LandingPageStyle.aLandingPage} href="">Home</a></li>
              <li><a className={LandingPageStyle.aLandingPage}href="">About</a></li>
              <li><a className={LandingPageStyle.aLandingPage} href="">Blog</a></li>
              <li><a className={LandingPageStyle.aLandingPage} href="">Contact us</a></li>
            </ul> </div>
          <div className={LandingPageStyle.rightnavLandingPage}>
          <button onClick={handleClickLogin} className={LandingPageStyle.button30} role="button">Sign Up</button>
          </div>
        </nav>
      <main className={LandingPageStyle.mainLandingPage}>
        <h1 className={LandingPageStyle.landingPagetitle}>Build Websites. Bricked by Brilliance. <br /> With <span className={LandingPageStyle.spanLandingPage}>LEGO UI</span></h1>
        {/* <p className="p_LandingPage" >Legoui: Build websites like a breeze with our React UI component library!  Snap together stylish, pre-built components to create modern websites quickly. Upload and share your code with the community, and get inspired by others. </p> */}
      </main>

      <div className={LandingPageStyle.btnLandingPage}>
        <button onClick={handleClickLogin} className={LandingPageStyle.button74} role="button">Lets Build</button>
      </div>
      </div>
    </>
  )
}
