import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to ReadHive </h1>
      <p style={styles.subtitle}>Track your books and reading goals effortlessly.</p>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8c572",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    color: "#ff6e61",
  },
  subtitle: {
    fontSize: "18px",
    color: "#333",
    marginTop: "10px",
  },
};

export default Home;