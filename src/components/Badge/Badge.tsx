import React, { FC } from 'react'
import { Text } from 'react-native'
import { BadgeWrapper } from './Badge.styled'

import { BadgeProps } from './Badge.types'

const Badge: FC<BadgeProps> = () => {
  return (
    <BadgeWrapper>
      <Text>Button Component</Text>
    </BadgeWrapper>
  )
}

export default Badge
