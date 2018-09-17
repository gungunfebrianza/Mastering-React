import React from 'react';

const person = (props) => {
  return (
    <div>
      <p> i am {props.name} a person {props.age} </p>
      <p> {props.children}</p>
    </div>
  )
}

export default person;
