// import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpensesDate";
// import Card from "./Card";
// using props in custom component
function ExpenseItems(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        {/* <button>Update</button> */}
      </div>
    </div>
  );
}

export default ExpenseItems;
