import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Person name="gun" age="20" >Test</Person>
          <Person name="nowo" age="23"/>
          <Person name="christa" age="22"/>
        </header>
      </div>
    );

    // return (
    //   React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Test'))
    // );
  }
}

export default App;
