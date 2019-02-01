import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Components/Todo'

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      taskList: ['Load Dishwasher', 'Vacuum Car', 'Cook Dinner'],
      userInput: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

  }

  handleInput(value) {
    this.setState({
      userInput: value,
    })
  }
  
  handleAdd(value) {

    var list = this.state.taskList
    list.push(value)

    this.setState({
      taskList: list,
    })

  }
  
  
  
  render() {

    return (

      <div className="App">

        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

        </div>

        <div>

          <input onChange={ (e) => this.handleInput(e.target.value)}></input>

          <button onClick={ () =>this.handleAdd(this.state.userInput)}>Add</button>

          <Todo array={this.state.taskList}></Todo>

        </div>

      </div>

    );
  }
}

export default App;
