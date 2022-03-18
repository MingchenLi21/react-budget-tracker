import React from "react";

const SortedBy = (props) => {


    return (
        <form onSubmit={()=> null}>
            <label>
                Sorted by:
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

export default SortedBy;