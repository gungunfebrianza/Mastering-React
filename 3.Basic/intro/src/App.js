import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {
        name: "Gun",
        age: 26
      }, {
        name: "Nowo",
        age: 24
      }, {
        name: "Christa",
        age: 48
      }
    ],
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Gun",
          age: 26
        }, {
          name: event.target.value,
          age: 24
        }, {
          name: "Christa",
          age: 68
        }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
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
                click={()=> {this.deletePersonHandler(index)}} 
                name={person.name}
                age={person.age}/>
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
