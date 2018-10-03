import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hulu extends Component {
  render() {
    return (
      <header>
        <Link to="/">Home</Link>
        <br />
        <Link to="/posts">Posts</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br /> <hr />
      </header>
    );
  }
}
