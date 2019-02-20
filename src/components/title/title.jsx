import React from "react"
import Clock from "./clock"

const Title = props => {
    const { title, lat, long, hum } = props
    return (
    <div className="first-container">
        <div className="first-container-title">{title} Weather App</div> 
        <div className="first-container-body">
            <div className="icon">
                <i class="far fa-compass"></i>
                <div className="text"><span>Lat:{lat} Lon:{long}</span></div>
           
            
                <i class="far fa-clock"></i>
                <span className="text"><Clock /></span>
            
           
                <i class="fas fa-tint"></i>
                <span className="text">{hum}%</span>
                </div>
            </div>
         </div>
       
    )
}

export default Title;