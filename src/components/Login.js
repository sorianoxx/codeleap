import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      localStorage.setItem("codeleapUser", username); // salva
      onLogin(username);
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
