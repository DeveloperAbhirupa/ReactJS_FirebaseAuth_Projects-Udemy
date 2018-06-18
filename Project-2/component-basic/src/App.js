import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.yourname = "Toby";
        this.state={}; //Default values are defined when th props are loaded
        
    }

    sayHello(name){
        return "Hello "+name;
    }
  render() {
      const name="Abhirupa";
    return (
      <div className="App">
        <h2>I am a React Developer: {name}</h2>
          {this.sayHello(this.yourname)}
      </div>
    );
  }
}

export default App;
