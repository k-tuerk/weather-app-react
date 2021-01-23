import React from "react";

export default function Date(props) {
  console.log(props.date);
  let days =[
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  let day = days[props.date.getDay()];
  return <div id="todayDate">Last update: {day} 11:37am</div>;
}
