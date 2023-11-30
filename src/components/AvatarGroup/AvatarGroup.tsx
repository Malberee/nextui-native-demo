import React, { FC } from 'react'
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
    <AvatarGroupContext.Provider value={props}>
      <AvatarGroupWrapper isGrid={isGrid}>
        {limitedChildArray.map((child, index) => (
          <AvatarWrapper index={index} isGrid={isGrid} key={index}>
            {React.cloneElement(child)}
          </AvatarWrapper>
        ))}
      </AvatarGroupWrapper>
    </AvatarGroupContext.Provider>
  )
}

export default AvatarGroup
