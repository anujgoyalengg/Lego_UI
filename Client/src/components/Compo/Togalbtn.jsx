import React from "react";
// import "../Styles/Togalbtn.css";
import styles from "../Styles/Togalbtn.module.css";
// import { MdOutlineLightMode } from "react-icons/md";
// import { IoMoon } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";


export default function Togalbtn() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightkMode();
    }
  };

  return (
    <>
      <div className={styles.darkmode} onClick={toggleTheme}>
      <label htmlFor="" className={styles.darkmodelabel}>
        <input type="checkbox" className={styles.darkmodeinput} />
        <BsFillSunFill className={styles.sun} />
        <IoMoon className={styles.moon} />
        <span className={styles.toggle}></span>
      </label>
      </div>
    </>
  );
}
