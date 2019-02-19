import React, { Component } from "react"
import "./styles.css"


class ForecastWeather extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const myForecast = this.props.forecast
        const myForecastFollwingDays = myForecast.slice(1)
        return (
            <div className="bottom-container">
                <div className="inner-container" > {myForecastFollwingDays.map((fc, i) => 
                <div className="forcastday-container" key={i}>
                    <span>{fc.date}</span> <span>{fc.day.maxtemp_c}</span>
                    <span className="image"><img alt={fc.day.condition.text} src={fc.day.condition.icon} /></span>
                    <span className="text">{fc.day.condition.text}</span>
                </div>)}
            </div>
        </div>
        
        )
    }
}

export default ForecastWeather;