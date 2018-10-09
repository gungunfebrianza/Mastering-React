import React, { Component } from 'react';
import Greet from './Greet';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'This is text from state',
      isLoading: true,
      greetings: []
    };
    // setTimeout(() => {
    //   this.setState({
    //     text: 'State is updated!'
    //   });
    // }, 2000);

    setTimeout(() => {
      this.setState({
        isLoading: false,
        greetings: [
          {
            id: 1,
            value: 'Hello'
          },
          {
            id: 2,
            value: 'Bonjour'
          },
          {
            id: 3,
            value: 'Holla'
          }
        ]
      });
    }, 2000);
  }

  render() {
    // if (this.state.isLoading) {
    //   return <p>Loading...</p>;
    // } else {
    //   return <Greet title={this.state.text} />;
    // }
    return (
      <div>
        {this.state.isLoading ? (
          <p>is loading</p>
        ) : (
          <Greet title="this.state.text" greetings={this.state.greetings} />
        )}
      </div>
    );
  }
}

export default ClassComponent;
