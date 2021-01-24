import React, { useState } from "react";
import axios from "axios";
// import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Forecast(props) {
const[loaded, setLoaded]=useState(false);
const[weatherForecast, setWeatherForecast]=useState(null);

function handleForecastResponse(response){
  setLoaded(true);
  setWeatherForecast(response.data);
}

if (loaded){
  console.log(weatherForecast);
  // let icon=`icons/${weatherForecast.list[0].weather[0].icon}.svg`;
  return(
  <div>
      <Card className="card mx-auto">
       <div className="card-body mx-auto align-items-center d-flex justify-content-center flex-column">
        <div className="card-title">
          <h5>{weatherForecast.list[0].dt*1000}</h5>
          <div className="weeklyIcon mx-auto d-block">
              <img src="icons/11d.svg" alt="weatherIcon" />
            </div>
            <div className="card-text">
              <p>{Math.round(weatherForecast.list[0].main.temp_max)}°C/{Math.round(weatherForecast.list[0].main.temp_min)}°C</p>
            </div>
          </div>
        </div>
    </Card>
    </div>
  );
}else{
  let apiKey="a2d28a642d9c48b595a677fa32994307";
  let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
  axios.get(url).then(handleForecastResponse);
  return "loading...";
}

}
