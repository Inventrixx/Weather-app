import React from "react"
import Clock from "./clock"
import SearchCity from "./searchCity"

const Title = props => {
    const { title, lat, long, hum, newCityName } = props
    return (
    <div className="first-container">
        <div className="first-container-title">{title} Weather App</div> 
        <div className="first-container-body">
            <SearchCity newCityName={newCityName}></SearchCity>
            <div className="icon">
                <i className="far fa-compass"></i>
                <div className="text"><span>Lat:{lat} Lon:{long}</span></div>
           
            
                <i className="far fa-clock"></i>
                <span className="text"><Clock /></span>
            
           
                <i className="fas fa-tint"></i>
                <span className="text">{hum}%</span>
                </div>
            </div>
         </div>
       
    )
}

export default Title;