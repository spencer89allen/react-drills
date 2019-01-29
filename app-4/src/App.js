import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Components/Button'

class App extends Component {

  constructor() {
    super()

    this.state = {
      userName: '',
      password: '',
      loggedIn: false,
    }

    this.handleName = this.handleName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleLogin = this.handleLogin.bind(this)

  }

  handleName(e) {
    this.setState({
      userName: e,
    })
  }

  handlePassword(e) {
    this.setState({
      password: e,
    })
  }

  handleLogin() {

    var login = false
    console.log(this.state.userName)
    console.log(this.state.password)
    if(this.state.userName === "spencer" && this.state.password === 'password') {
      login = true
      alert("Welcome")
    }
    else {
      login = false
      alert("Go away")
    }

    console.log(this.state.userName)
    console.log(this.state.password)
    console.log(this.state.loggedIn)

    this.setState({
      loggedIn: login,
    })

  }


  render() {
    return (
      <div className="App">

        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

        </div>

        <div>

          <input onChange={ (e) => this.handleName(e.target.value)}></input>

          <input onChange={ (e) => this.handlePassword(e.target.value)}></input>

          <Button action={this.handleLogin}>Login</Button>

        </div>

      </div>
    );
  }
}

export default App;
