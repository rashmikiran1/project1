import './expense.css';
function Expense() {
    const expenseDate = new Date(21,3,2023)
    const location = window.location.hostname;
    return (
      <div className="expend">
       <h1>{expenseDate.toISOString()}</h1> 
       <h2>{location}</h2>
      </div>
    );
  }
  
  export default Expense;