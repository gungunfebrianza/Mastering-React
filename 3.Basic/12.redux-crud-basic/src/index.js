import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
//import './index.css';
import { Provider } from 'react-redux';

// Setup 1 - Create Store, Middleware & Redux Devtools
const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  // Setup 2 - Create Provider and Implement Store
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
