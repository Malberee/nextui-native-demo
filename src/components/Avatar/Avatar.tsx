import React, { FC } from 'react'
import { AvatarWrapper, Name } from './Avatar.styled'

import { AvatarProps } from './Avatar.types'

const Avatar: FC<AvatarProps> = () => {
  return (
    <AvatarWrapper>
      <Name>Button Component</Name>
    </AvatarWrapper>
  )
}

export default Avatar
