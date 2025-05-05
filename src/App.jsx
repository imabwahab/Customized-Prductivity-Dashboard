import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css"; // Global styles or Tailwind CSS

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {showDashboard ? (
        <Dashboard />
      ) : (
        <WelcomePage onContinue={() => setShowDashboard(true)} />
      )}
    </> 
  );
}

export default App;
