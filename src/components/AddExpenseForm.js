import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    // useState returns a pair: the current
    // state value and a function that lets you update it.
    // The only argument to useState is the initial state. 
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    
    const onSubmit = (event) => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            category: category,
            cost: parseFloat(cost),
            date: new Date(date),
        };


        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>

                <div className="col-sm">
                    <label for="category">Category</label>
                    <input
                        required="required"
                        type="search"
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    ></input>
                </div>

                <div className="col-sm">
                    <label for="date">Date</label>
                    <input
                        required="required"
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        min="2022-01-01"
                        max="2022-12-31"
                        ></input>
                </div>

                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input
                        required="required"
                        type="number"
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        ></input>
                </div>
                
                <div className="col-sm ">
                    <button type="submit" className="btn btn-primary ">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;