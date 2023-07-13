import './expense.css';
function Expense(props) {
    return (
      <div className="expend">
       <div>{props.location}</div>
       <div>{props.title}</div>
       <div>{props.amount}</div>
       <div>{props.date.toISOString()}</div>
      </div>
    );
  }
  
  export default Expense;