import React from "react";
function ExpenseFilter(props) {
    const dropdown = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div>
            <label>Filter By year</label>
            <select value={props.selected} onChange={dropdown}>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
            </select>
        </div>
    )
}
export default ExpenseFilter