import React from "react";

export default function Date(props) {
  console.log(props.formattedDate);
  // let days =[
  //   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  // ];
  // let day = days[props.date.getDay()];
  return <div id="todayDate">Last update:  11:37am</div>;
}
