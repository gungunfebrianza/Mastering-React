import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import NewsList from './components/News-List';
import JSON from './db.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: JSON
    };
  }
  render() {
    return (
      <div>
        <Header />

        <NewsList news={this.state.news} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
