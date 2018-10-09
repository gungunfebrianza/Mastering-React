import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div>
        <Button type="success" />
        <Button type="info" />
        <Button type="danger" />
      </div>
    );
  }
}

export default App;
