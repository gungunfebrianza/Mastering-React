import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lifecycle from './lifecycle';

const App = () => {
  const objectProps = {
    a: 'a',
    b: 'b'
  };
  return (
    <div>
      <h1>Hello World</h1>
      <Lifecycle testProps={objectProps} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
