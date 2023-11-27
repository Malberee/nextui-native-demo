import React, { FC } from 'react'
import { Text } from 'react-native'
import { AvatarProps } from './Avatar.types'
import { AvatarWrapper, AvatarOutline, AvatarImage } from './Avatar.styled'
import { useAvatarGroup } from '../AvatarGroup/AvatarGroup.context'

const Avatar: FC<AvatarProps> = ({
  source,
  color: colorProp,
  radius: radiusProp,
  size: sizeProp,
  name,
  icon,
  fallback,
  isBordered: isBorderedProp,
  isDisabled: isDisabledProp,
}) => {
  const avatarGroup = useAvatarGroup()

  const props = {
    size: sizeProp || avatarGroup?.size,
    color: colorProp || avatarGroup?.color,
    radius: radiusProp || avatarGroup?.radius,
    isDisabled:
      typeof isDisabledProp === 'undefined'
        ? avatarGroup?.isDisabled
        : isDisabledProp,
    isBordered:
      typeof isDisabledProp === 'undefined'
        ? avatarGroup?.isBordered
        : isBorderedProp,
  }
  const { size, color, radius, isDisabled, isBordered } = props

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
