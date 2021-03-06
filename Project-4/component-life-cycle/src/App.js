import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component Life Cycle</h1>
        </header>
        <Body/>
      </div>
    );
  }
}

class Body extends Component{
    constructor(props){
        super(props);
        this.state={
            r:0
        };
        this.generateRandomNumber=this.generateRandomNumber.bind(this);
    }
    generateRandomNumber() {
        console.log("Random Number Called");
        this.setState({r: Math.floor(Math.random() * 100) })
}

    render(){
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.generateRandomNumber}> Generate Number </button>
                <Numbers myNumber = {this.state.r}/>
            </div>
        );
    }
}

class Numbers extends Component{

    componentDidMount(){
        console.log("ComponentDidMount called");
    }
    componentWillMount(){
        console.log("ComponentWillMount called");
    }
    componentWillReceiveProps(newProps){
        console.log("ComponentWillReceiveProps called");
    }
    shouldComponentUpdate(newProps, nextState){
        console.log("shouldComponentUpdate called");
        return true;
    }
    componentWillUpdate(newProps, nextState){
        console.log("componentWillUpdate called");
    }
    componentDidUpdate(newProps, nextState){
        console.log("componentDidUpdate called");
    }
    componentWillUnmount(){
        console.log('componentWillUnmount called');
    }



    render(){
        return(
            <div>
                {this.props.myNumber}
            </div>
        );
    }
}
export default App;
