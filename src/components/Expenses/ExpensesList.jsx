import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  let expensesContent = props.expensesData.map((expenseItem) => (
    <ExpenseItem key={Math.random()} expenseData={expenseItem} />
  ));

  if (!expensesContent.length > 0) {
    expensesContent = (
      <p
        style={{
          padding: "10px",
          color: "white",
          fontSize: "1.4rem",
          textAlign: "center",
        }}
      >
        No expenses found for this year
      </p>
    );
  }

  return (
    <Card className={classes.expenses}>
      <ul className={classes["expenses-list"]}>{expensesContent}</ul>
    </Card>
  );
};

export default ExpensesList;
