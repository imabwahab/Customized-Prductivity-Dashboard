import React, { useState, useEffect } from "react";
import "./WelcomePage.css"; 

const WelcomePage = ({ onContinue}) => {

  

  const [name , setName ]= useState("");
  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setStoredName(savedName);
  }, []);

  const handleSubmit = (e, value) => {
    setName(value);
    e.preventDefault();
    localStorage.setItem("userName", name);
    setStoredName(name);
  };

  const handleDelete = () => {
    localStorage.removeItem("userName");
    setStoredName(""); // Clear the state as well
  };
  


  return (
    <div className="welcome-container">
      {!storedName ? (
        <form onSubmit={handleSubmit} className="name-form">
          <h1 className="animated-text">Welcome! What’s your name?</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="name-input"
          />
          <button type="submit" className="submit-button">Continue</button>
        </form>
      ) : (
        <div className="greeting-box">
          <h1 className="animated-text">Welcome back, {storedName} 👋</h1>
          <p className="quote-text">“Your time is now. Make it count.”</p>
          <button className="enter-button" onClick={onContinue}>
            Enter Dashboard
          </button>

          <button className="delete-button" onClick={handleDelete}>Delete User Name</button>

        </div>
      )}
    </div>
  );
};

export default WelcomePage;
