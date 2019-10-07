'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user_info'>
    <img src='https://avatars0.githubusercontent.com/u/18333576?v=4' />
    <h1 className='username'>
      <a href='https://api.github.com/users/Zarppa'>Guilherme Palma</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 12</li>
      <li>Seguidores: 12</li>
      <li>Seguindo: 3</li>
    </ul>
  </div>
)

export default UserInfo
