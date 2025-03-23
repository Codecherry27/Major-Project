import React from 'react';
import "./Transfer.css";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
    const navigate = useNavigate();

    return (
        <div class="transfer-container">
        <h2>Transfer Funds</h2>
        <form>
            <input type="number" class="input-field" placeholder="Enter Amount" required/>
            <input type="text" class="input-field" placeholder="Recipient Account Number" required/>
            <select class="input-v" required>
                <option value="" disabled selected>Select Your Account</option>
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
            </select>
        </form>
        <div>
        <button type="submit" class="transfer-button">Transfer</button>
        </div>
        <a onClick={()=>navigate("/")} class="back-link">Go Back to Dashboard</a>
    </div>
    );
}