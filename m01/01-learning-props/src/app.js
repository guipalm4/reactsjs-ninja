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
      <div className='container'>
      <LikeButton />
      <SearchButton />
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
