import React, { useContext } from 'react';
import Card from '../../components/Compo/MainPageCard';
import styles from '../Styles/UserPost.module.css';
import { UserContext } from '../../Services/UserContext';

const UserFilteredPost = () => {
  const {setDisplaybtns,Displaybtns,user, userCodes,setUserCodes} = useContext(UserContext);

  // Determine the user's email based on the login provider
  let userEmail = "";
  if (user) {
    userEmail = user.provider === "JWT" ? user.email : user.user.email;
  }

  try {
    if(userEmail ){
    setDisplaybtns(true)
  }
  } catch (error) {
    console.log(error);
    
  }


  // Filter the userCodes based on the user's email
  const filteredUserCodes = userCodes.filter(userCode => userCode.useremail === userEmail);

  return (
    <div className={styles.cardsContainer}>
      <div>
        <h1>MY UPLOADS</h1>
      </div>
      <div className={styles.container}>
        {filteredUserCodes.map((userCode) => (
          <Card key={userCode._id} Displaybtns={Displaybtns} userCode={userCode} setUserCodes = {setUserCodes} />
        ))}
      </div>
    </div>
  );
};

export default UserFilteredPost;
