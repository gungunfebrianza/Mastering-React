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
      // Return New Array if title contain specific keywords and -1 is no keyword
      return item.title.indexOf(keywords) !== -1;
    });

    this.setState({ filtered });
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
