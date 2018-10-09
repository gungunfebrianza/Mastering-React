import React, { Component } from 'react';
import Greet from './Greet';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'This is text from state'
    };
    setTimeout(() => {
      this.setState({
        text: 'State is updated!'
      });
    }, 2000);
  }

  render() {
    return <Greet title={this.state.text} />;
  }
}

export default ClassComponent;
