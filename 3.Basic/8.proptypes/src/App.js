import React, { Component } from 'react';
import User from './User';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'francis',
      age: 25,
      hobbies: ['run', 'jump'],
      gay: true,
      message() {
        console.log('Hey Are you gay?');
      },
      you: {
        message: 'yes i am gay!',
        err: 'just Kidding!'
      }
    };
  }
  render() {
    return <User test={this.state} />;
  }
}
