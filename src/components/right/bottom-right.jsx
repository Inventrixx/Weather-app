import React, { Component } from "react"

class RightBottomComponent extends Component {
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

export default RightBottomComponent;