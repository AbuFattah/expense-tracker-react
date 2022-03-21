import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import classes from "./Expenses.module.css";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "../Chart/Chart";
const Expenses = (props) => {
  // const x = props.expensesData;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );

  const filterOutHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <Card className={classes.expenses}>
      <ExpensesFilter selected={filteredYear} onFilterOut={filterOutHandler} />
      <Chart filteredData={filteredExpenses} />
      <ExpensesList expensesData={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
