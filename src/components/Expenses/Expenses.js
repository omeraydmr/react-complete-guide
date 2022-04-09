import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} selectedYear={filteredYear}/>
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
