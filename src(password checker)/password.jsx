import React, { useState } from "react";
import "./PasswordStrengthChecker.css"; // Optional for styling

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  // Function to check the strength of the password
  const checkPasswordStrength = (password) => {
    let strength = 0;

    // Rules for password strength
    if (password.length >= 8) strength++; // Length of at least 8 characters
    if (/[A-Z]/.test(password)) strength++; // Contains uppercase letters
    if (/[0-9]/.test(password)) strength++; // Contains numbers
    if (/[\W]/.test(password)) strength++; // Contains special characters

    // Set the strength based on the conditions
    if (strength === 0) {
      setStrength("");
    } else if (strength <= 1) {
      setStrength("Weak");
    } else if (strength === 2) {
      setStrength("Medium");
    } else if (strength >= 3) {
      setStrength("Strong");
    }
  };

  // Handle input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div className="password-checker-container">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="password-input"
      />
      {strength && <p className={`password-strength ${strength.toLowerCase()}`}>Strength: {strength}</p>}
    </div>
  );
};

export default PasswordStrengthChecker;
