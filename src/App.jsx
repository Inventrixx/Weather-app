import React, { Component } from 'react';
import './styles/App.css'
import Title from "./components/title/title"
import CurrentWeather from "./components/CurrentWeather/CurrentWeather"
import ForecastWeather from "./components/forecast/ForecastWeather"

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

  componentDidMount() {
 
      fetch(`http://api.apixu.com/v1/forecast.json?key=${MY_API_KEY}&q=${this.state.cityName}&days=${this.state.numForcastDays}`)
      .then(res => {return res.json()})
      .then(data => this.setState({
        isLoading: false,
        lat: data.location.lat,
        long: data.location.lon,
        temp: data.current.temp_c,
        hum: data.current.humidity,
        isDay: data.current.is_day,
        text: data.current.condition.text,
        iconURL: data.current.condition.icon,
        forecast: data.forecast.forecastday
      }))
     
  
    }
  

  
  render() {
    return (
      <div className="app-container">
        
        <Title 
        title={this.state.cityName}
        lat={this.state.lat}
        long={this.state.long}
        hum={this.state.hum}
        ></Title>
       
        
        <div className="second-container">
          
        
          {this.state.isLoading &&  <h1>Is loading...</h1>}
          
          {!this.state.isLoading &&  
          
          <CurrentWeather
          temp={this.state.temp}
          isDay={this.state.isDay}
          text={this.state.text}
          icon={this.state.iconURL}
        />}
         {!this.state.isLoading && <ForecastWeather forecast={this.state.forecast} />}
         </div>
        </div>
        
        
        

    );
  }
}

export default App;
