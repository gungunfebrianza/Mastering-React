import React, { Component } from 'react';
import list from './List';

class App extends Component {
  // Setting up Internal State Componen
  // ES 6 Class can use construction to initialize internal state
  constructor(props) {
    // Super Props Sets This.props to the construction
    super(props);

    // Setting up State
    this.state = {
      list: list
    };
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.objectId}>
            <h1>{item.title}</h1>
            <p>{item.author}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
