'use strinct'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    console.log('render app ')
    return (      
      <div >
        <Button>Clique em mim</Button>
      </div>
    )
  }
}

export default App
