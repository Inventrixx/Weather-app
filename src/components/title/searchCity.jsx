import React, { Component } from "react"

class searchCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  onChangeInput(e) {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    const {inputValue} = this.state
    return (
      <div>
        <input 
        placeholder="search by city name" 
        value={this.state.inputValue} 
        onChange={e => this.onChangeInput(e)}>
        </input>
      <button onClick={() => this.props.newCityName(inputValue)}>Go!</button>
      </div>
      
    )
  }
}

export default searchCity