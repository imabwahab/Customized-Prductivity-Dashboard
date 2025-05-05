import React, { useEffect, useState } from "react";
import "./Header.css"; // Optional: For styling

const Header = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning 🌤️";
    if (hour < 18) return "Good Afternoon ☀️";
    return "Good Evening 🌙";
  };

  // Fetch name from localStorage
  const name = localStorage.getItem("userName") || "Guest";

  return (
    <header className="dashboard-header">
      
        <h2>{getGreeting()}, {name} 👋</h2>
        <p className="clock">{formatTime(time)}</p>
        
    </header>
  );
};

export default Header;
