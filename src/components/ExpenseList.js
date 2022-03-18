import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import CategoryFilter from "./CategoryFilter";


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filtered, setFiltered] = useState("null");
    expenses.sort((a,b) => b.date - a.date);
    return (
        <div>
            <ul className="list-group">
                {expenses.filter(expense => filtered === "null" ? true : expense.category ===filtered).map((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        category={expense.category}
                        name={expense.name}
                        cost={expense.cost}
                        date={expense.date.toDateString()} />
                ))}
            </ul>
            <CategoryFilter expenses={expenses} onSubmit={setFiltered}/>
        </div>
    );
};

export default ExpenseList;