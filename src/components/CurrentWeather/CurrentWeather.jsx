import React, { Component } from "react"
import "./styles.css"

class CurrentWeather extends Component {
    constructor(props){
        super(props);
    }

 
    render() {
       
       const  { temp, isDay, text, icon } = this.props
        return (
            
            <div className="weather-container">
                <div className="current-container">
                    <span className="title">Today's weather</span>
                    <div className="icon-text-container"> 
                        <div className="image">
                            <img src={icon} />
                        </div>
                        <span className="temp">{temp}°C</span>
                        
                    </div>
                    <div><span className="text">{text}</span></div>
                    
                </div>
            </div>
        
        )
    }
}

export default CurrentWeather;