import { React } from "react";
import { useNavigate } from "react-router-dom";

export function Signupcard() {
  const navigate = useNavigate();

  const signupHandler = (e) => {
    if (signupHelper(e)) {
      navigate("/home");
    }
  };

  return (
    <form method="post" className="form-card" id="signupForm">
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        id="signupUsername"
        placeholder="Username"
      />
      <input type="email" name="email" id="signupEmail" placeholder="Email" />
      <input
        type="number"
        name="contactno"
        id="signupContactNo"
        placeholder="Contact Number"
      />
      <input
        type="password"
        name="password"
        id="signupPassword"
        placeholder="Password"
      />
      <input
        type="password"
        name="conf-password"
        id="signupConfPassword"
        placeholder="Confirm password"
      />
      <br />
      <button type="submit" onClick={signupHandler}>
        Register
      </button>
      <p id="error" hidden={true}></p>
    </form>
  );
}

function signupHelper(e) {
  e.preventDefault();

  const password = document.getElementById("signupPassword").value;
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const contact = document.getElementById("signupContactNo").value;
  const confPassword = document.getElementById("signupConfPassword").value;
  const error = document.getElementById("error");
  if (password !== confPassword) {
    error.hidden = false;
    error.innerHTML = "Confirm password must be same as password";
  } else {
    localStorage.setItem("Password", password);
    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Balance", 100);
    return true;
  }
}
