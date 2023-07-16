import React, { useState } from 'react';
import Expense from './component/expenses/expense';
import ExpenseForm from './component/ExpenseForm';
import ExpenseFilter from './component/expenses/ExpenseFilter';
import ExpenseChart from './component/expenses/expenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setShowForm(false);
  };

  const toggleFormHandler = () => {
    setShowForm((prevShowForm) => !prevShowForm); 
  };

  const filteredExpenses = expenses.filter((expense) => {
    const expenseYear = expense.date.getFullYear().toString();
    return expenseYear === filteredYear;
  });
  

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseChart expenses={filteredExpenses} />

      {showForm ? (
        <ExpenseForm onAddExpense={addExpenseHandler} />
      ) : (
        <button onClick={toggleFormHandler}>Add Expenses</button>
      )}
      {showForm && <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />}
      {showForm && filteredExpenses.length === 0 && <p>No expenses found for the selected year.</p>}
      {filteredExpenses.map((expense, index) => (
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
