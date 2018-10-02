import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import NewsList from './components/News-List';
import JSON from './db.json';

class App extends Component {
  constructor() {
    super();

    this.state = {
      news: JSON,
      filtered: JSON
    };
  }

  filterNews(keywords) {
    let filtered = this.state.news.filter(item => {
      return item.title.indexOf(keywords); // Return New Array
    });
    console.log(filtered);

    this.setState({ filtered: filtered });
  }

  render() {
    return (
      <div>
        <Header newsSearch={keywords => this.filterNews(keywords)} />
        <NewsList news={this.state.filtered} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
