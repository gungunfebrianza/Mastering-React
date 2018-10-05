import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>{this.props.test.name}</div>
        <div>{this.props.test.hobbies}</div>
        <div>{this.props.test.gay.toString()}</div>
        <div>{this.props.test.you.message}</div>
      </div>
    );
  }
}

User.propTypes = {
  //name: PropTypes.string,
  age: PropTypes.number,
  //hobbies: PropTypes.array,
  gay: PropTypes.bool,
  message: PropTypes.func,
  you: PropTypes.object,
  //name: PropTypes.oneOf(['francis', 'gun'])
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hobbies: PropTypes.arrayOf(PropTypes.string),
  
};
