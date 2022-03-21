import React from "react";
import classes from "./ChartBar.module.css";
const ChartBar = ({ total, val, label }) => {
  let percentage = (+val / +total) * 100;
  percentage = Math.round(percentage);
  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <div
          style={{ height: `${percentage}%` }}
          className={classes["inner-bar"]}
        ></div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default ChartBar;
