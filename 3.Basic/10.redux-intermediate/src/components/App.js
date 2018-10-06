import React, { Component } from 'react';

// Component
import Search from '../containers/Search';
import ListCars from '../containers/ListCars';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <ListCars />
      </div>
    );
  }
}
