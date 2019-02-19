import React, { Component } from 'react';
import './styles/App.css'

import RightComponent from "./components/right/top-right"
import BottomRight from "./components/right/bottom-right"

const MY_API_KEY = "74d649d940124850b51175826191802";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Buenos Aires",
      numForcastDays: 4,
      isLoading: true,
      forecast: undefined,
}
  }

  updateWeatherCurrent() {
    fetch(`http://api.apixu.com/v1/forecast.json?key=${MY_API_KEY}&q=${this.state.cityName}&days=${this.state.numForcastDays}`)
    .then(res => {return res.json()})
    .then(data => this.setState({
      isLoading: false,
      temp: data.current.temp_c,
      isDay: data.current.is_day,
      text: data.current.condition.text,
      iconURL: data.current.condition.icon,
      forecast: data.forecast.forecastday
    }))
 
  }

    
  render() {
  
    return (
      <div>
        <div className="app-container">
        <div className="main-container">
          <h1>Título</h1>
          <button className="btn" onClick={this.updateWeatherCurrent.bind(this)}>Obtener Pronóstico</button>
        </div>
        
        
        {!this.state.isLoading && <RightComponent >
        temp={this.state.temp} 
        </RightComponent> && <BottomRight forecast={this.state.forecast}></BottomRight>}
        </div>
      </div>
    );
  }
}

export default App;
