import React, { useState } from "react";
import "../../styles/login/style.css";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setshowError] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setshowError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setshowError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setshowSuccess(true);
        localStorage.setItem("auth_token", data.access_token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setshowError(true);
      });
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          {showError ? (
            <div className="Error-Message">Invalid Credentials</div>
          ) : null}
          {showSuccess ? (
            <div className="success-Message">Logged in Successfully</div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
