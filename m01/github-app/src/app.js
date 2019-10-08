'use strinct'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    // MOCK
    this.state = {
      userInfo: {
        username: 'Guilherme Palma',
        photo: 'https://avatars0.githubusercontent.com/u/18333576?v=4',
        login: 'Zarppa',
        repos: 12,
        followers: 10,
        following: 3
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}
export default App
