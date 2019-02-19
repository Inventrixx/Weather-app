import React, { Component } from 'react';
import './App.css';

import RightComponent from "./components/right/right-side"


const MY_API_KEY = "74d649d940124850b51175826191802";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Buenos Aires",
      numForcastDays: 4,
      isLoading: true
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
    console.log(this.state)
    return (
      <div>
        <div>
          <h1>Título</h1>
          <button onClick={this.updateWeatherCurrent.bind(this)}>Obtener Pronóstico de hoy.</button>
          <button onClick={this.updateWeatherCurrent.bind(this)}>Obtener Pronóstico a 4 días.</button>
        </div>
        
        
        {!this.state.isLoading && <RightComponent 
        temp={this.state.temp} 
        />}
      </div>
    );
  }
}

export default App;
