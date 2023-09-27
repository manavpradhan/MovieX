import React from "react";
import "./style.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={parseInt(rating)}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default Rating;
