import React, { useState } from 'react';
import Expense from './component/expenses/expense';
import ExpenseForm from './component/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([])
   
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />

      {expenses.map((expense, index) => (
        <Expense
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
