'use strinct'

import React from 'react'

const App = () => (
  <div className='app'>

    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuário no GitHub'
      />
    </div>
    <br />
    <div className='user_info'>
      <img src='https://avatars0.githubusercontent.com/u/18333576?v=4' />
      <h2>
        <a href='https://api.github.com/users/Zarppa'>Guilherme Palma</a>
      </h2>

      <ul className='repos-info'>
        <li>Repositórios: 12</li>
        <li>Seguidores: 12</li>
        <li>Seguindo: 3</li>
      </ul>

      <div className='actions'>
        <button> Ver repositórios</button>
        <button> Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)
export default App
