'use strict'

import React, { Component } from 'react'

class Timer extends Component { 
  constructor() {
    super()
    this.state = {
      time: 0
    }
    this.timer
  }
  componentWillReceiveProps (nextProps){
    //quando componente recebe novas propriedade
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    //verificar se há necessidade de renderizar o componente quando a mudança de state ou props
    //console.log('shouldComponentUpdate timer', this.props, nextProps)
    return this.props.time != nextProps.time
  }

  componentWillUpdate (nextProps, nextState) {
    //não modificar state
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
  }
 
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ 
        time: this.state.time + 1
      })
    }, 1000)
  }  
  componentWillUnmount () {
    clearInterval(this.timer)
    //remover manipulação de DOM realizada no componentDidMount.
  }

  render () {
    console.log('render timer ')
    return (
      <div> Timer: {this.state.time}</div>
    )}
}

export default Timer
