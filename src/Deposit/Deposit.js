import React from 'react';
import "./Deposit.css";
import { useNavigate } from "react-router-dom";


export default function Deposit() {
    const navigate = useNavigate();

    return (
        <div class="deposit-container">
        <h2>Deposit Funds</h2>
        <form>
            <input type="number" class="input-field" placeholder="Enter Amount" required/>
            <select class="input" required>
                <option value="" disabled selected>Select Account</option>
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
            </select>
        </form>
        <button type="submit" class="deposit-button">Deposit</button>
        <div>
        <a onClick={()=>navigate("/")} class="back-link">Go Back to Dashboard</a>
        </div>
    </div>
    );
}