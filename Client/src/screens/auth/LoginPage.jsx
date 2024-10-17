import styles from "../Styles/Loginpage.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:500/api/users/login", {                    
        email,
        password,
      });

      if (res.status === 200 && res.data.status === "success") {
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("user", JSON.stringify(res.data.user));
        // Update global authenticated state
        // updateAuthenticated(true);
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert("Invalid email or password");
      } else if (error.request) {
        console.log(error.request);
        alert("Unable to connect to the server");
      } else {
        console.log("Error", error.message);
        alert("An error occurred");
      }
    }
  };

  const loginwithgoogle = () => {
    window.open("http://localhost:500/auth/google/callback", "_self");
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
      <form onSubmit={handlelogin}>
        <div className={styles.rightBox}>
          <div className={styles.centerdiv}>
            <div className={styles.mainCenterdiv}>
              <div className={styles.rightBoxcontent}>
                <h1 className={styles.loginHeading}>Login</h1>
                <p>Welcome back! Please enter your details.</p>
              </div>

              <div className={styles.loginPageInputs}>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name=""
                  className={styles.loginInput}
                  placeholder="Email"
                />
                <input
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name=""
                  className={styles.loginPassword}
                  placeholder="Password"
                />
              </div>

              <div className={styles.chackboxdiv}>
                <div className={styles.checkboxmaindiv}>
                  <input
                    type="checkbox"
                    name=""
                    className={styles.rememberMe}
                  />
                  <p>Remember Me</p>
                </div>

                <div>
                  <Link to={"/forgotPassword"} className={styles.loginpagelink}>
                    <a className={styles.loginpagelink}>Forgot Password</a>
                  </Link>
                </div>
              </div>

              <div className={styles.loginBtnBox}>
                <button type="submit" className={styles.loginBtn}>
                  Login
                </button>
                <h2>OR</h2>
                <button onClick={loginwithgoogle} className={styles.googleBtn}>
                  <FcGoogle className={styles.googleIcon} /> Sign In With Google
                </button>
              </div>

              <p className={styles.register}>
                Don't have an account?{" "}
                <Link to={"/signup"} className={styles.loginpagelink}>
                  {" "}
                  <a className={styles.loginpagelink}>Sign Up For Free</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
