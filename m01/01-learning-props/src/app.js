'use strinct'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Guilherme' lastname={{ first: 'Gomes', last: 'Palma' }} />
      </div>
    )
  }
})
export default App
