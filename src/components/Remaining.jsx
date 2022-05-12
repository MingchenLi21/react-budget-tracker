import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.amount);
    }, 0);

    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success"
    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: ${(budget - totalExpenses).toFixed(2)}
            </span>
        </div>
    );
};

export default Remaining;