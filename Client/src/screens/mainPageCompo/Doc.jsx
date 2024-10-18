import React from "react";
import styles from "../Styles/doc.module.css";

function Doc({ toggleSidebar, isSidebarOpen }) {
  return (
    <>
      <div className={styles.maindiv} >
        <div className={`${styles.innerdiv} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.content}>
            <h1>Documentation</h1>
            <p>
              Welcome to Lego UI, the ultimate resource for coders! Our platform
              offers a wide range of styling components that you can seamlessly
              integrate into your projects. Designed for speed and aesthetics,
              Lego UI empowers you to create beautiful websites quickly and
              efficiently. Explore our collection today and elevate your
              development process with ease and style!
            </p>
            <button onClick={toggleSidebar}>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doc;
