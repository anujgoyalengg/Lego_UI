import React, { useContext } from 'react';
import Card from '../../components/Compo/MainPageCard';
import styles from '../Styles/UserPost.module.css';
import { UserContext } from '../../Services/UserContext';

const UserPostContainer = () => {
    const { userCodes, Displaybtns, setDisplaybtns, user, AdminEmail, setUserCodes  } = useContext(UserContext);
    
  
    try {
      if(user.user.email||user.email === AdminEmail){
      
      setDisplaybtns(true)
    }
    } catch (error) {
      console.log(error);
      
    }
    

  return (
    <div className={styles.cardsContainer}>
      <div>
        <h1>User Posts</h1>
      </div>
      <div className={styles.container}>
        {userCodes.map((userCode) => (
          <Card key={userCode._id} Displaybtns={Displaybtns} userCode={userCode} setUserCodes = {setUserCodes} />
        ))}
      </div>
    </div>
  );
};

export default UserPostContainer;
