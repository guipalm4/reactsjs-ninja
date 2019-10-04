'use strinct'

import React, { Component } from 'react'

class App extends Component {

  render () {
    return (
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          console.log('event', e)
      }}
        onChange={(e) => {
          console.log('name', e.target.name)
          console.log('name', e.target.value)
        }}
      >        
        <textarea name='texto'defaultValue={'textarea \n value uncontrolled'}/><br /> 
        <br/>
        <label>Nome : </label>  
        <input type='name' name='inNome' /><br/>
        <label>Email : </label>
        <input type='email' name='inEmail' /><br/><br/>
        <button type='submit'>Enviar</button>  
      </form>
    )
  }
}

export default App
