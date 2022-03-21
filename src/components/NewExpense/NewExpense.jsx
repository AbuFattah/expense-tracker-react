import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./NewExpense.module.css";
import NewExpenseForm from "./NewExpenseForm";
const NewExpense = (props) => {
  const [formIsHighlighted, setFormIsHighlighted] = useState(false);

  const closeFormHandler = () => {
    setFormIsHighlighted(true);
  };
  const openFormHandler = () => {
    setFormIsHighlighted(false);
  };
  return (
    <Card className={classes["add-new-expense"]}>
      {!formIsHighlighted ? (
        <button onClick={closeFormHandler}>Add New Expense</button>
      ) : (
        <NewExpenseForm
          onAddExpense={props.onAddExpense}
          onClose={openFormHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
