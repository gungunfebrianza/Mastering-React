import React, { Component } from 'react';

export default class Posts_Item extends Component {
  render() {
    //console.log(this.props);

    return <div>POSTS ITEM {this.props.match.params.id}</div>;
  }
}
