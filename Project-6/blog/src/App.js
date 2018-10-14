import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Headr from './Headr.js'
import Containr from './Containr.js'
import Footer from './Footer.js'
class App extends Component {
  render() {
    return (
      <div>

        <Navbar/>
        <Headr/>
        <Containr/>
        <hr/>

      <Footer/>



      </div>
    );
  }
}

export default App;
