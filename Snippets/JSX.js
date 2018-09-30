import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';

class App extends Component {
  render() {
    let output = (
      <div>
        <h2>Catalog</h2>
      </div>
    );
    return output;

    let title = 'Catalog';
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );

    let title = 'The Catalog of today ' + new Date().toDateString();
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
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
