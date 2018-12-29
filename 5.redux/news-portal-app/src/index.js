import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise]'
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducers from './reducers'

const StoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store = {StoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
