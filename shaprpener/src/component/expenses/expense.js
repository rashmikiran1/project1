import './expense.css';
import ExpenseDate from './ExpenseeDate';
import ExpenseDetails from './ExpenseDetails';
const Expense= (props) => {
const clickHandler = () => {
  console.log("clicked")
}
    return (
      <div className="expend">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount} />
        <button onClick={clickHandler}>delete</button>
      </div>
    );
  }
  
  export default Expense;