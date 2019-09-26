'use strinct'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Guilherme' lastname='Palma' />
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
