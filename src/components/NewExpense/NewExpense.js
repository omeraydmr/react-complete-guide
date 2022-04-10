import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    setAddNewExpense(false);
    props.onAddExpense(expenseData);
  };

  const openExpenseAdd = () => {
    setAddNewExpense(true);
  };

  let newExpenseForm = (
    <button onClick={openExpenseAdd}>Add New Expense</button>
  );

  const closeExpenseHandler = () => {
    setAddNewExpense(false);
  };

  if (addNewExpense) {
    newExpenseForm = (
      <ExpenseForm
        onSaveExpenseDate={saveExpenseDateHandler}
        onCloseExpenseAdd={closeExpenseHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseForm}</div>;
}

export default NewExpense;
