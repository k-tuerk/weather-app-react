import React from "react";

export default function Weather() {
  return (
    <div>
      <h4 id="weatherDefintion">Clouds</h4>
      <div className="d-flex justify-content-center align-items-center">
        <img src="icons/01d.svg" alt="weatherIcon" className="icon" />
        <strong id="currentTemp">20</strong>
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
              <h3 id="tempHighLow">20°C/18°C</h3>
            </li>
            <li>
              <h3 id="humidity">Humidity: 20%</h3>
            </li>
            <li>
              <h3 id="wind">Wind: 4km/h</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
