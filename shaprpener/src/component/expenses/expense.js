import './expense.css';
import ExpenseDate from './ExpenseeDate';
import ExpenseDetails from './ExpenseDetails';

const Expense= (props) => {

    return (
      <div className="expend">
        {props.filteredExpenses}
        <div>
        <ExpenseDate date={props.date}  filteredYear={props.filteredYear} />
        </div>
        <div>
        <ExpenseDetails title={props.title} amount={props.amount} />
        </div>
      </div>
    );
  }
  
  export default Expense;