'use strinct'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {

  
  constructor () {
    console.log('constructor')
      super()
      this.state = {
        showTimer: true 
      }
  }
  componentWillMount () {
      console.log('componentWillMount')
  }
  
  componentDidMount(){
    console.log('componentDidMount')
    //manipulação de DOM com bibliotecas externas - executa apenas no front
  }
  
  render () {
    console.log('render')
    return (      
      <div >
        {this.state.showTimer &&  <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show / Hide Timer</button>
      </div>
    )
  }
}

export default App
