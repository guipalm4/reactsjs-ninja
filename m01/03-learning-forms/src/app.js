'use strinct'

import React, { Component } from 'react'

class App extends Component {

  constructor () {
    super()
    this.state = {
      value: '2',
      checked: false
    }
  }
  render () {
    return (
      <form>        
        <label>
          <input
            type='checkbox'
            value='my-checkbox'
            checked={this.state.checked}
            onChange={(e) => {
              this.setState({ checked: !this.state.checked })
            }} />
            Checkbox
        </label>

        <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
        <input type='radio' name='rd' value='2' /> Radio 2
        <input type='radio' name='rd2' value='1' /> Radio com outro 'name'
        <input type='radio' name='rd2' value='1' defaultChecked /> Radio com outro 'name' 2
        <br/><br/>
        <select multiple value={['3','1']} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}>
          <option value='1'>Opção 1</option> 
          <option value='2'>Opção 2</option> 
          <option value='3'>Opção 3</option> 
        </select>
      </form>
    )
  }
}

export default App
