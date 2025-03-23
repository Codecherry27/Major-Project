import styles from './NewCustomer.module.css';

export default function NewCustomer() {
    const createCustomer = (e) => {
    e.preventDefault(); 
    const acId = e.target.acID.value;
    const acName = e.target.acName.value;
    const bal = e.target.bal.value; 

    console.log(acId, acName, bal);
    e.target.reset();
    }
    
  return (
    <>
    
    <div className={styles.cuscont}>
    <h1>Create New Customer</h1>
    <form onSubmit={createCustomer}>
        
        <input type="number" placeholder="Account Id" name='acID'/>
       
        <input type="text" placeholder="Account Name" name='acName'/>
       
        <input type="number" placeholder="Balance" name='bal' />
        
        <input type="submit" value="Create" />
        
    </form>
    </div>
    </>
  );
}