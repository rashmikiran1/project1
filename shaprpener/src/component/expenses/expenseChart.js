import React from "react";
import Chart from "../Chart/chart";
const ExpenseChart = (props) => {
    if (!props.expenses || props.expenses.length === 0) {
        return <p>No expenses available.</p>;
      }
    const chartDataPoint = [
        {label:'jan', value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'apr',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'jul',value:0},
        {label:'aug',value:0},
        {label:'sep',value:0},
        {label:'oct',value:0},
        {label:'nov',value:0},
        {label:'dec',value:0}
    ];
    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoint[expenseMonth].value += parseInt(expense.amount);
        
    }
   
    return <Chart datapoints={chartDataPoint} />
}
export default ExpenseChart