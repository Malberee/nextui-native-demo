import React, { FC } from 'react'
import { Text } from 'react-native'
import { AvatarGroupWrapper, AvatarWrapper } from './AvatarGroup.styled'

import { AvatarGroupProps } from './AvatarGroup.types'
import { AvatarGroupContext } from './hooks/useAvatarGroupContext'

const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  max,
  total,
  isGrid,
  renderCount,
  ...props
}) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[]
  const limitedChildArray = childArray?.slice(0, max)

  return (
    <AvatarGroupContext.Provider value={{ isInGroup: true, ...props }}>
      <AvatarGroupWrapper>
        {limitedChildArray?.map((child, index) => (
          <AvatarWrapper index={index}>
            {React.cloneElement(child)}
          </AvatarWrapper>
        ))}
      </AvatarGroupWrapper>
    </AvatarGroupContext.Provider>
  )
}

export default AvatarGroup
