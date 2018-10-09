import React, { Component } from 'react';
import './App.css';
import Greet from './Greet';
import Header from './header';
import Childern from './Childern';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Childern>
          <Greet />
        </Childern>
      </div>
    );
  }
}

export default App;
