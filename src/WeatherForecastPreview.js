import React from "react";
import Card from 'react-bootstrap/Card';

export default function WeatherForecastPreview (props) {
let icon=`icons/${props.data.weather[0].icon}.svg`;
console.log(props);

function hours(){
    let date = new Date(props.data.dt*1000);
    let hour = date.getHours();
return `${hour}:00`;
}

function temperature(){
    let maxTemp = Math.round(props.data.main.temp_max);
    let minTemp = Math.round(props.data.main.temp_min);
    return `${maxTemp}°C/${minTemp}°C`
}
return(
<Card className="card my-auto">
       <div className="card-body my-auto mx-auto align-middle d-flex justify-content-center flex-column">
        <div className="card-title mx-auto">
          <h5 id="forecastTitle">{hours()}</h5>
          </div>
          <div className="weeklyIcon my-auto d-block">
              <img src={icon} alt="weatherIcon" />
            </div>
            <div className="card-text">
              <p>{temperature()}</p>
            </div>
        </div>
    </Card>
    );
}