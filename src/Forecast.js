import React, { useState } from "react";
import axios from "axios";
// import Col from 'react-bootstrap/Col'
import WeatherForecastPreview from "./WeatherForecastPreview";
// import { Sparklines, SparklinesLine, SparklinesSpots }from 'react-sparklines'

export default function Forecast(props) {
const[loaded, setLoaded]=useState(false);
const[weatherForecast, setWeatherForecast]=useState(null);

function handleForecastResponse(response){
  setWeatherForecast(response.data);
  setLoaded(true);
}

if (loaded && props.city === weatherForecast.city.name){
  console.log(weatherForecast);
  return(
  <div>
    {weatherForecast.list.slice(0, 5).map(function (forecastItem){
      return <WeatherForecastPreview data={forecastItem} />;
    })}
    {/* <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
      <SparklinesLine color="#3f72af" />
      <SparklinesSpots style={{ fill: "#3f72af" }}/>
    </Sparklines> */}
    </div>
  );
}else{
  let apiKey="a2d28a642d9c48b595a677fa32994307";
  let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
  axios.get(url).then(handleForecastResponse);
  return "loading...";
}

}
