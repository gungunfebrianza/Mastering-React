import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'Judul 1',
    author: 'Gun Gun Febrianza',
    objectId: 1
  },
  {
    title: 'Judul 2',
    author: 'Rian Gustandos',
    objectId: 2
  },
  {
    title: 'Judul 3',
    author: 'Krista Agung Ono',
    objectId: 3
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {list.map(function(item) {
          return (
            <div>
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
