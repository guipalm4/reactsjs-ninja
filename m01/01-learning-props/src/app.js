'use strinct'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>Texto children
          <br/>
          <span>Guilherme</span>
        </Button>
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
