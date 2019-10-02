'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>
    {children} 
  </button>
)

Button.protoTypes = {
  //https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
  handleClick: React.PropTypes.func.isRequired
}

export default Button
