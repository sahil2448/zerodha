import { useState } from "react";
import styles from "./Signup.module.css";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const routeTo = useNavigate();
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3002/signup", {
        email,
        password,
        username,
        createdAt: Date.now(),
      });

      // localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:5174/";
      // routeTo("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Sign‑up failed");
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
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
        <div className="form-floating mb-3">
          <input
            type="username"
            className="form-control"
            id="floatingusername"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingUsername">Username</label>
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
        <button onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
