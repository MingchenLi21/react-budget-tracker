import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    
    const totalExpenses =  expenses.reduce((total, item) => {
        return (total += item.amount);
    }, 0);
    
    return (
        <div className="alert alert-primary">
            <span>Spent so far: ${totalExpenses.toFixed(2)}</span>
        </div>
    );
};

export default ExpenseTotal;