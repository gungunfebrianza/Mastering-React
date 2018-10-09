import React, { Component } from 'react';
import './App.css';
//import Greet from './Greet';
import Header from './header';
//import Childern from './Childern';
import ClassComponent from './ClassComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ClassComponent />
      </div>
    );
  }
}

export default App;
