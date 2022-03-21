import React from "react";
import classes from "./ExpenseItemDate.module.css";
const ExpenseItemDate = (props) => {
  const { date: dateObj } = props;
  const monthName = dateObj.toLocaleString("en", { month: "long" });
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();
  return (
    <div className={classes["expense-date"]}>
      <p className={classes["expense-date__month"]}>{monthName}</p>
      <p className={classes["expense-date__year"]}>{year}</p>
      <p className={classes["expense-date__date"]}>{date}</p>
    </div>
  );
};

export default ExpenseItemDate;
