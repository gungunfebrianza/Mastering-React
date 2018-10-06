import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCars } from '../actions';
import { bindActionCreators } from 'redux';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };
  }

  searchCars = event => {
    event.preventDefault();
    this.props.getCars(this.state.keyword);
  };

  handleOnChange = event => {
    this.setState({
      keyword: event.target.value
    });
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <section className="main_search">
        <form onSubmit={this.searchCars}>
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.handleOnChange}
          />
        </form>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCars }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
