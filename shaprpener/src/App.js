import React, { useState } from 'react';
import Expense from './component/expenses/expense';
import ExpenseForm from './component/ExpenseForm';
import ExpenseFilter from './component/expenses/ExpenseFilter';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear,setFilteredyear] = useState('2020')
  const filterhandler = (selectedyear) => {
     setFilteredyear(selectedyear)
}

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChangeFilter ={filterhandler} />
      {filteredExpenses.length===0 && <p>no expenses found</p>}
      {filteredExpenses.length > 0 && 
      filteredExpenses.map((expense, index) => (
        <Expense
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} 
          filteredYear={filteredYear}
        />
      ))}
    </div>
  );
}

export default App;
