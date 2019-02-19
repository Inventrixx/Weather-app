import React, { Component } from 'react';
import './styles/App.css'

import CurrentWeather from "./components/CurrentWeather/CurrentWeather"
import ForecastWeather from "./components/right/ForecastWeather"

const MY_API_KEY = "74d649d940124850b51175826191802";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Buenos Aires",
      numForcastDays: 5,
      isLoading: true,
      forecast: undefined,
      temp: undefined,
}
  }

  updateWeatherCurrent(e) {
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
    e.preventDefault() 

  }
  render() {
    console.log(this.state.temp)
    const { cityName } = this.state
    return (
      <div>
        <div className="app-container">
        <div className="main-container">
          <h1>{ cityName } Weather App!</h1>
        
          {!this.state.isLoading &&( <CurrentWeather
          temp={this.state.temp}
          isDay={this.state.isDay}
          text={this.state.text}
          icon={this.state.iconURL}
    />) && (<ForecastWeather forecast={this.state.forecast} />)}
        </div>
        
        
        
        </div>
      </div>
    );
  }
}

export default App;
