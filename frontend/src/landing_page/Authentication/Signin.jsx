import styles from "./Signup.module.css";
import axios from "axios";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      window.location.href = "http://localhost:5174/";
      // routeTo("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Sign-in failed");
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.4rem",
        }}
      >
        <div className="me-5">
          <div className="form-floating mb-3 ">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        {error}
        <div className={styles.signupButton}>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Signin;
