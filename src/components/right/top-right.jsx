import React, { Component } from "react"

class RightComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div>  <p>{this.props.temp}</p></div>
        
        )
    }
}

export default RightComponent;