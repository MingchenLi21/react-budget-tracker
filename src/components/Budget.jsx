import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from './ViewBudget';
import ChangeBudget from './ChangeBudget';


const Budget = () => {
    const { budget, dispatch } = useContext( AppContext );
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'CHANGE_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

    return (
        <div className="alert alert-info">
            {isEditing ? (
				<ChangeBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
        </div>
    );
};

export default Budget;