import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import rootReducers from './reducers';

// Component
import App from './components/App';
import Car from './components/Car';

const reduxStore = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={reduxStore(rootReducers)}>
    <BrowserRouter>
      <section>
        <Route exact path="/" component={App} />
        <Route path="/car/:id" component={Car} />
      </section>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
