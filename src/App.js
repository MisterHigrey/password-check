// App.js
import React from "react";
import usePasswordStrength from "./usePasswordStrength";
import "./App.css";

const App = () => {
  const { password, setPassword, strength } = usePasswordStrength();

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const getStrengthColor = (section) => {
    if (strength === "none") {
      return "gray";
    } else if (strength === "weak") {
      return section === 1 ? "red" : "gray";
    } else if (strength === "medium") {
      return section <= 2 ? "yellow" : "gray";
    } else {
      return "green";
    }
  };

  return (
    <div className="password-card">
      <h1>Password strength check</h1>
      <input
        type="password"
        id="password-input"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
      <div className="strength-indicator">
        <div className={`strength-section ${getStrengthColor(1)}`}></div>
        <div className={`strength-section ${getStrengthColor(2)}`}></div>
        <div className={`strength-section ${getStrengthColor(3)}`}></div>
      </div>
    </div>
  );
};

export default App;
