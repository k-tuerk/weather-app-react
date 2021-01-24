import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Col from 'react-bootstrap/Col'

export default function WeatherInfo(props){
    const[unit, setUnit] = useState("celcius");

function showFarenheit(event){
    event.preventDefault();
    setUnit("Farenheit");
}
function showCelcius(event){
    event.preventDefault();
    setUnit("celcius");
}

if (unit === "celcius"){
return (
    <div>
    <Col className="today">
      <h1>{props.defaultCity}</h1>
      <h4 id="weatherDefintion">{props.data.description}</h4>
      <FormattedDate date={props.data.date} />
      <div className="d-flex justify-content-center align-items-center">
        <img src={props.data.icon} alt="weatherIcon" className="icon" />
        <strong id="currentTemp">{Math.round(props.data.temperature)}</strong>
        <div className="units">
            °C{" "}|
          <a href="" onClick={showFarenheit}>
            °F
          </a>
        </div>
        <div>
          <ul>
            <li>
              <h3 id="feelsLike">Feels like: {Math.round(props.data.feelsLike)}°C</h3>
            </li>
            <li>
              <h3 id="tempHighLow">{Math.round(props.data.maxTemp)}°C/{Math.round(props.data.minTemp)}°C</h3>
            </li>
            <li>
              <h3 id="humidity">Humidity: {props.data.humidity}%</h3>
            </li>
            <li>
              <h3 id="wind">Wind: {Math.round(props.data.wind)}km/h</h3>
            </li>
          </ul>
        </div>
      </div>
      </Col>
    </div>
    );
}else{
    let temperatureF = (props.data.temperature * 9/5) + 32;
    let feelsLikeF = (props.data.feelsLike * 9/5) + 32;
    let minTempF = (props.data.minTemp * 9/5) + 32;
    let maxTempF = (props.data.maxTemp * 9/5) + 32;
    return (
        <div>
    <Col className="today">
      <h1>{props.defaultCity}</h1>
      <h4 id="weatherDefintion">{props.data.description}</h4>
      <FormattedDate date={props.data.date} />
      <div className="d-flex justify-content-center align-items-center">
        <img src={props.data.icon} alt="weatherIcon" className="icon" />
        <strong id="currentTemp">{Math.round(temperatureF)}</strong>
        <div className="units">
            <a href="" onClick={showCelcius}>°C{" "}</a>|°F
        </div>
        <div>
          <ul>
            <li>
              <h3 id="feelsLike">Feels like: {Math.round(feelsLikeF)}°F</h3>
            </li>
            <li>
              <h3 id="tempHighLow">{Math.round(maxTempF)}°F/{Math.round(minTempF)}°F</h3>
            </li>
            <li>
              <h3 id="humidity">Humidity: {props.data.humidity}%</h3>
            </li>
            <li>
              <h3 id="wind">Wind: {Math.round(props.data.wind)}km/h</h3>
            </li>
          </ul>
        </div>
      </div>
      </Col>
    </div>
    );
}

   
}