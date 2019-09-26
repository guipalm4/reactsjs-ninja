'use strict'

import React from 'react'

const Title = (props) => (
  <h1>Olá {`${props.name} ${props.lastname}`}</h1>
)

Title.defautProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

/* const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: {
        first: 'Sem',
        last: 'sobrenome'
      }
    }
  },
  render: function () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastname.first + ' ' + this.props.lastname.last}! </h1>
    )
  }
}) */

export default Title
