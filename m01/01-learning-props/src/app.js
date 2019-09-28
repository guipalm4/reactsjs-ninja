'use strinct'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Guilherme' lastname='Palma' />
        {['blue', 'red', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

/* const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Guilherme' lastname='Palma' />
      </div>
    )
  }
}) */
export default App
