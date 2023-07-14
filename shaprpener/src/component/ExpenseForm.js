import React, { useState } from "react";
import "../component/form.css";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [submittedExpense, setSubmittedExpense] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      date: new Date(date),
      amount: amount,
    };
    setSubmittedExpense(expenseData);
  };

  return (
    <div>
      <form className="form1" onSubmit={handleSubmit}>
        <div className="form">
          <div className="formtitile">
            <label>ExpenseTitle</label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <label>ExpenseDate</label>
            <input type="date" value={date} onChange={handleDateChange} />
          </div>
          <div>
            <label>ExpenseAmount</label>
            <input type="number" value={amount} onChange={handleAmountChange} />
          </div>
          <button type="submit">ADD</button>
        </div>
      </form>

      {submittedExpense && (
        <div className="submitted-expense">
          <h2>Expense</h2>
          <p>Title: {submittedExpense.title}</p>
          <p>Date: {submittedExpense.date.toString()}</p>
          <p>Amount: {submittedExpense.amount}</p>
        </div>
      )}
    </div>
  );
}

export default ExpenseForm;
