import React, { useState } from "react";
import styles from "../Styles/Loginpage.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    tc: false,
  });

  const { username, email, password, confirmPassword, tc } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const loginWithGoogle = () => {
    window.open("http://localhost:500/auth/google/callback", "_self");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!tc) {
      alert("Please accept the terms and conditions.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and confirm password should be the same.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:500/api/users/register", {
        name: username,
        email,
        password,
        password_confirmation: confirmPassword,
        tc,
      });

      if (res.data.status === "success") {
        alert("Registration successful");
        navigate("/login");
      } else {
        alert(
          res.data.message === "Email already exists"
            ? "This email already exists. Please use a different email."
            : `Registration failed: ${res.data.message}`
        );
      }
    } catch (error) {
      alert("An error occurred during registration");
    }
  };

  return (
    <div className={styles.mainBoxLogin}>
      <div className={styles.leftBox}>
        <div className={styles.leftboxcontent}>
          <h1 className={styles.leftBoxHeading}>
            Turn Your Ideas Into Reality
          </h1>
          <h4>Start Your Front-End Journey With LEGO UI</h4>
        </div>
      </div>
      <form onSubmit={handleSignUp}>
        <div className={styles.rightBox}>
          <div className={styles.centerdiv}>
            <div className={styles.mainCenterdiv}>
              <div className={styles.rightBoxcontent}>
                <h1 className={styles.loginHeading}>SignUp</h1>
                <p>Get started in seconds – sign up now!</p>
              </div>
              <div className={styles.loginPageInputs}>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="username"
                  value={username}
                  className={styles.loginInput}
                  placeholder="User Name"
                />
                <input
                  required
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={email}
                  className={styles.loginInput}
                  placeholder="Email"
                />
                <input
                  required
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={password}
                  className={styles.loginPassword}
                  placeholder="Password"
                />
                <input
                  required
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  className={styles.loginPassword}
                  placeholder="Confirm Password"
                />
              </div>
              <div className={styles.chackboxdiv}>
                <div className={styles.checkboxmaindiv}>
                  <input
                    type="checkbox"
                    checked={tc}
                    name="tc"
                    onChange={handleChange}
                    className={styles.checkbox}
                  />
                  <p>I agree to the Terms and Conditions</p>
                </div>
              </div>

              <div className={styles.loginBtnBox}>
                <button type="submit" className={styles.loginBtn}>
                  Sign Up
                </button>
                <h2>OR</h2>
                <button onClick={loginWithGoogle} className={styles.googleBtn}>
                  <FcGoogle className={styles.googleIcon} /> Sign In With Google
                </button>
              </div>
              <p className={styles.register}>
                Already have an account?  <Link to={"/login"} className={styles.loginpagelink}>
                  {" "}
                  <a className={styles.loginpagelink}>Login</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
