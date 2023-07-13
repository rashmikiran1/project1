import React from 'react';
import Expense from './component/expense';
const expenses = [
  { location:'patna', title: 'Food', amount: 50, date:new Date(2021,4,5)},
  { location: 'delhi', title: 'Transportation', amount: 30, date:new Date(2023,4,5)},
  { location: 'mumbai', title: 'Accommodation', amount: 100, date:new Date(2022,4,5)}
];
function App() {
  return (
    <div>
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
