import React, { useState } from "react";
import classes from "./NewExpenseForm.module.css";
const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      enteredTitle.trim().length == 0 ||
      enteredDate.trim().length == 0 ||
      enteredAmount.trim().length == 0
    ) {
      clearFields();
      return;
    }
    const expenseInfo = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onAddExpense(expenseInfo);
  };

  const clearFields = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <form
      onSubmit={submitHandler}
      action="#"
      className={classes["new-expense"]}
    >
      <div className={classes["new-expense__controls"]}>
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            id="title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0"
            id="amount"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            id="date"
          />
        </div>
      </div>

      <div className={classes["new-expense__actions"]}>
        <button onClick={props.onClose} type="button">
          Close
        </button>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
