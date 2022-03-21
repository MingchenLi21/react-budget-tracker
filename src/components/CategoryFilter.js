import React from "react";


const CategoryFilter = ( props ) => {
    const expenses = props.expenses;
    const categories = expenses.map(expense => expense.category).filter((element, index, array) => array.indexOf(element) === index);

    const handleChange = (event) => props.onSubmit(event.target.value);


    return (
        <form  onSubmit={()=> null}>
            <label for="selectCategory">
                Filter by category:
                <select class="form-select form-select-sm" onChange={handleChange} name="selectCategory" id="selectCategory">
                    <option value={"null"}>Select a category</option>
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