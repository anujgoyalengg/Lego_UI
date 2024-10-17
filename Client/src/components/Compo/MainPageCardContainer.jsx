import React from 'react';
import Card from '../Compo/MainPageCard';
import styles from '../Styles/MainPageCardContainer.module.css';

const MainPageCardContainer = ({ adminCodes, isSidebarOpen, Displaybtns }) => {
  return (
    <div className={styles.cardsContainer}>
      <div className={`${styles.container} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        {adminCodes.map((adminCode) => (
          <Card key={adminCode._id} adminCode={adminCode} Displaybtns={Displaybtns} isSidebarOpen={isSidebarOpen} />
        ))}
      </div>
    </div>
  );
};

export default MainPageCardContainer;
