import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import Date from "./Date";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { Sparklines, SparklinesLine, SparklinesSpots }from 'react-sparklines'

export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="col-8 my-auto today">
            {/* <div id="world">
              <img src="/world_map_.svg" alt="weatherImage" id="world" />
            </div> */}
            <Weather defaultCity="London"/>
          </Col>
          <Col className="col-4 my-auto" id="forecast">
            <Card className="card mx-auto">
              <Forecast />
            </Card>
          </Col>
          <Col>
          <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
      <SparklinesLine color="#3f72af" />
      <SparklinesSpots style={{ fill: "#3f72af" }}/>
      </Sparklines>
      <Search />
            <Date />
          </Col>
        </Row>
      </Container>
  
      <div>
        <p className="coded-by">
          <a href="https://github.com/k-tuerk/weather-app-react">Open-source code</a>
          {" "}by Krista Tuerk
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


