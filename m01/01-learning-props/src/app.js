'use strinct'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Title name='Guilherme Palma - props.name' />
      </div>
    )
  }
})
export default App
