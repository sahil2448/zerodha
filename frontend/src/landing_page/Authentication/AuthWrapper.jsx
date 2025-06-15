import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import styles from "./Signup.module.css";
import SignupLeft from "../../../public/media/images/SignupLeft.svg";
import { useNavigate } from "react-router-dom";

function AuthWrapper() {
  const [activeSection, setActiveSection] = useState("signup");

  const handleClick = (str) => {
    setActiveSection(str);
  };
  return (
    <div>
      <div className={styles.SignupContainer}>
        <div className={styles.imgContainer}>
          <img src={SignupLeft} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.headings}>
            {" "}
            <h2
              style={{
                color: activeSection === "signup" ? "rgb(4, 125, 206)" : "",
              }}
              onClick={() => handleClick("signup")}
            >
              Signup
            </h2>
            <h3>{"|"}</h3>
            <h2
              style={{
                color: activeSection === "signin" ? "rgb(4, 125, 206)" : "",
              }}
              onClick={() => handleClick("signin")}
            >
              Login
            </h2>
          </div>

          <h5>Or track your existing application</h5>
          {activeSection === "signup" ? <Signup /> : <Signin />}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
