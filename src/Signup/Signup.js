import React from 'react';
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    return(
<div class="signup-container">
        <h2>Create an Account</h2>
        <form>
            <input type="text" class="input-field" placeholder="Full Name" required/>
            <input type="email" class="input-field" placeholder="Email" required/>
            <input type="text" class="input-field" placeholder="Username" required/>
            <input type="password" class="input-field" placeholder="Password" required/>
            <input type="password" class="input-field" placeholder="Confirm Password" required/>
            <button onClick={()=>navigate("/dashboard")} type="submit" class="signup-button">Sign Up</button>
        </form>
        <a onClick={()=>navigate("/login")} class="login-link">Already have an account? Login</a>
    </div>
    );
}