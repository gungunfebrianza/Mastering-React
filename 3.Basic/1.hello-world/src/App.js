import React, { Component } from 'react';
import './App.css';
import Greet from './Greet';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        Hello World
        <Greet />
      </div>
    );
  }
}

export default App;
