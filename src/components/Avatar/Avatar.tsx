import React, { FC, forwardRef, useImperativeHandle } from 'react'
import {
  AvatarWrapper,
  AvatarInner,
  AvatarImage,
  Name,
  AvatarOutline,
} from './Avatar.styled'

import { AvatarProps } from './Avatar.types'
import { useAvatarProps } from './hooks/useAvatarProps'
import { AvatarContext } from './hooks/useAvatarContext'

const Avatar: FC<AvatarProps> = forwardRef((props, ref) => {
  const { source, name, icon, isDisabled, isBordered, ...avatarProps } =
    useAvatarProps(props)

  useImperativeHandle(ref, () => {
    return { isDisabled }
  })

  return (
    <AvatarContext.Provider
      value={{ source, isDisabled, isBordered, ...avatarProps }}
    >
      <AvatarWrapper>
        <AvatarInner>
          {source ? (
            <AvatarImage source={source} />
          ) : (
            icon || <Name>{name}</Name>
          )}
        </AvatarInner>
        {isBordered && <AvatarOutline />}
      </AvatarWrapper>
    </AvatarContext.Provider>
  )
})

export default Avatar
