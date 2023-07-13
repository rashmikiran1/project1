import './expense.css';
import ExpenseDate from './ExpenseeDate';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';
const Expense= (props) => {
const [amount,setAmount] = useState(props.amount)
const clickHandler = () => {
  let amount = 300
  setAmount(amount)

}
    return (
      <div className="expend">
        <div>
        <ExpenseDate date={props.date} />
        </div>
        <div>
        <ExpenseDetails title={props.title} location={props.location} amount={amount} />
        </div>
        <button onClick={clickHandler}>click</button>
      </div>
    );
  }
  
  export default Expense;