import React from "react";
import classes from "./ChartBar.module.css";
const ChartBar = ({ max, val, label }) => {
  let heightRatio;
  if (max > 0) {
    heightRatio = (+val / +max) * 100;
  }
  heightRatio = Math.round(heightRatio);
  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <div
          style={{ height: `${heightRatio}%` }}
          className={classes["inner-bar"]}
        ></div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default ChartBar;
