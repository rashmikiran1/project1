import React, { useState } from 'react';
import Expense from './component/expenses/expense';
import ExpenseForm from './component/ExpenseForm';
import ExpenseFilter from './component/expenses/ExpenseFilter';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setShowForm(false);
  };

  const toggleFormHandler = () => {
    setShowForm((prevShowForm) => !prevShowForm); // Toggle the showForm state on button click
  };

  // Filter the expenses based on the selected year
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <h1>Expense Tracker</h1>
      {showForm ? (
        <ExpenseForm onAddExpense={addExpenseHandler} />
      ) : (
        <button onClick={toggleFormHandler}>Add Expenses</button>
      )}
      {showForm && <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />}
      {showForm && filteredExpenses.length === 0 && <p>No expenses found for the selected year.</p>}
      {showForm &&
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
