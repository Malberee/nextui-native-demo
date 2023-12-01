import React, { FC } from 'react'
import { Text } from 'react-native'
import Avatar from '../Avatar'
import {
  UserWrapper,
  UserInner,
  UserName,
  UserDescription,
} from './User.styled'

import { UserProps } from './User.types'

const User: FC<UserProps> = ({ name, description, avatarProps }) => {
  return (
    <UserWrapper>
      <Avatar {...avatarProps} />
      <UserInner>
        <UserName>{name}</UserName>
        <UserDescription>{description}</UserDescription>
      </UserInner>
    </UserWrapper>
  )
}

export default User
