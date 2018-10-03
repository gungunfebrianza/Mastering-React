import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Posts from './components/Posts';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return <div>Home</div>;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <section>
      <Route path="/post" component={Posts} />
      <Route path="/profile" component={Profile} />
    </section>
  </BrowserRouter>,
  document.getElementById('root')
);
