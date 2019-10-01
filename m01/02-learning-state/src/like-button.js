'use strict'

import React from 'react'
import Button from './Button'

const LikeButton = () => (
  <Button handleClick={() => alert('like button')}>
    Curtir
  </Button>
)

export default LikeButton
