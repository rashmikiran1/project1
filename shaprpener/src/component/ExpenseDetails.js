import "./expense.css";
function ExpenseDetails(props) {
   return (
    <div className="details">
        <div>{props.title}</div>
        <div>{props.location}</div>
        <div className="amount">{props.amount}</div>
    </div>
   )
}
export default ExpenseDetails