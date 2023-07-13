import './expense.css';
import ExpenseDate from './ExpenseeDate';
import ExpenseDetails from './ExpenseDetails';
function Expense(props) {

    return (
      <div className="expend">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount} />
      </div>
    );
  }
  
  export default Expense;