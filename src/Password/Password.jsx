import React, { useState } from "react";
import "./Password.css";
import { FaEyeSlash } from "react-icons/fa";

const Password = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [lengthError, setLengthError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleInputChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleRepeatPasswordChange = (e) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);
    checkPasswordMatch(newRepeatPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getStrengthColor = () => {
    if (lengthError) {
      return "red";
    } else if (passwordStrength === null) {
      return "";
    } else if (passwordStrength <= 1) {
      return "red";
    } else if (passwordStrength <= 2) {
      return "yellow";
    } else if (passwordStrength <= 3) {
      return "orange";
    } else if (passwordStrength <= 4) {
      return "green";
    }
  };

  const checkPasswordStrength = (newPassword) => {
    const minLength = 6;
    setLengthError(newPassword.length < minLength);

    const isLengthValid = newPassword.length >= minLength;
    const hasLetters = /[a-z]/.test(newPassword);
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumbers = /\d/.test(newPassword);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword);

    const strength =
      isLengthValid + hasLetters + hasUpperCase + hasNumbers + hasSpecialChars;

    setPasswordStrength(strength);
  };

  const checkPasswordMatch = (newRepeatPassword) => {
    setPasswordMatchError(newRepeatPassword !== password);
  };

  return (
    <div className="block">
        
      <div className="content">
        <h3>Login form</h3>
        <div className="password">
          <input
            placeholder="Password"
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={handleInputChange}
          />
          <FaEyeSlash onClick={toggleShowPassword} />
        </div>
        <div className="password">
          <input
            placeholder="Repeat Password"
            value={repeatPassword}
            type={showPassword ? "text" : "password"}
            onChange={handleRepeatPasswordChange}
          />
        </div>
        <div className="strength-info">
          {lengthError && <p style={{ color: "red" }}>Минимум 6 символов</p>}
          {passwordMatchError && (
            <p style={{ color: "red" }}>Пароли не совпадают</p>
          )}
          {passwordStrength !== null && !lengthError && (
            <p style={{ color: getStrengthColor() }}>
              {passwordStrength === 1 && "очень слабый пароль"}
              {passwordStrength === 2 && "слабый пароль"}
              {passwordStrength === 3 && "нормальный пароль"}
              {passwordStrength === 4 && "очень хороший пароль"}
            </p>
          )}
        </div>
        <button disabled={lengthError || passwordMatchError}>Sign In</button>
      </div>
    </div>
  );
};

export default Password;
