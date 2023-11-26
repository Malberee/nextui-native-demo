import React, { FC } from 'react'
import { Text } from 'react-native'
import { AvatarProps } from './Avatar.types'
import { AvatarWrapper, AvatarInner, AvatarImage } from './Avatar.styled'

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
      <AvatarInner radius={radius}>
        {source ? (
          <AvatarImage source={source} radius={radius} />
        ) : (
          <Text>{name}</Text>
        )}
      </AvatarInner>
    </AvatarWrapper>
  )
}

export default Avatar
