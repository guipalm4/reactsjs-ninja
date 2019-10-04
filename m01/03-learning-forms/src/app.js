'use strinct'

import React, { Component } from 'react'

class App extends Component {

  render () {
    return (
      <form>        
        <textarea defaultValue={'textarea \n value uncontrolled'}/><br />
        <textarea value={'textarea \n value controlled'}/>
      </form>
    )
  }
}

export default App
