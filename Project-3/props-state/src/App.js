import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <p>{this.props.propNumber}</p>
            <p>{this.props.propObject.obj1}</p>
            <p>{this.props.propString}</p>

        </p>
          <Parent/>

      </div>
    );
  }
}

class Parent extends Component{
    constructor (props){
        super(props);
        //Defines the default state of the component
        this.state={
            cars: ['s-Audi','s-City','s-Honda', 's-BMW']
        };
        // this.handleClick=this.handleClick.bind();
    }
    handleClick(){
        this.setState({cars: this.state.cars.reverse()})
    }
    render(){
        return(
            <div>
                <h2 onClick={this.handleClick.bind(this)}>I am moving into Project 3 of React JS</h2>
                <Cars msg="This is a Cars message" model="19028" Coolcars={this.state.cars}/>
            </div>
        );
    }
}

App.propTypes = {
    propNumber: PropTypes.number,
    propString: PropTypes.string
}
App.defaultProps = {
    propObject: {
        obj1: "This is object 1",
        obj2: "This is object 2",
        obj3: "This is object 3"
    },
    propNumber:1000,
    propString:'I am a String for App component'

}

Parent.defaultProps={
    cars: ['Audi','City','Honda', 'BMW']
}
class Cars extends Component{
    render(){
        console.log(this.props);
        return(
            <div>

                <h2>This is from Cars component</h2>
                <p>{this.props.msg}</p>
                <p>{this.props.model}</p>
                <div>{this.props.Coolcars.map((item,i) => {
                    return <p key={i}>{item}</p>
                })}</div>
            </div>
        );
    }
}
export default App;
