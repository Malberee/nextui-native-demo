import React, { FC } from 'react'
import { Image } from 'react-native'
import { AvatarProps } from './Avatar.types'
import { AvatarWrapper, AvatarImage } from './Avatar.styled'

const Avatar: FC<AvatarProps> = ({
  source,
  color,
  radius,
  size,
  name,
  icon,
  fallback,
  isBordered,
  isDisabled,
}) => {
  return (
    <AvatarWrapper
      color={color}
      radius={radius}
      size={size}
      isDisabled={isDisabled}
      isBordered={isBordered}
    >
      <AvatarImage source={source} radius={radius} />
    </AvatarWrapper>
  )
}

export default Avatar
