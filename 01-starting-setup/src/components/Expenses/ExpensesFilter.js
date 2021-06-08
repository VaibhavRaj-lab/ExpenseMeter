import "./ExpensesFilter.css";
function ExpensesFilter(props) {
  const filterdates = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="Filter">
      <h2>Filter By Year</h2>
      <select className="FilterDate" onChange={filterdates}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}
export default ExpensesFilter;
