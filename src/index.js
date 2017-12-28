
import React from "react";
import ReactDOM from "react-dom";
import { Chart } from "chart.js";
import {} from 'jquery';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

const url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json"


class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response.data });//wont grab data?
        var things = response.map(data => response[0]); console.log(things);
            
        var ctx = document.getElementById("chart");
        var x = response.Place; console.log(x)
        var y = 
    Chart.defaults.global.defaultFontColor = "black";    
        //chart goes here vv
        var scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: [{things
            //     x: 10,
            //     y: 20
            // }, {
            //     x: 15,
            //     y: 10
            }],
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });
        //chart goes here ^^
      });
  }

  render() {
    if (this.state.data === null) {
      return <h3>Loading...</h3>
    }

    if (!this.state.data) {
     <h3>Data? Whats that?</h3>
        //alert("Data? What's that??");
    }

    return (
      <div className='container'>
    
      <canvas id="chart" style={{width: 50, height: 50}}></canvas>
    
            <p className='description'>Description: 
              Stuff n junk goes here</p>
        <div>
          <footer>
            Made by: <a href="https://www.freecodecamp.org/dabubbla" target="_blank" rel="noopener noreferrer" className='ed'> Ed </a> 

            <div>
              Check out my:
              <a href="https://github.com/DaBubbla" target='_blank'  rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden='true'></i></a>
              <a href="https://www.freecodecamp.org/dabubbla" target='_blank'  rel="noopener noreferrer"><i className="fa fa-free-code-camp fa-2x" aria-hidden='true'></i></a>
              <a href="https://codepen.io/DaBubbla/" target='_blank'  rel="noopener noreferrer"><i className="fa fa-codepen fa-2x" aria-hidden='true'></i></a>


            </div>  
            
          </footer>
        </div>

      </div>
    );

  }

}
ReactDOM.render(<App />, document.getElementById('root'))
