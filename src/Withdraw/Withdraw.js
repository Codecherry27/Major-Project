import React from 'react';
import "./Withdraw.css";
import { useNavigate } from "react-router-dom";

export default function Withdraw() {  
    const navigate = useNavigate();
      
    return (
        <div class="withdraw-container">
        <h2>Withdraw Funds</h2>
        <form>
            <input type="number" class="input-field" placeholder="Enter Amount" required/>
            <select class="input-v" required>
                <option value="" disabled selected>Select Account</option>
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
            </select>
            
            <button type="submit" class="withdraw-button">Withdraw</button>
        </form>
        <a onClick={()=>navigate("/dashboard")} class="back-link">Go Back to Dashboard</a>
    </div>
    );  
}