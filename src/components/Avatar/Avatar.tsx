import React, { FC } from 'react'
import { Text } from 'react-native'
import { AvatarProps } from './Avatar.types'
import { AvatarWrapper, AvatarOutline, AvatarImage } from './Avatar.styled'

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
    <AvatarWrapper size={size} isDisabled={isDisabled} radius={radius}>
      {source ? (
        <AvatarImage source={source} radius={radius} />
      ) : icon ? (
        icon
      ) : (
        <Text>{name}</Text>
      )}
      {isBordered && (
        <AvatarOutline color={color} radius={radius} size={size} />
      )}
    </AvatarWrapper>
  )
}

export default Avatar
