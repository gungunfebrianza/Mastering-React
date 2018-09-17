import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: "Gun", age: 26},
      {name: "Nowo", age: 24},
      {name: "Christa", age: 48},
    ]
  }

  switchNameHandler = (newname) => {
    this.setState({
      persons: [
        {name: newname, age: 26},
        {name: "Nowo", age: 24},
        {name: "Christa", age: 68},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Gun", age: 26},
        {name: event.target.value, age: 24},
        {name: "Christa", age: 68},
      ]
    })
  }

  render() {

    const buttonstyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid pink',
      padding: '6px',
    };

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button
          style={buttonstyle}
          onClick={this.switchNameHandler.bind(this, 'GGF')}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >Test</Person>
        <Person
          click={this.switchNameHandler.bind(this, 'Gun Gun Febrianza')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // return (
    //   React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Test'))
    // );
  }
}

export default App;
