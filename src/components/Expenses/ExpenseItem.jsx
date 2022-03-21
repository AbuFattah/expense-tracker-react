import React from "react";
import Card from "../UI/Card";
import classes from "./ExpenseItem.module.css";
import ExpenseItemDate from "./ExpenseItemDate";

const ExpenseItem = ({ expenseData }) => {
  const { title, date, amount } = expenseData;

  const presentedAmount = `$${amount.toFixed(2)}`;
  return (
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseItemDate date={date} />
        <div className={classes["expense-item__description"]}>
          <h1>{title}</h1>
          <p>{presentedAmount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
