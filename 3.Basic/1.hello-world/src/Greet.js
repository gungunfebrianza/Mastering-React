import React from 'react';

const Greet = props => {
  console.log(props);

  return (
    <div>
      {' '}
      <h2>{props.title}</h2>{' '}
      <ul>
        {props.greetings.map(e => {
          return <li key={e.id}>{e.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Greet;
