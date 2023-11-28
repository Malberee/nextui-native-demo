import React, { FC } from 'react'
import { Text } from 'react-native'
import { AvatarProps } from './Avatar.types'
import {
  AvatarWrapper,
  AvatarInner,
  AvatarOutline,
  AvatarImage,
  Name,
} from './Avatar.styled'
import { useAvatarGroup } from '../AvatarGroup/AvatarGroup.context'
import { AvatarContext } from './Avatar.context'

const Avatar: FC<AvatarProps> = ({ source, name, icon, ...props }) => {
  const isBordered =
    (typeof props.isBordered === 'undefined' && useAvatarGroup().isBordered) ||
    props.isBordered

  return (
    <AvatarContext.Provider value={props}>
      <AvatarWrapper>
        <AvatarInner>
          {source ? (
            <AvatarImage source={source} />
          ) : icon ? (
            icon
          ) : (
            <Name>{name}</Name>
          )}
        </AvatarInner>
        {isBordered && <AvatarOutline />}
      </AvatarWrapper>
    </AvatarContext.Provider>
  )
}

export default Avatar
