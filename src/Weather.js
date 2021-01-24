import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { Sparklines, SparklinesLine, SparklinesSpots }from 'react-sparklines'
import Col from 'react-bootstrap/Col'
import Forecast from "./Forecast";
import Row from 'react-bootstrap/Row'

export default function Weather(props) {
const[weatherData,setWeatherData]=useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

function search(){
  const apiKey="a2d28a642d9c48b595a677fa32994307";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
 setCity(event.target.value);
}

function handleResponse(response){
  setWeatherData({
    ready: true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    maxTemp:response.data.main.temp_max,
    minTemp:response.data.main.temp_min,
    feelsLike:response.data.main.feels_like,
    wind:response.data.wind.speed,
    description:response.data.weather[0].description,
    icon:`icons/${response.data.weather[0].icon}.svg`,
    date:new Date(response.data.dt * 1000),
    city: response.data.name,
  })
}

if(weatherData.ready){
return (
  <div>
    <Row>
    <Col className="col-12">
    <WeatherInfo data={weatherData} defaultCity={weatherData.city}/>
          <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
      <SparklinesLine color="#3f72af" />
      <SparklinesSpots style={{ fill: "#3f72af" }}/>
      </Sparklines>
      <form onSubmit={handleSubmit}>
      <div className="md-form">
          <input
            type="text"
            placeholder="Insert City"
            className="form-control"
            id="searchCity"
            onChange={handleCityChange}
          />
        <button className="submit">Submit</button>
        <button className="currentLocation">Current Location</button>
      </div>
      </form>
    </Col>
    <Col className="col-4 my-auto" id="forecast">
      <Forecast city={weatherData.city} />
    </Col>
    </Row>
    </div>

  );
}else{
  search();
return "Loading...";
}
  
}
