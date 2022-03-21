import React from 'react';

const ViewBudget = ( props ) => {
	return (
		<>
			<span>Budget: ${ props.budget }     </span>

				<button type='button' class='btn btn-primary btn-sm' onClick={ props.handleEditClick }>
					Edit
				</button>
		</>
	);
};

export default ViewBudget;