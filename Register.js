import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Create Your ReadHive Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Register</button>
            <button type="button" style={styles.button} onClick={() => navigate("/login")}>Back to Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Styles Object
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8c572", // Same background color as Login page
  },
  box: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // White box with slight transparency
    padding: "40px 30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    width: "350px",
    textAlign: "center",
  },
  title: {
    marginBottom: "25px",
    color: "#ff6e61", // Title color same as Login
    fontSize: "22px",
  },
  input: {
    width: "100%",
    padding: "14px",
    margin: "12px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  button: {
    width: "48%",
    padding: "12px",
    backgroundColor: "#ff6e61", // Same button color as Login
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    color: "white",
    transition: "background 0.3s ease-in-out",
  },
};

export default Register;