import React, { useContext } from "react";
import {TiDelete} from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseItem = (props) => {
    const{ dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        })
    }
    
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div class="col">{props.name}</div>
            <div class="col">{props.category}</div>
            <div class="col">{props.date}</div>
            <div>

                <span className="badge bg-primary badge-pill mr-3"> 
                    ${props.cost}
                </span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;