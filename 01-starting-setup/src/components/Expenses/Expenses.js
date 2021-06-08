// import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
// import Card from "./Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";
// import Card from "./Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </div>
  );
}

export default Expenses;
