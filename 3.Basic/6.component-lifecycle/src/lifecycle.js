import React, { Component } from 'react';

export default class Lifecycle extends Component {
  //1. Get Default State
  constructor(props) {
    super(props);

    //2. Set Initial State
    this.state = {
      title: 'Hey',
      body: 'Content'
    };
  }

  //3. Before Render
  componentWillMount() {
    console.log('Before Component Render');
  }

  //4. Render
  render() {
    return (
      <div>
        <h4>{this.state.title}</h4>
        <span>{this.state.body}</span>
      </div>
    );
  }

  componentDidMount() {
    console.log('Execute After Component Render');
    document.querySelector('h4').style.color = 'red';
  }
}
