import React from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const StackedBar = (props) => {

    const options = {
        plugins: {
        title: {
            display: true,
            text: 'stacked bar',
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


    const datasets = [];
    for (const [key, value] of Object.entries(props.costByCategoryAndMonth)) {
        datasets.push({label: key, data: value, backgroundColor: props.colors[key]});
    }
    
    const data = {
        labels,
        datasets: datasets,

    };

    return <Bar options={options} data={data} />;
  };

export default StackedBar;

