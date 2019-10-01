'use strinct'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'

class App extends Component {

  constructor () {
      super()
      this.state = {
        color: 'green' 
      }
    }
    
  render () {
    return (
      <div >
        <Square color={this.state.color} /> 
        {['red', 'green', 'blue'].map((color) => (
          <Button 
            key={color} 
            handleClick={() => this.setState({ color })}>
            {color}
          </Button>
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
