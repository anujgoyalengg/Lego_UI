import React, { useState } from "react";
import axios from "axios";
import styles from "../Styles/Loginpage.module.css"; // Importing the CSS module

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:500/api/users/send-reset-password-email",
        { email }
      );
      alert(response.data.msg);
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div className={styles.mainBoxLogin}>
      <div className={styles.leftBox}>
        <div className={styles.leftboxcontent}>
          <h1 className={styles.leftBoxHeading}>
            Turn Your Ideas Into Reality
          </h1>
          <h4>Start Your Front-End Journey With LEGO UI </h4>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.rightBox}>
        <div className={styles.centerdiv}>
          <div className={styles.mainCenterdiv}>
            <div className={styles.rightBoxcontent}>
              <h1 className={styles.loginHeading}>Forgot Password</h1>
            </div>
            <div className={styles.loginPageInputs}>
              <input
                required
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className={styles.loginPassword}
                placeholder="Email"
              />
            </div>
            <div className={styles.loginBtnBox}>
              <button type="submit" className={styles.loginBtn}>
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
