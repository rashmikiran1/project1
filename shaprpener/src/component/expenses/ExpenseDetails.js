import "./expense.css";
const ExpenseDetails = (props)=> {
    
   return (
    <div className="details">
        <div className="title">{props.title}</div>
        <div className="title">{props.location}</div>
        <div className="title">${props.amount}</div>
    </div>
   )
}
export default ExpenseDetails