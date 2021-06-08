import { useState } from "react";
import ExpensesForm from "./ExpensesForm";

import "./NewItems.css";
function NewItem(props) {
  const [AddExpense, setAddexpense] = useState("");
  const showAddExpense = () => {
    setAddexpense(true);
  };
  const cancelAdd = () => {
    setAddexpense(false);
  };

  const onSaveHandler = (expensedata) => {
    const expenseitems = {
      ...expensedata,
      id: Math.random().toString(),
    };
    // console.log(expenseitems);
    props.onAddItems(expenseitems);
    setAddexpense(false);
  };
  return (
    <div className="new-expense">
      {!AddExpense && <button onClick={showAddExpense}>ADD EXPENSE</button>}
      {AddExpense && (
        <ExpensesForm
          onSaveExpenseitem={onSaveHandler}
          Cancel={cancelAdd}
        ></ExpensesForm>
      )}
    </div>
  );
}
export default NewItem;
