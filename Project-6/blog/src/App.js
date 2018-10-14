import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
//import Headr from './Headr'
import Containr from './Containr.js'
import Footer from './Footer.js'
class App extends Component {
  render() {
    return (
      <div>

        <Navbar/>


          <header className="masthead headerStyle" >s
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>Clean Blog</h1>
                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <Containr/>


        <hr/>

      <Footer/>



      </div>
    );
  }
}

export default App;
