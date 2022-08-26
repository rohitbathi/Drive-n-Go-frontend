import React from "react";
import { useNavigate } from "react-router-dom";

export function Logincard() {
  const navigate = useNavigate();

  return (
    <div>
      <form method="post" className="form-card" id="loginForm">
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          id="loginUsername"
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          name="password"
          id="loginPassword"
          placeholder="Password"
        />
        <br />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            if (
              username === localStorage.getItem("Username") &&
              password === localStorage.getItem("Password")
            ) {
              navigate("/home");
            } else {
              navigate("/");
            }
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
