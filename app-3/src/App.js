import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      array: [' Cinnamon Tost Crunch ', ' Wheaties ', ' Lucky Charms ', " Reese's Puffs ", ' Captan Crunch '],
      filteredArray: [],
      userInput: '',
    }

    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleClear = this.handleClear.bind(this)

  }

  handleUserInput(e) {

    this.setState({
      userInput: e,
    })

  }

  handleFilter(userInput) {
    var filteredArray = this.state.array.filter((value, i, arr) => {
      return value.toLowerCase().includes(userInput.toLowerCase())
    })

    this.setState({
      filteredArray: filteredArray,
    })

  }

  handleClear() {
    this.setState({
      filteredArray: '',
    })
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />

        </div>

        <div>

          <span>{this.state.array}</span>

          <input onChange={ (e) => this.handleUserInput(e.target.value)} />

          <button onClick={ () => this.handleFilter(this.state.userInput)}>Filter</button>

          <span>{this.state.filteredArray}</span>

          <button onClick={ () => this.handleClear()}>Clear</button>

        </div>

      </div>
    );
  }
}

export default App;
