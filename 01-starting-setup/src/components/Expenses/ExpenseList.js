import ExpenseItems from "./ExpenseItems";
import "./ExpenseList.css";

function ExpenseList(props) {
  let expensefilter = <p className="fallback">No Data Found</p>;
  if (props.items.length > 0) {
    expensefilter = props.items.map((expense) => (
      <ExpenseItems
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return expensefilter;
}
export default ExpenseList;
