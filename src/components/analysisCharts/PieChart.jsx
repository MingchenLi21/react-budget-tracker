import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {

    const dataList = [];
    for (const [key, value] of Object.entries(props.costByCategoryAndMonth)) {
        dataList.push(value.reduce((prev, curr) => prev+curr, 0));
    }

    const datasets = [{
        label: "Expenses over the year",
        data: dataList,
        backgroundColor: Object.values(props.colors),
    }];

    const data = {
        labels: props.categories,
        datasets: datasets,
    };

    return <Pie data={data} options={{title: {display: true, text:"Expenses over the year"}}} />
};

export default PieChart;