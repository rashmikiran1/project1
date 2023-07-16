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

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChangeFilter ={filterhandler} />
      {expenses.map((expense, index) => (
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
