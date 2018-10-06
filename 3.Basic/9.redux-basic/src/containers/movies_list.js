import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MoviesList extends Component {
  componentWillMount() {
    this.props.moviesList();
  }

  renderList = movies => {
    if (movies)
      return movies.map(movie => {
        return <div key={movie.id}>{movie.name}</div>;
      });
  };

  render() {
    return (
      <div className="App">{this.renderList(this.props.moviesReducer)}</div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { moviesReducer: state.moviesReducer };
}
export default connect(
  mapStateToProps,
  actions
)(MoviesList);
