import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const[weatherData,setWeatherData]=useState({ ready: false });
function handleResponse(response){
  // console.log(response.data);
  setWeatherData({
    ready: true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    maxTemp:response.data.main.temp_max,
    minTemp:response.data.main.temp_min,
    feelsLike:response.data.main.feels_like,
    wind:response.data.wind.speed,
    description:response.data.weather[0].description,
    icon:response.data.weather[0].icon,
    date:new Date(response.data.dt * 1000),
  })
}

if(weatherData.ready){
return (
    <div>
      <h1>{props.defaultCity}</h1>
      <h4 id="weatherDefintion">{weatherData.description}</h4>
      <FormattedDate date={weatherData.date} />
      <WeatherInfo />
      <div className="d-flex justify-content-center align-items-center">
        <img src="icons/50n.svg" alt="weatherIcon" className="icon" />
        <strong id="currentTemp">{Math.round(weatherData.temperature)}°C</strong>
        {/* <div className="units">
          <a href="" id="Clink" className="active">
            &degC{" "}
          </a>
          |
          <a href="" id="Flink">
            &degF
          </a>
        </div> */}
        <div>
          <ul>
            <li>
              <h3 id="feelsLike">Feels like {Math.round(weatherData.feelsLike)}°C</h3>
            </li>
            <li>
              <h3 id="tempHighLow">{Math.round(weatherData.maxTemp)}°C/{Math.round(weatherData.minTemp)}°C</h3>
            </li>
            <li>
              <h3 id="humidity">Humidity: {weatherData.humidity}%</h3>
            </li>
            <li>
              <h3 id="wind">Wind: {Math.round(weatherData.wind)}km/h</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  );
}else{
const apiKey="a2d28a642d9c48b595a677fa32994307";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
  
}
