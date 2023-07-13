import React from 'react';
import Expense from './component/expenses/expense';
import ExpenseForm from './component/ExpenseForm';
const expenses = [
  { location:'patna', title: 'Food', amount: 50, date:new Date(2021,10,5)},
  { location: 'delhi', title: 'Rent', amount: 30, date:new Date(2023,9,5)},
  { location: 'mumbai', title: 'Travel', amount: 100, date:new Date(2022,5,5)}
];
function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm />
     {expenses.map((expense, index) => (
        <Expense
          key={index}
          location={expense.location}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          
        />
      ))}
    </div>
  );
}

export default App;
