import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Components/Image'

class App extends Component {

  constructor() {
    super()

    this.state = {
      input: '',
      image: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handlePost = this.handlePost.bind(this)

  }

  handleInput(e) {

    this.setState({
      input: e,
    })

  }

  handlePost() {

    this.setState({
      image: this.state.input,
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

          <button onClick={ () => this.handlePost(this.state.input)}>Post</button>

          <Image image={ this.state.image }></Image>
        
        </div>

      </div>
    );
  }
}

export default App;
