import React, { useEffect } from "react";
import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";

function getDataPoints() {
  return [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
}

const Chart = (props) => {
  let maxValue = 0;
  const dataPoints = getDataPoints();

  props.filteredData.forEach((item) => {
    const month = item.date.getMonth();

    dataPoints[month].value += item.amount;
    maxValue = Math.max(maxValue, item.amount);
  });

  const chartBars = dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={Math.random().toString()}
        label={dataPoint.label}
        max={maxValue}
        val={dataPoint.value}
      ></ChartBar>
    );
  });

  return <Card className={classes.chart}>{chartBars}</Card>;
};

export default Chart;
