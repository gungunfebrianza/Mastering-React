import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };
  }

  searchCars = event => {
    event.preventDefault();
    console.log(this.state);
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
