import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import App from './components/App';
import Car from './components/Car';

ReactDOM.render(
  <BrowserRouter>
    <section>
      <Route exact path="/" component={App} />
      <Route path="/car/:id" component={Car} />
    </section>
  </BrowserRouter>,
  document.getElementById('root')
);
