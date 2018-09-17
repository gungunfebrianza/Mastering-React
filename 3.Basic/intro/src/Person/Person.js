import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}> i am {props.name} a person {props.age} </p>
      <p> {props.children}</p>
      <input type="text" onChange={props.changed}/>
    </div>
  )
}

export default person;
