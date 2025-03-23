import React, {useState} from "react";
import "./frontpage.css";
import { useNavigate } from "react-router-dom";


export default function BankingFrontPage () {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>  
    <div className="container">
      <h1 className="title">Welcome to Secure Bank</h1>
      <p className="description">
        Manage your finances with ease and security. Enjoy seamless transactions, real-time account monitoring, and top-notch security features.
      </p>
      <div class={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "☰" : "☰"}
        </button>
    <h2>Secure Bank</h2>
    <ul>
        <li><a onClick={()=>navigate("/")}>Dashboard</a></li>
        <li><a onClick={()=>navigate("/deposit")}>Deposit</a></li>
        <li><a onClick={()=>navigate("/withdraw")}>Withdraw</a></li>
        <li><a onClick={()=>navigate("/transfer")}>Transfer</a></li>
        <li><a onClick={()=>navigate("/balance")}>Balance</a></li>
        <li><a onClick={()=>navigate("/logout")}>Logout</a></li>
    </ul>
</div>

      <nav className="navigation">
        <a onClick={()=>navigate("/login")} className="nav-link">Login</a>
        <a href="/signup" className="nav-link">Sign Up</a>
        <a href="/about" className="nav-link">Learn More</a>
      </nav>
    </div>

    </>
  );
};


