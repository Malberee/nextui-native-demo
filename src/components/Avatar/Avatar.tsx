import React, { FC, useImperativeHandle, forwardRef } from 'react'
import { AvatarProps } from './Avatar.types'
import {
  AvatarWrapper,
  AvatarInner,
  AvatarOutline,
  AvatarImage,
  Name,
} from './Avatar.styled'
import { AvatarContext } from './hooks/useAvatarContext'
import { useAvatarProps } from './hooks/useAvatarProps'

const Avatar: FC<AvatarProps> = forwardRef((props, ref) => {
  const { source, name, icon, ...avatarProps } = useAvatarProps(props)

  useImperativeHandle(ref, () => {
    return { isDisabled: avatarProps.isDisabled }
  })

  return (
    <AvatarContext.Provider value={{ source, ...avatarProps }}>
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
        {avatarProps.isBordered && <AvatarOutline />}
      </AvatarWrapper>
    </AvatarContext.Provider>
  )
})

export default Avatar
