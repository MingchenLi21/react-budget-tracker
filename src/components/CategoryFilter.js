import React from "react";


const CategoryFilter = ( props ) => {
    const expenses = props.expenses;
    const categories = expenses.map(expense => expense.category).filter((element, index, array) => array.indexOf(element) === index);

    const handleChange = (event) => props.onSubmit(event.target.value);


    return (
        <form onSubmit={()=> null}>
            <label>
                Filter by category:
                <select onChange={handleChange}>
                    <option value={"null"}> </option>
                    {
                        categories.map(category =>
                            <option value={category}>{category}</option>)
                    }
                </select>
            </label>
        </form>
    );
}

export default CategoryFilter;