import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
  
    return (
        <div class="dashboard-container">
            <h1>Welcome, Customer</h1>
            <div class="balance-section">
                <h2>Your Balance</h2>
                <p><strong>$10,000</strong></p>
            </div>
            <div class="actions">
                <a onClick={()=>navigate("/deposit")}  class="action-link">Deposit</a>
                <a onClick={()=>navigate("/withdraw")} class="action-link">Withdraw</a>
                <a onClick={()=>navigate("/transfer")} class="action-link">Transfer</a>
            </div>
            <a onClick={()=>navigate("/")} href="#" class="logout-link">Logout</a>
        </div>
    );
}







// import styles from "./Dashboard.module.css";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   return (
//     <>
//     <div>
//     <h1>Dashboard</h1>
//     <p>Welcome to the banking app dashboard</p>
//     </div>
//     <div className={styles.dashcontainer}>
//     <div onClick={() => navigate("/newcustomer")}>
//       <input type="button" value="Create New Customer" className={styles.button} />
//     </div>
//     <div>
//     <input type="button" value="Deposit" className={styles.button} />     
//     </div>
//     <div>
//     <input type="button" value="Withdraw" className={styles.button} />     
//     </div>
//     <div>
//     <input type="button" value="Transfer" className={styles.button} />     
//     </div>
//     <div>
//     <input type="button" value="Balance" className={styles.button} />     
//     </div>
//     </div>
//     </>
//   );
// }