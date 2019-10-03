'use strinct'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    console.log('render app ')
    //se retirar a chamada do handleClick() dará erro em funcao da protoType "isRequired"
    return (      
      <div >        
        <Button handleClick={() => console.log('clicou')}>
          Clique em mim
        </Button>
      </div>
    )
  }
}

export default App
