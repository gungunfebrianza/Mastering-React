import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Components
import Posts from './components/Posts';
import Profile from './components/Profile';
import PostsItem from './components/Posts_Item';

class App extends Component {
  render() {
    return <div>Home</div>;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <section>
      <header>
        <Link to="/">Home</Link>
        <br />
        <Link to="/posts">Posts</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br /> <hr />
      </header>
      <Route exact path="/" component={App} />
      <Route path="/posts" component={Posts} />
      <Route path="/profile" component={Profile} />
      <Route path="/posts/:id" component={PostsItem} />
    </section>
  </BrowserRouter>,
  document.getElementById('root')
);
