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

export default function App() {
  return (
    <div className="App">
      <Container>
      <div className="container">
        <Row>
        <div className="row">
          <Col>
          <div className="col-8 my-auto today">
            <div id="world">
              <img src="/world_map_.svg" alt="weatherImage" id="world" />
            </div>
            <h1>Toronto</h1>
            <Weather />
            <Search />
            <Date />
          </div>
          </Col>
          <Col>
          <div className="col-4 my-auto" id="forecast">
            <Card>
            <div className="card mx-auto">
              <Forecast />
            </div>
            </Card>
          </div>
          </Col>
        </div>
        </Row>
      </div>
      </Container>
      <div>
        <p className="coded-by">
          <a href="https://github.com/k-tuerk/weather-app">Open-source code</a>
          by Krista Tuerk
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


