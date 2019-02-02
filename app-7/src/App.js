import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from './Components/NewTask'
import List from './Components/List'
import ToDo from './Components/ToDo'

class App extends Component {

  constructor() {
    super()

    this.state = {
      userInput: '',
      todoList: ['Wash Car','Mop Floors'],

    }

    this.handleInput = this.handleInput.bind(this)
    this.handleAddToList = this.handleAddToList.bind(this)

  }

  handleInput( e ) {

    this.setState({
      userInput: e
    })
    console.log(this.state.userInput)
  }

  handleAddToList(value) {
    var todoList = this.state.todoList
    todoList.push(value)

    this.setState({
      todoList: todoList,
    })
    console.log(this.state.todoList)
  }

  render() {

    return (

      <div className="App">

        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

        </div>

        <div>

        <ToDo onChange={this.handleInput}></ToDo>

        <NewTask action={ () => this.handleAddToList(this.state.userInput)}>Add</NewTask>

        <List array={this.state.todoList}></List>

        </div>

      </div>
    );
  }
}

export default App;
