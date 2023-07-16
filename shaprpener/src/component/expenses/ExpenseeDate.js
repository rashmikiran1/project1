import React from 'react';

const ExpenseDate = (props) => {
  const { date, filteredYear } = props;

  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{`${filteredYear}`}</div>
    </div>
  );
};

export default ExpenseDate;
