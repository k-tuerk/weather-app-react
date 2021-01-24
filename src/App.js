import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
// import Date from "./Date";
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'




export default function App() {
  return (
    <div className="App">
      <Container>
        {/* <Row> */}
            {/* <div id="world">
              <img src="/world_map_.svg" alt="weatherImage" id="world" />
            </div> */}
            <Weather defaultCity="London"/>
        {/* </Row> */}
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


