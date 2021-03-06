import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      input: '',
      list: [],
    }

    this.handleInput = this.handleInput.bind(this)
    this.handlClick = this.handlClick.bind(this)

  }

  handleInput(e) {
    this.setState({
      input: e +' '
    })
    console.log(this.state.input)
  }

  handlClick(value) {

    var newArr = this.state.list
    newArr.push(value)

    this.setState({
      list: newArr,
    })
    
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
  
        </div>

        <div className="box">

          <input className="box2" onChange={ (e) => this.handleInput(e.target.value)}></input>

          <button className="box3" onClick={ () => this.handlClick(this.state.input)}>Add Item</button>

          <list className="box4">Array: [{this.state.list}]</list>

        </div>

      </div>
    );
  }
}

export default App;
