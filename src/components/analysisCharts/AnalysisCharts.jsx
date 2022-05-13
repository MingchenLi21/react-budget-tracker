import { AppContext } from "../../context/AppContext";
import React, { useContext } from "react";
import StackedBar from "./StackedBar";
import PieChart from "./PieChart";

const AnalysisCharts = (props) =>{
    const { expenses } = useContext(AppContext);
    const categories = expenses.map(expense => expense.category).filter((element, index, array) => array.indexOf(element) === index);
    const colors = {};

    for (let category of categories){
        colors[category] = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }

    const costByCategoryAndMonth = {};
    categories.forEach((category) => {
        costByCategoryAndMonth[category] = (new Array(12)).fill(0);
    });

    expenses.forEach((expense) => {
        costByCategoryAndMonth[expense.category][expense.date.getMonth()] += expense.amount;
    });

    return (
      <div>
          <h2 className="mt-3  text-center">Expenses by Months</h2>
          <StackedBar categories = {categories} colors={colors} costByCategoryAndMonth={costByCategoryAndMonth}/>
          <PieChart categories = {categories} colors={colors} costByCategoryAndMonth={costByCategoryAndMonth}/>
      </div>  
    );
};

export default AnalysisCharts;