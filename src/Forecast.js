import React from "react";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Forecast() {
  return (
    <div>
     <Col className="col-4 my-auto" id="forecast">
      <Card className="card mx-auto">
       <div className="card-body mx-auto align-items-center d-flex justify-content-center flex-column">
        <div className="card-title">
          <h5>1:00pm</h5>
          <div className="weeklyIcon mx-auto d-block">
              <img src="icons/02n.svg" alt="weatherIcon" />
            </div>
            <div className="card-text">
              <p>25°C/10°C</p>
            </div>
          </div>
        </div>
    </Card>
    </Col>
    </div>
  );
}
