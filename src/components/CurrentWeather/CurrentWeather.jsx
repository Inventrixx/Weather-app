import React, { Component } from "react"

class CurrentWeather extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.temp)
        return (
            
            <div>
                <h1>Hola</h1>
                <p>{this.props.temp}</p></div>
        
        )
    }
}

export default CurrentWeather;