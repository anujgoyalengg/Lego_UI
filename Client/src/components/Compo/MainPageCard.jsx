// src/components/Card.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/MainPageCard.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from 'axios';

const Card = ({ isSidebarOpen, adminCode, userCode, Displaybtns, setAdminCodes, setUserCodes }) => {
  const navigate = useNavigate();
  const code = adminCode || userCode;
  // console.log(code);
  
  
  const handleEdit = () => {
    navigate('/code/user/post/edit', { state: { code } }); // Passing the 'code' data to the edit form
  };
  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:500/api/user/delete/${code._id}`);
      setUserCodes((prevCodes) => prevCodes.filter((c) => c._id !== code._id)); // Correctly updating state
      // Reload the list or fetch updated data here
      await fetchUserCodes(); // Optional: function to fetch updated codes
    } catch (error) {
      console.error("Failed to delete code", error);
    }
  };

  const fetchUserCodes = async () => {
    try {
      const response = await axios.get('http://localhost:500/api/user/codes');
      setUserCodes(response.data); // Set the fetched codes to state
    } catch (error) {
      console.error('Failed to fetch codes', error);
    }
  };

  return (
    <div className={`${styles.card} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
      <img className={styles.cardimg} src={code.imagePath} alt={code.title} />
      <div className={styles.cardbody}>
        <h2>{code.title}</h2>
        <button className={styles.sourcecode} onClick={() => navigate('/codepage', { state: code })}>
          Source Code
        </button>
        {Displaybtns && (
          <div className={styles.editbtns}>
            <button className={styles.editbtn} onClick={handleEdit}><MdEdit className={styles.icons} /></button>
            <button className={styles.editbtn} onClick={handleDelete}><MdDelete className={styles.icons} /></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
