import React, { useContext, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { AppContext } from "../context/AppContext";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import category from "./category";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const StackedBar = (props) => {
    const { expenses } = useContext(AppContext);

    const options = {
        plugins: {
        title: {
            display: true,
            text: 'Expense',
        },
        },
        responsive: true,
        scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
        },
    };

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const categories = expenses.map(expense => expense.category).filter((element, index, array) => array.indexOf(element) === index);
    const categoriesToCost = {};
    categories.forEach((category) => {
        categoriesToCost[category] = (new Array(12)).fill(0);
    });

    expenses.forEach((expense) => {
        categoriesToCost[expense.category][expense.date.getMonth()] += expense.cost;
    });

    const datasets = [];
    for (const [key, value] of Object.entries(categoriesToCost)) {
        datasets.push({label: key, data: value, backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,});
    }
    console.log(datasets);
    const data = {
        labels,
        datasets: datasets,

    };

    return <Bar options={options} data={data} />;
  };

export default StackedBar;

