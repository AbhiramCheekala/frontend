import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.message}>Thank You!</h1>
      <p style={styles.text}>
        Thank you for spending your time to wish me like that!
      </p>
      <button onClick={handleHomeClick} style={styles.button}>
        Go to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  },
  message: {
    fontSize: "2rem",
    color: "#ff69b4",
  },
  text: {
    fontSize: "1.2rem",
    color: "#333",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ff69b4",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default ThankYou;
