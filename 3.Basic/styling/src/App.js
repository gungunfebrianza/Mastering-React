import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Gun",
        age: 26
      }, {
        id: "2",
        name: "Nowo",
        age: 24
      }, {
        id: "3",
        name: "Christa",
        age: 48
      }
    ],
    showPersons: false
  }//state object contain persons (array of object)

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })//hold index

    const person = {
      ...
      this.state.persons[personIndex]
      /*
      {
        id: "1",
        name: "Gun",
        age: 26
      }
      */
    }; //never mutate original obj

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1); //delete 1 element at position 1
    this.setState({persons:persons})//update state
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const buttonstyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid pink',
      padding: '6px'
    };

    let persons =  null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={()=> {this.deletePersonHandler(index)}}//function passed
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}//function passed
              />
            })}
        </div>
      );
    }

    return (<div className="App">
      <h1 className="App-title">Welcome to React</h1>
      <button style={buttonstyle} onClick={this.togglePersonsHandler}>
        Switch Name
      </button>
      {persons}
    </div>);

    // return (
    //   React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Test'))
    // );
  }
}

export default App;
