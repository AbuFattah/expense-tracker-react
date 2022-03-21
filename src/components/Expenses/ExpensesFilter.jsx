import React, { useState } from "react";
import classes from "./ExpensesFilter.module.css";
const ExpensesFilter = (props) => {
  // const [enteredOption, setEnteredOption] = useState("2019");

  const selectChangeHandler = (e) => {
    e.preventDefault();
    props.onFilterOut(e.target.value);
    // console.log(e.target.value);
    // setEnteredOption(e.target.value);
  };
  return (
    <div className={classes["expenses-filter"]}>
      <p>Filter By Date</p>

      <select
        value={props.selected}
        onChange={selectChangeHandler}
        name="filter"
        id="filter"
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
