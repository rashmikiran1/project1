import { useState } from "react";
import "../component/form.css";
function ExpenseForm() {
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [amount,setAmount] = useState('')
    const clickhandler = (event) => {
     setTitle(event.target.value)
    }
    
    const clickdatehandler = (event) => {
        setDate(event.target.value)
    }
    
    const clickamounthandler = (event) => {
        setAmount(event.target.value)
       }
    return (
            <form>
                <div className="form">
                <div className="formtitile">
                <label>ExpenseTitle</label>
                <input type="text" value={title} onChange={clickhandler} />
                </div>
                <div >
                <label>ExpenseDate</label>
                <input  type="date" value={date} onChange={clickdatehandler} />
                </div>
                <div>
                <label>ExpenseAmount</label>
                <input type="number" value={amount} onChange={clickamounthandler}/>
                </div>
                <button onChange={clickhandler}>ADD</button>
                </div>
            </form>
    )
}
export default ExpenseForm