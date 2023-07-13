import "../component/form.css";
function ExpenseForm() {
    const clickhandler = (event) => {
     console.log(event.target.value)
    }
    return (
            <form>
                <div className="form">
                <div className="formtitile">
                <label>ExpenseTitle</label>
                <input type="text" onChange={clickhandler} />
                </div>
                <div >
                <label>ExpenseDate</label>
                <input  type="date" onChange={clickhandler} />
                </div>
                <div>
                <label>ExpenseAmount</label>
                <input type="number" onChange={clickhandler}/>
                </div>
                <button onChange={clickhandler}>ADD</button>
                </div>
            </form>
    )
}
export default ExpenseForm