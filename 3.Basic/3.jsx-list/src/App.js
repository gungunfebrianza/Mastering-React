import React, { Component } from 'react';
import list from './List';

class App extends Component {
  render() {
    return (
      <div>
        {list.map(function(item) {
          return (
            <div key={item.objectId}>
              <h1>{item.title}</h1>
              <p>{item.author}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
