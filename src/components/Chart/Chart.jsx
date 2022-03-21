import React, { useEffect } from "react";
import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";
function getInitialChartData() {
  return {
    january: {
      amount: 0,
    },
    february: {
      amount: 0,
    },
    march: {
      amount: 0,
    },
    april: {
      amount: 0,
    },
    may: {
      amount: 0,
    },
    june: {
      amount: 0,
    },
    july: {
      amount: 0,
    },
    august: {
      amount: 0,
    },
    september: {
      amount: 0,
    },
    october: {
      amount: 0,
    },
    november: {
      amount: 0,
    },
    december: {
      amount: 0,
    },
  };
}
const Chart = (props) => {
  let total = 0;
  const chartData = getInitialChartData();

  props.filteredData.forEach((item) => {
    const month = item.date
      .toLocaleString("en-us", { month: "long" })
      .toLowerCase();

    chartData[month].amount += item.amount;

    total += item.amount;
  });

  const chartBars = Object.keys(chartData).map((month) => {
    return (
      <ChartBar
        key={Math.random().toString()}
        label={month.slice(0, 3)}
        total={total}
        val={chartData[month].amount}
      ></ChartBar>
    );
  });

  return <Card className={classes.chart}>{chartBars}</Card>;
};

export default Chart;
