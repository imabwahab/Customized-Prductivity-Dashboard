import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";

import "./App.css"; // Global styles or Tailwind CSS

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {/* {showDashboard ? (
        <Dashboard />
      ) : (
        <WelcomePage onContinue={() => setShowDashboard(true)} />
      )}
      */}
      <WelcomePage onContinue={() => setShowDashboard(true)} />
    </> 
  );
}

export default App;
