import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Catalog App</h1>
        </header>
        <Catalog />
      </div>
    );
  }
}

export default App;
