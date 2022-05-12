import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";
import CategoryFilter from "../CategoryFilter";


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filtered, setFiltered] = useState("null");
    expenses.sort((a,b) => b.date - a.date);
    return (
        <div>
            <ul className="list-group list-group-numbered">
                {expenses.filter(expense => filtered === "null" ? true : expense.category ===filtered).map((expense) => (
                    <ExpenseItem
                        key={expense._id}
                        id={expense._id}
                        category={expense.category}
                        name={expense.name}
                        cost={expense.amount}
                        date={expense.date.toDateString()} />
                ))}
            </ul>
            <CategoryFilter expenses={expenses} onSubmit={setFiltered}/>
        </div>
    );
};

export default ExpenseList;