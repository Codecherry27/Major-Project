import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
  return (
    <div class="login-container">
      <h2>Login to Secure Bank</h2>
        <form>
            <input type="text" class="input-field" placeholder="Username" required />
            <input type="password" class="input-field" placeholder="Password" required />
            <button onClick={()=>navigate("/")} type="submit" class="login-button">Login</button>
        </form>
        <a onClick={()=>navigate("/signup")} class="signup-link">Don't have an account? Sign up</a>
    </div>
  );
}