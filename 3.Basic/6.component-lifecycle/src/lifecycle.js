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

  componentWillUpdate() {
    console.log('Before Get Update');
  }

  componentDidUpdate() {
    console.log('After Update');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.title === 'Title Changed!') {
      return false; // Title will not Changed
    }
    return true; // Title Will Changed
  }

  componentWillReceiveProps() {
    console.log('Receive Props');
  }

  //4. Render
  render() {
    return (
      <div>
        <h4>{this.state.title}</h4>
        <span>{this.state.body}</span>
        <p onClick={() => this.setState({ title: 'Title s Changed!' })}>
          Click to Change
        </p>
        <p onClick={() => this.props.testProps.b}>AAA</p>
      </div>
    );
  }

  componentDidMount() {
    console.log('Execute After Component Render');
    document.querySelector('h4').style.color = 'red';
  }

  componentWillUnmount() {
    console.log('UNMOUNT!!');
  }
}