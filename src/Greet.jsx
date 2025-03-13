import React from 'react'
import PropTypes  from 'prop-types'

const Greet = (props) => {
  return (
    <div>
    <h1>Name: {props.name}</h1>  
    <p>You are {props.age} years old</p>  
  </div>
  );

};

Greet.PropTypes  = {
    name :PropTypes .string.isRequired,
    age :PropTypes .number.isRequired
};

export default Greet
