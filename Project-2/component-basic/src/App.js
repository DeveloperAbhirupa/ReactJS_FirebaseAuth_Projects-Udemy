import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor

    sayHello(name){
        return "Hello"+name;
    }
  render() {
      const name="Abhirupa";
    return (
      <div className="App">
        <h2>I am a React Developer: {name}</h2>
          {this.sayHello(" Abhi")}
      </div>
    );
  }
}

export default App;
