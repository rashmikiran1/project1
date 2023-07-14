import './expense.css';
import ExpenseDate from './ExpenseeDate';
import ExpenseDetails from './ExpenseDetails';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
const Expense= (props) => {
const [filteredYear,setFilteredyear] = useState('2020')
const filterhandler = (selectedyear) => {
  setFilteredyear(selectedyear)
}
    return (
      <div className="expend">
        <ExpenseFilter selected={filteredYear} onChangeFilter ={filterhandler} />
        <div>
        <ExpenseDate date={props.date} />
        </div>
        <div>
        <ExpenseDetails title={props.title} amount={props.amount} />
        </div>
      </div>
    );
  }
  
  export default Expense;