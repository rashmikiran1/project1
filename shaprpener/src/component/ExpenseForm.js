import React, { useState } from "react";

import "../component/form.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

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
    props.onAddExpense(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
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
    </div>
  );
}

export default ExpenseForm;
