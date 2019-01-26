import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super()

    this.state = {
      input: '',
    }

    this.handleUserInput = this.handleUserInput.bind(this)

  }

  handleUserInput(e) {
    this.setState({
      input: e,
    })
  }

  render() {
    return (
      <div className="App">

        <input onChange={ e => this.handleUserInput(e.target.value)}></input>

        <span>{this.state.input}</span>

      </div>
    );
  }
}

export default App;
