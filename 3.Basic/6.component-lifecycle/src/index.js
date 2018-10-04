import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lifecycle from './lifecycle';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Lifecycle />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
